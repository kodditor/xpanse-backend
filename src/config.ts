import { config as dotenvConfig } from 'dotenv';

dotenvConfig();

export const config = {
  auth: {
    key: process.env.ACCESS_API_KEY,
  },
};
