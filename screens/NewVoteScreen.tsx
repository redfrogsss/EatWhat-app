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
} from "native-base";
import React from "react";
import getAPI from "../components/getAPI";

export default function NewVoteScreen({ navigation }) {

    const [items, setItems] = React.useState<string[]>(["", ""]);

    const [isInvalidInput, setIsInvalidInput] = React.useState<boolean>(false);

    const toast = useToast();

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
        
        let validInput = true;

        items.forEach((item) => {
            if (item === "") {
                validInput = false;
                setIsInvalidInput(true);
                return;
            }
        });

        console.log("items", items)

        if (validInput === true) {
            // post to api
            let url = getAPI() + "/vote";

            // send the request to backend
            axios.post(url, {})
                .then((res) => {
                    let voteId = res.data.vote_id;
                    url = getAPI() + "/voteOption/" + voteId;

                    axios.post(url, {options: items})
                        .then((res) => {
                            // navigate to vote screen
                            navigation.navigate("Vote", {voteId: voteId});
                        })
                        .catch((err) => { console.error(err); toast.show({description: "Failed to send option request."}); });
                })
                .catch((err) => { console.error(err); toast.show({description: "Failed to send vote request."}); });
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