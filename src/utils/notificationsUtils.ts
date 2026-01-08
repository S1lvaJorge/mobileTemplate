import * as Notifications from 'expo-notifications'

export interface LocalNotificationOptions {
  title: string
  body: string
  data?: Record<string, any>
  sound?: 'default' | string
  badge?: number
}

/**
 * Schedule a local notification immediately
 */
export async function sendLocalNotification({
  title,
  body,
  data,
  sound = 'default',
  badge,
}: LocalNotificationOptions) {
  try {
    await Notifications.scheduleNotificationAsync({
      content: {
        title,
        body,
        data,
        sound,
        badge,
        color: '#00AAFF', // Android LED color
      },
      trigger: null,
    })
  } catch (error) {
    console.error('Failed to send notification:', error)
  }
}
