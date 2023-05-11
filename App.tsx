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
import JoinVoteScreen from "./screens/JoinVoteScreen";
import VoteResultScreen from "./screens/VoteResultScreen";

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
                <Stack.Navigator screenOptions={{ gestureEnabled: false }}>
                    <Stack.Screen name="Home" component={HomeScreen} />
                    <Stack.Screen name="New Vote" component={NewVoteScreen} />
                    <Stack.Screen name="Vote" component={VoteScreen} />
                    <Stack.Screen name="Join Vote" component={JoinVoteScreen} />
                    <Stack.Screen
                        name="Vote Result"
                        component={VoteResultScreen}
                        options={{
                            headerBackVisible: false,
                            headerLeft: () => null,
                        }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </NativeBaseProvider>
    );
}
