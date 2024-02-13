import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  ImageBackground,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from "@expo/vector-icons/FontAwesome";
import SaleCardData from "../../Carousal/imagesData/SaleCardData";
import { horizontalScale,moderateScale,verticalScale } from "../../Themes/Matrices";
import { categoryData } from "./CategoriesData";
function CategoryItem() {

  return (
    <ScrollView style={styles.container}>
      <View style={styles.ItemContainer}>
        {categoryData.map((item, index) => {
          return (
            <>
              <View style={styles.ImageContainer} key={item.id}>
                <ImageBackground
                  style={styles.Images}
                  source={item.source}
                  borderRadius={moderateScale(10)}
                >
                  {/* <View style={styles.presentOff}>
                    <Text style={styles.presentOffText} >-60%</Text>
                  </View> */}
                  {/* <View style={styles.ShoppingBagIcon}>
                  <TouchableOpacity>
                    <Icon name="shopping-bag" size={20} color={"white"} />
                  </TouchableOpacity>
                  </View> */}
                </ImageBackground>
                <View style={styles.textContainer}>
                <View style={styles.info}>
                  <Text style={styles.TitleText}>{item.title}</Text>
                  <Text style={styles.TitleText}>{item.variant}</Text>
                </View>
                <View style={styles.priceContainer}>
                  <Text style={styles.currentPrice}>{item.current_Price}</Text>
                  <Text style={styles.oldPrice}>{item.old_price}</Text>
                </View>
                <View>
                  <Text style={styles.AdditionalText}>
                    {item.info}
                  </Text>
                </View>
                </View>
              </View>
            </>
          );
        })}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
    backgroundColor:'#EAE6DB',
    marginBottom:verticalScale(15)    
  },
  ItemContainer:{
    flexDirection:'row',
    flexWrap:'wrap',
    width:'auto',
    justifyContent:"space-between"
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
    color: "grey",
    textDecorationLine: "line-through",
    textDecorationStyle: "solid",
    textDecorationColor: "black",
    fontFamily:'Poppins-Medium',
    marginLeft: horizontalScale(10),
    fontSize:moderateScale(14)
  },
  currentPrice: {
    fontFamily:'Poppins-Medium',
    fontSize:moderateScale(14)
  },
  AdditionalText: {
    color: "#daa520",
    fontFamily:'Poppins-Medium',
    fontSize:moderateScale(12)
  },
  textStyle: {
    fontStyle: "normal",
    fontWeight: "500",
    fontFamily:'Poppins-Medium',
    fontSize:moderateScale(16)
  },
  priceContainer: {
    flexDirection: "row",
    alignContent: "space-between",
    fontFamily:'Poppins-Medium'
  },
  TitleText: {
    color: "#808080",
    fontFamily:'Poppins-Medium',
    fontSize:moderateScale(16)
  },
  Images: {
    width: horizontalScale(185),
    height: verticalScale(170),
    margin: moderateScale(5),
  },
  ImageContainer: {
    width: horizontalScale(183),
    height:'auto',
    alignItems:"center"
  },
  textContainer:{
    width: horizontalScale(185),
    paddingLeft:horizontalScale(10)
  }
});

export default CategoryItem;