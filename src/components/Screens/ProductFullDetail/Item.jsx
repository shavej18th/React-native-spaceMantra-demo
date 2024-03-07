import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import {
  horizontalScale,
  verticalScale,
  moderateScale,
} from "../../Themes/Matrices";
import Tenure from "./Accordion/Tenure";
import Pincode from "./PdpComponents/Pincode";
import CardCarousal from "../../Carousal/Carousals/GiftCardCarousal";
import ItemCard from "../../Carousal/Carousals/ItemCard";
import ProductFeatures from "./PdpComponents/ProductFeatures";

function Item({ navigation }) {
  const [selected, setSelected] = useState(false);
  const [accordionData, setAccordionData] = useState({
    Id:1,
    period: "12 months",
    plan: "₹800/mo",
    off: "-60% OFF",
    off_content: "-60%",
    old_plan: "₹1998/mo",
    benefit: "₹1,199 X 12 = ₹14,386",
  });
  return (
    <View style={styles.container}>
       <TouchableOpacity
              style={styles.arrow_icon}
              onPress={() => navigation.goBack()}
            >
              <Image source={require("../../SearchBox/Frame5/Frame5.png")} />
            </TouchableOpacity>
      <ScrollView style={styles.list}>
        <View style={styles.icon_container}>
          <View style={styles.icon_right}>
            <TouchableOpacity
              style={[
                styles.arrow_icon,styles.left,
                selected
                  ? { backgroundColor: "#FF8925" }
                  : { backgroundColor: "white" },
              ]}
              onPress={() => setSelected(!selected)}
            >
              <Image
                style={
                  selected ? { tintColor: "white" } : { tintColor: "black" }
                }
                source={require("./ProductStaticData/Images/huge-icon-health-outline-heart/huge-icon-health-outline-heart.png")}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.image_container}>
          <Image
            source={require("./ProductStaticData/Images/Image/Image.png")}
          />
        </View>
        <View style={styles.content_Container}>
          <View style={styles.item_name}>
            <Text style={styles.name_textStyle}>
              Cellbell Desire C104 Mid Back
            </Text>
          </View>
          <View style={styles.product_code}>
            <Text style={styles.product_text}>Product code:</Text>
            <Text style={styles.product_text_code}> SHF-8005</Text>
          </View>
          <View style={styles.product_code}>
            <Text style={[styles.product_text, { color: "black" }]}>
              Condition :
            </Text>
            <Text style={[styles.product_text_code, { color: "#FF8925" }]}>
              As good as new
            </Text>
          </View>
          <View style={styles.select_tenure}>
            <View>
              <Text style={[styles.product_text]}>Select a Tenure</Text>
            </View>
          </View>
          <View>
            <Tenure accordionData = {accordionData} setAccordionData = {setAccordionData}/>
          </View>
          <View>
            <Pincode />
          </View>
          <View>
            <CardCarousal />
          </View>
          <View>
            <ProductFeatures />
          </View>
          <View>
            <ItemCard customText={"Similar products"} />
          </View>
        </View>
      </ScrollView>
      <View style={styles.fixedBottom}>
        <TouchableOpacity style={styles.Button}>
          <Text style={[styles.Button_text, {marginRight:moderateScale(25),fontFamily:'Poppins-SemiBold'}]}>{accordionData.plan}</Text>
          <Text style={styles.Button_text}>Add to cart</Text>
          <Text style={styles.Button_Arrow}>{"→"}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EAE6DB",
    width: horizontalScale(380),
    height: 900,
  },
  Button: {
    borderRadius: moderateScale(25),
    alignItems: "center",
    justifyContent: "center",
    width: horizontalScale(330),
    padding: moderateScale(13),
    backgroundColor: "#FF8925",
    flexDirection: "row",
  },
  Button_text: {
    fontSize: moderateScale(15),
    fontFamily: "Poppins-Medium",
    color: "#FFFFFF",
  },
  Button_Arrow: {
    fontSize: moderateScale(15),
    paddingBottom:verticalScale(7),
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  fixedBottom: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: verticalScale(70),
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: moderateScale(35),
    borderTopRightRadius: moderateScale(35),
    alignItems: "center",
    justifyContent: "center",
  },
  list: {
    alignSelf: "stretch",
    flex: 1,
    marginBottom: 70, // <== here the margin to see the full list
  },

  icon_container: {
    flexDirection: "row",
    alignContent: "space-between",
    height: verticalScale(80),
    backgroundColor: "transparent",
  },
  icon_left_container: {
    width: "50%",
    alignItems: "flex-start",
    justifyContent: "center",
    paddingLeft: horizontalScale(20),
  },
  icon_right_Container: {
    width: "50%",
    alignItems: "flex-end",
    justifyContent: "center",
    paddingRight: horizontalScale(20),
  },
  left:{
    left: horizontalScale(315),
  },
  arrow_icon: {
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    width: 48,
    position: 'absolute',
    top: verticalScale(15),
    left: horizontalScale(15),
    height: 48,
    backgroundColor: '#fff',
    borderRadius:25,
    zIndex:1
  },
  image_container: {
    width: "100%",
    alignItems: "center",
  },
  content_Container: {
    width: "100%",
  },
  item_name: {
    marginTop: verticalScale(20),
    marginLeft: horizontalScale(20),
  },
  name_textStyle: {
    fontSize: moderateScale(17),
    fontWeight: "600",
    fontFamily: "Poppins-Medium",
  },
  product_code: {
    flexDirection: "row",
    marginLeft: horizontalScale(20),
  },
  select_tenure: {
    marginLeft: horizontalScale(20),
  },
  product_text: {
    fontSize: moderateScale(14),
    // fontWeight: "600",
    fontFamily: "Poppins-Medium",
    color: "#666666",
  },
  product_text_code: {
    fontSize: moderateScale(14),
    fontWeight: "600",
    fontFamily: "Poppins-Medium",
  },
});
export default Item;
