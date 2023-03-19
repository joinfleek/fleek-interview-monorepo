import { PrismaClient } from '@prisma/client'
import * as bcrypt from 'bcryptjs'

const prisma = new PrismaClient()
async function main() {
  const user = await prisma.user.create({
    data: {
      email: `admin@joinfleek.com`,
      name: 'Admin Fleek',
      password: await bcrypt.hash('admin', 10),
      role: 'ADMIN',
      resetPasswordToken: '123',
      validateEmailToken: '',
      isEmailValidated: true,
    },
  })

  console.log({ user })

  if(await prisma.product.count() > 0) {
    return
  }
  
  Array.from({length: 20}, (_, i) => i + 1).map(async (i) => {
    const vendor = await prisma.vendor.create({ 
      data: { 
        name: `Vendor ${i}`,
        email: `vendor=${i}@example.com`,
      }
    })
    
    Array.from({length: 10}, (_, j) => j).map(async (j) => {
      await prisma.product.create({ 
        data: { 
          name: `Product ${i}${j}`,
          price: Math.floor(Math.random() * 1000),
          currency: 'USD',
          vendorId: vendor.id,
          description: `Description for product ${i}${j}}`
        }
      })
    })
  })
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
