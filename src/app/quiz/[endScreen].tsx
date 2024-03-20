import { View, Text } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router';

const endScreen = () => {
  const {percent} = useLocalSearchParams<{percent:string}>();
  return (
    <View>
      <Text>endScreen</Text>
    </View>
  )
}

export default endScreen