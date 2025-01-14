import { createClient } from 'drizzle-orm';

const drizzleConfig = process.env.DRIZZLE_CONFIG;
const drizzle = createClient(drizzleConfig);

export default drizzle;
