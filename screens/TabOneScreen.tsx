import { RootTabScreenProps } from "../types";
import { StyleSheet, View } from "react-native";
import React from "react";




export default function TabTwoScreen({ navigation }: RootTabScreenProps<'TabTwo'>) {

  return(
    <View style= {
      [
        styles.container
      ] }> 

      
    </View>

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