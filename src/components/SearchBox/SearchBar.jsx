import React from "react";
import { StyleSheet, TextInput, View, Keyboard, Button, Text, Image, TouchableOpacity } from "react-native";
import { Feather, Entypo } from "@expo/vector-icons";
import { horizontalScale, moderateScale } from "../Themes/Matrices";

const SearchBar = ({ clicked, searchPhrase, setSearchPhrase, setClicked,setModalVisible , navigation  }) => {
  // const handleClick = () => {
  //     setClicked(false);
  //     Keyboard.dismiss();
  //   setSearchPhrase("");
  // };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.arrowIcon} onPress={()=>navigation.navigate('HomeStack')}>
      <Image source={require('./Frame5/Frame5.png')}/>
      </TouchableOpacity>
      <View
        style={
          clicked ? styles.searchBar__clicked : styles.searchBar__unclicked
        }
      >
        {/* search Icon */}
        <Feather
          name="search"
          size={moderateScale(20)}
          color="black"
          style={{ marginLeft: 1 }}
        />
        {/* Input field */}
        <TextInput
          style={styles.input}
          placeholder="Search"
          value={searchPhrase}
          onChangeText={setSearchPhrase}
          onFocus={() => {
            setClicked(true);
          }}
        />
        {/* cross Icon, depending on whether the search bar is clicked or not */}
        {clicked && (
          <Entypo
            name="cross"
            size={moderateScale(22)}
            color="black"
            style={{ padding: 1 }}
            onPress={()=>{
              setSearchPhrase("");
              setClicked(!clicked)
            }}
          />
        )}
      </View>
    </View>
  );
};
export default SearchBar;

// styles
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    backgroundColor:'EAE6DB',
  },
  arrowIcon:{
    marginRight:horizontalScale(8),
    marginLeft:horizontalScale(8),
  },
  searchBar__unclicked: {
    padding: moderateScale(10),
    flexDirection: "row",
    width: horizontalScale(300),
    backgroundColor: "white",
    borderRadius: moderateScale(20),
    alignItems: "center",
  },
  searchBar__clicked: {
    padding: moderateScale(10),
    flexDirection: "row",
    width: horizontalScale(300),
    backgroundColor: "white",
    borderRadius: moderateScale(15),
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  input: {
    fontSize: moderateScale(15),
    marginLeft: horizontalScale(10),
    width: "90%",
  },
});
