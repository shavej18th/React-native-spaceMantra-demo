import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
} from "react-native";
import {
    moderateScale,
    verticalScale,
    horizontalScale,
  } from "../../../Themes/Matrices";

function ContentBox({setUniqueSelected,setAccordionData,data,accordionData,selectedBox}) {
    const [selected, setSelected] = useState(true);
    const handleOnClick = ()=>{
        if(data.Id === 1){
            setUniqueSelected({
                    first:true,
                    second:false,
                    third :false
            })
            setAccordionData(data)
            setSelected(true)
        }else if(data.Id === 2){
            setUniqueSelected({
                first:false,
                second:true,
                third :false
        })
        setAccordionData(data)
        setSelected(true)
        }else if(data.Id === 3){
            setUniqueSelected({
                first:false,
                second:false,
                third :true
        })
        setAccordionData(data)
        setSelected(true)
        }     
    }
  return (
    <View>
        <View style={styles.content_container}>
              <TouchableHighlight
                style={[(selectedBox && selected)? styles.tenure_content_colored:styles.tenure_content, styles.shadowProp]}
                underlayColor="#DDDDDD"
              onPress={handleOnClick}>
                <View style={styles.content_box}>
                  <View style={styles.content_head}>
                    <View style={styles.content}>
                      <View style={styles.head_Text}>
                        <Text style={styles.head_Text_Style}>
                          Discount : {data.off_content}
                        </Text>
                      </View>
                    </View>
                    <View style={styles.content}>
                      {(selectedBox && selected) ? (
                        <TouchableHighlight
                        underlayColor="#575656"
                          style={[
                            styles.selection_button,
                            { backgroundColor: "black" },
                          ]}
                          onPress={handleOnClick}
                        >
                          <View style={{ flexDirection: "row" }}>
                            <Text
                              style={[
                                styles.button_Text_Style,
                                { color: "white" },
                              ]}
                            >
                              Selected
                            </Text>
                            <View style={styles.right_icon}>
                              <Text style={styles.button_Text_Style}>
                                {"✔"}
                              </Text>
                            </View>
                          </View>
                        </TouchableHighlight>
                      ) : (
                        <TouchableHighlight
                        underlayColor="#DDDDDD"
                          style={styles.selection_button}
                          onPress={handleOnClick}
                        >
                          <Text style={styles.button_Text_Style}>Select</Text>
                        </TouchableHighlight>
                      )}
                    </View>
                  </View>
                  <View style={styles.content_row}>
                    <View
                      style={{ width: "25%", paddingLeft: horizontalScale(5) }}
                    >
                      <Text style={{ fontFamily: "Poppins-Medium" }}>
                        {data.period}
                      </Text>
                    </View>
                    <View style={{ width: "25%" }}>
                      <Text
                        style={{
                          fontFamily: "Poppins-Medium",
                          color: "#474747",
                          textDecorationLine: "line-through",
                        }}
                      >
                       {data.old_plan}
                      </Text>
                    </View>
                    <View
                      style={{
                        width: "20%",
                        backgroundColor: "black",
                        alignItems: "center",
                        paddingTop: verticalScale(5),
                        paddingBottom: verticalScale(5),
                        borderRadius: moderateScale(20),
                      }}
                    >
                      <Text style={{ color: "#ffffff",fontFamily:"Poppins-Medium",fontSize:moderateScale(12) }}>{data.off_content}</Text>
                    </View>
                    <View style={{ width: "30%", justifyContent: "center" }}>
                      <Text
                        style={{
                          fontFamily: "Poppins-Medium",
                          color: "#474747",
                          marginLeft: horizontalScale(10),
                        }}
                      >
                       {data.plan}
                      </Text>
                    </View>
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      marginTop: verticalScale(5),
                      marginBottom: verticalScale(5),
                      marginLeft: horizontalScale(10),
                    }}
                  >
                    <View>
                      <Text style={{ fontFamily: "Poppins-Medium" }}>You will save :</Text>
                    </View>
                    <View>
                      <Text style={{ fontFamily: "Poppins-Medium",color:"#474747" }}>{' '}{data.benefit}</Text>
                    </View>
                  </View>
                </View>
              </TouchableHighlight>
            </View>
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
    tenure_content: {
      marginBottom: verticalScale(5),
      marginTop: verticalScale(5),
      backgroundColor: "#FFFFFF",
      borderRadius: moderateScale(10),
    },
    tenure_content_colored: {
        marginBottom: verticalScale(5),
      marginTop: verticalScale(5),
      backgroundColor: "#FFE7C1",
      borderWidth:moderateScale(1),
      borderColor:'#FF8925',
      borderRadius: moderateScale(10),
    },
    shadowProp: {
      elevation: moderateScale(20),
      shadowColor: "gray",
      shadowOffset: { width: -2, height: 4 },
      shadowOpacity: 0.2,
      shadowRadius: moderateScale(3),
    },
    content_box: {
      borderRadius: moderateScale(10),
    },
    content_head: {
      flexDirection: "row",
    },
    content_row: {
      flexDirection: "row",
      marginTop: verticalScale(5),
      marginBottom: verticalScale(5),
      alignItems: "center",
      justifyContent: "center",
    },
    content: {
      width: "50%",
    },
    head_Text: {
      flexDirection: "row",
      padding: moderateScale(10),
      backgroundColor: "#FF8925",
      borderWidth: moderateScale(1),
      borderColor: "#FF8925",
      alignSelf: "flex-start",
      borderTopRightRadius: moderateScale(25),
      borderBottomRightRadius: moderateScale(25),
      paddingLeft: horizontalScale(20),
      paddingRight: horizontalScale(15),
      marginBottom: verticalScale(5),
      marginTop: verticalScale(5),
    },
    head_Text_Style: {
      color: "#ffffff",
      fontFamily: "Poppins-Medium",
      fontSize: moderateScale(15),
    },
    button_Text_Style: {
      fontFamily: "Poppins-Medium",
      fontSize: moderateScale(15),
    },
    right_icon: {
      paddingLeft: horizontalScale(5),
      paddingRight: horizontalScale(5),
      backgroundColor: "white",
      borderRadius: moderateScale(25),
      marginLeft: horizontalScale(10),
    },
    selection_button: {
      flexDirection: "row",
      padding: moderateScale(10),
      backgroundColor: "#ffffff",
      borderWidth: moderateScale(1),
      borderColor: "#CCCCCC",
      alignSelf: "flex-end",
      right: horizontalScale(10),
      borderRadius: moderateScale(25),
      paddingLeft: horizontalScale(15),
      paddingRight: horizontalScale(15),
      marginBottom: verticalScale(5),
      marginTop: verticalScale(5),
    },
  
    content_container: {
      maxHeight: verticalScale(540),
      backgroundColor: "white",
    },
    modal_title: {
      fontFamily: "Poppins-Medium",
      fontSize: moderateScale(16),
      marginTop: verticalScale(5),
      alignSelf: "flex-start",
    },
    close_icon: {
      marginTop: verticalScale(5),
      left: horizontalScale(198),
    },
    modal_title_container: {
      flexDirection: "row",
      alignItems: "center",
      borderBottomWidth: 1,
      borderBottomColor: "#666666",
      paddingBottom: verticalScale(5),
    },
  });
export default ContentBox