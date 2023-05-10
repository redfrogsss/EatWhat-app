
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


export default function JoinVoteScreen({ navigation }) {

    const [code, setCode] = React.useState<string>("");

    const JoinVote = () => {
        navigation.navigate("Vote", { voteId: code });
    }

    const onChangeCode = (code: string) => {
        setCode(code);
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
                    <Text bold>Join a Vote:</Text>
                    <Input variant="rounded" size="lg" placeholder="Enter the code..." onChange={(e)=>{onChangeCode(e.nativeEvent.text)}}/>
                    <Button size="lg" w="100%" onPress={JoinVote}>Join</Button>
                </VStack>
            </Center>
        </ScrollView>

    );
}