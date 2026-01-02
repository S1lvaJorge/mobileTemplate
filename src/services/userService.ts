import type { User, ApiResponse } from '@/types';

import * as userApi from '@/server/userApi';
import { validateEmail } from '@/utils/validateEmail';

/**
 * User Service
 * 
 * Service layer that contains business logic.
 * This demonstrates the separation between API calls (data layer)
 * and business logic (service layer).
 * 
 * Services can:
 * - Transform data
 * - Add validation
 * - Combine multiple API calls
 * - Handle business rules
 */

/**
 * Gets user by ID with business logic
 * @param userId - The user ID to fetch
 * @returns Promise with user data or error
 */
export async function getUserById(userId: string): Promise<ApiResponse<User>> {
  // Add business logic here (e.g., caching, validation, etc.)
  if (!userId || userId.trim() === '') {
    return {
      data: null as User,
      success: false,
      message: 'User ID is required',
    };
  }

  return userApi.getUserById(userId);
}

/**
 * Creates a user with validation
 * @param userData - User data to create
 * @returns Promise with created user or error
 */
export async function createUser(userData: Omit<User, 'id' | 'createdAt'>): Promise<ApiResponse<User>> {
  // Validate email before creating user
  if (!validateEmail(userData.email)) {
    return {
      data: null as User,
      success: false,
      message: 'Invalid email address',
    };
  }

  // Add business logic (e.g., generate ID, set createdAt, etc.)
  const userWithMetadata = {
    ...userData,
    id: `user_${Date.now()}`, // Example: generate ID
    createdAt: new Date().toISOString(),
  };

  return userApi.createUser(userWithMetadata as User);
}

/**
 * Gets all users with optional filtering
 * @returns Promise with array of users or error
 */
export async function getAllUsers(): Promise<ApiResponse<User[]>> {
  const response = await userApi.getAllUsers();
  
  // Add business logic (e.g., sorting, filtering, etc.)
  if (response.success && response.data) {
    // Example: sort users by name
    response.data.sort((a, b) => a.name.localeCompare(b.name));
  }

  return response;
}

