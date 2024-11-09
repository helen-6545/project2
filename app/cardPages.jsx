'use client';
import React from 'react';
import {useState } from 'react'
import {useRouter} from "next/navigation";
let readyCards = []
let drawnCard
let DataHotel = { 
  id:0, prompt:"", Answer:"", AnswerReversed: "", image:"",difficulty:0}

let level
let showCardButton = true
let showAnswerButton = false

let showCheckButtons = false

let quizPage = true
let viewPage = false
let letsStart = false

let cardDifficulty = []
let cardSchedule = []



for(let i=0; i<22; i++){
cardDifficulty.push(3) 
}
for(let i=0; i<22; i++){
cardSchedule.push(0) 
}



export default function Home(props){

  const router = useRouter();



    const cardNames = props.data.map((card) =>{
      return <div>{card.prompt}</div>
    })
    const cardAnswer = props.data.map((card) =>{
      return <div>{card.Answer}</div>
    })
    const cardAnswerReversed = props.data.map((card) =>{
      return <div>{card.AnswerReversed}</div>
    })
    const cardImage = props.data.map((card) =>{
      return <img className="cardViewImage" src={card.image}/>
    })
    const cardImageDisplay = props.data.map((card) =>{
      return <img className="cardViewImageBig" src={card.image}/>
    })



const [cardDisplay, setCardDisplay] = useState({
                   id:0, prompt:"", Answer:"", AnswerReversed: "", image:"", notes: "", difficulty:0});

                

  return (
    <div><text>

<p className="center"><button className="linkButtons" onClick={quizPageShow}>
          Quiz
        </button>
        <button className="linkButtons" onClick={viewPageShow}>
          All Cards
        </button></p>

        {!letsStart && <p className="center"><img className="cardViewImageBig" src={"/Images/cardBack.jpg"}/></p>}
      
        {quizPage && <div>

        
       {letsStart && <div className="center"><div>{letsStart && <>{cardDisplay["image"]}</>}</div>

       <div>{showAnswerButton && <div><p className="center">Think about the answer. </p>
        <p className="center">For added challenge think of the reversed meaning. </p>
        <p className="center">When you're ready click the button!</p></div>}
      {showCheckButtons && <div>Good job! Now mark your answer as right or wrong!</div>}
      <br /> <br />

    

      <div className="center">Your card is number {cardDisplay["id"]}: </div>
      <div className="center">{cardDisplay["prompt"]}</div>
      <br /> <br />

      <p className="center">{showAnswerButton && <button className="answerButton" onClick={showAnswer}>
        Show Answer
      </button>}</p>

      {cardDisplay["Answer"]}
      <br/>
      {cardDisplay["AnswerReversed"]}</div></div>}

      <br />

      <p className="center">{showCardButton && <button className="cardButton" onClick={chooseCard}>
        Next Card!
      </button>}</p>

      <br />

      {showCheckButtons &&<p className = "center"><button className="checkButtons" onClick={rightAnswer}>
        Correct!
      </button>
      <button className="checkButtons" onClick={wrongAnswer}>
        Wrong...
      </button></p>}</div>}

      {viewPage && <div>

        {letsStart && <div className="center"><div>{cardDisplay["image"]}</div>
        <p>{cardDisplay["id"]}: {cardDisplay["prompt"]}
        <br />
        {cardDisplay["Answer"]}
        <br /> <br />
        {cardDisplay["AnswerReversed"]}
        <br /> <br />
        <p>This card is currently set at level {cardDisplay["difficulty"]} difficulty.</p>
        <br />
        <p>Do you find this card...</p>
        <p><button className="checkButtons" onClick={() => easy(cardDisplay["id"])}>
          <label>Easy</label></button>
          <button className="checkButtons" onClick={() => medium(cardDisplay["id"])}>
          <label>Medium</label></button>
          <button className="checkButtons" onClick={() => hard(cardDisplay["id"])}>
          <label>Hard</label></button></p></p></div>}

          
        
        <p className="center"><button className="cardViewButton" onClick={() => showCard(0)}>
          <label>{cardNames[0]}</label>
          {cardImage[0]}
          </button>
      <button className="cardViewButton" onClick={() => showCard(1)}>
          <label>{cardNames[1]}</label>
          {cardImage[1]}
      </button>
      <button className="cardViewButton" onClick={() => showCard(2)}>
          <label>{cardNames[2]}</label>
          {cardImage[2]}
      </button>
      <button className="cardViewButton" onClick={() => showCard(3)}>
          <label>{cardNames[3]}</label>
          {cardImage[3]}
      </button>
      <button className="cardViewButton" onClick={() => showCard(4)}>
          <label>{cardNames[4]}</label>
          {cardImage[4]}
      </button>
      <button className="cardViewButton" onClick={() => showCard(5)}>
          <label>{cardNames[5]}</label>
        {cardImage[5]}
      </button>
      <button className="cardViewButton" onClick={() => showCard(6)}>
          <label>{cardNames[6]}</label>
          {cardImage[6]}
        </button>
        <button className="cardViewButton" onClick={() => showCard(7)}>
          <label>{cardNames[7]}</label>
          {cardImage[7]}
      </button></p>

      <p className="center"><button className="cardViewButton" onClick={() => showCard(8)}>
          <label>{cardNames[8]}</label>
          {cardImage[8]}
      </button>
      <button className="cardViewButton" onClick={() => showCard(9)}>
          <label>{cardNames[9]}</label>
          {cardImage[9]}
      </button>
      <button className="cardViewButton" onClick={() => showCard(10)}>
          <label>{cardNames[10]}</label>
          {cardImage[10]}
      </button>
      <button className="cardViewButton" onClick={() => showCard(11)}>
          <label>{cardNames[11]}</label>
          {cardImage[11]}
      </button>
      <button className="cardViewButton" onClick={() => showCard(12)}>
          <label>{cardNames[12]}</label>
          {cardImage[12]}
      </button>
      <button className="cardViewButton" onClick={() => showCard(13)}>
          <label>{cardNames[13]}</label>
          {cardImage[13]}
      </button>
      <button className="cardViewButton" onClick={() => showCard(14)}>
          <label>{cardNames[14]}</label>
          {cardImage[14]}
      </button>
      <button className="cardViewButton" onClick={() => showCard(15)}>
          <label>{cardNames[15]}</label>
          {cardImage[15]}
      </button></p>

      <p className="center"><button className="cardViewButton" onClick={() => showCard(16)}>
          <label>{cardNames[16]}</label>
          {cardImage[16]}
      </button>
      <button className="cardViewButton" onClick={() => showCard(17)}>
          <label>{cardNames[17]}</label>
          {cardImage[17]}
      </button>
      <button className="cardViewButton" onClick={() => showCard(18)}>
          <label>{cardNames[18]}</label>
          {cardImage[18]}
      </button>
      <button className="cardViewButton" onClick={() => showCard(19)}>
          <label>{cardNames[19]}</label>
          {cardImage[19]}
      </button>
      <button className="cardViewButton" onClick={() => showCard(20)}>
          <label>{cardNames[20]}</label>
          {cardImage[20]}
      </button>
      <button className="cardViewButton" onClick={() => showCard(21)}>
          <label>{cardNames[21]}</label>
          {cardImage[21]}
      </button></p>
        </div>}


      
     </text></div>
  )




  //functions:    

function viewPageShow(){
  quizPage=false
  showCardButton = true
  letsStart = false
  viewPage=true
  router.refresh()
}

function quizPageShow(){
  quizPage=true
  letsStart = false
  viewPage=false
  router.refresh()
}

function chooseCard(){
  if(data != null){
    readyCards=[]
      for(let i=0; i<22; i++){
         if (cardSchedule[i]==0){
          readyCards.push(i)
         }

      }
      console.log(readyCards)

      drawnCard = readyCards[Math.floor(Math.random()*readyCards.length)]

      console.log(drawnCard)
      DataHotel["id"] = drawnCard
      DataHotel["prompt"] = cardNames[drawnCard]
      DataHotel["Answer"] = ""
      DataHotel["AnswerReversed"] = ""
      DataHotel["image"] = cardImageDisplay[drawnCard]
      setCardDisplay(DataHotel)
      showCardButton = false
      letsStart = true
      showAnswerButton = true
      router.refresh()
}}

function showAnswer(){
  if(data != null){
  DataHotel["id"] = drawnCard
  DataHotel["prompt"] = cardNames[drawnCard]
  DataHotel["Answer"] = cardAnswer[drawnCard]
  DataHotel["AnswerReversed"] = cardAnswerReversed[drawnCard]
  DataHotel["image"] = cardImageDisplay[drawnCard]
  setCardDisplay(DataHotel)
  showAnswerButton = false
  showCheckButtons = true
  router.refresh()
}}

function rightAnswer(){
  level = cardDifficulty[drawnCard]
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
  cardDifficulty[drawnCard] = level

  for(let i=0; i<22; i++){
  if (cardSchedule[i] != 0) {
    cardSchedule[i]=cardSchedule[i]-1
}}

if (level == 1) {
  cardSchedule[drawnCard] = 16;
}
if (level == 2) {
  cardSchedule[drawnCard] = 10;
}
if (level == 3) {
  cardSchedule[drawnCard] = 5;
}
if (level == 4) {
  cardSchedule[drawnCard] = 2;
}
if (level == 5) {
  cardSchedule[drawnCard] = 1;
}
showCheckButtons = false
showCardButton = true
router.refresh()
console.log(data)
}

function showCard(drawnCard){
  if(data != null){
  DataHotel["id"] = drawnCard
  DataHotel["prompt"] = cardNames[drawnCard]
  DataHotel["Answer"] = cardAnswer[drawnCard]
  DataHotel["AnswerReversed"] = cardAnswerReversed[drawnCard]
  DataHotel["image"] = cardImageDisplay[drawnCard]
  DataHotel["difficulty"] = cardDifficulty[drawnCard]
    setCardDisplay(DataHotel)
    letsStart = true
    router.refresh()
  }
}

function easy(drawnCard){
  cardDifficulty[drawnCard] = 1
  cardSchedule[drawnCard] = 16;
  DataHotel["difficulty"] = cardDifficulty[drawnCard]
    setCardDisplay(DataHotel)
  router.refresh()
}
function medium(drawnCard){
  cardDifficulty[drawnCard] = 3
  cardSchedule[drawnCard] = 5;
  DataHotel["difficulty"] = cardDifficulty[drawnCard]
    setCardDisplay(DataHotel)
  router.refresh()
}
function hard(drawnCard){
  cardDifficulty[drawnCard] = 5
  cardSchedule[drawnCard] = 1;
  DataHotel["difficulty"] = cardDifficulty[drawnCard]
    setCardDisplay(DataHotel)
    console.log(cardDifficulty)
  router.refresh()
}

}