import { useDebounce } from '../../../hooks/useDebounce'
import { useCallback, useEffect, useState } from 'react'
import { IPet } from '../../../services/apiPetsAndCustomers/types'
import { PetService } from '../../../services/apiPetsAndCustomers/PetServices/PetServices'
import { useToast } from '@chakra-ui/react'

export const useLogicPetsListing = () => {
  const { debounce } = useDebounce(1000)
  const toast = useToast({ isClosable: true, position: 'top-right' })

  const [pets, setPets] = useState<Omit<IPet, 'customers'>[]>([])
  const [page, setPage] = useState(1)
  const [isLoading, setIsloading] = useState(true)
  const [inputSearchFilter, setInputSearchFilter] = useState('')
  const [hasNextPage, setHasNextPage] = useState(true)

  const verifyHasNextPage = useCallback(() => {
    PetService.getAllPets(page + 1, 10, inputSearchFilter).then((data) => {
      if (data.length === 0) {
        setHasNextPage(false)
        return
      }
      setHasNextPage(true)
      return
    })
  }, [page, inputSearchFilter])

  const handleDelete = (petId: number) => {
    PetService.deletePet(petId)
      .then(() => {
        setPets((oldPets) => oldPets.filter((pet) => pet.id !== petId))
        toast({ status: 'info', description: 'Pet deletado' })
      })
      .catch(() => {
        toast({ status: 'error', description: 'Erro ao deletar pet' })
      })
  }

  useEffect(() => {
    let ignore = false
    setIsloading(true)
    debounce(() => {
      PetService.getAllPets(page, 10, inputSearchFilter).then((pets) => {
        if (!ignore) {
          if (inputSearchFilter === '') {
            setPets((oldState) => {
              const newState = [...oldState, ...pets]
              const arrayFiltred = newState.filter((obj, idx) => {
                return newState.findIndex((item) => item.id === obj.id) === idx
              })
              return arrayFiltred
            })
          } else {
            setPets(() => {
              const newState = [...pets]
              const arrayFiltred = newState.filter((obj, idx) => {
                return newState.findIndex((item) => item.id === obj.id) === idx
              })
              return arrayFiltred
            })
          }
          verifyHasNextPage()
          setIsloading(false)
        }
      })
    })

    return () => {
      ignore = true
    }
  }, [page, inputSearchFilter, verifyHasNextPage, debounce])

  return {
    pets,
    isLoading,
    hasNextPage,
    handleDelete,
    setPage,
    setInputSearchFilter,
  }
}
