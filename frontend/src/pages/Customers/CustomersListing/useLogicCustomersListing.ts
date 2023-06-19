import { useDebounce } from '../../../hooks/useDebounce'
import { useCallback, useEffect, useState } from 'react'
import { CustomerServices } from '../../../services/apiPetsAndCustomers/CustomerServices/CustomerServices'
import { ICustomer } from '../../../services/apiPetsAndCustomers/types'

export const useCustomersListing = () => {
  const { debounce } = useDebounce(1000)
  const [customers, setCustomers] = useState<
    Omit<ICustomer, 'customerAddress'>[]
  >([])
  const [isLoading, setIsloading] = useState(true)
  const [inputSearchFilter, setInputSearchFilter] = useState('')
  const [hasNextPage, setHasNextPage] = useState(true)
  const [page, setPage] = useState(1)

  const verifyHasNextPage = useCallback(() => {
    CustomerServices.getAllCustomers(page + 1, 10, inputSearchFilter).then(
      (data) => {
        if (data.length === 0) {
          setHasNextPage(false)
          return
        }
        setHasNextPage(true)
        return
      }
    )
  }, [page, inputSearchFilter])

  useEffect(() => {
    let ignore = false
    setIsloading(true)
    debounce(() => {
      CustomerServices.getAllCustomers(page, 10, inputSearchFilter)
        .then((customers) => {
          if (!ignore) {
            if (inputSearchFilter === '') {
              setCustomers((oldState) => {
                const newState = [...oldState, ...customers]
                const arrayFiltred = newState.filter((obj, idx) => {
                  return (
                    newState.findIndex((item) => item.id === obj.id) === idx
                  )
                })
                return arrayFiltred
              })
            } else {
              setCustomers(() => {
                const newState = [...customers]
                const arrayFiltred = newState.filter((obj, idx) => {
                  return (
                    newState.findIndex((item) => item.id === obj.id) === idx
                  )
                })
                return arrayFiltred
              })
            }
            verifyHasNextPage()
            setIsloading(false)
          }
        })
        .catch(() => setIsloading(false))
    })

    return () => {
      ignore = true
    }
  }, [page, inputSearchFilter, debounce, verifyHasNextPage])

  return {
    customers,
    hasNextPage,
    isLoading,
    setInputSearchFilter,
    setPage,
  }
}
