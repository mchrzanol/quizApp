import { View, Text, ImageBackground, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import React, { useEffect, useState } from 'react'
import { useLocalSearchParams, router } from 'expo-router';
import { Question, getRandomQuestions, shuffleArray } from './services/randomFunctions';
import { useSettingsStore, Theme } from '../../../settingsStore';

import * as Progress from 'react-native-progress';

const data = new Map<string, Question[]>();
data.set("Funkcja liniowa", require('./../../../../questions/Funkcja liniowa.json'));
data.set("Trygonometria", require('./../../../../questions/Trygonometria.json'));
data.set("Pole magnetyczne", require('./../../../../questions/Pole magnetyczne.json'))

const questionScreen = () => {
    const { chapter } = useLocalSearchParams<{ chapter: string }>();

    const theme = useSettingsStore(state => state.theme);

    let documentContent: Question[] | undefined;
    const questionNumber = 10;
    if (chapter === undefined) {
        return (
          <View style={{height:'100%', width:'100%', justifyContent:'center', alignItems:'center', backgroundColor:'#fff'}}>
            <ActivityIndicator size={'large'} color={'#000000'}/>
          </View>
        )
    } else {
      documentContent = data.get(chapter);
      if(documentContent != undefined){
       // const selectedQuestions = getRandomQuestions(documentContent, questionNumber);
       const [randomAnswers, setRandomAnswers] = useState(shuffleArray(documentContent == undefined ? [] : [...documentContent[0].answers]));
    
       const [goodAnswers, setGoodAnswers] = useState(0);
       const [currentIndex, setCurrentIndex] = useState(0);
   
       const [count, setCount] = useState<number>(0);
   
       const [answer, setAnswer] = useState(documentContent == undefined ? "" : documentContent[currentIndex].answers[0]);
     
       let intervalId: NodeJS.Timeout;
       useEffect(() => {
           intervalId = setInterval(() => {
             if (count < 100) {
               setCount(count + 1);
             } else {
               clearInterval(intervalId);
               setCount(0);
               setCurrentIndex(currentIndex+1);
               setAnswer(documentContent?.[currentIndex]?.answers[0] ?? "");
               setRandomAnswers(shuffleArray([...documentContent?.[currentIndex]?.answers ?? []]));
             }
           }, 1000); // Update count every second
     
         return () => clearInterval(intervalId);
       }, [count]);
   
       const AnsButton = ({index}:{index:number}) => {
           return (
               <TouchableOpacity
                   style={styles.ansButton}
                   onPress={()=>{
                       //console.log(answer);
                       if(randomAnswers[index] === answer) {
                           setGoodAnswers(goodAnswers+1);
                       }
                       if(currentIndex === questionNumber-1) {
                           router.replace({
                               pathname:'quiz/endscreen/[points]', 
                               params:{earned:goodAnswers, outOf:questionNumber, chapter:chapter}
                               })
                       }else {
                           if(documentContent != undefined){
                             setAnswer(documentContent[currentIndex+1].answers[0]);
                             setRandomAnswers(shuffleArray([...documentContent[currentIndex+1].answers]));
                           }
                           setCurrentIndex(currentIndex+1);
                           setCount(0);
                       }
                   }}
               >
               <Text style={{fontSize:20, color:'#fff', textAlign:'center'}}>{randomAnswers[index]}</Text>
               </TouchableOpacity>
           )
       }
      return (
        <SafeAreaView style={{flex:1}}>
          <View style={[styles.container, {backgroundColor:theme === Theme.light ? '#fff' : '#000000'}]}>
            <View style={styles.topImage}>
                <View style={styles.header}>
                    <Text style={{fontSize:30, fontWeight:'700', color:"#fff"}}>Pytanie {currentIndex+1}</Text>
                </View>
            </View>
            <View style={{width:'100%', height:'30%', marginTop:20, alignItems:'center', justifyContent:'center'}}>
                <Text style={{fontSize:30, fontWeight:'500', color:theme === Theme.light ? '#000000' : '#fff', textAlign:'center'}}>{documentContent == undefined ? "dupa" : documentContent[currentIndex].question}</Text>
            </View>
            <View style={{width:'100%', height:'40%', justifyContent:'center', alignItems:'center', padding:20}}>
                <View style={{flexDirection:'row', height:'49%', width:'100%'}}>
                    <AnsButton index={0}/>
                    <View style={{height:'100%', width:'2%'}}/>
                    <AnsButton index={1}/>
                </View>
                <View style={{flexDirection:'row', height:'49%', width:'100%', marginTop:'2%'}}>
                    <AnsButton index={2}/>
                    <View style={{height:'100%', width:'2%'}}/>
                    <AnsButton index={3}/>
                </View>
            </View>
            <View style={{width:'100%', height:'15%'}}>
                <Text style={{color:theme === Theme.light ? '#000000' : '#fff', fontSize:25, fontWeight:'500', marginLeft:20, marginBottom:10}}>Czas leci!</Text>
                <Progress.Bar color={'#0f4ba4'}progress={count/100} width={null} height={40} borderRadius={20} style={{marginHorizontal:20}}/>
            </View>
          </View>
        </SafeAreaView>
      )
      }
      else {
        return (
        <View style={{height:'100%', width:'100%', justifyContent:'center', alignItems:'center', backgroundColor:'#fff'}}>
          <ActivityIndicator size={'large'} color={'#000000'}/>
        </View>
        )
      }
    }
}

const styles = StyleSheet.create({
    container: {
      width: '100%',
      flex: 1,
    },
    topImage:{
      height:'15%',
      width:'100%',
      justifyContent:'center',
      alignItems:'center'
    },
    header: {
        width:'90%',
        height:'50%',
        borderRadius:20,
        backgroundColor:'#104aa1',
        alignItems:'center',
        justifyContent:'center'
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
    },
    ansButton:{
        width:'49%',
        height:'100%',
        backgroundColor:'grey',
        borderRadius:20,
        justifyContent:'center',
        alignItems:'center'
    }
  })

export default questionScreen