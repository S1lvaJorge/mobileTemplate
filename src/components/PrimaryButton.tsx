import Colors from '@/constants/Colors'
import React from 'react'
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native'

import { useColorScheme } from './useColorScheme'

interface PrimaryButtonProps {
  title: string
  onPress: () => void
  disabled?: boolean
  loading?: boolean
}

/**
 * PrimaryButton Component
 *
 * Example of a reusable button component.
 * This demonstrates:
 * - Component organization in the components folder
 * - Props interface definition
 * - Theme-aware styling
 * - Loading and disabled states
 */
export function PrimaryButton({
  title,
  onPress,
  disabled = false,
  loading = false,
}: PrimaryButtonProps) {
  const colorScheme = useColorScheme()
  const colors = Colors[colorScheme ?? 'light']

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      disabled={disabled || loading}
      onPress={onPress}
      style={[
        styles.button,
        {
          backgroundColor: colors.tint,
          opacity: disabled || loading ? 0.6 : 1,
        },
      ]}
    >
      {loading ? (
        <ActivityIndicator color="#fff" />
      ) : (
        <Text style={styles.buttonText}>{title}</Text>
      )}
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 120,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
})
