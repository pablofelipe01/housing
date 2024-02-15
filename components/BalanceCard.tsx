import { Card, Spinner, Stack, Text, Link } from "@chakra-ui/react";
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
                            {/* Include the link here */}
                            <Link href="https://app.aragon.org/#/daos/polygon/0x331f347e4fb786a33b5983eccd8a96c222b52d3f/governance/proposals/0xb418e165e4f53c50f3f935d2de80c50e4cd7a643_0x2" target="_blank" rel="noopener noreferrer">
                                Property Documents
                            </Link>
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
