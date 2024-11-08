'use server'
import { PrismaClient } from '@prisma/client'
import Home from './cardPages'
const prisma = new PrismaClient()


export default async function extract() {

const dataList = await prisma.card.findMany()



return( <div>
    <Home data={dataList}>

    </Home>
</div> )
}
