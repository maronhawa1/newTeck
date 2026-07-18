import React from 'react'
import './HabitCard.css'
export default function HabitCard({habitName, onDelete,onDone}) {
  return (
    <div className="habitCard"> 
    

        {habitName}
        <button className="deleteBtn" onClick={onDelete}>Delete</button>
        <button className="doneBtn" onClick={onDone}>Done</button>
    
     

    </div>
  )
}
