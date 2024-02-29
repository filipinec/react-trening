import './App.css';
import { useState } from 'react';
import Title from './components/Title'
import Modal from './components/Modal'

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
         {/* <Modal>
          <h2>10% Off Coupon Code!!</h2>
          <p>Use the code NINJA10 at the checkout</p>
         </Modal> */}
         <Modal>
          <h2>Filip Tasevski</h2>
          <p>FrontEnd Developer</p>
          <a href="https://www.google.com/">Search on this</a>
         </Modal>
    </div>

  );
  
}

export default App;
