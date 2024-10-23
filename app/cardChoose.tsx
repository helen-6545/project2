'use client';
import React from "react";
import { useEffect, useState } from 'react'
import {useRouter} from "next/navigation";
let readyCards: string[] = []
//import object from './database.json'
/*let object;
fetch('database.json')
  .then(response => response.json())
  .then(data => {
    object=data;
    console.log(data);
  })
  .catch(error => {
    console.error('Error fetching JSON:', error);
  });*/

  export default function cardChoose(){
    const router = useRouter();
    const [data, setData] = useState(null);
    useEffect(() => {
      fetch('/database.json')
          .then(response => response.json())
          .then(data => setData(data));
  }, []);

  console.log(readyCards)
  console.log(data)
  return (
    <>
    <text>
      <p><button className="homeButtons" onClick={chooseCard}>
          Next Card!
        </button></p>
     </text></>
  )






//functions:    
function chooseCard(){
    console.log("test")
    if(data != null){

        for(let i=0; i<22; i++){
            console.log("loop")
           if (data[String(i)]["scheduledTime"]==0){
            readyCards.push(String(i))
           }

        }
        console.log(readyCards)
    //data.filter
    //if (object.scheduledTime == 0) {
    //    div.append(prompt);
    // }
}}

function difficultyLevel(level, questionResult){
    if (questionResult==false){
        level = 5;
    }
    if (questionResult==true){
        level = level-1;
        if (level=0){
            level=1;
        }
    }
}

function scheduleDrop(level){
    if (object.scheduledTime != 0) {
        object.scheduledTime=object.scheduledTime-1;
  }
}

function scheduleSet(level){
    if (level = 1) {
        object.scheduledTime = 16;
    }
    if (level = 2) {
        object.scheduledTime = 10;
    }
    if (level = 3) {
        object.scheduledTime = 5;
    }
    if (level = 4) {
        object.scheduledTime = 2;
    }
    if (level = 5) {
        object.scheduledTime = 1;
    }
}
  }