import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useCallback, useReducer, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Input from '../compoments/Input'
import Button from '../compoments/Button'
import { reducer } from '../utils/reducers/formReducers'
import { validateInput } from '../utils/acitons/formActions'

const isTestMode = true;
const initialState = {
    inputValues: {
        fullName : isTestMode ? "Son YG" : "",
        email: isTestMode ? "example@example.com" : "",
        password : isTestMode ? "**********": "",
    },
    inputValidities:{
        fullName : false,
        email:false,
        password:false,
        
    },
    formIsValid: false,
}

const Login = ({navigation}) => {
    const[isLoading,setIsLoading] = useState(false)
    const [formState,dispatchFormState] = useReducer(reducer,initialState);

    const inputChangedHandler = useCallback((inputId,inputValue) =>{
            const result = validateInput(inputId,inputValue);
            dispatchFormState({inputId, validationResult:result, inputValue});
        },[dispatchFormState])

    const authHandler=()=>{
        console.log('authHandler');
    }
  return (
    <SafeAreaView style={{flex: 1 ,backgroundColor :'#253334'}}>
        <ScrollView
        style={{
            flex:1,
            backgroundColor:'#253334',
            padding:16
        }}
        >
            <Image
                source={require ('../Image/Logo.png')}
                style ={{
                    width:100,height:100,marginLeft:-22,marginBottom:6
                }}
                resizeMode='contain'
            />
            <Text style={{fontSize:18,color:'white'}}>Đăng Nhập</Text>
            <Text style={{fontSize:12,color:'gray'}}>
                Đăng Nhập Ngay Để Được Trải Nghiệm Ngay Bây Giờ
            </Text>
            <View>
                <Input
                    id="email"
                    placeholder= "Email Address"
                    placeholderTextColor="gray"
                    errorText={formState.inputValidities["email"]}
                    onInputChanged ={inputChangedHandler}
                />
                <Input
                    id="password"
                    placeholder= "PassWord"
                    placeholderTextColor="gray"
                    errorText={formState.inputValidities["password"]}
                    onInputChanged ={inputChangedHandler}
                />
                <Button
                title="Đăng Nhập"
                onPress={authHandler}
                isLoading={isLoading}
                style={{
                    with: 32,
                    marginVertical:8
                }}
                />
                <View style={styles.bottomContainer}>
                    <Text style={{fontSize:12,color:'white'}}>
                        Bạn Chưa Có Tài Khoản ?
                    </Text>
                    <TouchableOpacity  onPress={() => navigation.navigate("Login")}>
                        <Text style={{fontSize:12,color:'white'}}>   Đăng Ký</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    </SafeAreaView>
  )
}

export default Login

const styles = StyleSheet.create({
    bottomContainer:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center",
        marginVertical:2
    }

})