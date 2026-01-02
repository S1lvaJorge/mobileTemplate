import type { User, ApiResponse } from '@/types';

import { apiClient } from '@/lib/apiClient';

/**
 * User API endpoints
 * 
 * This file demonstrates how to organize API calls by resource/domain.
 * Each API file contains all endpoints related to a specific resource.
 */

/**
 * Fetches a user by ID
 * @param userId - The user ID to fetch
 * @returns Promise with user data or error
 */
export async function getUserById(userId: string): Promise<ApiResponse<User>> {
  return apiClient.get<User>(`/users/${userId}`);
}

/**
 * Fetches all users
 * @returns Promise with array of users or error
 */
export async function getAllUsers(): Promise<ApiResponse<User[]>> {
  return apiClient.get<User[]>('/users');
}

/**
 * Creates a new user
 * @param userData - User data to create
 * @returns Promise with created user or error
 */
export async function createUser(userData: Omit<User, 'id' | 'createdAt'>): Promise<ApiResponse<User>> {
  return apiClient.post<User>('/users', userData);
}

