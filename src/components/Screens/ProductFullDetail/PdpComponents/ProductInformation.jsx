import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { moderateScale, verticalScale } from "../../../Themes/Matrices";

function ProductInformation() {
  const Information_data = [
    { name: "Color", virtue: "Smoke grey" },
    { name: "Chair Weight", virtue: "15kg" },
    { name: "Max Load Capacity", virtue: "1 Seater" },
    { name: "Seat Material", virtue: "Polyester" },
    { name: "Back Material", virtue: "Fiber" },
    { name: "Back Type", virtue: "Flat" },
    { name: "Armrest", virtue: "Nylon (Adjustable)" },
    { name: "Base Material", virtue: "Chrome" },
    { name: "Model Number", virtue: "Smoke grey" },
    { name: "Brand", virtue: "spacemantra" },
    { name: "Country of manufacture", virtue: "India" },
    { name: "Generic name", virtue: "Office Chair" },
  ];
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.info_title}>Product Information</Text>
      </View>
      {Information_data.map(({ name, virtue }, index) => {
        return (
          <View style={styles.content_container} key={index}>
            <View style={{ width: "60%" }}>
              <Text style={styles.name}>{name}</Text>
            </View>
            <View style={{ width: "40%" }}>
              <Text style={styles.virtue}>{virtue}</Text>
            </View>
          </View>
        );
      })}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderTopWidth: 1,
    marginTop: verticalScale(25),
    paddingTop: verticalScale(20),
  },
  info_title: {
    fontFamily: "Poppins-Medium",
    fontSize: moderateScale(15),
  },
  content_container: {
    flexDirection: "row",
    marginTop: moderateScale(5),
    marginBottom: verticalScale(5),
  },
  name: {
    fontFamily: "Poppins-Medium",
    fontSize: moderateScale(13),
  },
  virtue: {
    fontFamily: "Poppins-Regular",
    fontSize: moderateScale(13),
  },
});
export default ProductInformation;
