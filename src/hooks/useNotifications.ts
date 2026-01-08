import { sendLocalNotification } from '@/utils/notificationsUtils'
import * as Notifications from 'expo-notifications'
import { useEffect } from 'react'

/**
 * Hook for screens to trigger notifications and listen for events
 */
export function useNotifications() {
  useEffect(() => {
    // Listener when notification is received in foreground
    const subscription = Notifications.addNotificationReceivedListener(
      (notification) => {
        console.log('Notification received:', notification)
      }
    )

    // Listener when user interacts with notification
    const responseSubscription =
      Notifications.addNotificationResponseReceivedListener((response) => {
        console.log('Notification response:', response)
      })

    return () => {
      subscription.remove()
      responseSubscription.remove()
    }
  }, [])

  /**
   * Trigger a local notification
   */
  const trigger = (options: Parameters<typeof sendLocalNotification>[0]) => {
    sendLocalNotification(options)
  }

  return { trigger }
}
