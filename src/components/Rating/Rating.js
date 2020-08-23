import React from 'react';
import { Box } from 'grommet';
import { Star } from 'grommet-icons';
export default function Rating({ total = 5, selected = 0 }) {
  const stars = Array(total).fill(Star);

  return (
    <Box direction="row">
      {stars.map((Star, index) => {
        if (index < selected) {
          return <Star key={`rating-star-${index}`} color="#FFC95E" />;
        }

        return <Star key={`rating-star-${index}`} />;
      })}
    </Box>
  );
}
