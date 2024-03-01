
import ReactDOM  from 'react-dom';
import './Modal.css';
import React from 'react'

export default function Modal({children, handleClose, isSalesModal}) {
  return ReactDOM.createPortal((
    <div className='modal-backdrop'>
      <div className='modal' style={{
        border: "4px solid",
         borderColor: isSalesModal ? "#ff4500" : "555",
         textAlign: "center"
      }}>
        {children}
      <br />
        <button 
        onClick={handleClose}
        className={isSalesModal ? "sales-btn" : ""} 
        >Close</button>
      </div>
    </div>
  ), document.body)
}
