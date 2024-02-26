import './App.css';
import { useState } from 'react';

function App() {

const [events, setEvents] = useState([
  {title: "Filip have birthday", id:1},
  {title: "JavaScript is programming language", id:2},
  {title: "Liverpool win trophy", id:3}
  
])
const handleClick = (id) => {
setEvents((prevEvents) => {
  return prevEvents.filter((event) => {
    return id !== event.id
  })
})

  
}
  return (
    <div className="App">
     {events.map((event, index) => (
      // use key for have unique id
      <div key={event.id}> 
        <h2>{index+1} - {event.title}</h2>
        <button onClick={() => handleClick(event.id)}>Delete</button>
      </div>
     ))}
    </div>

  );
  
}

export default App;
