import { View, Text, StyleSheet, Dimensions, Touchable, TouchableOpacity } from 'react-native'
import React from 'react'
import COLORS from '../../assets/COLORS';
import { Theme, useSettingsStore } from '../settingsStore';
import { SafeAreaView } from 'react-native-safe-area-context';

interface SubjectCardProps {
    subject:string;
    subTitle:string;
    onPress:()=>void;
    imageURI?:string;
}

const SubjectCard:React.FC<SubjectCardProps> = ({subject, subTitle,onPress, imageURI}) => {
    const WindowSize = Dimensions.get('window');

    const theme = useSettingsStore(state => state.theme);
  return (
    <View style={[styles.container, {height:WindowSize.height*0.3}]}>
        <Text style={[styles.textCommon, {marginTop:'10%',fontSize:32, fontWeight:'700', color:theme === Theme.light ? COLORS.light.colors.themeColor : COLORS.dark.colors.themeColor}]}>{subject}</Text>
        <Text style={[styles.textCommon, {fontSize:15, fontWeight:'500', color:theme ===Theme.light ? COLORS.light.colors.themeColor : COLORS.dark.colors.themeColor}]}>{subTitle}</Text>
        <TouchableOpacity 
        style={styles.button}
        onPress={onPress}
        >
            <Text style={{fontSize:18,fontWeight:'500',color:theme ===Theme.light ? COLORS.light.colors.themeColor : COLORS.dark.colors.themeColor }}>Zacznij!</Text>
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      width:'80%',
      borderRadius:50,
      backgroundColor:'red',
      marginTop:15
    },
    textCommon:{
        marginLeft:'5%'
    },
    button: {
        position:'absolute',
        bottom:'8%', 
        right:'8%', 
        width:'45%', 
        height:'20%',
        borderRadius:25, 
        backgroundColor:'grey', 
        justifyContent:'center', 
        alignItems:'center'
    }

  })

export default SubjectCard