import {
    LivepeerConfig,
    createReactClient,
    studioProvider,
  } from '@livepeer/react';

  export const livepeerClient = createReactClient({
    provider: studioProvider({
      apiKey: "162effc0-a8d3-4d13-8aaa-eb5a59a4cf1d",
    }),
  });
   