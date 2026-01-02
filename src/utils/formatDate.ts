/**
 * Date formatting utilities
 * 
 * Example utility function to format dates consistently across the app.
 * This demonstrates how to organize reusable utility functions.
 */

/**
 * Formats a date string or Date object to a readable format
 * @param date - Date string or Date object
 * @returns Formatted date string (e.g., "January 15, 2024")
 */
export function formatDate(date: string | Date): string {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  
  if (isNaN(dateObj.getTime())) {
    return 'Invalid Date';
  }

  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(dateObj);
}

/**
 * Formats a date to a short format (MM/DD/YYYY)
 * @param date - Date string or Date object
 * @returns Formatted date string (e.g., "01/15/2024")
 */
export function formatDateShort(date: string | Date): string {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  
  if (isNaN(dateObj.getTime())) {
    return 'Invalid Date';
  }

  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).format(dateObj);
}

