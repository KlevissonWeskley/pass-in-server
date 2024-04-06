import { prisma } from '../src/lib/prisma'

async function seed() {
    await prisma.event.create({
        data: {
            id: '5c1b703e-040f-48ab-a3ac-e2d5ea1f787c',
            title: 'Unite Summit',
            slug: 'unite-summit',
            details: 'Um evento para devs',
            maximumAttendees: 120,
        }
    })
}

seed().then(() => {
    console.log('Database seeded!')
    prisma.$disconnect()
})