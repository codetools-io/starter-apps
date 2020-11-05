import React from 'react';
import { Box, Layer } from 'grommet';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';

const Placeholder = () => {
  <Box>Placeholder</Box>;
};
const PlaceholderWithAuth = withAuthenticator(Placeholder);

export default function Login() {
  return (
    <Layer full={true} modal={true}>
      <PlaceholderWithAuth />
    </Layer>
  );
}
