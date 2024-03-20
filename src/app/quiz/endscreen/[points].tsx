import { View, Text } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router';

const points = () => {
  const { earned, outOf} = useLocalSearchParams<{earned:string, outOf:string}>();

  if (earned !== undefined && outOf !== undefined) {
    return (
      <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
        <Text>{parseInt(earned)/parseInt(outOf)}</Text>
      </View>
    )
  } else {
    return (
      <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
        <Text>dupa</Text>
      </View>
    )
  }
}

export default points