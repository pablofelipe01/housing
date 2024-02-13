import { Container, Flex, Text } from "@chakra-ui/react";
import { ConnectWallet, useAddress } from "@thirdweb-dev/react";
import Link from "next/link";
import Image from "next/image"; // Import the Image component from next/image

export default function Navbar() {
    const address = useAddress();

    return (
        <Container maxW={"1440px"} py={4}>
            <Flex flexDirection={"row"} justifyContent={"space-between"} alignItems={"center"}>
                {/* Replace the text with an image */}
                <Link href={"/"}>
                    <Image src="/images/001.png" alt="Transfer App Logo" width={250} height={250} />
                </Link>

                {address && (
                    <Flex flexDirection={"row"}>
                        <Link href={"/transfer"}>
                            <Text mr={8}>Transfer</Text>
                        </Link>
                        <Link href={"/claim"}>
                            <Text mr={8}>Buy Tokens</Text>
                        </Link>
                        <Link href={`/profile/${address}`}>
                            <Text>My Account</Text>
                        </Link>
                    </Flex>
                )}
                <ConnectWallet 
                     theme={"dark"}
                     modalSize={"compact"}
                      welcomeScreen={{
                             img: {
                             src: "https://tokensolutions.mypinata.cloud/ipfs/Qme5nZT3g7b6wUPWDUkZ9FfN8RGDcgRaoMpRy6MXSSuXCK",
                             width: 150,
                             height: 150,
                             },
                         }}
                             modalTitleIconUrl={
                              "https://tokensolutions.mypinata.cloud/ipfs/QmWrVx6BDRzRvkoueRknLt9N8y12FReVsodQK3xXcesWZc"
                          }
                />
            </Flex>
        </Container>
    );
}
