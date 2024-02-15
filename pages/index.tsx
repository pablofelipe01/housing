import type { NextPage } from "next";
import { Box, Button, Container, Flex, Heading, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import { MediaRenderer } from "@thirdweb-dev/react";
import { FEATURES_IMAGE_URL, HERO_IMAGE_URL } from "../const/addresses";
import FeatureCard from "../components/FeatureCard";
import Link from "next/link";
import Events from "../components/Events";

const Home: NextPage = () => {
  return (
    <Container maxW={"1440px"}>
      <Flex h={"75vh"} px={20} borderRadius={20}>
        <Flex flexDirection={"row"}>
          <Flex flexDirection={"column"} justifyContent={"center"} w={"60%"}>
            <Stack spacing={4}>
              <Heading fontSize={"xl"}>Token housing App</Heading>
              <Heading fontSize={"6xl"}>
                Revolutionizing Real Estate Investment.
              </Heading>
              <Text fontSize={"xl"}>
                Unleashing Unprecedented Opportunities with Our Unique Real-World Asset (RWA) Tokenization Model!
              </Text>
              <Link href={"/claim"} passHref>
                <Button w={"80%"}>Invest</Button>
              </Link>
            </Stack>
          </Flex>
          <Box>
            <MediaRenderer
              src={HERO_IMAGE_URL}
              height="100%"
              width="100%"
            />
          </Box>
        </Flex>
      </Flex>
      <SimpleGrid columns={2} spacing={4} mt={4}>
        <Flex>
          <MediaRenderer
            src={FEATURES_IMAGE_URL}
            height="100%"
            width="80%"
          />
        </Flex>
        <Flex flexDirection={"column"} justifyContent={"center"} alignItems={"center"}>
          <Stack spacing={4}>
            <FeatureCard
              step={"01"}
              title={"Navigate to the Wallet Connection Option"}
              description={"On our platform, locate and click on the -Connect Wallet- button. This is typically found at the top right corner of the homepage."}
            />
            <FeatureCard
              step={"02"}
              title={"Select Your Wallet Provider"}
              description={"A list of supported digital wallet providers will appear. Choose the one that corresponds to your existing wallet."}
            />
            <FeatureCard
              step={"03"}
              title={"Confirmation"}
              description={"Once successfully connected, you will receive a confirmation message. Your wallet is now linked, and you can start engaging with our platform's features and services."}
            />
           <Link href="/newWallet" passHref>
  <FeatureCard
    step={"04"}
    title={"If You Don't Have a Token Wallet"}
    description={
      <span>
        Don`t worry if you`re new to the world of digital tokens and don`t have a wallet yet. <strong style={{ textDecoration: 'underline' }}>CLICK HERE</strong> Setting one up is straightforward, and we`ll guide you through the process.
      </span>
    }
  />
</Link>

          </Stack>
        </Flex>
      </SimpleGrid>
      <Events />
    </Container>
  );
};

export default Home;
