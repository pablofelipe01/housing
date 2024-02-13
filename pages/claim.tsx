// Import the necessary components and types
import { Box, Container, Flex, Heading, SimpleGrid, Stack, Text, useToast, Select } from "@chakra-ui/react";
import { MediaRenderer, Web3Button, useContract, useContractMetadata } from "@thirdweb-dev/react";
import { CALIM_TOKEN_CONTRACT_ADDRESS, CLAIM_TOKEN_IMAGE } from "../const/addresses";
import { useState, ChangeEvent } from "react"; // Import ChangeEvent type

// Define the component
export default function ClaimPage() {
    const {
        contract
    } = useContract(CALIM_TOKEN_CONTRACT_ADDRESS, "token-drop");

    const {
        data: contractMetadata
    } = useContractMetadata(contract);

    const [claimAmount, setClaimAmount] = useState<number>(1); // Explicitly set the type to number
    const toast = useToast();

    // Handle the change event with explicit types
    const handleClaimAmountChange = (event: ChangeEvent<HTMLSelectElement>) => {
        setClaimAmount(parseInt(event.target.value, 10));
    };

    return (
        <Container maxW={"1440px"} h={"80vh"}>
            <SimpleGrid columns={2} spacing={10} h={"100%"}>
                <Flex>
                    <MediaRenderer
                        src={CLAIM_TOKEN_IMAGE}
                        height="100%"
                        width="100%"
                    />
                </Flex>
                <Flex flexDirection={"column"} justifyContent={"center"}>
                    <Stack spacing={4}>
                        <Heading fontSize={"5xl"}>BUY ${contractMetadata?.symbol}</Heading>
                        <Text fontSize={"xl"}>House #1 is a charming residence that exudes warmth and comfort. With its classic architecture and well-manicured surroundings, this home offers a cozy retreat for its inhabitants.</Text>
                        <Text fontWeight={"bold"}>Buy {claimAmount} ${contractMetadata?.symbol} Tokens</Text>
                        <Box>
                            <Select value={claimAmount} onChange={handleClaimAmountChange}>
                                {Array.from({ length: 10 }, (_, index) => index + 1).map((value) => (
                                    <option key={value} value={value}>
                                        {value}
                                    </option>
                                ))}
                            </Select>
                            <br />
                            <Web3Button
                                contractAddress={CALIM_TOKEN_CONTRACT_ADDRESS}
                                action={(contract) => contract.erc20.claim(claimAmount)}
                                onSuccess={() => toast({
                                    title: 'Claim Successful',
                                    description: "You have successfully claimed tokens!",
                                    status: 'success',
                                    duration: 9000,
                                    isClosable: true,
                                })}
                            >Buy Token</Web3Button>
                        </Box>
                    </Stack>
                </Flex>
            </SimpleGrid>
        </Container>
    );
}
