import { ActivityIndicator, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Button = (props) => {
    const isLoading = props.isLoading || false;
  return (
    <TouchableOpacity
     style ={{
        ...styles.btn,...props.style
     }}
     onPress={props.onPress}
    >
        {
            isLoading && isLoading == true ?(
                <ActivityIndicator size="small" style={{color:'white'}} />
            ) : (
                <Text style={{color:"white",fontSize:24}}>{props.title}</Text>
            )
        }

    </TouchableOpacity>    
)
}

export default Button

const styles = StyleSheet.create({
    btn:{
        paddingHorizontal: 72,
        paddingVertical:12,
        borderColor:'primary',
        borderWidth:2,
        borderRadius: 10,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"primary"
    }

})