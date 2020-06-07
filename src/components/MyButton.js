import React from 'react'
import {TouchableOpacity,Text,StyleSheet,Dimensions} from 'react-native'

const MyButton=props=>{
    

    return(
        <TouchableOpacity 
        style={styles.buttonContainer}
        onPress={props.myPress}>
        <Text style={styles.textStyle}>{props.myTitle}</Text>
        </TouchableOpacity>
    )
}

const styles=StyleSheet.create({

    buttonContainer:{
      backgroundColor:'#40739e',
      width:Dimensions.get("window").width/2,
      alignSelf:'center',
      padding:15,
      alignItems:'center',
      borderRadius:5,
      margin:10
    },
    textStyle:{
        color:'white',
        fontWeight:'bold'
    }
  })

export {MyButton}