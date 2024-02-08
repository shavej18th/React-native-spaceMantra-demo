import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Text, View } from "react-native";

const Stack = createNativeStackNavigator();

const MyRewards = () => {
  return (
    <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
      <Text>MyRewards Screen!</Text>
    </View>
  );
};

const MyRewardsStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="MyRewards" component={MyRewards}/>
    </Stack.Navigator>
  );
};

export default MyRewardsStackNavigator;