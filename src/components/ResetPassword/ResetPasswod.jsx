import React, { useState } from "react";
import {
  Text,
  View,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  ToastAndroid
} from "react-native";
import { styles } from "../Style/CustomFormStyle";

function ResetPassword({ navigation, route }) {
  const [email, setEmail] = useState("");

  const showToast = () => {
    ToastAndroid.show('Link sent successfully!', ToastAndroid.SHORT);
    navigation.push("SignIn");
  };
  return (
    <ImageBackground
      source={require("../../../assets/img/Group3082/Group3082.png")}
      style={{ width: "100%", height: "100%" }}
    >
      <View style={styles.container}>
        <Text style={styles.textStyle}>Reset Password</Text>
        <Text style={styles.textStyle1}>Reset password link will be sent on your email.. </Text>
      </View>
      <TextInput
        textContentType="emailAddress"
        style={styles.InputField}
        placeholder="Enter email..."
        onChangeText={setEmail}
      />
      <TouchableOpacity onPress={showToast}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Submit</Text>
        </View>
      </TouchableOpacity>
    </ImageBackground>
  );
}

export default ResetPassword;
