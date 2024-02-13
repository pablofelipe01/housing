import { Card, Spinner, Stack, Text } from "@chakra-ui/react";
import { useAddress, useContract, useContractEvents, useContractMetadata, useTokenBalance, MediaRenderer  } from "@thirdweb-dev/react";
import { CLAIM_TOKEN_IMAGE } from "../const/addresses";

type Props = {
    tokenAddress: string;
};

export default function BalanceCard({ tokenAddress }: Props) {
    const address = useAddress();

    const {
        contract
    } = useContract(tokenAddress);

    const {
        data: contractMetadata,
        isLoading: isContractMetadataLoading,
    } = useContractMetadata(contract);

    const {
        data: tokenBalance,
        isLoading: isTokenBalanceLoading,
    } = useTokenBalance(contract, address);

    const {
        data: events,
        isLoading: isEventsLoading,
    } = useContractEvents(
        contract,
        "get"
    );

    return (
        <Card p={4} width={"100%"} height={"100%"} border={"2px solid"} borderColor={"gray.100"}>
            {!isContractMetadataLoading ? (
                <Stack textAlign={"center"}>
                    {/* Use optional chaining to safely access properties */}
                    <Text fontWeight={"bold"} fontSize={"2xl"}>{contractMetadata?.symbol}</Text>
                    <Text>Balance:</Text>
                    {!isTokenBalanceLoading ? (
                        <>
                            <Text fontSize={"3xl"} fontWeight={"bold"}>{tokenBalance?.displayValue}</Text>
                            <MediaRenderer
                                src={CLAIM_TOKEN_IMAGE}
                                height="100%"
                                width="100%"
                            />
                        </>
                    ) : (
                        <Spinner />
                    )}
                </Stack>
            ) : (
                <Spinner />
            )}
        </Card>
    );
}
