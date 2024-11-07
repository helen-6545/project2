'use client';
import React from 'react';
import { useEffect, useState } from 'react'
import { PrismaClient } from '@prisma/client'
let readyCards: number[] = []
let drawnCard: number
let DataHotel: {id: number; prompt: string; Answer: string; AnswerReversed: string; image: string} = { 
  id:0, prompt:"", Answer:"", AnswerReversed: "", image:"" }

//any[] = [" ", " ", " ", " ", " "]

let level: number
let showCardButton = true
let showAnswerButton = false

let showCheckButtons = false

let quizPage = true
let viewPage = false
let letsStart = false

//import data from './listingView'

const prisma = new PrismaClient()

export default async function home(){
  //const router = useRouter();

  const data = await prisma.card.findMany()

  //const [data, setData] = useState<any>([]);
  //useEffect(() => {
    //fetch('/database.json')
      //  .then(response => response.json())
        //.then(data => setData(data));
//}, []);

const [cardDisplay, setCardDisplay] = useState<{id: number; prompt: string; Answer: string; AnswerReversed: string; image: string}>({
                    id:0, prompt:"", Answer:"", AnswerReversed: "", image:""});

//React.useState([, , , , ]);

  return (
    <><text>

<p><button className="linkButtons" onClick={quizPageShow}>
          Quiz
        </button>
        <button className="linkButtons" onClick={viewPageShow}>
          All Cards
        </button></p>


      {quizPage && <div>
        {letsStart && <div>
      Think about the answer. For added challenge think of the reversed meaning. When you're ready click the button!
      <br /> <br />

      <img src = {cardDisplay["image"]}/>

      Your card is number {cardDisplay["id"]}: {cardDisplay["prompt"]}...


      <p>{showAnswerButton && <button className="answerButton" onClick={showAnswer}>
        Show Answer
      </button>}</p>

      {cardDisplay["Answer"]}
      <br /> <br />
      {cardDisplay["AnswerReversed"]}</div>}

      <br />

      <p>{showCardButton && <button className="cardButton" onClick={chooseCard}>
        Next Card!
      </button>}</p>

      <br />

      <p>{showCheckButtons && <button className="checkButtons" onClick={rightAnswer}>
        Correct!
      </button>}
      {showCheckButtons && <button className="checkButtons" onClick={wrongAnswer}>
        Wrong...
      </button>}</p></div>}

      {viewPage && <div>

        {letsStart && <p><img src = {cardDisplay["image"]}/>
        {cardDisplay["id"]}: {cardDisplay["prompt"]}
        <br />
        {cardDisplay["Answer"]}
        <br /> <br />
        {cardDisplay["AnswerReversed"]}
        <br /> <br />
        Do you find this card...
        <p><button className="checkButtons" onClick={() => easy(cardDisplay["id"])}>
          <label>Easy</label></button>
          <button className="checkButtons" onClick={() => medium(cardDisplay["id"])}>
          <label>Medium</label></button>
          <button className="checkButtons" onClick={() => hard(cardDisplay["id"])}>
          <label>Hard</label></button></p></p>}
        
        <p><button className="cardViewButton" onClick={() => showCard(0)}>
          <label>{data[0]["prompt"]}</label>
        <img className="cardViewImage" src={data[0]["image"]}/>
      </button>
      <button className="cardViewButton" onClick={() => showCard(1)}>
          <label>{data[1]["prompt"]}</label>
        <img className="cardViewImage" src={data[1]["image"]}/>
      </button>
      <button className="cardViewButton" onClick={() => showCard(2)}>
          <label>{data[2]["prompt"]}</label>
        <img className="cardViewImage" src={data[2]["image"]}/>
      </button>
      <button className="cardViewButton" onClick={() => showCard(3)}>
          <label>{data[3]["prompt"]}</label>
        <img className="cardViewImage" src={data[3]["image"]}/>
      </button>
      <button className="cardViewButton" onClick={() => showCard(4)}>
          <label>{data[4]["prompt"]}</label>
        <img className="cardViewImage" src={data[4]["image"]}/>
      </button>
      <button className="cardViewButton" onClick={() => showCard(5)}>
          <label>{data[5]["prompt"]}</label>
        <img className="cardViewImage" src={data[5]["image"]}/>
      </button>
      <button className="cardViewButton" onClick={() => showCard(6)}>
          <label>{data[6]["prompt"]}</label>
        <img className="cardViewImage" src={data[6]["image"]}/>
        </button>
        <button className="cardViewButton" onClick={() => showCard(7)}>
          <label>{data[7]["prompt"]}</label>
        <img className="cardViewImage" src={data[7]["image"]}/>
      </button></p>

      <p><button className="cardViewButton" onClick={() => showCard(8)}>
          <label>{data[8]["prompt"]}</label>
        <img className="cardViewImage" src={data[8]["image"]}/>
      </button>
      <button className="cardViewButton" onClick={() => showCard(9)}>
          <label>{data[9]["prompt"]}</label>
        <img className="cardViewImage" src={data[9]["image"]}/>
      </button>
      <button className="cardViewButton" onClick={() => showCard(10)}>
          <label>{data[10]["prompt"]}</label>
        <img className="cardViewImage" src={data[10]["image"]}/>
      </button>
      <button className="cardViewButton" onClick={() => showCard(11)}>
          <label>{data[11]["prompt"]}</label>
        <img className="cardViewImage" src={data[11]["image"]}/>
      </button>
      <button className="cardViewButton" onClick={() => showCard(12)}>
          <label>{data[12]["prompt"]}</label>
        <img className="cardViewImage" src={data[12]["image"]}/>
      </button>
      <button className="cardViewButton" onClick={() => showCard(13)}>
          <label>{data[13]["prompt"]}</label>
        <img className="cardViewImage" src={data[13]["image"]}/>
      </button>
      <button className="cardViewButton" onClick={() => showCard(14)}>
          <label>{data[14]["prompt"]}</label>
        <img className="cardViewImage" src={data[14]["image"]}/>
      </button>
      <button className="cardViewButton" onClick={() => showCard(15)}>
          <label>{data[15]["prompt"]}</label>
        <img className="cardViewImage" src={data[15]["image"]}/>
      </button></p>

      <p><button className="cardViewButton" onClick={() => showCard(16)}>
          <label>{data[16]["prompt"]}</label>
        <img className="cardViewImage" src={data[16]["image"]}/>
      </button>
      <button className="cardViewButton" onClick={() => showCard(17)}>
          <label>{data[17]["prompt"]}</label>
        <img className="cardViewImage" src={data[17]["image"]}/>
      </button>
      <button className="cardViewButton" onClick={() => showCard(18)}>
          <label>{data[18]["prompt"]}</label>
        <img className="cardViewImage" src={data[18]["image"]}/>
      </button>
      <button className="cardViewButton" onClick={() => showCard(19)}>
          <label>{data[19]["prompt"]}</label>
        <img className="cardViewImage" src={data[19]["image"]}/>
      </button>
      <button className="cardViewButton" onClick={() => showCard(20)}>
          <label>{data[20]["prompt"]}</label>
        <img className="cardViewImage" src={data[20]["image"]}/>
      </button>
      <button className="cardViewButton" onClick={() => showCard(21)}>
          <label>{data[21]["prompt"]}</label>
        <img className="cardViewImage" src={data[21]["image"]}/>
      </button></p>
        </div>}


      
     </text></>
  )




  //functions:    

function viewPageShow(){
  quizPage=false
  showCardButton = true
  letsStart = false
  viewPage=true
  window.location.reload()
}

function quizPageShow(){
  quizPage=true
  letsStart = false
  viewPage=false
  window.location.reload()
}

function chooseCard(){
  if(data != null){
    readyCards=[]
      for(let i=0; i<22; i++){
         if (data[i]["scheduledTime"]==0){
          readyCards.push(i)
         }

      }
      console.log(readyCards)

      drawnCard = readyCards[Math.floor(Math.random()*readyCards.length)]

      console.log(drawnCard)
      DataHotel["id"] = drawnCard
      DataHotel["prompt"] = data[drawnCard]["prompt"]
      DataHotel["Answer"] = ""
      DataHotel["AnswerReversed"] = ""
      DataHotel["image"] = data[drawnCard]["image"]
      setCardDisplay(DataHotel)
      showCardButton = false
      letsStart = true
      showAnswerButton = true
      window.location.reload()
}}

function showAnswer(){
  if(data != null){
  DataHotel["id"] = drawnCard
  DataHotel["prompt"] = data[drawnCard]["prompt"]
  DataHotel["Answer"] = data[drawnCard]["Answer"]
  DataHotel["AnswerReversed"] = data[drawnCard]["AnswerReversed"]
  DataHotel["image"] = data[drawnCard]["image"]
  setCardDisplay(DataHotel)
  showAnswerButton = false
  showCheckButtons = true
  window.location.reload()
}}

function rightAnswer(){
  level = data[drawnCard]["difficulty"]
  level = level-1;
  if (level==0){
      level=1;
  }
  reset()
}

function wrongAnswer(){
  level = 5;
  reset()
}

function reset(){
  data[drawnCard]["difficulty"] = level

  for(let i=0; i<22; i++){
  if (data[i]["scheduledTime"] != 0) {
    data[i]["scheduledTime"]=data[i]["scheduledTime"]-1
}}

if (level == 1) {
  data[drawnCard]["scheduledTime"] = 16;
}
if (level == 2) {
  data[drawnCard]["scheduledTime"] = 10;
}
if (level == 3) {
  data[drawnCard]["scheduledTime"] = 5;
}
if (level == 4) {
  data[drawnCard]["scheduledTime"] = 2;
}
if (level == 5) {
  data[drawnCard]["scheduledTime"] = 1;
}
showCheckButtons = false
showCardButton = true
window.location.reload()
console.log(data)
}

function showCard(drawnCard: number){
  if(data != null){
    DataHotel["id"] = drawnCard
    DataHotel["prompt"] = data[drawnCard]["prompt"]
    DataHotel["Answer"] = data[drawnCard]["Answer"]
    DataHotel["AnswerReversed"] = data[drawnCard]["AnswerReversed"]
    DataHotel["image"] = data[drawnCard]["image"]
    setCardDisplay(DataHotel)
    letsStart = true
    window.location.reload()
  }
}

function easy(drawnCard: number){
  data[drawnCard]["difficulty"] = 1
  data[drawnCard]["scheduledTime"] = 16;
}
function medium(drawnCard: number){
  data[drawnCard]["difficulty"] = 3
  data[drawnCard]["scheduledTime"] = 5;
}
function hard(drawnCard: number){
  data[drawnCard]["difficulty"] = 5
  data[drawnCard]["scheduledTime"] = 1;
}

}