import React, { useState } from "react";
import {
  Text,
  View,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { styles } from "../Style/CustomFormStyle";
import CheckBox from "react-native-check-box";

function SignIn({ navigation, route }) {

  const [isChecked, setIsChecked] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setUserToken } = route.params;

  return (
    <ImageBackground
      source={require("../../../assets/img/Group3082/Group3082.png")}
      style={{ width: "100%", height: "100%" }}
    >
      <View style={styles.container}>
        <Text style={[styles.textStyle,fonStyle.TextFont]}>Welcome</Text>
        <Text style={[styles.textStyle1,fonStyle.TextFont]}>Enter your details</Text>
      </View>
      <TextInput
        textContentType="emailAddress"
        style={[styles.InputField,fonStyle.TextFont]}
        placeholder="Enter Email or Phone..."
        onChangeText={setEmail}
      />
      <TextInput
        textContentType="newPassword"
        style={styles.InputField}
        placeholder="Password"
        onChangeText={setPassword}
        secureTextEntry={true}
      />
      <View style={[styles.textAfterInput,styles.textContainer]}>
        <View style={styles.CheckBox}>
          <View>
            <CheckBox
              style={{ marginRight: 5 }}
              onClick={() => setIsChecked(!isChecked)}
              isChecked={isChecked}
              checkBoxColor="black"
            />
          </View>
          <View style={{ paddingTop: 5 }}>
            <Text style={fonStyle.TextFont}>Remember</Text>
          </View>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate("ResetPassword")}>
          <View style={{ paddingTop: 5 }}>
            <Text style={fonStyle.TextFont}>Forgot Password?</Text>
          </View>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={() => setUserToken("token")}>
        <View style={styles.button}>
          <Text style={[styles.buttonText,styles.TextFont]}>Log In</Text>
        </View>
      </TouchableOpacity>

      <View style={styles.alternativeLayoutButtonContainer}>
        <TouchableOpacity>
          <View style={styles.socialButton}>
            <Text
              style={[styles.socialButtonText,styles.TextFont]}
              onPress={() => navigation.navigate("Home")}
            >
              Google
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.socialButton}>
            <Text
              style={[styles.socialButtonText,styles.TextFont]}
              onPress={() => navigation.popToTop()}
            >
              Facebook
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={{ flex: 1, alignItems: "center" }}>
        <Text style={fonStyle.TextFont}>
          Do not have an account?{" "}
          <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
            <Text style={{ color: "blue", fontFamily:"Poppins-Medium"}}>SignUp</Text>
          </TouchableOpacity>
        </Text>
      </View>
    </ImageBackground>
  );
}

const fonStyle = StyleSheet.create({
  TextFont:{
    fontFamily:'Poppins-Medium'
  }
})

export default SignIn;
