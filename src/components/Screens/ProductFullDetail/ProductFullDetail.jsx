import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import Item from "./Item";
import { verticalScale } from '../../Themes/Matrices'

function ProductFullDetail({ route, navigation }) {
  const { itemId, otherParam } = route.params;
  // console.log(otherParam)
  return (
    <View style={styles.container}>
        <Item navigation={navigation}/>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: verticalScale(30),
  },
});
export default ProductFullDetail;
