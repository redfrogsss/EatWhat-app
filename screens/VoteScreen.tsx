import axios from "axios";
import {
    Center,
    Heading,
    VStack,
    Button,
    Text,
    ScrollView,
    useToast,
} from "native-base";
import React, { useEffect, useState } from "react";
import { Alert, Share } from "react-native";
import getAPI from "../components/getAPI";

export default function VoteScreen({ route, navigation }) {

    interface Option {
        id: number;
        vote_id: number;
        name: string;
    }

    const [options, setOptions] = useState<Option[]>([])

    const { voteId } = route.params;

    const toast = useToast();

    const randomChoose = () => {
        submitVote(voteId, options, Math.floor(Math.random() * options.length));
    }

    const shareLink = async () => {
        // share url using react native's share api
        try {
            const result = await Share.share({
                message:
                    'EatWhat App: Choose a food with me! \nCode: ' + voteId,
            });
            if (result.action === Share.sharedAction) {
                if (result.activityType) {
                    // shared with activity type of result.activityType
                    toast.show({
                        description: "Share successfully!",
                    })
                } else {
                    // shared
                    toast.show({
                        description: "Share successfully!",
                    })
                }
            } else if (result.action === Share.dismissedAction) {
                // dismissed
                toast.show({
                    description: "Share dismissed!",
                })
            }
        } catch (error: any) {
            Alert.alert(error.message);
        }
    }

    const fetchVoteOptions = (voteId: string | undefined) => {
        if (voteId === undefined) return [];

        // fetch vote options from server
        let url = getAPI() + "/voteOption/" + voteId;
        axios.get(url)
        .then((response) => {
            setOptions(response.data.options);
        })
        .catch((error) => {
            toast.show({description: "Error: " + error})
        });
    }

    const showVoteOptions = () => {
        if (options === undefined || options.length === 0) {return <></>}
        return options.map((option, index) => {
            return (
                <Button w="100%" size="lg" colorScheme="primary" key={index} onPress={()=>{submitVote(voteId, options, index)}}>{option.name}</Button>
            )
        });
    }

    const submitVote = (voteId: string, options: Option[], voteIndex: number) => {
        if (voteId === undefined) {
            toast.show({description: "Error: voteId is undefined"});
            return;
        }
        if (options === undefined || options.length === 0) {
            toast.show({description: "Error: options is undefined"});
            return;
        }
        if (voteIndex < 0 || voteIndex >= options.length) {
            toast.show({description: "Error: voteIndex is out of range"});
            return;
        }

        // submit vote to server
        let voteItemId = options[voteIndex].id;
        let url = getAPI() + "/voteItem/" + voteItemId;
        axios.post(url)
        .then((response) => {
            toast.show({description: "You voted " + options[voteIndex].name + " successfully!"});

            // natigate to vote result screen
            navigation.navigate("Vote Result", {voteId: voteId});
        })
        .catch((error) => {
            toast.show({description: "Error: " + error})
        })

    }

    useEffect(()=>{
        fetchVoteOptions(voteId);
    }, [])

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
                    {showVoteOptions()}
                    <Button w="100%" size="lg" onPress={randomChoose}>Randomly Choose One</Button>
                    <Button w="100%" colorScheme="secondary" size="lg" onPress={shareLink}>Copy URL to share</Button>
                    <Text>vote ID: {voteId}</Text>
                </VStack>
            </Center>
        </ScrollView>

    );
}