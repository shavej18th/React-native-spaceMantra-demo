import React, { useEffect, useState } from 'react'
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    Image,
  } from "react-native";
import Imagesdata from "../../imagesData/Imagesdata";
import { horizontalScale, moderateScale, verticalScale } from "../../../Themes/Matrices";
import { useQuery } from '@apollo/client';
import { CONTINENT_QUERY } from './carousal.gql';

function Carousal() {
  const { data, loading } = useQuery(CONTINENT_QUERY);
  // console.log(data)
  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {Imagesdata.map((item) => {
          return (
            <>
              <View style={styles.ImageContainer} key={item.id}>
                <Image
                  style={styles.Images}
                  source={item.img}
                />
                <Text style={styles.textStyle}>{item.title}</Text>
              </View>
            </>
          );
        })}
      </ScrollView>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    textStyle:{
      fontStyle:'normal',
      textAlign:'center',
      fontFamily:"Poppins-Medium"
    },
    Images: {
      backgroundColor: "white",
      height: horizontalScale(70),
      width: verticalScale(75),
      borderRadius: moderateScale(50),
      borderWidth:3,
      borderColor:'white'
    },
    ImageContainer: {
      marginTop: 15,
      marginLeft: 13,
      margin: 5,
      height: horizontalScale(85),
      width: verticalScale(80),
    },
  });

export default Carousal