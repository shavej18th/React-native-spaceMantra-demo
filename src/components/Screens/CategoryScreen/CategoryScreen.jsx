import React from "react";
import { View, Text, StyleSheet,TouchableOpacity, Image } from "react-native";
import CategoryItem from "./CategoryItem";
import {
  verticalScale,
  horizontalScale,
  moderateScale,
} from "../../Themes/Matrices";

function CategoryScreen({ navigation }) {

  return (
    <View
      style={styles.container}
    >
      <View style={styles.categoryHead}>
        <View>
          <TouchableOpacity style={styles.arrowIcon} onPress={()=>navigation.openDrawer()}>
            <Image
              style={styles.Icon}
              source={require("../../SearchBox/Frame5/Frame5.png")}
            />
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.titleText}>Categories</Text>
        </View>
      </View>
      <CategoryItem />
    </View>
  );
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    marginTop: verticalScale(30),
    backgroundColor:'#EAE6DB' 
  },
  categoryHead: {
    flexDirection: "row",
    marginTop: verticalScale(20),
    // marginLeft: horizontalScale(20),
    alignItems: "center",
  },
  arrowIcon: {
    marginLeft: horizontalScale(20),
    marginRight: horizontalScale(20),
  },
  Icon: {
    // height:verticalScale(48),
    // width:horizontalScale(48)
  },
  titleText: {
    fontSize: moderateScale(22),
    fontFamily: "Poppins-Medium",
  },
});
export default CategoryScreen;
