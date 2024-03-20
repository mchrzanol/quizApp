import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { router, useLocalSearchParams, useNavigation } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context'
import { Theme, useSettingsStore } from '../../../settingsStore';

const startScreen = () => {
  const {chapter} = useLocalSearchParams<{chapter:string}>();

  const theme = useSettingsStore(state => state.theme);

  const navigation = useNavigation();

  return (
    <SafeAreaView style={{flex:1}}>
      <View style={[styles.container, {backgroundColor:theme === Theme.light ? '#fff' : '#00000'}]}>
        <View style={styles.topImage}>
          <ImageBackground
            style={{width:'100%', height:'100%', justifyContent:'center', alignItems:'center'}}
            source={require('./../../../../assets/images/background.png')}
            >
            <Text style={styles.header}>{chapter}</Text>
          </ImageBackground>
        </View>
        <View style={{flex:1, alignItems:'center', marginTop:20, justifyContent:'center', marginBottom:'25%'}}>
          <TouchableOpacity 
            style={styles.startButton}
            onPress={()=>router.push({
              pathname:'quiz/questionscreen/[question]', 
              params:{chapter:chapter}
              })}
            >
              <Text style={{fontSize:50, color:'#fff'}}>Zacznij!</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.returnButton}
            onPress={()=>navigation.goBack()}
            >
              <Text style={{fontSize:50, color:'#fff'}}>Cofnij</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
  },
  topImage:{
    height:'25%',
    width:'100%',
    backgroundColor:'grey',
    borderBottomRightRadius:50,
    justifyContent:'center',
    alignItems:'center'
  },
  header: {
    fontSize:30,
    textAlign:'center',
    color:'#fff',

  },
  startButton: {
    width:'90%',
    height:'25%',
    backgroundColor:'#104aa1',
    borderRadius:20,
    justifyContent:'center',
    alignItems:'center'
  },
  returnButton:{
    width:'90%',
    height:'15%',
    backgroundColor:'#9b5dff',
    borderRadius:20,
    justifyContent:'center',
    alignItems:'center',
    marginTop:20
  }
})

export default startScreen