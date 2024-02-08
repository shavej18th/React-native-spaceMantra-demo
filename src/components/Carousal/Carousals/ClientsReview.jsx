import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    Image,
  } from "react-native";
import ClientsImage from '../imagesData/ClientsImage';
import { horizontalScale, moderateScale, verticalScale } from '../../Themes/Matrices';

function ClientsReview() {
  
  return (
   <View style={styles.container}>
    <View style={styles.Title}>
        <Text style={styles.titleText}>Our Clients say...</Text>
        <Text style={styles.DescriptionText}>Here's what Our Clients says about their experience...</Text>
    </View>
     <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {ClientsImage.map((item) => {
          return (
            <>
              <View style={styles.ContentContainer}>
              <View style={styles.ImageContainer}>
              <Image
                  style={styles.Images}
                  source={item.img}
                />
              </View>
                <View style={styles.reviewTextContainer}>
                    <Text style={styles.reviewTextTitle}>Andy Judith HermanDages</Text>
                    <Text style={styles.reviewTextDescription}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente in optio expedita similique totam hic nulla neque exercitationem iusto consequuntur.</Text>
                </View>
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
      paddingBottom:verticalScale(15),
   
    },
    Title:{
        padding:moderateScale(15),
    },
    titleText:{
        fontSize:moderateScale(25),
        fontFamily:"Poppins-Medium"
    },

    DescriptionText:{
        fontSize:moderateScale(15),  
        fontFamily:"Poppins-Medium"
    },
    reviewTextContainer:{
        width:horizontalScale(260),
        padding:moderateScale(5)
     },
    reviewTextTitle:{
        fontSize:moderateScale(18),
        marginTop:verticalScale(10),
        marginLeft:horizontalScale(5),
        fontFamily:"Poppins-Medium"
    },
    reviewTextDescription:{
        fontStyle:"italic",
        marginLeft:horizontalScale(9),
        fontSize:moderateScale(13),
        fontFamily:"Poppins-Medium"
      },
    Images: {
      backgroundColor: "white",
      height: verticalScale(85),
      width: horizontalScale(85),
      borderRadius:moderateScale(15),
      borderWidth:moderateScale(3),
      borderColor:'white',
      marginTop:verticalScale(17)
    },
    ImageContainer: {
      justifyContent:'center',
      borderRadius:10,
      paddingLeft:horizontalScale(5)
    },
    ContentContainer: {
      flexDirection:'row',
      margin: moderateScale(5),
      backgroundColor:'white',
      borderRadius:10
    },
  });

export default ClientsReview