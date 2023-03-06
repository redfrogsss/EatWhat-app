import {
    Center,
    Heading,
    VStack,
    Button,
    Text,
    Input,
    ScrollView,
    FormControl,
    useToast,
} from "native-base";
import React from "react";
import { Alert } from "react-native";


export default function VoteScreen({ navigation }) {

    const toast = useToast();

    const randomChoose = () => {
        voteItem();
    }

    const copyURL = () => {
        // copy the url to clipboard

        // show success alert
        // Alert.alert("Link copied to clipboard");
        toast.show({
            description: "Link copied to clipboard",
        })
    }

    const voteItem = () => {
        navigation.navigate("Vote Result");
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
                    <Text bold>Vote a food:</Text>
                    <Button w="100%" size="lg" onPress={randomChoose}>Randomly Choose One</Button>
                    <Button w="100%" colorScheme="secondary" size="lg" onPress={copyURL}>Copy URL to share</Button>
                </VStack>
            </Center>
        </ScrollView>

    );
}