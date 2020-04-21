import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Dimensions, Keyboard,Image, ImageBackground } from 'react-native';
import axios from 'axios';
export default function App() {


  const[Country,setCountry]=useState({})




    useEffect(()=>{
        axios
        .get(`https://corona.lmao.ninja/v2/countries/${Country}`)
        .then(res=>{
            console.log(res)
            setCountry(res.data)
        })
        .catch(err=>{
            console.log(err)
        })
    },[Country])

  


  return (
    
    <View style={styles.container} >
     
      
      <ImageBackground source={require('./assets/covi.png')} style={styles.container}></ImageBackground> 

      <Text style={styles.h}>COVID19 TRACKER</Text>
      
        <TextInput placeholder= 'Enter Country' style={styles.input} onChangeText={(val)=>setCountry(val)}/>
    
          
        
        <View style={styles.output}>
          <Text style={styles.head}>Country: {Country.country }</Text>
         
          <Text style={styles.head}>Total Cases: { Country.cases }</Text>
          
          <Text style={styles.head}>Active Cases: { Country.active }</Text>
        
         
          
          <Text style={styles.head}>Recovered:  {Country.recovered }</Text>
          <Text style={styles.head}>Deaths: { Country.deaths }</Text>
          
        </View>
        <ImageBackground source={require('./assets/c9.jpeg')} style={styles.heads}></ImageBackground>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 30,
    position: 'absolute',
    left:0,
    top:0,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  input:{
    borderWidth:3,
    borderRadius: 35,
    borderColor: 'white',
    padding: 5,
    backgroundColor: 'black',
    top:5,
    width: Dimensions.get('window').width-50,
  
    margin: 20,
    
    height: 50,
    textAlign: 'center',
    color:'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
  hea:{
    borderWidth:3,
    borderRadius: 50,
    borderColor: 'white',
    padding: 10,
    width: Dimensions.get('window').width,
    margin: 20,
    width: 350,
    height: 75,
    top:0,
    backgroundColor: 'black',
    textAlign: 'center',
    color:'white',
    fontWeight: 'bold',
    fontSize: 40,
  },
  h:{
    
    padding: 10,
    margin: 10,
    borderWidth:2,
    borderRadius: 20,
    width: Dimensions.get('window').width-5,
    height: 60,
    borderColor: 'white',
    textAlign: 'center',
    color:'white',
    fontWeight: 'bold',
    fontSize: 30,
    
    backgroundColor: 'black',
  },
  output:{
    marginTop:0,
    padding : 50,
    fontSize: 20,
    
    borderRadius: 0,
  },
  head:{
    fontSize:30,
    alignSelf:'center',
    fontWeight:'bold',
    color: 'white',
    top:0,
    textAlign: 'center',
   
    width: 400,
    height: 50,
    
  },
  heads:{
    
    
 
    color: 'white',
    top:0,
    //backgroundColor: 'red',
    width: Dimensions.get('window').width,
    height: 90,
    
  },
  text:{
    fontSize:30,
    alignSelf:'center',
    fontWeight:'bold',
    color: 'white',
  },
  
});