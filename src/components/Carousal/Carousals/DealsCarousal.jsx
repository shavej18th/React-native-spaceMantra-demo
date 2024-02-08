import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    Image,
    ImageBackground
  } from "react-native";
import AdvCardData from '../imagesData/AdvCardData';
import DealsCardData from '../imagesData/DealsCardData';
import { LinearGradient } from 'expo-linear-gradient';
import { horizontalScale, moderateScale, verticalScale } from '../../Themes/Matrices';


function DealsCarousal() {
  
  return (
    <LinearGradient colors={["#4CE8D6", "#0C8A7B"]} style={styles.container}>
        <Text style={styles.textStyle}>Deals of the Day</Text>
        <View style={{flexDirection:'row', marginLeft:15}}>
          <View style={styles.HrLine1}></View>
          <View style={styles.HrLine2}></View>
        </View>
        <ScrollView horizontal={true} style={styles.container} showsHorizontalScrollIndicator={false}>
        {DealsCardData?.map((item) => {
          return (
            <>
              <View style={styles.ImageContainer}>
                <ImageBackground
                  style={styles.Images}
                  source={item.img}
                  borderRadius={moderateScale(20)}
                >
                   <View style={styles.upperTextBlock}>
                    <Text style={styles.offText}>OFF</Text>
                    <Text style={styles.offPresent}>30%</Text>
                    <Text style={styles.offPeriod}>Rs199/mo</Text>
                   </View>
                   <View style={styles.LowerTextBlock}>
                    <Text style={{ fontFamily:"Poppins-Medium"}}>Lorem ipsum dolor sit amet consectetur..Lorem ipsum dolor sit amet consectetur Lorem,</Text>
                   </View>
                </ImageBackground>
              </View>
            </>
          );
        })}
      </ScrollView>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop:verticalScale(5),
      marginBottom:verticalScale(10),
    },
    offPresent:{
        fontSize:moderateScale(25),
        color:'#daa520',
        fontFamily:"Poppins-Medium",
        margin:0,
        padding:0,
    },
    HrLine1:{     
        backgroundColor:'white',
        height:verticalScale(4),
        width:horizontalScale(20),
        marginRight:horizontalScale(10)
    },
    HrLine2:{
        backgroundColor:'white',
        height:verticalScale(4),
        width:horizontalScale(50)
    },
    offPeriod:{
        color:'grey',
        fontFamily:"Poppins-Medium",
        margin:0,
        padding:0,
        fontSize:moderateScale(12)
    },
    offText:{
        marginLeft:horizontalScale(20),
        fontFamily:"Poppins-Medium",
        margin:0,
        padding:0,
        fontSize:moderateScale(12)
    },
    upperTextBlock:{
        // height:verticalScale(85),
        // width:horizontalScale(80),
        height:"auto",
        width:'auto',
        backgroundColor:'white',
        borderRadius:moderateScale(10),
        marginLeft:horizontalScale(200),
        marginRight:horizontalScale(5),
        marginTop:verticalScale(15),
        justifyContent:'center',
        alignItems:'center'
    },
    LowerTextBlock:{
        height:'auto',
        marginBottom:verticalScale(15),
        borderWidth:1,
        borderColor:'white',
        backgroundColor:'white',
        borderRadius:moderateScale(10),
        marginTop:verticalScale(152),
        paddingTop:verticalScale(5),
        marginLeft:moderateScale(5),
        paddingLeft:moderateScale(5),
        marginRight:moderateScale(5),
        paddingRight:moderateScale(5),
        paddingBottom:moderateScale(5),
        alignSelf:'center',
        justifyContent:'center',
        alignItems:'center'
    },
    textStyle:{
      fontStyle:'normal',
      fontSize:moderateScale(25),
      fontWeight:'500',
      marginLeft:horizontalScale(15) ,
      marginTop:verticalScale(10),
      color:'white',
      fontFamily:"Poppins-Medium"
    },
    Images: {
      // height: verticalScale(340),
      height:'auto',
      // width: horizontalScale(290),
      width:"auto",
      borderRadius: moderateScale(20),
      borderWidth:moderateScale(3),
      borderColor:'transparent',
    },
    ImageContainer: {
      marginLeft: moderateScale(10),
      marginRight:moderateScale(10),
      margin: 5,
      height: verticalScale(350),
      width: horizontalScale(290),
      borderRadius: moderateScale(20),
    },
  });

export default DealsCarousal;