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

export default function NewVoteScreen({ navigation }) {

    const [items, setItems] = React.useState<string[]>(["", ""]);

    const [isInvalidInput, setIsInvalidInput] = React.useState<boolean>(false);

    const ItemsInput = () => {

        // onChange() return a handling function which accept text as input
        const onChange = (index: number) => (text: string) => {
            const newItems = [...items];
            newItems[index] = text;
            setItems(newItems);
        }

        return items.map((item, index) => {
            return (
                <Input variant="rounded" size="lg" placeholder={"Food " + (index + 1)} key={index} onChangeText={onChange(index)}/>
            )
        });
    }

    const newItem = () => {
        setItems([...items, ""]);
    }

    const startVote = () => {
        // check if all items are filled
        // if not, show error
        // if yes, navigate to vote screen
        
        setIsInvalidInput(false);

        items.forEach((item) => {
            if (item === "") {
                setIsInvalidInput(true);
                return;
            }
        });

        if (!isInvalidInput) {
            // post to api

            // navigate to vote screen
            navigation.navigate("Vote");
        }
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
                    <Text bold>Start a New Vote:</Text>
                    <FormControl isInvalid={isInvalidInput} w="100%">
                        <FormControl.ErrorMessage>
                            <Text bold color="red.500">Please fill in all items</Text>
                        </FormControl.ErrorMessage>
                        <VStack space={5}>
                            {ItemsInput()}
                        </VStack>
                    </FormControl>
                    <Button size="lg" w="100%" onPress={newItem}>New Item</Button>
                    <Button size="lg" colorScheme="secondary" w="100%" onPress={startVote}>Start Vote</Button>
                </VStack>
            </Center>
        </ScrollView>
    );
}