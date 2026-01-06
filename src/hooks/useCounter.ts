import type { UseCounterReturn } from '@/types'

import { useCallback, useState } from 'react'

/**
 * Custom hook: useCounter
 *
 * Example custom hook that demonstrates:
 * - Encapsulating stateful logic
 * - Returning an object with state and methods
 * - Reusable across multiple components
 *
 * @param initialValue - Initial count value (default: 0)
 * @returns Object with count, increment, decrement, and reset functions
 */
export function useCounter(initialValue: number = 0): UseCounterReturn {
  const [count, setCount] = useState(initialValue)

  const increment = useCallback(() => {
    setCount((prev) => prev + 1)
  }, [])

  const decrement = useCallback(() => {
    setCount((prev) => prev - 1)
  }, [])

  const reset = useCallback(() => {
    setCount(initialValue)
  }, [initialValue])

  return {
    count,
    increment,
    decrement,
    reset,
  }
}
