import * as React from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity, Dimensions } from "react-native";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
} from "@react-navigation/drawer";

import BottomTabNavigator from "../BottomTabNavigator/BottomTabNavigator";
// import MyRewardsStackNavigator from "../StackNavigator/MyRewardsStackNavigator";
// import LocationStackNavigator from "../StackNavigator/LocationStackNavigator";
import SearchStackNavigator from "../StackNavigator/SearchStackNavigator";
import CustomDrawerContent from "../../components/CustomDrawer/CustomDrawerContent";

const Drawer = createDrawerNavigator();

 export const UserContext = React.createContext()
// const CustomDrawerContent = (props) => {

//   return (
//     <DrawerContentScrollView {...props}>
//       {Object.entries(props.descriptors).map(([key, descriptor], index) => {
//         const focused = index === props.state.index;
//         return (
//           <DrawerItem
//             key={key}
//             label={() => (
//               <Text
//                 style={focused ? styles.drawerLabelFocused : styles.drawerLabel}
//               >
//                 {descriptor.options.title}
//               </Text>
//             )}
//             onPress={() =>
//               descriptor.navigation.navigate(descriptor.route.name)
//             }
//             style={[
//               styles.drawerItem,
//               focused ? styles.drawerItemFocused : null,
//             ]}
//           />
//         );
//       })}
//     </DrawerContentScrollView>
//   );
// };


const DrawerNavigator = ({ navigation }) => {
  const [modalVisible, setModalVisible] = React.useState(false)

  const HomeStackScreen = ()=>{
    return(
      <UserContext.Provider value={[modalVisible,setModalVisible]}>
      <BottomTabNavigator/>
      </UserContext.Provider>
    )
  }

  return (
    <Drawer.Navigator
      screenOptions={({ navigation }) => ({
        headerStyle: {
          backgroundColor: "white",
        },
        drawerStyle: {
          width: Dimensions.get('window').width
        },
        headerLeft: () => (
          <>
            <TouchableOpacity
              onPress={() => navigation.toggleDrawer()}
              style={styles.headerLeft}
            >
              <Image
                source={require("../../../assets/HeaderSvgIcons/Group12/Group12.png")}
              />
            </TouchableOpacity>
          </>
        ),
      })}
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen
        name="HomeStack"
        component={HomeStackScreen}
          options={({ navigation })=>({
            title: "Home",
            headerTitle: () => (
              <Image
                source={require("../../../assets/img/Image112/Image112.png")}
                style={{
                  height: 30,
                  width: 150,
                }}
              />
            ),
            headerRight: () => (
              <View style={styles.headerRight}>
                <TouchableOpacity
                  style={styles.IconStyle}
                  onPress={() =>navigation.navigate('My-Search-Page')}
                >
                  <Image
                    source={require("../../../assets/HeaderSvgIcons/Frame75/Frame75.png")}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.IconStyle}
                  onPress={() => alert("Heart Icon clicked")}
                >
                  <Image
                    source={require("../../../assets/HeaderSvgIcons/Frame/Frame.png")}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.IconStyle}
                  onPress={() => alert("Bell Icon clicked")}
                >
                  <Image
                    source={require("../../../assets/HeaderSvgIcons/Frame53/Frame53.png")}
                  />
                </TouchableOpacity>
              </View>
            ),
          })}
      />
      <Drawer.Screen
        name="My-Search-Page"
        component={SearchStackNavigator}
        options={{
          title: "Search Page",
          headerTitle: () => (
            <Text style={styles.headerTitle}>Search-Page</Text>
          ),
          headerShown: false,
        }}
      />
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({
  headerLeft: {
    marginLeft: 15,
  },
  IconStyle: {
    margin: 7,
  },
  headerRight: {
    marginRight: 15,
    // flex:1,
    flexDirection: "row",
  },
  headerTitle: {
    color: "white",
    fontSize: 18,
    fontWeight: "500",
  },
  drawerLabel: {
    fontSize: 14,
  },
  drawerLabelFocused: {
    fontSize: 14,
    color: "#551E18",
    fontWeight: "500",
  },
  drawerItem: {
    height: 50,
    justifyContent: "center",
  },
  drawerItemFocused: {
    backgroundColor: "#ba9490",
  },
});
export default DrawerNavigator;
