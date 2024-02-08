import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  ImageBackground,
} from "react-native";
import SaleCardData from "../imagesData/SaleCardData";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from "@expo/vector-icons/FontAwesome";
import { horizontalScale, moderateScale, verticalScale } from "../../Themes/Matrices";

function ItemCard() {

  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>Item for Sale</Text>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.container}>
        {SaleCardData.map((item, index) => {
          return (
            <>
              <View style={styles.ImageContainer} key={index}>
                <ImageBackground
                  style={styles.Images}
                  source={item.img}
                  borderRadius={moderateScale(10)}
                >
                  <View style={styles.presentOff}>
                    <Text style={styles.presentOffText} >-60%</Text>
                  </View>
                  <View style={styles.ShoppingBagIcon}>
                  <TouchableOpacity>
                    <Icon name="shopping-bag" size={20} color={"white"} />
                  </TouchableOpacity>
                  </View>
                </ImageBackground>
                <View style={styles.info}>
                  <Text style={styles.TitleText}>CELLBELL Desire C104 </Text>
                  <Text style={styles.TitleText}>Mid Back</Text>
                </View>
                <View style={styles.priceContainer}>
                  <Text style={styles.currentPrice}>800/mo</Text>
                  <Text style={styles.oldPrice}>1998/mo</Text>
                </View>
                <View>
                  <Text style={styles.AdditionalText}>
                    Two more option(s) available
                  </Text>
                </View>
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
  info: {
    marginTop: 5,
  },
  ShoppingBagIcon: {
   left:horizontalScale(165),
   marginTop:verticalScale(133),
   height:verticalScale(35),
   width:horizontalScale(30),
   padding:moderateScale(5),
   backgroundColor:'#FF8925',
   borderRadius:moderateScale(10),
  },
  presentOff: {
    backgroundColor:'black',
    width:horizontalScale(45),
    height:verticalScale(22),
    borderRadius:moderateScale(10),
    marginTop:verticalScale(15),
    marginLeft:horizontalScale(15),
    justifyContent:'center',
    alignItems:'center'
  },
  presentOffText: {
    color:'white',
    textAlign:'center',
  },

  oldPrice: {
    width: horizontalScale(105),
    fontSize: moderateScale(20),
    color: "grey",
    textDecorationLine: "line-through",
    textDecorationStyle: "solid",
    textDecorationColor: "black",
    fontFamily:'Poppins-Medium'
  },
  currentPrice: {
    width: horizontalScale(105),
    fontSize: moderateScale(20),
    marginLeft: horizontalScale(5),
    fontFamily:'Poppins-Medium'
  },
  AdditionalText: {
    fontSize: moderateScale(16),
    marginLeft: horizontalScale(6),
    color: "#daa520",
    fontFamily:'Poppins-Medium'
  },
  textStyle: {
    fontStyle: "normal",
    fontSize: moderateScale(20),
    fontWeight: "500",
    marginLeft: horizontalScale(15),
    marginTop: verticalScale(5),
    fontFamily:'Poppins-Medium'
  },
  priceContainer: {
    flexDirection: "row",
    alignContent: "space-between",
    fontFamily:'Poppins-Medium'
  },
  TitleText: {
    marginLeft: horizontalScale(5),
    fontSize: moderateScale(20),
    color: "#808080",
    fontFamily:'Poppins-Medium'
  },
  Images: {
    backgroundColor: "transparent",
    height: verticalScale(220),
    width: horizontalScale(210),
  },
  ImageContainer: {
    marginLeft: horizontalScale(10),
    marginRight: horizontalScale(10),
    margin: moderateScale(5),
    width: horizontalScale(210),
    height:'auto',
    paddingBottom:verticalScale(5)
  },
});

export default ItemCard;
