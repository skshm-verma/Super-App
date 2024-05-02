import React, { useState } from 'react'
import './Dashboard.css'

const Notes = () => {
  const [notes, setNotes] = useState(localStorage.getItem('notes') || '')

  return (
    <div className='notesDiv'>

      <div className='notesContainer'>
        <p className='notesH'>All Notes</p>
        <textarea
          value={notes}
          onInput={e => { setNotes(e.target.value), localStorage.setItem('notes', e.target.value) }}
          className='notesTextArea'>
        </textarea>
      </div>

    </div>
  )
}

export default Notes
