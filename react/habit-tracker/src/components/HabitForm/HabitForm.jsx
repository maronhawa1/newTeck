import React from 'react'
import { useState } from 'react'
import HabitCard from '../HabitCard/HabitCard.jsx'
import SummaryBanner from '../SummaryBanner/SummaryBanner.jsx'
import './HabitForm.css'
export default function HabitForm() {
    const [habitName,setHabitName]=useState('')
    const [habits,setHabits]=useState([])
    const [nextId,setNextId]=useState(0)
    const [done,setDone]=useState(0)
    const [total, setTotal] = useState(0)

 
  return (
  <>
    <h1>Habit Tracker Dashboard</h1>
    <div className='habit-form'>
      <div className="input-row">
        <input
          className="habit-input"
          type="text"
          placeholder="New habit..."
          value={habitName}
          onChange={(e) => setHabitName(e.target.value)}
        />
        <button className='add-btn' onClick={() => {
          if (habitName.trim() !== '') {
            setHabits([...habits, { id: nextId, habitName: habitName }])
            setNextId(nextId + 1)
            setTotal(total + 1)
            setHabitName('')
          } else {
            alert('Please enter a valid habit name.')
          }
        }}>Add</button>
      </div>

      <SummaryBanner done={done} total={total} />

      <ul>
        {habits.map(habit => (
          <HabitCard
            key={habit.id}
            habitName={habit.habitName}
onDelete={() => {
  setHabits(habits.filter(h => h.id !== habit.id))
  setTotal(total - 1)
}}
                
            
            onDone={() => {
              setDone(done + 1)
              setHabits(habits.filter(h => h.id !== habit.id))
            }}
          />
        ))}
      </ul>

      {habits.length === 0 && <p className="empty-state">No habits yet — add one!</p>}
    </div>
  </>
)
}
