import React from 'react';
import { View,Text, Image, StyleSheet } from 'react-native';
import { moderateScale, verticalScale } from '../Themes/Matrices';
import { useFonts } from 'expo-font';

function Footer() {
    const [ fontsLoaded ]= useFonts({
        "Poppins-Medium":require('../../assets/fonts/Poppins-Medium.ttf')
    })
  return (
    <View style={styles.container}>
           <Text style={styles.textStyle}>18000 3099 550</Text>
           <Text style={styles.textStyle}>info@demoApp.com</Text>
           <Text style={styles.textStyle}>Like What you see? you'll like us even more here</Text>
        <View style={styles.logoContainer}>
        <Image
            style={styles.Image}
            source={require('./SocialLogo/Image105/Image105.png')}
            />
        <Image
            style={styles.Image}
            source={require('./SocialLogo/Image106/Image106.png')}
            />
        <Image
            style={styles.Image}
            source={require('./SocialLogo/Image107/Image107.png')}
            />
        <Image
            style={styles.Image}
            source={require('./SocialLogo/Image108/Image108.png')}
            />
        <Image
            style={styles.Image}
            source={require('./SocialLogo/Image109/Image109.png')}
            />
        </View>
        <Text style={styles.textStyle}>demoApp 2024. All Rights Reserved!</Text>
    </View>
  )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        height:verticalScale(270),
        backgroundColor:"#FAB860",
        justifyContent:'center',
        alignItems:'center',
        paddingBottom:verticalScale(30),
        marginBottom:verticalScale(50)
     },
    logoContainer:{
        flexDirection:'row',
        marginTop:verticalScale(5)
    },
    Image:{
        margin:moderateScale(2)
    },
    textStyle:{
        marginTop:moderateScale(15),
        fontSize:moderateScale(14),
        color:'white',
        fontFamily:"Poppins-Medium",
        justifyContent:"center",
        alignItems:"center"
    },
})

export default Footer