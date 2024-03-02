import './App.css';
import { useState } from 'react';
import Title from './components/Title'
import Modal from './components/Modal'
import EventList from './components/EventList';
import { NewEventForm } from './components/NewEventForm';

function App() {
const [showModal, setShowModal] = useState(false)
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

const handleClose =() => {
  setShowModal(false)

  }
const handleOpen = () => {
  setShowModal(true)
}
console.log(showModal);

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

     {showEvents && <EventList events = {events} handleClick={handleClick} isSalesModal = {true}/> }
         {/* <Modal>
          <h2>10% Off Coupon Code!!</h2>
          <p>Use the code NINJA10 at the checkout</p>
         </Modal> */}
         {showModal && <Modal handleClose = {handleClose}>
         <NewEventForm />
         </Modal>}
         <div>
         <button onClick={handleOpen}>Add New Event</button>
         </div>
    </div>

  );
  
}


export default App;
