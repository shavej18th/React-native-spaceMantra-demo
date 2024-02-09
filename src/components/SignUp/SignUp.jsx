import React, { useState } from "react";
import {
  Text,
  View,
  ImageBackground,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { styles } from "../Style/CustomFormStyle";
import { horizontalScale, moderateScale, verticalScale } from "../Themes/Matrices";

function SignUp({ navigation, route }) {
  const [showPassword, setShowPassword] = useState(true);
  const [isPasswordSecure, setIsPasswordSecure] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setUserToken } = route.params;


  return (
    <ImageBackground
      source={require("../../../assets/img/Group3082/Group3082.png")}
      style={{ width: "100%", height: "100%" }}
    >
      <View style={styles.container}>
        <Text style={[styles.textStyle,{ fontFamily:'Poppins-Medium'}]}>Create Account</Text>
      </View>
      <TextInput
        textContentType="emailAddress"
        style={styles.InputField}
        placeholder="Enter Your Name..."
        onChangeText={setEmail}
      />
      <TextInput
        textContentType="emailAddress"
        style={styles.InputField}
        placeholder="Enter Email or Phone..."
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.InputField}
        placeholder="create Password"
        // onChangeText={setPassword}
        secureTextEntry={showPassword}
      />
      <TextInput
        style={styles.InputField}
        placeholder="Confirm Password"
        onChangeText={setPassword}
        secureTextEntry={showPassword}
      />
      <TouchableOpacity
        style={{ marginLeft: horizontalScale(24), marginTop: verticalScale(8), }}
        onPress={() => setShowPassword(!showPassword)}
      >
        <Text
          style={{
            textDecorationLine: "underline",
            textDecorationColor: "#000",
            textDecorationStyle: "solid",
            fontFamily:'Poppins-Medium'
          }}
        >
          {showPassword ? "Show Password" : "Hide Password"}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setUserToken("token")}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Create Account</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.alternativeLayoutButtonContainer}>
        <TouchableOpacity>
          <View style={styles.socialButton}>
            <Text
              style={styles.socialButtonText}
              // onPress={() => navigation.navigate("Home")}
            >
              Google
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.socialButton}>
            <Text
              style={styles.socialButtonText}
              // onPress={() => navigation.popToTop()}
            >
              Facebook
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={{ flex: 1, alignItems: "center" }}>
        <Text style={{textAlignVertical:'center',fontFamily:"Poppins-Medium"}}>
          Already have an account?{' '}
          <TouchableOpacity onPress={() => navigation.navigate("SignIn")}>
            <Text style={{ color: "blue",fontFamily:"Poppins-Medium" }}>SignIn</Text>
          </TouchableOpacity>
        </Text>
      </View>
    </ImageBackground>
  );
}

export default SignUp;
