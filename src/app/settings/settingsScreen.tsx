import { View, Text, StyleSheet, Button, ImageBackground, Image, TouchableOpacity, Switch } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useLocalSearchParams } from 'expo-router'
import { Theme, useSettingsStore } from '../../settingsStore'
import { AntDesign } from '@expo/vector-icons';
import COLORS from '../../../assets/COLORS'
import { useNavigation } from 'expo-router'

const SettingsScreen = () => {
  const {theme, setTheme} = useSettingsStore();

  const navigation = useNavigation();

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => {
    setIsEnabled(previousState => !previousState);
    setTheme(theme === Theme.light ? Theme.dark : Theme.light);
  };

  return (
    <SafeAreaView style={{flex:1}}>
      <View style={[styles.container, {backgroundColor: theme === Theme.light ? "#fff" : "#000000"}]}>
        <View style={styles.topImage}>
        <Image 
          style={{width:'100%', height:'100%'}}
          source={require('./../../../assets/images/settings.png')}
          resizeMode='cover'
        />
        <TouchableOpacity
          style={{flex:1, position:'absolute', top:20, left:20}}
          onPress={()=>navigation.goBack()}
          >
          <AntDesign name="left" size={40} color="#fff" />
        </TouchableOpacity>
        <Text style={[styles.topText, {color:"#fff"}]}>Ustawienia</Text>
        </View>
        <View style={{alignItems:'center', marginLeft:'10%', flexDirection:'row', justifyContent:'flex-start', marginTop:15}}>
          <Switch
            trackColor={{false: '#000000', true: '#ffffff'}}
            thumbColor={"#474747"}
            ios_backgroundColor="#474747"
            onValueChange={toggleSwitch}
            value={isEnabled}
            style={{ transform: [{ scaleX: 1.5 }, { scaleY: 1.5 }] }}
          />
          <Text style={{paddingLeft:10, fontSize:20, color:theme ===Theme.light ? COLORS.dark.colors.themeColor : COLORS.light.colors.themeColor}}>Tryb ciemny</Text>
        </View>
        {/* <Button title='tryb ciemny' onPress={()=>setTheme(Theme.dark)}/>
        <Button title='tryb jasny' onPress={()=>setTheme(Theme.light)}/> */}
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
      flex:1
    },
    topImage:{
      height:'20%',
      width:'100%',
      backgroundColor:'grey',
      borderBottomLeftRadius:35,
      borderBottomRightRadius:35
    },
    topText:{
      fontSize:50,
      fontWeight:'500',
      position:'absolute',
      bottom:10,
       left:20
    }
  })
  

export default SettingsScreen