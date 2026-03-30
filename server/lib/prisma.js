
import { PrismaPg } from '@prisma/adapter-pg'
import { PrismaClient } from "@prisma/client";
import 'dotenv/config'


const connectionString = `${process.env.DATABASE_URL}`

const adapter = new PrismaPg({ connectionString })
const prisma = globalThis.prisma || new PrismaClient({ adapter })

if(process.env.NODE_ENV !== 'production') {
  globalThis.prisma = prisma
}


export default prisma 