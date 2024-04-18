import { useLocalSearchParams } from 'expo-router'
import { View, Text } from 'react-native'
import React from 'react'

export default function Page() {
  const { id } = useLocalSearchParams<{ id: string}>();
  return (
    <View>
      <Text>Page</Text>
    </View>
  )
}