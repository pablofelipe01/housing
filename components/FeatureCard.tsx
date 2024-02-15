import { Card, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import React from "react"; // Import React for React.ReactNode type

type Props = {
    step: string;
    title: string;
    description: React.ReactNode; // Change the type from string to React.ReactNode
};

export default function FeatureCard({ step, title, description }: Props) {
    return (
        <Card px={8} py={10}>
          <Stack spacing={8}>
            <Flex flexDirection={"row"} alignItems={"center"}>
                <Text fontSize={"large"} mr={4}>{step}</Text>
                <Heading fontSize={"2xl"}>{title}</Heading>
            </Flex>
            {/* Since description can now be JSX, it's directly renderable */}
            <Text fontSize={"large"} ml={10} as="div">{description}</Text> 
          </Stack>
        </Card>
    );
};
