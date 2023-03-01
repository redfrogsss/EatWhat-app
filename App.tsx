import React from "react";
import {
    Center,
    NativeBaseProvider,
    extendTheme,
} from "native-base";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import NewVoteScreen from "./screens/NewVoteScreen";
import VoteScreen from "./screens/VoteScreen";

// Define the config
const config = {
    useSystemColorMode: false,
    initialColorMode: "dark",
};

// extend the theme
export const theme = extendTheme({ config });
type MyThemeType = typeof theme;
declare module "native-base" {
    interface ICustomTheme extends MyThemeType { }
}
const Stack = createNativeStackNavigator();
export default function App() {
    return (
        <NativeBaseProvider>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="Home" component={HomeScreen} />
                    <Stack.Screen name="New Vote" component={NewVoteScreen} />
                    <Stack.Screen name="Vote" component={VoteScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        </NativeBaseProvider>
    );
}
