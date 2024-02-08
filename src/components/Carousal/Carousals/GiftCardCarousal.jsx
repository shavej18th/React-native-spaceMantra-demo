import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    Image
  } from "react-native";
import Carddata from "../imagesData/CardData";
import { horizontalScale, moderateScale, verticalScale } from "../../Themes/Matrices";

function CardCarousal() {

  return (
    <View style={styles.container}>
        <Text style={styles.textStyle}>Offers & Discounts</Text>
        <ScrollView horizontal={true}  style={styles.container} showsHorizontalScrollIndicator={false}>
        {Carddata.map((item) => {
          return (
            <>
              <View style={styles.ImageContainer} key={item.id}>
                <Image
                  style={styles.Images}
                  source={item.img}
                />
              </View>
            </>
          );
        })}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop:5
    },
    textStyle:{
      fontStyle:'normal',
      fontSize:20,
      fontWeight:'500',
      marginLeft:15,
      marginTop:5,
      fontFamily:"Poppins-Medium"
    },
    Images: {
      backgroundColor: "white",
      height: verticalScale(75),
      width: horizontalScale(245),
      borderRadius: moderateScale(10),
    },
    ImageContainer: {
      marginLeft:moderateScale(10),
      margin: 5,
      height:verticalScale(85),
      width: horizontalScale(245),
    },
  });

export default CardCarousal;