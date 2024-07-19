import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Button from '../compoments/Button'


  
const Welcome = ({navigation}) => {
  return (
    <View style={{flex :1}}>
      <ImageBackground
       source={ require ('../Image/background.png')}
       style={styles.background}
      >
        <Image
         source={require ('../Image/Logo.png')}
         style ={styles.logo}
         resizeMode='contain'
        />
        <Text style={styles.title}>Welcome To YG's Healthy App</Text>
        <Text style={styles.subtitle}>Hãy cải thiện sức khỏe nhé</Text>
        <Text style={styles.subtitle}>Bạn có can đảm để thay đổi không</Text>
        <View style={{marginTop: 72}}>
          <Button
            title = "Login With Email"
            onPress ={() => navigation.navigate("Login")}
            style={styles.btn}
          />
          <View style={styles.bottomContainer}>
            <Text style={{color:"white", fontSize:12}}>
                Bạn Chưa Có Tài Khoản ?
            </Text>
            <TouchableOpacity
            onPress={() => navigation.navigate("SignUp")}
            >
            <Text style={{color:"white", fontSize:12}}>
                Đăng Ký
            </Text>
            </TouchableOpacity>
           
          </View>
        </View>
      </ImageBackground>
    </View>
  )
}

export default Welcome

const styles = StyleSheet.create({
  background:{
    flex :1 ,
    alignItems : 'center',
    justifyContent:'center',
  },
  logo:{
    width : 140, height:140
  },
  title:{
    color:'white',
    fontSize:20
  },
  subtitle:{
    color:'white',
    fontSize:14
  },
  btn:{
    
  },
  bottomContainer:{
    flexDirection :'row',
    alignItems:'center',
    justifyContent:'center',
    marginVertical:12
  },

})