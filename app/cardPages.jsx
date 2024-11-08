'use client';
import React from 'react';
import { useEffect, useState } from 'react'
let readyCards = []
let drawnCard
let DataHotel = { 
  id:0, prompt:"", Answer:"", AnswerReversed: "", image:"" }

let level
let showCardButton = true
let showAnswerButton = false

let showCheckButtons = false

let quizPage = true
let viewPage = false
let letsStart = false



export default function home(props){

  const data = props.data.map((card, index) =>{
    return {card}})

    console.log(data)

    const cardNames = props.data.map((card, index) =>{
      return <div>{card.prompt}</div>
      //<button className="cardViewButton">
        //  <label>{card.prompt}</label>
       // <img className="cardViewImage" src={card.image}/>
      //</button>
    })
    const cardImage = props.data.map((card, index) =>{
      return <div>{card.image}</div>
    })

const [cardDisplay, setCardDisplay] = useState({
                   id:0, prompt:"", Answer:"", AnswerReversed: "", image:""});

                   console.log(cardNames)
                   console.log(cardImage)

                   return(
                    <div>
                      {cardImage[0]}
                      <button className="cardViewButton" onClick={() => showCard(0)}>
          <label>{cardNames[0]}</label>
        <img className="cardViewImage" src={cardImage[0]}/>
      </button>
                    </div>
                   )

  /*return (
    <div><text>

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

          {cardNames}
        
        <p><button className="cardViewButton" onClick={() => showCard(0)}>
          <label>{cardNames[0]}</label>
        <img className="cardViewImage" src={cardImage[0]}/>
      </button>
      <button className="cardViewButton" onClick={() => showCard(1)}>
          <label>{cardNames[1]}</label>
        <img className="cardViewImage" src={cardImage[1]}/>
      </button>
      <button className="cardViewButton" onClick={() => showCard(2)}>
          <label>{cardNames[2]}</label>
        <img className="cardViewImage" src={cardImage[2]}/>
      </button>
      <button className="cardViewButton" onClick={() => showCard(3)}>
          <label>{cardNames[3]}</label>
        <img className="cardViewImage" src={cardImage[3]}/>
      </button>
      <button className="cardViewButton" onClick={() => showCard(4)}>
          <label>{cardNames[4]}</label>
        <img className="cardViewImage" src={cardImage[4]}/>
      </button>
      <button className="cardViewButton" onClick={() => showCard(5)}>
          <label>{cardNames[5]}</label>
        <img className="cardViewImage" src={cardImage[5]}/>
      </button>
      <button className="cardViewButton" onClick={() => showCard(6)}>
          <label>{cardNames[6]}</label>
        <img className="cardViewImage" src={cardImage[6]}/>
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


      
     </text></div>
  )*/




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

function showCard(drawnCard){
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

function easy(drawnCard){
  data[drawnCard]["difficulty"] = 1
  data[drawnCard]["scheduledTime"] = 16;
}
function medium(drawnCard){
  data[drawnCard]["difficulty"] = 3
  data[drawnCard]["scheduledTime"] = 5;
}
function hard(drawnCard){
  data[drawnCard]["difficulty"] = 5
  data[drawnCard]["scheduledTime"] = 1;
}

}