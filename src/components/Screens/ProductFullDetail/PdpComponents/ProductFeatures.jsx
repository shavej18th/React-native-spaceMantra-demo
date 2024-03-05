import React from "react";
import { StyleSheet, Text, View, Image} from "react-native";
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from "../../../Themes/Matrices";
import ProductInformation from "./ProductInformation";

function ProductFeatures() {
  const features =['Chair: Echo','Mechanism: Knee Tilt Multi Locking','Base Material: Chrome','Series: Fusion','Number of Wheels: 5','Arms: Nylon (Adjustable)','Upholstery: Net + Fabric']
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title_text}>
          Black Chrome Base Adjustable Arm High Back Mesh Echo Office Chair
        </Text>
      </View>
      <View>
        <Text style={styles.desc_text}>
          Pair our Aero Office chair with your workstation for a happier
          work-from-home experience. This package includes an ergonomically
          designed black office chair with adjustable height mechanism, 3D
          armrest, back support and an upholstered leatherette headrest.
        </Text>
      </View>
      <View>
        <Text style={styles.feature_title}>Features</Text>
      </View>
    {
      features.map((text, index)=>{
        return(
          <View key={index}>
          <View style={styles.feature_content_container}>
            <View style={styles.image_container}>
              <Image source={require('../ProductStaticData/Images/Layer2/Layer2.png')}/>
            </View>
            <View >
              <Text style={{fontFamily:"Poppins-Regular"}}>{text}</Text> 
            </View>
          </View>
        </View>
        )
      })
    }
    <View>
      <ProductInformation/>
    </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    marginTop: verticalScale(15),
    marginRight: horizontalScale(20),
    marginLeft: horizontalScale(20),
    padding: moderateScale(15),
    paddingBottom: verticalScale(20),
    borderRadius: moderateScale(15),
  },
  title_text:{
    fontFamily:'Poppins-Medium',
    marginBottom:verticalScale(5),
    fontSize:moderateScale(15)
  },
  desc_text:{
    fontFamily:'Poppins-Regular',
    marginBottom:verticalScale(5)
  },
  feature_title:{
    fontFamily:'Poppins-Medium',
    marginBottom:verticalScale(5),
    fontSize:moderateScale(15)
  },
  image_container:{
    marginRight:horizontalScale(10)
  },
  feature_content_container:{
    flexDirection:'row',
    alignItems:"center"
  },
});

export default ProductFeatures;
