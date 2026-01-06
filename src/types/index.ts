/**
 * Type definitions for the application
 *
 * This file exports all type definitions used throughout the app.
 * Organize types by domain/feature for better maintainability.
 */

// User types
export interface User {
  id: string
  name: string
  email: string
  createdAt: string
}

// API Response types
export interface ApiResponse<T> {
  data: T
  message?: string
  success: boolean
}

export interface ApiError {
  message: string
  code?: string
}

// Counter hook types
export interface UseCounterReturn {
  count: number
  increment: () => void
  decrement: () => void
  reset: () => void
}
