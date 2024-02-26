import './App.css';
import { useState } from 'react';

function App() {
const [name, setName] = useState('Filip')
const [events, setEvents] = useState([
  {title: "Filip have birthday", id:1},
  {title: "JavaScript is programming language", id:2},
  {title: "Liverpool win trophy", id:3}
  
])
const handleClick = () => {
  setName('Gabriela')
  
}
  return (
    <div className="App">
     <h1>My name is {name}</h1>
     <button onClick={handleClick}>Change Name</button>
     {events.map((event, index) => (
      // use key for have unique id
      <div key={event.id}> 
        <h2>{index+1} - {event.title}</h2>
      </div>
     ))}
    </div>

  );
  
}

export default App;
