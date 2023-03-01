import {
    Center,
    Heading,
    VStack,
    Button,
    Text,
    Input,
    ScrollView,
    FormControl,
} from "native-base";
import React from "react";


export default function VoteScreen({ navigation }) {
    return (
        <ScrollView
            _dark={{ bg: "light.900" }}
            _light={{ bg: "light.200" }}
        >
            <Center
                px={4}
                flex={1}
            >
                <VStack space={5} my={5} alignItems="center" w="100%">
                    <Heading size="3xl">EatWhat</Heading>
                    <Text bold>Vote a food:</Text>
                    <Button w="100%" size="lg">Copy URL to share</Button>
                </VStack>
            </Center>
        </ScrollView>

    );
}