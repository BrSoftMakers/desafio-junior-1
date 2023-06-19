import { useCallback, useRef } from 'react'

export const useDebounce = (delay = 300) => {
  const debouncing = useRef<NodeJS.Timeout>()
  const isFirstTime = useRef(true)

  const debounce = useCallback(
    (fn: () => void) => {
      if (isFirstTime.current) {
        fn()
        isFirstTime.current = false
      } else {
        if (debouncing.current) {
          clearTimeout(debouncing.current)
        }

        debouncing.current = setTimeout(() => fn(), delay)
      }
    },
    [delay]
  )

  return { debounce }
}
