import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";


import Signin from "../pages/signin";

const Stack = createNativeStackNavigator();

export default () => {
    return (
        <Stack.Navigator
            initialRouteName="sigin"
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name="sigin" component={Signin} />
        </Stack.Navigator>
    );
}