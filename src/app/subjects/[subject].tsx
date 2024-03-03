import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useLocalSearchParams } from 'expo-router'
import { useSettingsStore } from '../../settingsStore'

const SubjectScreen = () => {
  const {subject} = useLocalSearchParams<{subject:string}>();

  const theme = useSettingsStore(state =>state.theme);

  return (
    <SafeAreaView style={{flex:1}}>
      <View>
        <Text> {subject} </Text>
      </View>
    </SafeAreaView>
  )
}

export default SubjectScreen