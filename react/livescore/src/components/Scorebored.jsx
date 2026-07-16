import React, { useState } from 'react'

export default function Scorebored() {
    const [blueScore, setBlueScore] = useState(0)
    const [redScore, setRedScore] = useState(0)
    const resetScores=()=>{
        setBlueScore(0)
        setRedScore(0)
    }
    
    const incrementBlueScore = () => {

        setBlueScore(blueScore + 1)

    } 
    const incrementRedScore = () => {
        setRedScore(redScore + 1)
    } 
    const decrementBlueScore = () => {
        if (blueScore > 0) {
            setBlueScore(blueScore - 1)
        }
    } 
    const decrementRedScore = () => {
        if (redScore > 0) {
            setRedScore(redScore - 1)
        }
    }

  return (
        <>
        <button onClick={incrementBlueScore}>Increment Blue Score</button>
        <button onClick={decrementBlueScore}>Decrement Blue Score</button>
        <h1>Blue Score: {blueScore}</h1>
        <button onClick={incrementRedScore}>Increment Red Score</button>
        <button onClick={decrementRedScore}>Decrement Red Score</button>
        <h1>Red Score: {redScore}</h1>
        <button onClick={resetScores}>Reset Scores</button>
        </>
  )
}
