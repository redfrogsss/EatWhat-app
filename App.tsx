import React from "react";
import {
  Center,
  Heading,
  NativeBaseProvider,
  extendTheme,
  VStack,
  Button,
} from "native-base";

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
export default function App() {

  const newVote = () => {}

  const joinVote = () => {}

  return (
    <NativeBaseProvider>
      <Center
        _dark={{ bg: "light.900" }}
        _light={{ bg: "light.200" }}
        px={4}
        flex={1}
      >
        <VStack space={5} alignItems="center">
          <Heading size="3xl">EatWhat</Heading>
          <Button w="48" onPress={newVote}>START A NEW VOTE</Button>
          <Button w="48" onPress={joinVote}>JOIN EXISTING VOTE</Button>
        </VStack>
      </Center>
    </NativeBaseProvider>
  );
}
