import {
    Center,
    Heading,
    VStack,
    Button,
    Text,
    Input,
    ScrollView,
} from "native-base";
import React from "react";
import VoteResultStat from "../components/VoteResultStat";


export default function VoteResultScreen({ navigation }) {

    const backToHome = () => {
        navigation.navigate("Home");
    }

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
                    <Text>Thanks for the vote.</Text>
                    <Text bold>Vote Result:</Text>
                    <VoteResultStat />
                    <Button w="100%" size="lg" onPress={backToHome}>Back to Home</Button>
                </VStack>
            </Center>
        </ScrollView>
    );
}