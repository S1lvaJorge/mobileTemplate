import type { ApiError, ApiResponse } from '@/types'

import { appConfig } from '@/config/appConfig'

/**
 * API Client
 *
 * Example wrapper for API calls.
 * This demonstrates how to organize third-party library wrappers
 * and create a consistent API interface.
 */

class ApiClient {
  private baseUrl: string
  private timeout: number

  constructor() {
    this.baseUrl = appConfig.api.baseUrl
    this.timeout = appConfig.api.timeout
  }

  /**
   * Makes a GET request
   */
  async get<T>(endpoint: string): Promise<ApiResponse<T>> {
    try {
      const response = await fetch(`${this.baseUrl}${endpoint}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        signal: AbortSignal.timeout(this.timeout),
      })

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const data = await response.json()
      return {
        data,
        success: true,
      }
    } catch (error) {
      return {
        data: null as T,
        success: false,
        message:
          error instanceof Error ? error.message : 'Unknown error occurred',
      }
    }
  }

  /**
   * Makes a POST request
   */
  async post<T>(endpoint: string, body: unknown): Promise<ApiResponse<T>> {
    try {
      const response = await fetch(`${this.baseUrl}${endpoint}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
        signal: AbortSignal.timeout(this.timeout),
      })

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const data = await response.json()
      return {
        data,
        success: true,
      }
    } catch (error) {
      return {
        data: null as T,
        success: false,
        message:
          error instanceof Error ? error.message : 'Unknown error occurred',
      }
    }
  }
}

// Export a singleton instance
export const apiClient = new ApiClient()
