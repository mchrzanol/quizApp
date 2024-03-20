import { Link, router } from 'expo-router';
import { Dimensions, FlatList, ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import COLORS from '../../assets/COLORS';

import { Ionicons } from '@expo/vector-icons';
import SubjectCard from '../components/subjectCard';
import { Theme, useSettingsStore } from '../settingsStore';

export default function Index() {

  const theme = useSettingsStore(state => state.theme);

  const WindowSize = Dimensions.get('window');
  return (
     <SafeAreaView style={{flex:1}}>
      <View style={[styles.container, {backgroundColor: theme === Theme.light ? "#fff" : "#000000"}]}>
        <Image 
          style={styles.topImage}
          source={require('./../../assets/images/homePageTop.png')}
          resizeMode='cover'
        >

        </Image>
        <TouchableOpacity 
          style={{flex:1, position:'absolute', top:20, left:20}}
          onPress={()=>router.push({
           pathname:'/settings/settingsScreen'
            })}
          >
          <Ionicons name="settings-outline" size={50} color='#fff' />
        </TouchableOpacity>
        <View
          style={{flex:1, position:'absolute', top:WindowSize.height*0.25-120, left:15}}
        >
          <Text style={{fontWeight:'700',fontSize:60, color:'#fff'}}>Nauka!</Text>
          <Text style={{fontSize:20, color:'#fff'}}>wybierz swój przedmiot</Text>
        </View>

        <ScrollView
          style={{flex:1, width:'100%'}}
          contentContainerStyle={{alignItems:'center'}}
          >
              <SubjectCard subject='Matematyka' subTitle='świat magicznych liczb' image = {require('./../../assets/images/matematyka.png')}
                onPress={()=>router.push({
                  pathname:'/subjects/[subject]', 
                  params:{subject:'Matematyka'}
                  })}/>
              <SubjectCard subject='Fizyka' subTitle='zrozum zjawiska wokół' image={require('./../../assets/images/fizyka.png')}
                onPress={()=>router.push({
                  pathname:'/subjects/[subject]', 
                  params:{subject:'Fizyka'}
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
    borderBottomRightRadius:100
  }
})
