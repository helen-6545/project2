'use server'
import { PrismaClient } from '@prisma/client'
import Home from './cardPages'
//let data: {id: number; prompt: string; Answer: string; AnswerReversed: string; image: string; difficulty: number; scheduledTime: number}
//let cardList: any[] = [];
const prisma = new PrismaClient()


/*export default function find(){
extract().then(element => {
return cardList
})
}*/

export default async function extract() {

const dataList = await prisma.card.findMany()



return( <div>
    <Home data={dataList}>

    </Home>
</div> )
}
