import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity, ImageBackground, FlatList, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useLocalSearchParams, useNavigation } from 'expo-router'
import { Theme, useSettingsStore } from '../../settingsStore'

import { AntDesign } from '@expo/vector-icons';
import { router } from 'expo-router';

import COLORS from '../../../assets/COLORS'

const physicsTopics = [
  {
      "chapters":[
          "Opis ruchu postępowego",
          "Siła jako przyczyna zmian ruchu",
          "Praca, moc, energia",
          "Zjawiska hydrostatyczne"
      ],
      "class": 1
  },
  {
      "chapters":[
          "Ruch postępowy i obrotowy",
          "Pole grawitacyjne",
          "Ruch drgający harmoniczny",
          "Zjawiska termodynamiczne",
          "Pole elektrostatyczne"
      ],
      "class": 2
  },
  {
      "chapters":[
          "Prąd stały i modele przewodnictwa",
          "Pole magnetyczne",
          "Indukcja elektromagnetyczna",
          "Optyka geometryczna",
          "Fale mechaniczne"
      ],
      "class": 3
  }
];


const mathematicsTopics = [
  {
    "chapters":[
        "Zbiory Liczbowe. Liczby rzeczywiste",
        "Wyrażenia algebraiczne",
        "Funkcje i ich własności",
        "Funkcja liniowa",
        "Układy równań liniowych z swiema niewiadomymi",
        "Podstawowe własności wybranych funkcji",
        "Geometria płaska-pojęcia wstępne",
        "Trygonometria kąta ostrego"
    ],
    "class": 1
},
{
    "chapters":[
        "Przekształcanie wykresów funkcji",
        "Równania i nierówności z wartością bezwzględną",
        "Funkcja kwadratowa",
        "Geometria Płaska -okegi i koła",
        "Trygonometria",
        "Geometria analityczna",
        "Geometria płaska - rozwiązywanie trójkątów",
        "Wielomiany"
    ],
    "class": 2
},
{
    "chapters":[
        "Ułamki algebraiczne. Równania i nierówności wymierne.",
        "Ciągi",
        "Kombinatoryka. Dwumian Newtona.Trójkąt Pascala",
        "Czworokąty",
        "Geometria płaska - pole czworokąta",
        "Elementy analizy matematycznej",
        "Trygonometria",
        "Geometria analityczna"
    ],
    "class": 3
}
];

const TableItem = ({ title, color }: { title: string; color: string }) => {
  return (
    <View style={{width:'100%', alignItems:'center'}}>
      <TouchableOpacity 
      style={[{ backgroundColor: color }, styles.itemContainer]}
      onPress={()=>router.push({
        pathname:'quiz/startscreen/[chapter]', 
        params:{chapter:title}
        })}
      >
        <Text style={{fontSize:25, color:'#fff', textAlign:'center'}}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

const SubjectScreen = () => {
  const {subject} = useLocalSearchParams<{subject:string}>();
  
  const theme = useSettingsStore(state => state.theme);

  const navigation = useNavigation();

  const [index, setIndex] = useState<number>(0);

  const NastepnaKlasa = () => {
    return (
        <TouchableOpacity
          onPress={()=>setIndex(index+1)}
          style={styles.navigationButton}
          >
            <Text style={{fontSize:15, color:'#fff', marginRight:5}}>Nastepna klasa</Text>
            <AntDesign name="right" size={15} color="#fff" />
        </TouchableOpacity>
    )
  }
  const PoprzedniaKlasa = () => {
    return (
        <TouchableOpacity
          onPress={()=>setIndex(index-1)}
          style={styles.navigationButton}
          >
            <AntDesign name="left" size={15} color="#fff" />
            <Text style={{fontSize:15, color:'#fff', marginLeft:5}}>Nastepna klasa</Text>
        </TouchableOpacity>
    )
  }
  const WTyl = () => {
    return (
        <TouchableOpacity
          onPress={()=>setIndex(index-1)}
          style={[styles.navigationButton, {width:50, marginRight:10}]}
          >
            <AntDesign name="left" size={15} color="#fff" />
        </TouchableOpacity>
    )
  }

  return (

    <SafeAreaView style={{flex:1}}>
      <View style={[styles.container, {backgroundColor:theme === Theme.light ? '#fff' : '#000000'}]}>
          <View style={styles.topImage}>
          <ImageBackground 
            style={{width:'100%', height:'100%'}}
            source={require('./../../../assets/images/background.png')}
          >
            <TouchableOpacity
              style={{width:50, height:50, marginTop:20, marginLeft:20, justifyContent:'center', alignItems:'center'}}
              onPress={()=>navigation.goBack()}
              >
              <AntDesign name="left" size={40} color="#fff" />
            </TouchableOpacity>
            <View style={{flexDirection:'column', marginLeft:20,marginTop:20}}>
              <Text style={[styles.topText, {fontSize:25}]}>{subject}</Text>
              <Text style={[styles.topText, {fontSize:40, fontWeight:'bold'}]}>Klasa {subject === "Fizyka" ? physicsTopics[index]["class"] : mathematicsTopics[index]["class"]} Liceum</Text>
            </View>
          </ImageBackground>
          </View>
        <View style = {styles.tableContainer}>
            <TableItem title='Zakres nauki' color='#114AA1'/>
              <FlatList
                style={{width:'100%', marginTop:10}}
                data={subject === "Fizyka" ? physicsTopics[index]["chapters"] : mathematicsTopics[index]["chapters"]}
                renderItem={({item}) => (
                  <TableItem title={item} color='#D7CF00'/>
                )}
                ItemSeparatorComponent={() => <View style={{height: 10}} />}
                />
        </View>
        <View style={{height:60, width:'100%', justifyContent:'center'}}>
          {index < 2 &&
          <View style={{flexDirection:'row-reverse', marginHorizontal:20}}>
            <NastepnaKlasa/>
            {index > 0 && <WTyl/>}
          </View>
          }
          {index === 2 &&
          <View style={{flexDirection:'row', marginHorizontal:20}}>
            <PoprzedniaKlasa/>
          </View>
          }
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
  tableContainer: {
    width: '100%',
    flex:1,
    alignItems:'center',
    marginTop:10
  },
  itemContainer: {
    height: 80,
    width:'90%',
    borderRadius: 20,
    justifyContent:'center',
    alignItems:'center'
  },
  topImage:{
    height:'25%',
    width:'100%',
    backgroundColor:'grey',
    borderBottomRightRadius:150,
    justifyContent:'center',
    alignItems:'center'
  },
  topText:{
    fontWeight:'500',
    color:'#fff'
  },
  navigationButton: {
    height:40,
    width:150,
    borderRadius:20,
    backgroundColor:'#9B5DFF',
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'row',
    padding:10
  }
})

export default SubjectScreen