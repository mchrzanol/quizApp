import { View, Text } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router';

const questionSCreen = () => {
  const {cośtamdoquizu} = useLocalSearchParams<{cośtamdoquizu:string}>();
  return (
    <View>
      <Text>questionSCreen</Text>
    </View>
  )
}

export default questionSCreen