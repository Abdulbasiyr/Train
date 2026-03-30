
import prisma from "../../lib/prisma.js"


// create
export function createUser(data) {
  return prisma.user.create({ data, select: { id: true, name: true, email: true } })
} 

// find user by email
export function findUserByEmail(email) {
  return prisma.user.findMany({where: {email}, select: { id: true, name: true, email: true, password: true }})
}