
import prisma from "../../lib/prisma"

export function findUserByEmail(email) {
  return prisma.user.findUnique({ where: {email} })
}


// create User
export function createUser(data) {
  return prisma.user.create({ data: { data } })
}