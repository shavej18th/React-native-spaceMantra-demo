import React from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import PlansCardData from "../imagesData/PlansCardData";
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from "../../Themes/Matrices";

function PlansCardCarousal() {

  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>Flexi Plans</Text>
      <ScrollView
        horizontal={true}
        style={styles.container}
        showsHorizontalScrollIndicator={false}
      >
        {PlansCardData.map((item) => {
          return (
            <>
              <View style={styles.ImageContainer}>
                <Image style={styles.Images} source={item.img} />
              </View>
            </>
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 5,
  },
  textStyle: {
    fontStyle: "normal",
    fontSize: 20,
    fontWeight: "500",
    marginLeft: 15,
    marginTop: 5,
    fontFamily: "Poppins-Medium",
  },
  Images: {
    backgroundColor: "white",
    height: verticalScale(155),
    width: horizontalScale(345),
    borderRadius: 10,
    borderWidth: 3,
    borderColor: "transparent",
  },
  ImageContainer: {
    marginLeft: moderateScale(10),
    margin: 5,
    height: verticalScale(155),
    width: horizontalScale(345),
  },
});

export default PlansCardCarousal;
