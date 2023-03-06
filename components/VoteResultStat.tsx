import { Divider, AspectRatio, Box, Center, Heading, Stack, HStack, Text } from "native-base";

export default function VoteResultStat() {

    const HR = () => {
        return <Divider my="2" _light={{
            bg: "muted.800"
        }} _dark={{
            bg: "muted.50"
        }} />
    }

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
                        0
                    </Text>
                    <HR />
                    <Stack space={2}>
                        <Heading size="md" ml="-1" textAlign="center">
                            No. 1
                        </Heading>
                    </Stack>
                    <Text textAlign="center">
                        Food A
                    </Text>
                    <Text fontSize="xs" fontWeight="500" textAlign="center" _light={{
                        color: "grey.500"
                    }} _dark={{
                        color: "grey.400"
                    }}>
                        0% of you voted a
                    </Text>
                    <HR />
                    <Stack space={2}>
                        <Heading size="md" ml="-1" textAlign="center">
                            No. 2
                        </Heading>
                    </Stack>
                    <Text textAlign="center">
                        Food A
                    </Text>
                    <Text fontSize="xs" fontWeight="500" textAlign="center" _light={{
                        color: "grey.500"
                    }} _dark={{
                        color: "grey.400"
                    }}>
                        0% of you voted a
                    </Text>
                </Stack>
            </Box>
        </Box>
    )
}