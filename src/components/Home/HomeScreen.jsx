import React, { useEffect } from "react";
import {
  StyleSheet,
  ScrollView, Alert, BackHandler,
} from "react-native";
import Carousal from "../Carousal/Carousals/Carousal";
import ImagesCarousal from "../Carousal/Carousals/ImagesCarousal";
import CardCarousal from "../Carousal/Carousals/GiftCardCarousal";
import PlansCardCarousal from "../Carousal/Carousals/PlansCardCarousal";
import ItemCard from "../Carousal/Carousals/ItemCard";
import DealsCarousal from "../Carousal/Carousals/DealsCarousal";
import ClientsReview from "../Carousal/Carousals/ClientsReview";
import Footer from "../Footer/Footer";
import ItemRenderer from "../Carousal/Carousals/AdvCard/ItemRenderer";

function HomeScreen() {
  useEffect(()=>{
    const backAction =()=>{
      Alert.alert("Hold on", 'Are you sure, You want to exit...',
      [
        {
          text:"Cancel",
          onPress:()=>null,
          style:'cancel'
        },
        {
          text:'YES',
          onPress:()=>BackHandler.exitApp()
        }
      ]);
      return true;
    }
    const backHandler = BackHandler.addEventListener('hardwareBackPress',backAction);
    return ()=>backHandler.remove();
  },[])
  return (
    <ScrollView style={styles.container}>
     <Carousal/>
     <ImagesCarousal/>
     <CardCarousal/>
     <PlansCardCarousal/>
     <ItemCard/>
     <ItemRenderer/>
     <DealsCarousal/>
     <ClientsReview/>
     <Footer/>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:'#EAE6DB'
  },
});

export default HomeScreen;
