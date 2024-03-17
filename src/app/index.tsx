import { Link, router } from 'expo-router';
import { Dimensions, FlatList, ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import COLORS from '../../assets/COLORS';

import { Ionicons } from '@expo/vector-icons';
import SubjectCard from '../components/subjectCard';

export default function Index() {

  const theme:string = "light";//z async storage potem to bierz

  const WindowSize = Dimensions.get('window');
  return (
     <SafeAreaView style={{flex:1}}>
      <View style={[styles.container, {backgroundColor:theme ==="light" ? COLORS.light.colors.themeColor : COLORS.dark.colors.themeColor}]}>
        <View style={styles.topImage}>

        </View>
        <TouchableOpacity 
          style={{flex:1, position:'absolute', top:20, left:20}}
          onPress={()=>router.push({
            pathname:'/settings/settingsScreen'
            })}
          >
          <Ionicons name="settings-outline" size={50} color={theme ==="light" ? COLORS.light.colors.themeColor : COLORS.dark.colors.themeColor} />
        </TouchableOpacity>
        <View
          style={{flex:1, position:'absolute', top:WindowSize.height*0.25-120, left:15}}
        >
          <Text style={{fontWeight:'700',fontSize:60, color:theme ==="light" ? COLORS.light.colors.themeColor : COLORS.dark.colors.themeColor}}>Nauka!</Text>
          <Text style={{fontSize:20, color:theme ==="light" ? COLORS.light.colors.themeColor : COLORS.dark.colors.themeColor}}>wybierz swój przedmiot</Text>
        </View>

        <ScrollView
          style={{flex:1, width:'100%'}}
          contentContainerStyle={{alignItems:'center'}}
          >
              <SubjectCard subject='Matematyka' subTitle='świat magicznych liczb' 
                onPress={()=>router.push({
                  pathname:'/subjects/[subject]', 
                  params:{subject:'Matematyka', year: '3'}
                  })}/>
              <SubjectCard subject='Fizyka' subTitle='zrozum zjawiska wokół'
                onPress={()=>router.push({
                  pathname:'/subjects/[subject]', 
                  params:{subject:'Fizyka', year: '3'}
                  })}/>
        </ScrollView>

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
