import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  ActivityIndicator,
  TouchableOpacity,
  View,
} from "react-native";
import List from "./List";
import SearchBar from "./SearchBar";

const SearchPageRenderer = ({navigation}) => {
  const [searchPhrase, setSearchPhrase] = useState("");
  const [clicked, setClicked] = useState(false);
  const [fakeData, setFakeData] = useState();

  // get data from the fake api endpoint
  useEffect(() => {
    const getData = async () => {
      const apiResponse = await fetch(
        "https://my-json-server.typicode.com/kevintomas1995/logRocket_searchBar/languages"
      );
      const data = await apiResponse.json();
      setFakeData(data);
    };
    getData();
  }, []);

  return (
    <SafeAreaView style={styles.root}>
      <SearchBar
        searchPhrase={searchPhrase}
        setSearchPhrase={setSearchPhrase}
        clicked={clicked}
        setClicked={setClicked}
        navigation={navigation}
        // setModalVisible = {setModalVisible}
      />
      {(

          <List
            searchPhrase={searchPhrase}
            setClicked={setClicked}
          />

      )}
    </SafeAreaView>
  );
};

export default SearchPageRenderer;

const styles = StyleSheet.create({
  root: {
    // justifyContent: "center",
    // alignItems: "center",
  },
});