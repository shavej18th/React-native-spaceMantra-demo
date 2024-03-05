import React from 'react'
import { View,Text,TouchableOpacity,StyleSheet,Image } from 'react-native'
import { verticalScale, horizontalScale, moderateScale } from '../../../Themes/Matrices';

function Pincode() {
  return (
    <View>
    <View style={styles.inner_container}>
    <View style={[styles.content_container, { width: "28%" }]}>
        <View style={styles.image_container}>
            <Image source={require('../ProductStaticData/Images/Icon ionic-ios-checkmark-circle/Icon ionic-ios-checkmark-circle.png')}/>
        </View>
      <View>
      <Text style={styles.text_decor}>201301</Text>
      </View>
    </View>
    <TouchableOpacity
      style={[styles.content_container1, { width: "72%", }]}
    //   onPress={() => setClicked(!clicked)}
    >
     <View style={{flexDirection:'row', alignItems:'center'}}>
        <Text style={styles.text_decor}>Change pincode</Text>
     <Text
        style={[
          styles.gtr_than,
        //   clicked
        //     ? {
        //         transform: [{ rotate: "90deg" }],
        //         marginTop: verticalScale(5),
        //       }
        //     : { transform: [{ rotate: "0deg" }] },
        ]}
      >
        {">"}
      </Text>
     </View>
    </TouchableOpacity>
  </View>
  <View style={styles.delivery_detail}>
    <View><Image source={require('../ProductStaticData/Images/Group11237/Group11237.png')}/></View>
    <View><Text style={styles.text_style} >Delivery within 6 - 8 days</Text></View>
  </View>
  </View>
  )
}
const styles = StyleSheet.create({
    inner_container: {
      height: verticalScale(50),
      backgroundColor: "white",
      marginRight: horizontalScale(15),
      marginLeft: horizontalScale(10),
      flexDirection: "row",
      borderRadius: moderateScale(25),
      marginTop: verticalScale(20),
    },
    content_container: {
      alignItems: "center",
      justifyContent: "center",
      flexDirection:'row'
    },
    delivery_detail: {
      flexDirection:'row',
      marginTop:verticalScale(20),
      marginLeft:horizontalScale(15),
    },
    content_container1: {
      alignItems:'flex-end',
      justifyContent: "center",
      paddingRight:horizontalScale(15)
    },
    image_container: {
      marginRight:horizontalScale(5)
    },
    present_off: {
      width: horizontalScale(100),
      height: horizontalScale(40),
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#FF8925",
      borderRadius: moderateScale(22),
    },
    present_text: {
      fontFamily: "Poppins-Medium",
      fontSize: moderateScale(13),
      color: "#FFFFFF",
    },
    gtr_than: {
      fontFamily: "Poppins-Medium",
      fontSize: moderateScale(20),
      marginTop: verticalScale(5),
      alignSelf: "center",
    },
    text_decor: {
      fontFamily: "Poppins-Medium",
      fontSize: moderateScale(12),
      marginTop: verticalScale(5),
      alignSelf: "center",
      color: "#666666",
    },
    text_style: {
      fontFamily: "Poppins-Medium",
      fontSize: moderateScale(13),
      marginLeft: verticalScale(10),
      alignSelf: "center",
      color: "#666666",
    },
  });
export default Pincode