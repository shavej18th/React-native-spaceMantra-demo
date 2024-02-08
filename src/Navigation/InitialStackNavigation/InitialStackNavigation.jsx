import React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignIn from "../../components/SignIn/SignIn";
import SignUp from "../../components/SignUp/SignUp";
import ResetPassword from "../../components/ResetPassword/ResetPasswod";
import Slider from "../../components/Slider/Slider";

const Stack = createNativeStackNavigator();

function InitialStackNavigation({ setUserToken }) {
  return (
    <Stack.Navigator>
          <>
            <Stack.Screen
              name="Slider"
              component={Slider}
              options={{
                title: "Slider",
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="SignIn"
              component={SignIn}
              options={{
                title: "Sign in",
                headerShown: false,
              }}
              initialParams={{ setUserToken }}
            />
            <Stack.Screen
              name="SignUp"
              component={SignUp}
              options={{
                title: "Sign-Up",
                headerShown: false,
              }}
              initialParams={{ setUserToken }}
            />
            <Stack.Screen
              name="ResetPassword"
              component={ResetPassword}
              options={{
                title: "Reset-Password",
                headerShown: false,
              }}
            />
          </>
        </Stack.Navigator>
  )
}

export default InitialStackNavigation