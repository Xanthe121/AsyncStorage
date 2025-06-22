import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, Button, TextInput } from 'react-native';
import * as StorageHelper from '../helpers/StorageHelper.js'


export default function PortfolioScreen() { 

  const [name, setName]=useState()

  useEffect(()=>{loadStorage()
    console.log('useEffect')
  },[name])

  const loadStorage = async()=>{
    let nameGet = await StorageHelper.getMySetting('name')
    console.log('loadStorage')
     if (name){ // if (name !==null){ 
      setName(nameGet)
    }
  }

  const changeName= async()=>{
    try{await StorageHelper.getMySetting('name',name)}
    catch(err){
      console.error(err)

    }
  }
  return (
    <View style={styles.container}>
      <Text>Portfolio Screen</Text>
      <TextInput
      maxLength={10}
      style={{
        height:50, 
        width:300, 
        borderWidth:5, 
        borderColor:'gray', 
        fontSize:28, 
        textAlign:'center', 
        color:'red',}}
        onChangeText={(text)=>setName(text)}
        value={name}
      
      ></TextInput>
      <Text>Hello{name}!</Text>
      <Button title='Change Name'
              onPress={()=>changeName()}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});