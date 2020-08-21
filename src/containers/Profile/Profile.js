import React from 'react';
import ProfileLayout from 'components/ProfileLayout';
import Gallery from 'components/Gallery';
import Masthead from 'components/Masthead';
import { Box, Heading } from 'grommet';
export default function Profile({ children }) {
  return (
    <ProfileLayout>
      <Box height={{ max: 'medium' }}>
        <Masthead
          imageSrc="//v2.grommet.io/assets/Wilderpeople_Ricky.jpg"
          contentLocation="center"
        >
          <Heading level={1} color="white">
            Hi. I am Jane Doe!
          </Heading>
        </Masthead>
      </Box>
      <Box pad="medium">
        <Gallery>
          <p>Item 1</p>
          <p>Item 2</p>
          <p>Item 3</p>
          <p>Item 4</p>
        </Gallery>
      </Box>
    </ProfileLayout>
  );
}
