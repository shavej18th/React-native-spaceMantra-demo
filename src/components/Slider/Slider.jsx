import React, { useState } from "react";
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from "../Themes/Matrices";

function Slider({ navigation }) {
  const images = [
    {
      source: require("./SliderImg/MaskGroup42/MaskGroup42.png"),
    },
    {
      source: require("./SliderImg/MaskGroup43/MaskGroup43.png"),
    },
    {
      source: require("./SliderImg/MaskGroup44/MaskGroup44.png"),
    },
  ];

  const [active, setActive] = useState(0);
  const change = ({ nativeEvent }) => {
    const Slide = Math.ceil(
      nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width
    );
    if (Slide !== active) {
      setActive(Slide);
    }
  };
  return (
    <View style={styles.container}>
      <View>
        <View>
          <ScrollView
            pagingEnabled
            horizontal
            showsHorizontalScrollIndicator={false}
            onScroll={change}
            style={{ width: horizontalScale(366), height: verticalScale(390),  alignSelf: "center",}}
          >
            {images.map((image, index) => [
              <Image
                key={index}
                source={image.source}
                style={{
                  width: horizontalScale(365),
                  height: verticalScale(390),
                  resizeMode: "cover",
                }}
              />,
            ])}
          </ScrollView>
          <View>
            <Text style={styles.textStyle}>
              Explore world class top furniture as per your requirement &
              Choice.
            </Text>
          </View>
          <View style={styles.pagination}>
            {images.map((i, k) => (
              <Text key={i} style={k == active ? styles.activeDot : styles.dot}>
                •
              </Text>
            ))}
          </View>
        </View>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate("SignIn")}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Get Started</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#EAE6DB",
  },

  button: {
    backgroundColor: "#FF8925",
    height: verticalScale(50),
    marginLeft: moderateScale(20),
    marginRight: moderateScale(20),
    borderRadius: moderateScale(20),
    justifyContent:"center",
    alignItems:'center',
  },
  buttonText: { 
    fontSize: moderateScale(20),
    color: "white",
    fontFamily:'Poppins-Medium'
  },
  pagination: {
    flexDirection: "row",
    position: "relative",
    alignSelf: "center",
  },
  dot: {
    color: "#BBB",
    fontSize: moderateScale(50),
  },
  activeDot: {
    color: "black",
    fontSize: moderateScale(50)
  },
  textStyle: {
    fontSize: moderateScale(20),
    textAlign: "center",
    margin: moderateScale(10),
    fontFamily:'Poppins-Medium'
  },
});

export default Slider;
