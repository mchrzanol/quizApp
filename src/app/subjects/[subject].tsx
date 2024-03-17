import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {Table, TableWrapper, Row, Rows} from 'react-native-table-component'
import { useLocalSearchParams } from 'expo-router'
import { useSettingsStore } from '../../settingsStore'

import COLORS from '../../../assets/COLORS'

const SubjectScreen = () => {
  const {subject} = useLocalSearchParams<{subject:string}>();
  const {year} = useLocalSearchParams<{year:string}>();
  
  const theme:string = "light";

  const WindowSize = Dimensions.get('window')

  const physicsTopis = [
    {name: 'Prąd stały i modele przewodnictwa'},
    {name: 'Pole magnetyczne'},
    {name: 'Indukcja magnetyczna'},
    {name: 'Optyka geometryczna'},
    {name: 'Fale mechaniczne'}
  ]

  return (

    <SafeAreaView style={{flex:1}}>
      <View style={[styles.container, {backgroundColor:theme ==="light" ? COLORS.light.colors.themeColor : COLORS.dark.colors.themeColor}]}>
        <View style={styles.topImage}>

        </View>
        <View style={{flex:1, position: "absolute", top:WindowSize.height*0.22-120, left:15}}>
          <Text style={{fontSize:40, color:theme ==="light" ? COLORS.light.colors.themeColor : COLORS.dark.colors.themeColor}}>{subject}</Text>
          <Text style={{fontWeight:'700',fontSize:60, color:theme ==="light" ? COLORS.light.colors.themeColor : COLORS.dark.colors.themeColor}}>Klasa 3 liceum</Text>
        </View>

        <View style = {styles.container}>
          <View style = {styles.tableContainer}>
            <Text style = {styles.header} >Zakres Nauki</Text>
            <Table>
                <Rows data = {physicsTopis.map(t => [t.name])} style = {styles.row} textStyle = {styles.rowText} />
            </Table>
          </View>
        </View>
      </View>

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    alignItems: "center",
    justifyContent: 'center'
  },
  tableContainer: {
    width: '100%'
  },
  header: {
    height: 100,
    backgroundColor: '#0b5394',
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 20,
    paddingTop: 20,
    textAlign: 'center',
    fontSize: 40,
    color: '#ffffff'
  },
  row: {
    height: 100,
    backgroundColor: '#f44336',
    marginLeft: 10,
    marginRight: 10,
    marginTop: 20,
    borderRadius: 20,
    paddingBottom: 5
  },
  rowText: {
    textAlign: 'center',
    fontSize: 40,
    color: '#ffffff'
  },
  topImage:{
    height:'25%',
    width:'100%',
    backgroundColor:'grey',
    borderBottomRightRadius:100
  }
})

export default SubjectScreen