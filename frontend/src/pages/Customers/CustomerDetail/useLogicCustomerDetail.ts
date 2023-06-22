import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { formCustomerProps } from './form/types'
import { useDebounce } from '../../../hooks/useDebounce'
import { ICustomer, IPet } from '../../../services/apiPetsAndCustomers/types'
import { PetService } from '../../../services/apiPetsAndCustomers/PetServices/PetServices'
import { CustomerServices } from '../../../services/apiPetsAndCustomers/CustomerServices/CustomerServices'
import { CustomerAnimalServices } from '../../../services/apiPetsAndCustomers/CustomerAnimalServices/CustomerAnimalServices'
import { useToast } from '@chakra-ui/react'

export const useLogicCustomerDetail = () => {
  const { debounce } = useDebounce(1000)
  const toast = useToast({ position: 'top-right', isClosable: true })
  const navigate = useNavigate()
  const { customerId = 'new' } = useParams()
  const [customer, setCustomer] = useState<ICustomer>({} as ICustomer)
  const [isLoading, setIsloading] = useState(false)
  const [inputFilterPet, setInputFilterPet] = useState('')
  const [animals, setAnimals] = useState<Omit<IPet, 'customers'>[]>([])

  const handleSubmitForm = (formData: formCustomerProps) => {
    if (customerId === 'new') {
      CustomerServices.createCustomer(formData)
        .then((customerId) => {
          toast({ status: 'success', description: 'Cliente criado' })
          navigate(`/customers/${customerId}`)
        })
        .catch(() =>
          toast({ status: 'error', description: 'Erro ao criar cliente' })
        )
      return
    }

    CustomerServices.updateCustomer(+customerId, formData)
      .then(() => {
        toast({
          status: 'success',
          description: 'Dados do cliente atualizados',
        })
        navigate('/customers')
      })
      .catch(() =>
        toast({ status: 'error', description: 'Erro ao atualizar dados' })
      )
  }

  const handleDelete = (customerId: number) => {
    CustomerServices.deleteCustomer(customerId)
      .then(() => {
        toast({ status: 'info', description: 'Cliente deletado' })
        navigate('/customers')
      })
      .catch(() =>
        toast({ status: 'error', description: 'Error ao deletar cliente' })
      )
  }

  const handlePetAdd = async (customerId: number, animalId: number) => {
    await CustomerAnimalServices.createRelationCustomerAndPet(
      customerId,
      animalId
    )
      .then(() => {
        toast({ status: 'success', description: 'Pet adicionado ao cliente' })
        const animalIdx = animals.findIndex((animal) => animal.id === animalId)
        setCustomer((oldState) => {
          const newState = { ...oldState }
          newState.animals?.push(animals[animalIdx] as IPet)
          return newState
        })
      })
      .catch(() =>
        toast({
          status: 'error',
          description: 'Error ao adicionar pet ao cliente',
        })
      )
  }

  const handlePetDelete = async (customerId: number, animalId: number) => {
    await CustomerAnimalServices.deleteRelationCustomerAndPet(
      customerId,
      animalId
    )
      .then(() => {
        toast({ status: 'info', description: 'Pet removido do cliente' })
        setCustomer((oldState) => {
          const newState = { ...oldState }
          newState.animals = newState.animals?.filter(
            ({ id }) => id !== animalId
          )
          return newState
        })
      })
      .catch(() =>
        toast({
          status: 'error',
          description: 'Error ao remover pet do cliente',
        })
      )
  }

  useEffect(() => {
    setIsloading(true)
    debounce(() => {
      PetService.getAllPets(1, 5, inputFilterPet)
        .then((customers) => {
          setAnimals(customers)
          setIsloading(false)
        })
        .finally(() => setIsloading(false))
    })
  }, [inputFilterPet, debounce])

  return {
    customerId,
    customer,
    isLoading,
    animals,
    setInputFilterPet,
    handlePetDelete,
    handlePetAdd,
    handleDelete,
    handleSubmitForm,
    setCustomer,
  }
}
