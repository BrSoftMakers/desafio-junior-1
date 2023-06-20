import { useEffect, useState } from 'react'
import { useToast } from '@chakra-ui/react'
import { useNavigate, useParams } from 'react-router-dom'
import { ICustomer, IPet } from '../../../services/apiPetsAndCustomers/types'
import { useDebounce } from '../../../hooks/useDebounce'
import { formPetProps } from './form/types'
import { PetService } from '../../../services/apiPetsAndCustomers/PetServices/PetServices'
import { CustomerAnimalServices } from '../../../services/apiPetsAndCustomers/CustomerAnimalServices/CustomerAnimalServices'
import { CustomerServices } from '../../../services/apiPetsAndCustomers/CustomerServices/CustomerServices'

export const useLogicPetDetail = () => {
  const navigate = useNavigate()
  const { debounce } = useDebounce(1000)
  const { petId = 'new' } = useParams()
  const toast = useToast({ position: 'top-right', isClosable: true })

  const [petData, setPetData] = useState<IPet>()
  const [inputFilterCustomer, setInputFilterCustomer] = useState('')
  const [customers, setCustomers] = useState<
    Omit<ICustomer, 'customerAddress'>[]
  >([])
  const [isLoading, setIsloading] = useState(false)

  const handleSubmitFormPet = (formData: formPetProps) => {
    if (petId === 'new') {
      PetService.createPet(formData)
        .then((petId) => {
          toast({ status: 'success', description: 'Pet criado' })
          navigate(`/pets/${petId}`)
        })
        .catch(() => {
          toast({ status: 'error', description: 'Erro ao criar pet' })
        })
      return
    }

    PetService.updatePet(+petId, formData)
      .then(() => {
        toast({ status: 'success', description: 'Dados do pet atualizados' })
        navigate(`/pets`)
      })
      .catch(() => {
        toast({ status: 'error', description: 'Erro ao atualizar dados' })
      })
  }

  const handleAddCustomer = (customerId: number, animalId: number) => {
    CustomerAnimalServices.createRelationCustomerAndPet(customerId, animalId)
      .then(() => {
        toast({ status: 'success', description: 'Dono adicionado ao pet' })
        const customerIdx = customers.findIndex(
          (customer) => customer.id === customerId
        )
        setPetData((oldState) => {
          const newState = { ...oldState } as IPet
          newState.customers?.push(customers[customerIdx] as ICustomer)
          return newState
        })
      })
      .catch(() => {
        toast({ status: 'error', description: 'Erro ao adicionar dono' })
      })
  }

  const handleDeleteCustomer = (customerId: number, animalId: number) => {
    CustomerAnimalServices.deleteRelationCustomerAndPet(customerId, animalId)
      .then(() => {
        toast({ status: 'info', description: 'Dono removido do pet' })
        setPetData((oldState) => {
          const newState = { ...oldState } as IPet
          newState.customers = newState.customers?.filter(
            (customer) => customer.id !== customerId
          )
          return newState
        })
      })
      .catch(() => {
        toast({ status: 'error', description: 'Erro ao remover dono' })
      })
  }

  useEffect(() => {
    setIsloading(true)
    debounce(() => {
      CustomerServices.getAllCustomers(1, 5, inputFilterCustomer)
        .then((customers) => {
          setCustomers(customers)
          setIsloading(false)
        })
        .finally(() => setIsloading(false))
    })
  }, [inputFilterCustomer, debounce])

  return {
    petData,
    customers,
    isLoading,
    petId,
    setPetData,
    handleDeleteCustomer,
    handleAddCustomer,
    setInputFilterCustomer,
    handleSubmitFormPet,
  }
}
