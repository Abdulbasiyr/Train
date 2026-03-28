

import prisma from '../../lib/prisma.js'


// create user
export function createUser(data) {
  return prisma.user.create({data, select: { id: true, name: true, email: true } })
}


// find by email
export function findUserByEmail(email) {
  return prisma.findUnique({ where: {email}, select: {id: true, email:true, password: true} })
}