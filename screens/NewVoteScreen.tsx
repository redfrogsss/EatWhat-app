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

export default function NewVoteScreen({ }) {

    const [items, setItems] = React.useState<string[]>(["", ""]);

    const ItemsInput = () => {
        return items.map((item, index) => {
            return (
                <Input size="lg" placeholder={"Food " + (index + 1)} key={index} />
            )
        });
    }

    const newItem = () => {
        setItems([...items, ""]);
    }

    const startVote = () => {

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
                <VStack space={5} my={5} alignItems="center">
                    <Heading size="3xl">EatWhat</Heading>
                    <Text>Start a New Vote:</Text>
                    {ItemsInput()}
                    <Button size="lg" w="48" onPress={newItem}>New Item</Button>
                    <Button size="lg" colorScheme="secondary" w="48" onPress={startVote}>Start Vote</Button>
                </VStack>
            </Center>
        </ScrollView>
    );
}