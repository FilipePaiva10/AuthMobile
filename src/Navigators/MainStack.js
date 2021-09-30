import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";


import SignIn from "../pages/SignIn";

const Stack = createNativeStackNavigator();

export default () => {
    return (
        <Stack.Navigator
            initialRouteName="sigin"
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name="sigin" component={SignIn} />
        </Stack.Navigator>
    );
}