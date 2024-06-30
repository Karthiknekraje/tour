import React from 'react'
import {useState} from 'react';
function MyCarousel() {
  let heroData=[
    {text1:"Dive into",text2:"What a beauty"},
    {text1:"Dive into",text2:"What a beauty"},
    {text1:"Dive into",text2:"What a beauty"},
  ]
  const [heroCount,setHeroCount]=useState(2);
  const [playStatus,setPlayStatus]=useState(false);
  return (
    <div></div>
  )
}

export default MyCarousel