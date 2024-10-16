'use client';
import React from "react";
import {useRouter} from "next/navigation";


export default function home(){
  const router = useRouter();
  return (
    <><text>
      You're in the notes page yayy
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
}