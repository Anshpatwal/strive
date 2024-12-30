import { currentUser } from "@clerk/nextjs/server"
import { db } from "./prisma"

export const checkUser = async () => {
    const user = await currentUser()
    if (!user) {
        return null
    }

    try {
        const userExist = await db?.user.findUnique({
            where: {
                clerkUserId: user.id
            }
        })
        if (userExist) {
            return
        } else {
            const name = `${user.firstName} ${user.lastName}`
            const imageUrl = user.imageUrl
            const email = user.emailAddresses[0].emailAddress
            const clerkUserId = user.id
            const createUser = await db.user.create({
                data: {
                    name,
                    imageUrl,
                    email,
                    clerkUserId
                }
            })
            return createUser
        }
    } catch (error) {
        console.log(error)
    }

}