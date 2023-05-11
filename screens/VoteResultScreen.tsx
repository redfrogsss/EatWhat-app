import {
    Center,
    Heading,
    VStack,
    Button,
    Text,
    Input,
    ScrollView,
} from "native-base";
import React, { useEffect, useState } from "react";
import VoteResultStat from "../components/VoteResultStat";
import axios from "axios";
import getAPI from "../components/getAPI";
import VoteOption from "../interfaces/VoteOption";

export default function VoteResultScreen({ route, navigation }) {

    const { voteId } = route.params;

    const backToHome = () => {
        navigation.navigate("Home");
    }
    
    const [voteOptions, setVoteOptions] = useState<VoteOption[]>([]);

    const getVoteOptions = async () => {
        return new Promise<VoteOption[]>(async (resolve, reject) => {
            try {
                let options: VoteOption[] = [];
                options = await (await axios.get(getAPI() + "/voteOption/" + voteId)).data.options;
                resolve(options);
            } catch (error) {
                reject(error);
            }
        });
    };

    const getVoteResult = () => {
        getVoteOptions().then(async (voteOptions) => {
            let voteResult: VoteOption[] = [...voteOptions];

            for(let i = 0; i < voteResult.length; i++) {
                let option = voteResult[i];
                let option_id = option.id.toString();

                let res = await axios.get(getAPI() + "/voteItem/" + option_id)
                let count = res.data.voteItem.length;   // vote count for this option id
                voteResult[i].vote_count = count;
            }

            setVoteOptions(voteResult);
        });
    }

    useEffect(() => {
        getVoteResult();
    }, []);

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
                    <VoteResultStat voteOptions={voteOptions} />
                    <Button w="100%" size="lg" onPress={backToHome}>Back to Home</Button>
                </VStack>
            </Center>
        </ScrollView>
    );
}