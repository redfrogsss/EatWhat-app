import {
    Center,
    Heading,
    VStack,
    Button,
} from "native-base";

export default function HomeScreen({ navigation }) {

    const newVote = () => { 
        navigation.navigate("New Vote");
    }

    const joinVote = () => { }

    return (

        <Center
            _dark={{ bg: "light.900" }}
            _light={{ bg: "light.200" }}
            px={4}
            flex={1}
        >
            <VStack space={5} alignItems="center">
                <Heading size="3xl">EatWhat</Heading>
                <Button w="48" size="lg" onPress={newVote}>Start a New Vote</Button>
                <Button w="48" size="lg" onPress={joinVote}>Join Existing Vote</Button>
            </VStack>
        </Center>
    );
}