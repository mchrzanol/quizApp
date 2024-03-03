import { View, Text, StyleSheet, Button, ImageBackground } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useLocalSearchParams } from 'expo-router'
import { Theme, useSettingsStore } from '../../settingsStore'

const SettingsScreen = () => {
  const {theme, setTheme} = useSettingsStore();

  return (
    <SafeAreaView style={{flex:1}}>
      <View style={[styles.container, {backgroundColor: theme === Theme.light ? "#fff" : "#000000"}]}>
        <Button title='tryb ciemny' onPress={()=>setTheme(Theme.dark)}/>
        <Button title='tryb jasny' onPress={()=>setTheme(Theme.light)}/>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
      flex:1
    },
    topImage:{
      height:'25%',
      width:'100%',
      backgroundColor:'grey',
      borderBottomRightRadius:100
    }
  })
  

export default SettingsScreen