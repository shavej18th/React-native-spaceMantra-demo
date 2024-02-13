import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeStackNavigator from "../StackNavigator/HomeStackNavigator";
import BookStackNavigator from "../StackNavigator/BookStackNavigator";
import ContactStackNavigator from "../StackNavigator/ContactStackNavigator";
import { Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import CategoryStackNavigator from "../StackNavigator/CategoryStackNavigator";
import { SvgXml } from "react-native-svg";
import {
  HomeIcon,
  ShoppingIcon,
  CategoryIcon,
  UserIcon,
} from "./BottomTabSvgIcon";
import { moderateScale, verticalScale } from "../../components/Themes/Matrices";
import LocationStackNavigator from "../StackNavigator/LocationStackNavigator";

const Tab = createBottomTabNavigator();

const styles = StyleSheet.create({
  tabBarLabel: {
    color: "#292929",
    fontSize: moderateScale(10),
    fontFamily:'Poppins-Medium',
    marginBottom: moderateScale(10),
  },
});

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          display: "flex",
          position: "absolute",
          borderTopRightRadius: moderateScale(35),
          borderTopLeftRadius: moderateScale(35),
          height: verticalScale(80),
        },
      }}
    >
      <Tab.Screen
        name="MyHomeStack"
        component={HomeStackNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <SvgXml xml={HomeIcon} width="50%" height="50%" />
          ),
          tabBarLabel: () => <Text style={styles.tabBarLabel}>Home</Text>,
        }}
      />
      <Tab.Screen
        name="Location"
        component={LocationStackNavigator}
        listeners={{
          tabPress: (e) => {
            // Prevent the default action
            e.preventDefault();
          },
        }}
        options={({ navigation }) => ({
          tabBarIcon: ({ focused }) => (
            <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
              <Image
                source={require("./BottomTabPngIcons/Categories/Categories.png")}
              />
            </TouchableOpacity>
          ),
          tabBarLabel: () => (
            <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
              <Text style={styles.tabBarLabel}>Categories</Text>
            </TouchableOpacity>
          ),
        })}
      />
      <Tab.Screen
        name="MyBookStack"
        component={BookStackNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <SvgXml xml={ShoppingIcon} width="50%" height="50%" />
          ),
          tabBarLabel: () => <Text style={styles.tabBarLabel}>Shopping</Text>,
        }}
      />
      <Tab.Screen
        name="MyContactStack"
        component={ContactStackNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <SvgXml
              xml={UserIcon}
              width="50%"
              height="50%"
              style={
                focused
                  ? { backgroundColor: "white", borderBlockColor: "tomato" }
                  : { backgroundColor: "White" }
              }
            />
          ),
          tabBarLabel: () => <Text style={styles.tabBarLabel}>User</Text>,
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
