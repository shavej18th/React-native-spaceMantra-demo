import React, { useState } from "react";

import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";

import Dialog, {
  DialogTitle,
  DialogContent,
  SlideAnimation,
} from "react-native-popup-dialog";
import {
  moderateScale,
  verticalScale,
  horizontalScale,
} from "../../../Themes/Matrices";
import ContentBox from "./ContentBox";

const ModalBox = ({
  slideAnimationDialog,
  setSlideAnimationDialog,
  setAccordionData,
  accordionData,
}) => {
  const [uniqueselected , setUniqueSelected]= useState({
    first:true,
    second:false,
    third :false
  })
  const data_box1 = {
    Id:1,
    period: "12 months",
    plan: "₹800/mo",
    off: "-60% OFF",
    off_content: "-60%",
    old_plan: "₹1998/mo",
    benefit: "₹1,199 X 12 = ₹14,386",
  };
  const data_box2 = {
    Id:2,
    period: "9 months",
    plan: "₹800/mo",
    off: "-50% OFF",
    off_content: "-50%",
    old_plan: "₹1998/mo",
    benefit: "₹1,199 X 12 = ₹14,386",
  };
  const data_box3 = {
    Id:3,
    period: "6 months",
    plan: "₹800/mo",
    off: "-45% OFF",
    off_content: "-45%",
    old_plan: "₹1998/mo",
    benefit: "₹1,199 X 12 = ₹14,386",
  };
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
          dialogAnimation={new SlideAnimation({ slideFrom: "bottom" })}
        >
          <DialogContent>
            <View style={styles.modal_title_container}>
              <View>
                <Text style={styles.modal_title}>Select A Tenure</Text>
              </View>
              <TouchableOpacity
                style={styles.close_icon}
                onPress={() => {
                  setSlideAnimationDialog(false);
                }}
              >
                <Image
                  source={require("../ProductStaticData/Images/Cross-icon/Group11438/Group11438.png")}
                />
              </TouchableOpacity>
            </View>
            {/* Dialog box main content */}
            <ContentBox
              setAccordionData={setAccordionData}
              data={data_box1}
              accordionData={accordionData}
              selectedBox ={uniqueselected.first}
              setUniqueSelected={setUniqueSelected}
            />
            <ContentBox
              setAccordionData={setAccordionData}
              data={data_box2}
              accordionData={accordionData}
              selectedBox ={uniqueselected.second}
              setUniqueSelected={setUniqueSelected}

            />
            <ContentBox
              setAccordionData={setAccordionData}
              data={data_box3}
              accordionData={accordionData}
              selectedBox ={uniqueselected.third}
              setUniqueSelected={setUniqueSelected}
            />
            {/* ModalText content */}
            <View style={styles.text_container}>
              <View>
                <Text style={{fontFamily:"Poppins-Medium", fontSize:moderateScale(15)}}>Terms of Tenure:</Text>
              </View>
              <View>
                <Text style={{fontFamily:"Poppins-Medium", fontSize:moderateScale(13)}}>The minimum rental tenure for this product is 3 months (but we know you will want to keep it longer!)</Text>
              </View>
              <View>
                <Text style={{fontFamily:"Poppins-Medium", fontSize:moderateScale(13)}}>You will need to pay the rental fee upfront for the entire tenure that you may choose.</Text>
              </View>
              <View>
                <Text style={{fontFamily:"Poppins-Medium", fontSize:moderateScale(13)}}>Any discounts from a valid coupon or referral code that you may have, is applied additionally to your tenure discounts.</Text>
              </View>
              <View>
                <Text style={{fontFamily:"Poppins-Medium", fontSize:moderateScale(13)}}>Once your chosen tenure ends, you will have the option to renew the plan or switch to a different tenure.</Text>
              </View>
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
  text_container: {
    margin: moderateScale(5),
  },
  modal_title: {
    fontFamily: "Poppins-Medium",
    fontSize: moderateScale(16),
    marginTop: verticalScale(5),
    alignSelf: "flex-start",
  },
  close_icon: {
    marginTop: verticalScale(5),
    left: horizontalScale(198),
  },
  modal_title_container: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#666666",
    paddingBottom: verticalScale(5),
  },
});
