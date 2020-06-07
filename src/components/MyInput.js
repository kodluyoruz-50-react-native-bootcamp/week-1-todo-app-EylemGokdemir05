import React from 'react'
import {StyleSheet,Dimensions,TextInput,View} from 'react-native'

const MyInput=props=>{
    return(
        <View style={styles.inputContainer}>
        <TextInput
        autoCapitalize="none"
        placeholder={props.myPlace}
        onChangeText={props.textChange}>
        </TextInput>
        </View>
    )
}
const styles=StyleSheet.create({
    inputContainer:{
        backgroundColor:'#eceff1',
        padding:10,
        margin:10,
        borderRadius:10,
        width:Dimensions.get("window").width/1.5
    }
})
export {MyInput}