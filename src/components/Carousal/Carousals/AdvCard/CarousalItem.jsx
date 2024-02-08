import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Animated, {
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';
import { horizontalScale, moderateScale, verticalScale } from '../../../Themes/Matrices';

const { width } = Dimensions.get('window');

const CarousalItem = ({ Item, index, scrollX }) => {
  const rnStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: interpolate(
            scrollX.value,
            [(index - 1) * width, index * width, (index + 1) * width],
            [-width * 0.15, 0, width * 0.15],
            'clamp'
          ),
        },
        {
          scale: interpolate(
            scrollX.value,
            [(index - 1) * width, index * width, (index + 1) * width],
            [0.9, 1, 0.9],
            'clamp'
          ),
        },
      ],
    };
  });
  return (
    <Animated.View
      style={styles.ImageContainer}
      key={Item.id}
    >
      <Image
        source={Item.img}
        style={styles.Images}
        resizeMode="cover"
      />
    </Animated.View>
  );
};

export default CarousalItem;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop:5
      },
      textStyle:{
        fontStyle:'normal',
        fontSize:20,
        fontWeight:'500',
        marginLeft:15,
        marginTop:5,
        borderBottomWidth:2,
        width:horizontalScale(131),
        borderBottomColor:'#daa520'
      },
      Images: {
        backgroundColor: "white",
        height: verticalScale(180),
        width: horizontalScale(360),
        borderRadius: 20,
        borderWidth:3,
        borderColor:'transparent'
      },
      ImageContainer: {
        marginLeft: moderateScale(7),
        marginRight:moderateScale(7),
        margin: 5,
        height: verticalScale(185),
        width: horizontalScale(360),
      },

});