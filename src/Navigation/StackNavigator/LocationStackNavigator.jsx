import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Text, View } from "react-native";

const Stack = createNativeStackNavigator();

const Location = () => {
  return (
    <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
      <Text>Location Screen!</Text>
    </View>
  );
};

const LocationStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Location" component={Location}/>
    </Stack.Navigator>
  );
};

export default LocationStackNavigator;