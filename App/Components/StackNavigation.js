import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabNavigation from "./TabNavigation";
import Login from "../Screens/Login";
import Signin from "../Screens/Signin";
import AccessRegister from "../Screens/AccessRegister";
import StarUp from "../Screens/StarUp";


const Stack = createNativeStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator initialRouteName="StarUp">
      <Stack.Screen
        name="AccessRegister"
        component={AccessRegister}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Signin"
        component={Signin}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        component={StarUp}
        name="StarUp"
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export { MainStack};