import { useMemo, useState } from 'react';

const { PUBLIC_URL } = process.env;
export default function useProfile() {
  const [mastheadImage] = useState(
    `${PUBLIC_URL}/placeholder/img/space/astronaut3.jpeg`
  );
  const [mastheadText] = useState("Hi. I'm John!");
  const [posts] = useState([
    {
      id: 'john-post-1',
      image: `${PUBLIC_URL}/placeholder/img/space/craters.jpeg`,
    },
    {
      id: 'john-post-2',
      image: `${PUBLIC_URL}/placeholder/img/space/gas.jpeg`,
    },
    {
      id: 'john-post-3',
      image: `${PUBLIC_URL}/placeholder/img/space/gas-ball.jpeg`,
    },
    {
      id: 'john-post-4',
      image: `${PUBLIC_URL}/placeholder/img/space/united-states.jpeg`,
    },
    {
      id: 'john-post-5',
      image: `${PUBLIC_URL}/placeholder/img/space/astronaut1.jpeg`,
    },
  ]);
  const [followers] = useState([
    {
      id: 'john-follower-1',
      profile: `${PUBLIC_URL}/placeholder/img/people/musician.jpg`,
      firstName: 'John',
      lastName: 'Doe',
    },
  ]);
  const [following] = useState([
    {
      id: 'john-following-1',
      profile: `${PUBLIC_URL}/placeholder/img/people/girl-with-sparkler.jpg`,
      firstName: 'Jane',
      lastName: 'Doe',
    },
  ]);
  const profile = useMemo(() => {
    return {
      mastheadImage,
      mastheadText,
      posts,
      following,
      followers,
    };
  }, [mastheadImage, mastheadText, posts, followers, following]);

  return profile;
}
