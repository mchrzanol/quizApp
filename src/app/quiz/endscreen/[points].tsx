import { View, Text, ImageBackground, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import React from 'react'
import { router, useLocalSearchParams, useNavigation } from 'expo-router';
import { useSettingsStore, Theme } from '../../../settingsStore';

const points = () => {
  const { earned, outOf, chapter} = useLocalSearchParams<{earned:string, outOf:string, chapter:string}>();

  const theme = useSettingsStore(state => state.theme);

  const navigation = useNavigation();

  if (earned !== undefined && outOf !== undefined) {
    return (
      <SafeAreaView style={{flex:1}}>
        <View style={[styles.container, {backgroundColor:theme === Theme.light ? '#fff' : '#000000'}]}>
              <Image
                style={styles.topImage}
                source={require('./../../../../assets/images/end.png')}
                resizeMode='cover'
                />
                <View style={{height:'15%', width:'100%', justifyContent:'center', alignItems:'center', backgroundColor:'#124a9f', marginTop:20}}>
                  <Text style={{color:'#fff', fontSize:35, fontWeight:'900'}}>Oto twój wynik!</Text>
                </View>
                <View style={{width:'80%', height:'20%', justifyContent:'center', alignItems:'center', backgroundColor:'#9b5dff', marginTop:20, borderRadius:20}}>
                    <Text style={{fontSize:70, color:'#fff', fontWeight:'700'}}>{parseInt(earned)/parseInt(outOf)}%</Text>
                    <Text style={{fontSize:20, color:'#fff', fontWeight:'700'}}>{
                    parseInt(earned)/parseInt(outOf) <0.41 ? 
                    "Nastepnym razem będzie lepiej" :
                    parseInt(earned)/parseInt(outOf) <0.71 ?
                    "Całkiem nieźle!" :
                    "Jest klasa!"
                  }</Text>
                </View>
                <TouchableOpacity
                  style={styles.button}
                  onPress={()=>navigation.goBack()}
                  >
                    <Text style={{color:'#fff', fontSize:20, fontWeight:'500'}}>Jeszcze raz</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                  style={styles.button}
                  onPress={()=>navigation.dispatch({type:'POP_TO_TOP'})}
                  >
                    <Text style={{color:'#fff', fontSize:20, fontWeight:'500'}}>Powrót do menu</Text>
                  </TouchableOpacity>
          </View>
      </SafeAreaView>
    )
  } else {
    return (
      <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
        <Text>dupa</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    alignItems:'center'
  },
  topImage:{
    height:'25%',
    width:'100%',
    backgroundColor:'grey',
    borderBottomRightRadius:50,
    justifyContent:'center',
    alignItems:'center'
  },
  button: {
    height:'10%',
    width:'70%',
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#124a9f',
    borderRadius:20,
    marginTop:'4%'
  }
})

export default points