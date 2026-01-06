import EditScreenInfo from '@/components/EditScreenInfo'
import { Text, View } from '@/components/Themed'
import { useTranslation } from 'react-i18next'
import { StyleSheet } from 'react-native'

/**
 * Tab Two Screen Component
 *
 * This screen component is returned from /src/app/(tabs)/two.tsx
 */
export default function TabTwoScreen() {
  const { t } = useTranslation()

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{t('tabs.two.title')}</Text>
      <View
        darkColor="rgba(255,255,255,0.1)"
        lightColor="#eee"
        style={styles.separator}
      />
      <EditScreenInfo path="src/app/(tabs)/two.tsx" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
})
