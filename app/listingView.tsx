import { PrismaClient } from '@prisma/client'


export default async function Page( ) {

const prisma = new PrismaClient()
const data = await prisma.card.findMany()

//const videoList = videos.map((card, index) =>
//<li key = {index}>{video.name}</li> 
//)


return( <>
{data}
</> )
}