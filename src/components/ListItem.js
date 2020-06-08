import React, { useState } from 'react'
import {TouchableOpacity,Text,View,StyleSheet} from 'react-native'

const ListItem=props=>{
    const [done,setDone]=useState(false)
    const styles=done ? doneStyles : undoneStyles

    doneItem=()=>{
        setDone(!done)
    }
    return(
        <TouchableOpacity
            style={styles.container}
            onPress={doneItem}>
            <View style={{flexDirection:'row',alignItems:'center'}}>
                <View style={styles.dot}></View>
                <Text style={styles.textStyle}>{props.data.myEntry}</Text>
                {
                    done && <Text style={styles.textStyle}>Yapıldı!</Text>
                }
            </View>
        </TouchableOpacity>
    )
}

const doneStyles=StyleSheet.create({
    container:{
        backgroundColor:'#6ab04c',
        margin:5,
        padding:10,
        borderRadius:10,
        flexDirection:'row',
        justifyContent:'space-between'
    },
    textStyle:{
        fontSize:10,
        marginLeft:10,
        textDecorationLine: 'line-through'
    },
    dot:{
        width:10,
        height:10,
        backgroundColor:'black',
        borderRadius:10
    }
})

const undoneStyles=StyleSheet.create({
    container:{
        backgroundColor:'#eb4d4b',
        margin:5,
        padding:10,
        borderRadius:10,
        flexDirection:'row',
        justifyContent:'space-between'
    },
    textStyle:{
        fontSize:10,
        marginLeft:10
    },
    dot:{
        width:10,
        height:10,
        backgroundColor:'black',
        borderRadius:10
    }
})

export {ListItem}