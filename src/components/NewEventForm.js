import React, { useState } from 'react'
import  './NewEventForm.css'

export const NewEventForm = ({addEvent}) => {
  const[title, setTitle] =useState('')
  const[date, setDate] = useState('')

  // Reset Form after Sumbit
  const resetForm = () => {
    setTitle('')
    setDate('')
  }
  // Sumbit Form
  const handleSubmit = (e) => {
    e.preventDefault()
    const event = {
      title: title,
      date: date,
      id: Math.floor(Math.random() * 10000)
    }

    addEvent(event) //Add to Event
    resetForm() //Reset Form
    

    
  }
  
  return (
    <form className='new-event-form' onSubmit = {handleSubmit}>
      <label>
        <span>Event Title:</span>
        <input
         type="text"
         onChange={(e) => setTitle(e.target.value)} value={title}/>
      </label>
      <label>
        <span>Event Date:</span>
        <input
         type="date"
         onChange={(e) => setDate(e.target.value)} value={date}/>
      </label>
      <button>Submit</button>
    </form>
  )
}

