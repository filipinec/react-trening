import React from 'react'

export default function EventList({events , handleClick}) {
  return (
    <div>
      {events.map((event, index) => (
      // use key for have unique id
      <div key={event.id}> 
        <h2>{index+1} - {event.title}</h2>
        <button onClick={() => handleClick(event.id)}>Delete</button>
      </div>
     ))}
    </div>
  )
}
