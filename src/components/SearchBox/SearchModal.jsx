import React, { useContext, useState } from "react";
import {
  View,
  StyleSheet,
} from "react-native";
import SearchPageRenderer from "./SearchPageRenderer";
import { moderateScale, verticalScale } from "../Themes/Matrices";

const SearchModal = ({ navigation }) => {
  return (
    <View style={styles.ModalContainer}>
        <View style={styles.modalView}>
          <SearchPageRenderer navigation ={navigation}/>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
    ModalContainer:{
      marginTop: verticalScale(32),
      alignItems:'center',
    },
    modalView: {
      backgroundColor: '#EAE6DB',
      paddingTop:verticalScale(20),
      alignItems: 'center',
      shadowColor: '#000',

    },
    button: {
      borderRadius: moderateScale(20),
      padding: moderateScale(10),
      elevation: moderateScale(2),
      margin:moderateScale(50)
    },
    textStyle: {
      color: 'white',
      fontWeight: 'normal',
      textAlign: 'center',
    },
    modalText: {
      marginBottom: verticalScale(15),
      textAlign: 'center',
    },
  });

export default SearchModal