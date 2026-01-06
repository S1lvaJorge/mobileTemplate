/**
 * Validation utilities
 *
 * Example utility function for email validation.
 * This demonstrates how to organize validation logic.
 */

/**
 * Validates an email address format
 * @param email - Email string to validate
 * @returns true if email is valid, false otherwise
 */
export function validateEmail(email: string): boolean {
  if (!email || typeof email !== 'string') {
    return false
  }

  // Basic email regex pattern
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email.trim())
}

/**
 * Validates a password (example: at least 8 characters)
 * @param password - Password string to validate
 * @returns true if password meets requirements, false otherwise
 */
export function validatePassword(password: string): boolean {
  if (!password || typeof password !== 'string') {
    return false
  }

  return password.length >= 8
}
