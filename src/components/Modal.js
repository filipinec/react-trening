import './Modal.css';
import React from 'react'

export default function Modal({children}) {
  return (
    <div className='modal-backdrop'>
      <div className='modal'>
        {children}
      </div>
    </div>
  )
}
