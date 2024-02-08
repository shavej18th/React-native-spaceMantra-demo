import { StyleSheet } from "react-native";
import { horizontalScale, moderateScale, verticalScale } from "../Themes/Matrices";

export const styles = StyleSheet.create({
  container: {
    marginTop: moderateScale(170),
  },
  InputField: {
    color: "black",
    fontWeight: "bold",
    fontSize: 16,
    backgroundColor: "white",
    height: verticalScale(45),
    marginTop: moderateScale(20),
    marginLeft: moderateScale(20),
    marginRight: moderateScale(20),
    borderRadius: moderateScale(20),
    paddingLeft: moderateScale(20),
    padding: moderateScale(5),
    fontFamily:"Poppins-Medium"
  },
  sampleStyle: {
    textDecorationLine: "underline",
    textDecorationStyle: "solid",
    textDecorationColor: "#000",
    fontFamily:"Poppins-Medium"
  },
  textStyle: {
    marginLeft: moderateScale(15),
    fontSize: moderateScale(25),
    fontWeight: "bold",
    fontFamily:"Poppins-Medium"
  },
  textStyle1: {
    marginLeft: moderateScale(15),
    color: "#696969",
    fontFamily:"Poppins-Medium"
  },
  button: {
    marginTop: 20,
    marginLeft: moderateScale(20),
    marginRight:moderateScale(20),
    alignItems: "center",
    backgroundColor: "black",
    borderRadius: moderateScale(20),
  },
  buttonText: {
    textAlign: "center",
    padding: moderateScale(15),
    color: "white",
    fontFamily:"Poppins-Medium"
  },
  alternativeLayoutButtonContainer: {
    marginTop:moderateScale(20),
    marginLeft:moderateScale(25),
    marginRight:moderateScale(25),
    marginBottom:moderateScale(15),
    flexDirection: "row",
    justifyContent: "space-between",
    color: "black",
  },
  socialButton: {
    width: horizontalScale(140),
    borderRadius: moderateScale(15),
    backgroundColor: "white",
    color: "black",
    height: horizontalScale(30),
    justifyContent:"center",
    alignItems:"center"
  },
  socialButtonText: {
    color: "black",
    textAlign: "center",
    fontFamily:"Poppins-Medium"
  },
  textContainer:{
    marginLeft:moderateScale(20),
    marginRight:moderateScale(20)
  },
  textAfterInput: {
    marginTop: moderateScale(5),
    flexDirection: "row",
    justifyContent: "space-between",
    fontFamily:"Poppins-Medium"
  },
  CheckBox: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
  },
});
