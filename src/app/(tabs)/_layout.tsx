import { useClientOnlyValue } from '@/components/useClientOnlyValue'
import { useColorScheme } from '@/components/useColorScheme'
import Colors from '@/constants/Colors'
import FontAwesome from '@expo/vector-icons/FontAwesome'
import { Link, Tabs } from 'expo-router'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { Pressable } from 'react-native'

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name']
  color: string
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />
}

export default function TabLayout() {
  const colorScheme = useColorScheme()
  const { t } = useTranslation()

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        // Disable the static render of the header on web
        // to prevent a hydration error in React Navigation v6.
        headerShown: useClientOnlyValue(false, true),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: t('tabs.one.title'),
          tabBarIcon: ({ color }) => <TabBarIcon color={color} name="code" />,
          headerRight: () => (
            <Link asChild href="/modal">
              <Pressable>
                {({ pressed }) => (
                  <FontAwesome
                    color={Colors[colorScheme ?? 'light'].text}
                    name="info-circle"
                    size={25}
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
      <Tabs.Screen
        name="two"
        options={{
          title: t('tabs.two.title'),
          tabBarIcon: ({ color }) => <TabBarIcon color={color} name="code" />,
        }}
      />
    </Tabs>
  )
}
