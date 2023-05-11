
import axios from "axios";
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
    KeyboardAvoidingView,
} from "native-base";
import React from "react";
import getAPI from "../components/getAPI";
import { Platform } from "react-native";


export default function JoinVoteScreen({ navigation }) {

    const [code, setCode] = React.useState<string>("");
    const toast = useToast();

    const JoinVote = () => {

        // check if code is valid
        // if not, show error message
        // else, navigate to vote screen
        axios.get(getAPI() + "/vote/" + code)
            .then((res) => {
                console.log(res.data);
                if (res.data.length <= 0) {
                    toast.show({ description: "Error: code is not valid."})
                    return;
                }
                navigation.navigate("Vote", { voteId: code });
            })
            .catch((error) => {
                console.error("JoinVote() Error:", error);
                toast.show({ description: "Error: code is not valid."})
            });

    }

    const onChangeCode = (code: string) => {
        setCode(code);
    }

    return (
        <KeyboardAvoidingView h={{
            base: "100%",
            lg: "auto",
        }} behavior={Platform.OS === "ios" ? "padding" : "height"}>
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
                        <Text bold>Join a Vote:</Text>
                        <Input
                            keyboardType="number-pad"
                            variant="rounded"
                            size="lg"
                            placeholder="Enter the code..."
                            onChange={(e) => { onChangeCode(e.nativeEvent.text) }}
                        />
                        <Button size="lg" w="100%" onPress={JoinVote}>Join</Button>
                    </VStack>
                </Center>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}