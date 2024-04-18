import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { colorTokens } from '@tamagui/themes'
import { Colors } from 'react-native/Libraries/NewAppScreen'

export default function _layout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: colorTokens.dark.blue.blue7
        }
      }}
    >
      
    </Stack>
  )
}