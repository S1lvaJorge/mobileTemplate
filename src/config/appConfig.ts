/**
 * Application configuration
 *
 * Centralized configuration for the app.
 * This makes it easy to manage environment-specific settings.
 */

export const appConfig = {
  // API Configuration
  api: {
    baseUrl: process.env.EXPO_PUBLIC_API_URL || 'https://api.example.com',
    timeout: 10000, // 10 seconds
  },

  // App Information
  app: {
    name: 'Mobile Template',
    version: '1.0.1',
  },

  // Feature Flags
  features: {
    enableAnalytics: true,
    enableErrorReporting: true,
  },
} as const
