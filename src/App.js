/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {SafeAreaView,StyleSheet,ScrollView,View,Text,StatusBar,FlatList, Dimensions,TouchableOpacity} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import {MyInput,MyButton} from './components'

const App = () => {

  const [entry,setEntry]=useState("")
  const [list,setList]=useState([])

  changeText=(text)=>{
    setEntry(text)
  }

  addToList=()=>{
      let newList=[...list]
      newList.push({myEntry:entry})
      setList(newList)
  }

  // onTopListItem=()=>{
  //   <TouchableOpacity style={styles.doneStyle}>
 // </TouchableOpacity>
  // }

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <View style={styles.container}>
        <FlatList
        keyExtractor={(item,index)=>index.toString()}
        data={list}
        renderItem={({item})=><Text style={styles.listStyle}>{item.myEntry}</Text>}>
        </FlatList>
        <MyInput textChange={changeText}myPlace="Yapılacak iş girin..."></MyInput>
        <MyButton myTitle="Ekle"myPress={addToList}/>
        </View>
        
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({

  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
  },
  listStyle:{
    flex:1,
    backgroundColor:'#eb4d4b',
    width:Dimensions.get("window").width/1.05,
    padding:10,
    marginTop:5,
    borderRadius:10,
    justifyContent:'space-between',
    fontSize:15
  },
  doneStyle:{
    backgroundColor:'#6ab04c',
    margin:5,
    padding:10,
    borderRadius:10,
    alignItems:'center',
    flexDirection:'row',
    justifyContent:'space-between',
    fontSize:10,
    textDecorationLine: 'line-through'
  }
  
});



export default App
