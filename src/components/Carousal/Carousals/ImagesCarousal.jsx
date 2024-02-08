import React, { useState } from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  Image,
} from "react-native";
import ItemCardData from "../imagesData/ItemCardData";
import { horizontalScale, moderateScale, verticalScale } from "../../Themes/Matrices";

function ImagesCarousal() {
  
  const [activeIndexNumber,setActiveIndexNumber] = useState(0)
  return (
    <View style={styles.container}>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        alwaysBounceVertical
        directionalLockEnabled={true}
        disableIntervalMomentum={true}
        onScroll={e => {
          let slide = Math.round(
          e.nativeEvent.contentOffset.x/e.nativeEvent.layoutMeasurement.width,);
          if (slide !== activeIndexNumber) {
          setActiveIndexNumber(slide);
          }
        }
        }
      >
        {ItemCardData.map((item, index) => {
          return (
            <>
              <View style={styles.ImageContainer} key={item.key}>
                <Image
                  style={styles.Images}
                  source={item.img}
                  borderRadius={20}
                />
              </View>
            </>
          );
        })}
      </ScrollView>
      <View style={{flexDirection:'column'}}>
    <View style={styles.dotContainer}>
   {ItemCardData.map((item, index) => {
if (ItemCardData.length !== 1) {
if (activeIndexNumber) {
  return (
    <View
     key={index}
     style={[index == activeIndexNumber ? [styles.dot,{ backgroundColor: "#FF8925", aspectRatio: 3,
     width: 22},] : styles.dot,]}>
    </View>);
  }
   else {
   return (
   <View
    key={index}
    style={[index == activeIndexNumber ? [styles.dot,{ backgroundColor: '#FF8925',aspectRatio: 3,
    width: 22},]: styles.dot,]}>
</View>);
}
}
})}
 </View>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  Images: {
    backgroundColor: "white",
    height: verticalScale(180),
    width: horizontalScale(360),
    borderRadius: 10,
    borderColor: "white",
  },
  ImageContainer: {
    marginTop: moderateScale(15),
    marginLeft: moderateScale(7),
    marginRight:moderateScale(7),
    marginBottom:7,
    height: verticalScale(185),
    width: horizontalScale(360),
  },
  dotContainer: {
    flexDirection: 'row',
    bottom: 5,
    marginLeft:15,
    },
    dot: {
    aspectRatio: 1,
    width: 8,
    marginHorizontal: 6,
    marginVertical: 2,
    backgroundColor: '#B9B9B9',
    borderRadius: 10,
    position: 'relative',
    zIndex: 8,
    elevation: 8,
    },
});

export default ImagesCarousal;
