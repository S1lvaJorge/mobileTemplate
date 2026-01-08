import * as Notifications from 'expo-notifications'
import { Platform } from 'react-native'

/**
 * Configure notifications once at app startup.
 */
export function configureNotifications() {
  // Set global notification handler (foreground)
  Notifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldPlaySound: true,
      shouldSetBadge: true,
      shouldShowBanner: true,
      shouldShowList: true,
    }),
  })

  // Android channel setup
  if (Platform.OS === 'android') {
    Notifications.setNotificationChannelAsync('default', {
      name: 'default',
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: '#FF231F7C',
      // sound: 'notification-sound.wav',
      sound: 'default',
    })
  }
}
