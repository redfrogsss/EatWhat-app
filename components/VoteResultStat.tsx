import { Divider, AspectRatio, Box, Center, Heading, Stack, HStack, Text } from "native-base";
import { useEffect } from "react";
import { View } from "react-native";
import VoteOption from "../interfaces/VoteOption";

export default function VoteResultStat({voteOptions} : {voteOptions: VoteOption[]}) {

    const HR = () => {
        return <Divider my="2" _light={{
            bg: "muted.800"
        }} _dark={{
            bg: "muted.50"
        }} />
    }

    const FoodResult = (rank: number, food: string, percentage: number, lastItem?: boolean) => {
        return (
            <View key={(rank - 1)}>
                <Stack space={2}>
                    <Heading size="md" ml="-1" textAlign="center">
                        No. {rank}
                    </Heading>
                </Stack>
                <Text textAlign="center">
                    {food}
                </Text>
                <Text fontSize="xs" fontWeight="500" textAlign="center" _light={{
                    color: "grey.500"
                }} _dark={{
                    color: "grey.400"
                }}>
                    {percentage}% of you voted {food}
                </Text>
                {lastItem ? null : <HR />}
            </View>
        );
    }
    
    const getTotalCount = () => {
        let total = 0;
        voteOptions.forEach(option => {
            if(option.vote_count != undefined) {
                total += option.vote_count;
            }
        });
        return total;
    }

    const generateFoodResult = () => {
        if (voteOptions.length === 0) {
            return null;
        }

        return voteOptions.map((option, index) => {
            let totalCount: number = getTotalCount();
            let percentage: number = totalCount === 0 ? 0 : Math.round((option.vote_count ?? 0) / totalCount * 100);
            return FoodResult(index + 1, option.name, percentage, index === voteOptions.length - 1);
        });
    }

    // debug
    // useEffect(()=>{console.log("voteOption", voteOptions)}, [voteOptions])

    return (
        <Box alignItems="center">
            <Box maxW="80" minW="80" rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1" _dark={{
                borderColor: "coolGray.600",
                backgroundColor: "gray.700"
            }} _web={{
                shadow: 2,
                borderWidth: 0
            }} _light={{
                backgroundColor: "gray.50"
            }}>
                <Stack p="4" space={3}>
                    <Stack space={2}>
                        <Heading size="md" ml="-1" textAlign="center">
                            Total Vote
                        </Heading>
                    </Stack>
                    <Text textAlign="center">
                        {getTotalCount()}
                    </Text>
                    <HR />
                    {generateFoodResult()}
                </Stack>
            </Box>
        </Box>
    )
}