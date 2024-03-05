import React, { useState } from "react";

import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import Dialog, {
  DialogTitle,
  DialogContent,
  SlideAnimation,
} from "react-native-popup-dialog";
import { moderateScale, verticalScale , horizontalScale } from "../../../Themes/Matrices";

const ModalBox = ({ slideAnimationDialog, setSlideAnimationDialog ,setAccordionData}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Dialog
          onDismiss={() => {
            setSlideAnimationDialog(false);
          }}
          onTouchOutside={() => {
            setSlideAnimationDialog(false);
          }}
          visible={slideAnimationDialog}
          dialogTitle={<DialogTitle title="Slide Animation Dialog Sample" />}
          dialogAnimation={new SlideAnimation({ slideFrom: "bottom" })}
        >
          <DialogContent>
            <View>
              {/* Third row */}
              <TouchableOpacity
                style={styles.inner_container}
                onPress={() => {
                  setAccordionData({
                    period: "12 months",
                    plan: "₹,998/mo",
                    off: "-60% OFF",
                  });
                }}
              >
                <View style={[styles.content_container, { width: "30%" }]}>
                  <Text style={styles.text_decor}>12 months</Text>
                </View>
                <View style={[styles.content_container, { width: "33%" }]}>
                  <Text
                    style={[
                      styles.text_decor,
                      { textDecorationLine: "line-through" },
                    ]}
                  >
                    ₹,998/mo
                  </Text>
                </View>
                <View style={[styles.content_container, { width: "36%" }]}>
                  <View style={styles.present_off}>
                    <Text style={styles.present_text}>-60% OFF</Text>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          </DialogContent>
        </Dialog>
      </View>
    </SafeAreaView>
  );
};
export default ModalBox;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonStyle: {
    minWidth: "100%",
    padding: 10,
    backgroundColor: "#f5821f",
    margin: 15,
  },
  buttonTextStyle: {
    color: "white",
    textAlign: "center",
  },
  titleStyle: {
    color: "white",
    textAlign: "center",
    fontSize: 20,
    marginTop: 10,
  },

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
