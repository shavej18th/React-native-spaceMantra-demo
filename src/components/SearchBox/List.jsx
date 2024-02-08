import React from "react";
import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import ListItemData from "./LIstItemsImages/LIstItemData";
import { TrendingSearches } from "./LIstItemsImages/LIstItemData";
import { horizontalScale, moderateScale, verticalScale } from "../Themes/Matrices";

const List = () => {
  
  return (
    <View style={styles.list__container}>
      <View>
        <View style={styles.titleBox}>
          <Text style={styles.title}>Trending Searches</Text>
        </View>
        <ScrollView horizontal={true} style={styles.textItems}>
          {  TrendingSearches.map((item, index)=>{
            return(
              <View style={styles.textItem} key={index}>
              <Text style={styles.itemTextStyle}>{item}</Text>
            </View> 
            )
          })
          }
        </ScrollView>
      </View>
      {ListItemData && (
        <View>
          <View style={styles.titleBox}>
            <Text style={styles.title}>Most Searches</Text>
          </View>
          <ScrollView horizontal={true} style={styles.textItems}>
            {ListItemData.map((item) => {
              return (
                <View style={styles.ImageContainer} key={item.id}>
                  <View style={styles.ImageInnerContainer}>
                    <Image source={item.uri}  style={styles.ImageStyle}/>
                  </View>
                  <View>
                    <Text style={styles.ImageText}>{item.name}</Text>
                  </View>
                </View>
              );
            })}
          </ScrollView>
        </View>
      )}
    </View>
  );
};
export default List;
const styles = StyleSheet.create({
  list__container: {
    marginTop: verticalScale(22),
    backgroundColor: "white",
  },
  item: {
    margin: moderateScale(30),
    borderBottomWidth: moderateScale(2),
    borderBottomColor: "lightgrey",
  },
  titleBox: {
    marginTop: verticalScale(22),
    fontWeight: "normal",
    marginBottom: verticalScale(3),
    fontStyle: "italic",
  },
  title: {
    fontSize: moderateScale(20),
    marginBottom: verticalScale(8),
    marginLeft: horizontalScale(10),
    fontFamily:"Poppins-Medium"
  },
  textItems: {
    marginBottom: verticalScale(5),
    marginLeft: horizontalScale(10),
  },
  textItem: {
    borderWidth: moderateScale(1),
    borderColor: "#A0A0A0",
    height: verticalScale(40),
    margin: moderateScale(7),
    paddingLeft: horizontalScale(13),
    paddingRight: horizontalScale(13),
    borderRadius: moderateScale(20),
    justifyContent:'center',
    alignItems:'center'
  },
  ImageText: {
    color: "#A0A0A0",
    textAlign:'center',
    fontFamily:"Poppins-Medium"
  },
  itemTextStyle: {
    color: "#A0A0A0",  
     fontFamily:"Poppins-Medium"
  },
  ImageInnerContainer: {
    height:verticalScale(95),
    width:horizontalScale(95),
    justifyContent:'center',
    alignItems:'center',
  },
  ImageStyle: {
    height:verticalScale(64),
    width:horizontalScale(64)
  },
});
