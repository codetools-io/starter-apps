import React from 'react';
import { Anchor, Box, Text } from 'grommet';
import { Github, Mail, Twitter } from 'grommet-icons';

const CONTACT_EMAIL = process.env.REACT_APP_CONTACT_EMAIL;
const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_USER = process.env.REACT_APP_GITHUB_USER;
const TWITTER_URL = process.env.REACT_APP_TWITTER_URL;
const TWITTER_USER = process.env.REACT_APP_TWITTER_USER;

function ContactLink({ href, icon, label }) {
  const Icon = icon;
  return (
    <Anchor href={href}>
      <Box align="center" justify="center" gap="small">
        <Icon size="large" />
        <Text wordBreak="keep-all">{label}</Text>
      </Box>
    </Anchor>
  );
}
export default function ContactPlatforms({ children, ...props }) {
  return (
    <Box
      className="ContactPlatforms"
      direction="row-responsive"
      gap="xlarge"
      justify="center"
      align="center"
      fill="horizontal"
      {...props}
    >
      <ContactLink
        href={`mailto:${CONTACT_EMAIL}`}
        icon={Mail}
        label={CONTACT_EMAIL}
      />
      <ContactLink href={GITHUB_URL} icon={Github} label={GITHUB_USER} />
      <ContactLink href={TWITTER_URL} icon={Twitter} label={TWITTER_USER} />
    </Box>
  );
}
