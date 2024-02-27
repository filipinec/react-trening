import './App.css';
import { useState } from 'react';
import Title from './components/Title'

function App() {

const [showEvents, setShowEvents] = useState(true)
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

const subtitle = "All the latest events in Marioland"

  return (
    <div className="App">

      <Title title = "Events in Your Area" subtitle = {subtitle}/>
      <Title title = "Another Title" subtitle = "Another Subtitle"/>
      {showEvents && (
      <div>
        <button onClick={() => setShowEvents(false)}>Hide Events</button>
      </div>
      )}
      {!showEvents && (<div>
        <button onClick={() => setShowEvents(true)}>Show Events</button>
      </div>
      )}

     {showEvents && events.map((event, index) => (
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
