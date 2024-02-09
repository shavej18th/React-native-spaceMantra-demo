import React from "react";
import { SafeAreaView, View, FlatList, StyleSheet, Text, Image } from "react-native";
import { ImageData } from "./ImageData";
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from "../Themes/Matrices";

const Item = ({ title, Quantity,source }) => (
  <View style={styles.item}>
    <View style={styles.ItemContainer}>
      <View style={styles.ImageContainer}>
        <Image source={source}/>
      </View>
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.quantity}>{Quantity}</Text>
      </View>
    </View>
  </View>
);

const CategoryNavigator = () => {
  console.log(ImageData.length);
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={ImageData}
        renderItem={({ item }) => (
          <Item title={item.ProductName} Quantity={item.Quantity} source={item.source} />
        )}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: verticalScale(20),
  },
  item: {
    backgroundColor: "white",
    padding: moderateScale(10),
    marginVertical: verticalScale(10),
    marginHorizontal: horizontalScale(16),
    borderRadius: moderateScale(10),
    elevation: 20,
    shadowColor: "#a9a9a9",
  },
  title: {
    fontSize: verticalScale(15),
    fontFamily: "Poppins-Medium",
  },
  quantity: {
    fontSize: verticalScale(15),
    fontFamily: "Poppins-Medium",
    color:'#a9a9a9'
  },
  ItemContainer:{
    flexDirection:'row',
    alignItems:'center',
  },
  ImageContainer:{
    margin:moderateScale(5),
    marginRight:moderateScale(5)
  }
});

export default CategoryNavigator;
