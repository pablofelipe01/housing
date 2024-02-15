import React from 'react';
import { AspectRatio, Box } from '@chakra-ui/react';

const NewWallet = () => {
  return (
    <Box p={4}>
      <AspectRatio ratio={16 / 9}>
        <Box as="iframe"
             title="YouTube Video"
             src="https://www.youtube.com/embed/V7ovgAYrTjU"
             allowFullScreen />
      </AspectRatio>
    </Box>
  );
};

export default NewWallet;
