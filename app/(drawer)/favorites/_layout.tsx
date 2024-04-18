import React from 'react'
import { Stack } from 'expo-router'
import { DrawerToggleButton } from '@react-navigation/drawer'
import { useTheme } from 'tamagui'

export default function _layout() {
  const theme = useTheme();

  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: theme.blue8.get(),
        },
        headerTitleAlign: "center",
        headerTintColor: '#fff',
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          title: 'Favorites',
          headerLeft: () => <DrawerToggleButton tintColor='#fff' />
        }} />
    </Stack>
  )
}