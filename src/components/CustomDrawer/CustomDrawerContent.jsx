import React, { useEffect, useState } from "react";
import { Dimensions, StyleSheet, TouchableOpacity } from "react-native";
import { View, Text, Image } from "react-native";
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from "../Themes/Matrices";
import * as Font from 'expo-font'
export const getFonts = () =>
   Font.loadAsync({
    'Poppins-Medium': require('../../assets/fonts/Poppins-Medium.ttf'),
  });

function CustomDrawerContent({ navigation }) {
    const [fontLoaded,setFontLoaded] = useState(false)

    useEffect(() => {
        async function fetchFonts() {
          await getFonts();
          setFontLoaded(true);
        }
        fetchFonts();
      }, []);
    if(!fontLoaded){
        return(
            <View>
                <Text>Loading...</Text>
            </View>
        )
    }
  return (
    <View style={styles.container}>
      <View style={styles.categoryHead}>
        <View>
          <TouchableOpacity onPress={()=>navigation.toggleDrawer()} style={styles.arrowIcon}>
            <Image style={styles.Icon} source={require("../SearchBox/Frame5/Frame5.png")} />
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.titleText}>Categories</Text>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: verticalScale(30),
    backgroundColor: "#EAE6DB",
    height: Dimensions.get("window").height,
    width: Dimensions.get("window").width,
  },
  categoryHead: {
    flexDirection: "row",
    marginTop: verticalScale(20),
    // marginLeft: horizontalScale(20),
    alignItems:'center'
  },
  arrowIcon:{
    marginLeft:moderateScale(20),
    marginRight:moderateScale(20)
  },
  Icon:{
    // height:verticalScale(48),
    // width:horizontalScale(48)
  },
  titleText:{
    fontSize:moderateScale(22),
    fontFamily:"Poppins-Medium"
  }
});
export default CustomDrawerContent;
