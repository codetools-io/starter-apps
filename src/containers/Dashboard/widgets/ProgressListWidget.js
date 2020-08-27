import React from 'react';
import { Box, Heading, Meter, Paragraph } from 'grommet';

function Progress({ value, color, label }) {
  return (
    <Box gap="xsmall">
      {label && (
        <Heading level={5} margin="none">
          {label}
        </Heading>
      )}

      <Meter
        aria-label="meter"
        type="bar"
        values={[{ value, color, label }]}
        width="100%"
      />
    </Box>
  );
}
export default function ProgressListWidget({
  id,
  title,
  data,
  description,
  ...props
}) {
  return (
    <Box background="white" pad="medium" gap="medium" border {...props}>
      {title && (
        <Heading level="4" margin="none">
          {title}
        </Heading>
      )}

      <Box gap="medium">
        {data?.map((datum, index) => {
          return <Progress key={`plw-${id}-${index}`} {...datum} />;
        })}
      </Box>

      {description && (
        <Paragraph margin="none" color="dark-6">
          {description}
        </Paragraph>
      )}
    </Box>
  );
}
