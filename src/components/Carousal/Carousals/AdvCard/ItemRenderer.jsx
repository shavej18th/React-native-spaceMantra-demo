import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View ,Text } from 'react-native';
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from 'react-native-reanimated';
import { items } from './Items';
import CarousalItem from './CarousalItem';

export default function ItemRenderer() {

  const scrollX = useSharedValue(0);
  const onScrollHandler = useAnimatedScrollHandler((event) => {
    scrollX.value = event.contentOffset.x;
  });
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.textStyle}>Why SpaceMantra</Text>
      <View style={{flexDirection:'row', marginLeft:15}}>
          <View style={styles.HrLine1}></View>
          <View style={styles.HrLine2}></View>
      </View>
      <Animated.FlatList
        horizontal
        onScroll={onScrollHandler}
        showsHorizontalScrollIndicator={false}
        data={items}
        style={styles.ImageContainer}
        keyExtractor={(item) => item.id}
        pagingEnabled={true}
        renderItem={({ item, index }) => {
          return <CarousalItem Item={item} index={index} scrollX={scrollX} />;
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // fontFamily: 'Cochin',
  },
  textStyle:{
    fontStyle:'normal',
    fontSize:20,
    fontWeight:'500',
    marginLeft:15,
    marginTop:5,
    fontFamily: "Poppins-Medium"
  },
  HrLine1:{     
    backgroundColor:'#daa520',
    height:4,
    width:20,
    marginRight:10
  },
  HrLine2:{
      backgroundColor:'#daa520',
      height:4,
      width:50
  },
  ImageContainer:{
    marginTop:10,
  }
});