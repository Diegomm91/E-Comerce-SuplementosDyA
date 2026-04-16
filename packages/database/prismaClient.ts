// database/prismaClient.ts
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '@prisma/client';
import pkg from 'pg';

const { Pool } = pkg;

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  // Si usas Supabase Pooling, cambia el puerto a 6543
  // Ejemplo:
  // port: 6543,
});

const adapter = new PrismaPg(pool);

export const prisma = new PrismaClient({
  adapter,
});
