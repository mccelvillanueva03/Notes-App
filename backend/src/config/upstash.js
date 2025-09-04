import {Redis} from '@upstash/redis';
import { Ratelimit } from '@upstash/ratelimit'; // for rate limiting

import dotenv from 'dotenv';
dotenv.config();

//10 requests per 20 seconds
const ratelimit = new Ratelimit({
    redis: Redis.fromEnv(),
    limiter: Ratelimit.slidingWindow(5, '60 s'),
})

export default ratelimit;