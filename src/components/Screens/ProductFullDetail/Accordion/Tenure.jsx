import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import {
  horizontalScale,
  verticalScale,
  moderateScale,
} from "../../../Themes/Matrices";
import ModalBox from "../PdpComponents/ModalBox";

function Tenure({ accordionData, setAccordionData }) {
  const [clicked, setClicked] = useState(false)

  const [
    slideAnimationDialog, setSlideAnimationDialog
  ] = useState(false);
  return (
    <View>
      <View style={styles.inner_container}>
        <View style={[styles.content_container, { width: "28%" }]}>
          <Text style={styles.text_decor}>{accordionData.period}</Text>
        </View>
        <View style={[styles.content_container, { width: "30%" }]}>
          <Text
            style={[styles.text_decor, { textDecorationLine: "line-through" }]}
          >
            {accordionData.plan}
          </Text>
        </View>
        <View style={[styles.content_container, { width: "30%" }]}>
          <View style={styles.present_off}>
            <Text style={styles.present_text}>{accordionData.off}</Text>
          </View>
        </View>
        <TouchableOpacity
          style={[styles.content_container, { width: "12%" }]}
          onPress={() => setSlideAnimationDialog(true)}
        >
          <Text
            style={styles.gtr_than}
          >
            {">"}
          </Text>
        </TouchableOpacity>
      </View>
      {/* Popup box */}
      <ModalBox slideAnimationDialog={slideAnimationDialog} setSlideAnimationDialog={setSlideAnimationDialog} setAccordionData={setAccordionData} accordionData={accordionData}/>
      {/* Another Accordion */}
      <View style={[styles.inner_container,{backgroundColor:"black"}]}>
        <View style={[styles.content_container, { width: "88%" }]}>
          <Text style={[styles.text_decor,{color:"white",fontSize:moderateScale(15)}]}>Design Your Tenure Plan</Text>
        </View>
        <TouchableOpacity
          style={[styles.content_container, { width: "12%" }]}
        >
          <Text
            style={[
              styles.gtr_than,{color:"white"}
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
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  inner_container: {
    height: verticalScale(50),
    backgroundColor: "white",
    marginRight: horizontalScale(15),
    marginLeft: horizontalScale(10),
    flexDirection: "row",
    borderRadius: moderateScale(25),
    marginTop: verticalScale(10),
  },
  content_container: {
    alignItems: "center",
    justifyContent: "center",
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
});
export default Tenure;
