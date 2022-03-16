import {  StyleSheet, Text,TouchableOpacity } from 'react-native';
import { RootTabScreenProps } from '../types';
import React, { useState } from 'react';
import ViewWithLoading from '../components/ViewWithLoading';
import { View } from '../components/Themed';
import { Button } from 'react-native-elements';
import HeaderLottie from './HeaderLottie';
import { TextInput } from 'react-native-paper';



export default function TabTwoScreen({ navigation }: RootTabScreenProps<'TabTwo'>) {

  const [loading,setLoading]=useState<boolean>(false);
  

  setTimeout(() => {
   setLoading(false)
  }, 5000 );


  return(
    <ViewWithLoading
              loading= {false}
              
      >
    <View style= {
      [
        styles.container
      ] }> 
         <View style={
        [
          styles.textboxcontainer
        ]
      }>
           <TextInput
            label="First Name"

       /></View>
        <View style={
        [
          styles.textboxcontainer
        ]
      }>
           <TextInput
            label="Last Name"

       /></View>
       <View style={
        [
          styles.textboxcontainer
        ]
      }>
           <TextInput
            label="Email Address"
       /></View>
       <View style={
        [
          styles.textboxcontainer
        ]  
      }>
          <TextInput
          label="Password"
          secureTextEntry
          right={<TextInput.Icon name="eye" />}
        />
      </View>
      <View style={
        [
          styles.textboxcontainer
        ]  
      }>
          <TextInput
          label="Retype Password"
          secureTextEntry
          right={<TextInput.Icon name="eye" />}
        />
      </View>

        <View style = {{
       backgroundColor : '#EEEDDE',
       flexDirection: 'row',
       justifyContent: 'center',
       marginTop: 10
        }}> 
        <Button
            title="Register"
            buttonStyle={{ backgroundColor: 'rgba(39, 39, 39, 1)' }}
            containerStyle={{
              width: 250,
              marginHorizontal: 50,
              marginVertical: 10,
        }} 
     titleStyle={{ color: 'white', marginHorizontal: 20 }}
   />
         </View>

        <View style ={{
        }}> 
         <TouchableOpacity
        style={styles.button}
       >
        <Text style ={{
          marginTop: 15,
          fontSize: 15,
          color: '#B80F0A',
          textAlign: 'center'
        }} >I already have an account</Text>
         </TouchableOpacity>
          </View>
    </View>
    </ViewWithLoading>

  )
  
}

  const styles = StyleSheet.create({
    container:{
      flex: 1,
       flexDirection: 'column',
      justifyContent: 'flex-start',
       backgroundColor: '#EEEDDE',
       paddingTop: 10
    },
    textboxcontainer:{
      marginHorizontal: 25,
      marginVertical: 10
    },
    button: {
      alignItems: "center",
      backgroundColor: "#EEEDDE",
      padding: 10
    },
  }
  );