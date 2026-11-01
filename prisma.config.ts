import 'dotenv/config'

import { defineConfig } from 'prisma/config'

const databaseUrl = process.env.DIRECT_URL ?? process.env.DATABASE_URL ?? 'postgresql://localhost:5432/placeholder'

export default defineConfig({
  schema: 'prisma/schema.prisma',
  migrations: {
    seed: 'node --import dotenv/config prisma/seed.mjs',
  },
  datasource: {
    url: databaseUrl,
  },
})
