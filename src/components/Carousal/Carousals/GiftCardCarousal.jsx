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
        <Text style={styles.textStyle}></Text>
        <View style={{flexDirection:'row', alignItems:'center'}}>
        <View style={styles.Small_logo}>
         <Image source={require('../../../assets/Image/MDI - sale/MDI - sale.png')}/>
        </View>
        <View>
          <Text style={styles.textStyle}>Offers & Discounts</Text>
        </View>
      </View>
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
      marginTop:moderateScale(5),
      marginRight:horizontalScale(2),
    },
    textStyle:{
      fontStyle:'normal',
      fontSize:moderateScale(20),
      fontWeight:'500',
      marginTop:verticalScale(5),
      fontFamily:"Poppins-Medium"
    },
    Small_logo:{
      marginLeft:horizontalScale(15),
      marginRight:horizontalScale(5),
    },
    Images: {
      backgroundColor: "white",
      height: verticalScale(75),
      width: horizontalScale(245),
      borderRadius: moderateScale(10),
    },
    ImageContainer: {
      marginLeft:moderateScale(10),
      margin: moderateScale(5),
      height:verticalScale(85),
      width: horizontalScale(245),
    },
  });

export default CardCarousal;