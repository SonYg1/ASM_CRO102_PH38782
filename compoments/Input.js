import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

const Input = (props) => {

    const onChangeText = (text) =>{
        props.onInputChanged(props.id,text)

    }
  return (
    <View style={styles.container}>
      <View style={[styles.inputcontainer, {borderColor:'gray'}]}>
        <TextInput
            {...props}
            placeholder={props.placeholder}
            placeholderTextColor={props.placeholderTextColor}
            style={styles.input}
            autoCapitalize='none'
            onChangeText={onChangeText}
        />
      </View>
      {
        props.errorText && (
            <View style={styles.errorContainer}>
                <Text style={styles.errorText}>{props.errorText[0]}</Text>


            </View>
        )
      }
    </View>
  )
}

export default Input

const styles = StyleSheet.create({
    container:{

    },
    inputcontainer:{
        width:'100%',
        paddingHorizontal:12,
        paddingVertical:2,
        borderRadius:12,
        borderBottomWidth:1,
        borderBottomColor:'gray',
        marginVertical:16,
        flexDirection:"row",
    },
    input:{
        color:'gray',
        flex:1,
        fontFamily:"regular",
        paddingTop:0,
        fontSize:18
    },
    errorContainer:{
        marginVertical:4
    },
    errorText:{
        color:"red",
        fontSize:12
    }

})