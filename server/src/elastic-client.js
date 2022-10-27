import { Client } from '@elastic/elasticsearch';

import * as dotenv from 'dotenv';
dotenv.config({ path: ".elastic.env" });

export const elasticClient = new Client({
  cloud: {
    id: process.env.ELASTIC_CLOUD_ID,
  },
  auth: {
    username: process.env.ELASTIC_USERNAME,
    password: process.env.ELASTIC_PASSWORD,
  },
});