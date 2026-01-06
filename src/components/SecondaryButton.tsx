import Colors from '@/constants/Colors'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

import { useColorScheme } from './useColorScheme'

interface SecondaryButtonProps {
  title: string
  onPress: () => void
  disabled?: boolean
}

/**
 * SecondaryButton Component
 *
 * Example of a secondary button component with outlined style.
 * This demonstrates:
 * - Component organization in the components folder
 * - Different button style variant
 * - Reusable component patterns
 */
export function SecondaryButton({
  title,
  onPress,
  disabled = false,
}: SecondaryButtonProps) {
  const colorScheme = useColorScheme()
  const colors = Colors[colorScheme ?? 'light']

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      disabled={disabled}
      onPress={onPress}
      style={[
        styles.button,
        {
          borderColor: colors.tint,
          opacity: disabled ? 0.6 : 1,
        },
      ]}
    >
      <Text style={[styles.buttonText, { color: colors.tint }]}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 120,
    backgroundColor: 'transparent',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
  },
})
