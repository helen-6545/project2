'use client';
import React from "react";
import {useRouter} from "next/navigation";
import { useEffect, useState } from 'react'
//import Script from 'next/script'
let readyCards: string[] = []
let drawnCard = ""
let DataHotel = [" ", " ", " ", " "]
//import CardChoose from "./cardChoose"
let level: number
let showCardButton = true
let showAnswerButton = false
let showCheckButtons = false



export default function home(){
  const router = useRouter();
  const [data, setData] = useState<any>([]);
  useEffect(() => {
    fetch('/database.json')
        .then(response => response.json())
        .then(data => setData(data));
}, []);

const [cardDisplay, setCardDisplay] = React.useState([" ", " ", " ", " "]);

  return (
    <><text>
<br /> <br /><br /> <br />
      <p>{showCardButton && <button className="cardButton" onClick={chooseCard}>
        Next Card!
      </button>}</p>

      Think about the answer. For added challenge think of the reversed meaning. When you're ready click the button!
      <br /> <br />
      Your card is number {cardDisplay[0]}: {cardDisplay[1]}...

      <p>{showAnswerButton && <button className="answerButton" onClick={showAnswer}>
        Show Answer
      </button>}</p>

      {cardDisplay[2]}
      <br /> <br />
      {cardDisplay[3]}

      <p>{showCheckButtons && <button className="checkButtons" onClick={rightAnswer}>
        Correct!
      </button>}
      {showCheckButtons && <button className="checkButtons" onClick={wrongAnswer}>
        Wrong...
      </button>}</p>


      <br /> <br /><br /> <br /><br /> <br />

        <p><button className="linkButtons" onClick={() => router.push('/')}>
          Home
        </button>
      <button className="linkButtons" onClick={() => router.push('/difficultyAssign')}>
          Assign Difficulty
        </button>
        <button className="linkButtons" onClick={() => router.push('/listingView')}>
          All Cards
        </button>
      <button className="linkButtons" onClick={() => router.push('/AddCard')}>
          Add Notes
        </button></p>
     </text></>
  )




  //functions:    
function chooseCard(){
  if(data != null){
    readyCards=[]
      for(let i=0; i<22; i++){
         if (data[String(i)]["scheduledTime"]==0){
          readyCards.push(String(i))
         }

      }
      console.log(readyCards)

      drawnCard = readyCards[Math.floor(Math.random()*readyCards.length)]

      console.log(drawnCard)
      DataHotel[0] = drawnCard
      DataHotel[1] = data[drawnCard]["prompt"]
      DataHotel[2] = ""
      DataHotel[3] = ""
      setCardDisplay(DataHotel)
      showCardButton = false
      showAnswerButton = true
      router.refresh()
}}

function showAnswer(){
  if(data != null){
  DataHotel[0] = drawnCard
  DataHotel[1] = data[drawnCard]["prompt"]
  DataHotel[2] = data[drawnCard]["Answer"]
  DataHotel[3] = data[drawnCard]["AnswerReversed"]
  setCardDisplay(DataHotel)
  showAnswerButton = false
  showCheckButtons = true
  router.refresh()
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
  if (data[String(i)]["scheduledTime"] != 0) {
    data[String(i)]["scheduledTime"]=data[String(i)]["scheduledTime"]-1
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
router.refresh()
console.log(data)
}

}