import React, { useState } from 'react'

const Notes = () => {
    const [notes ,setNotes] = useState(localStorage.getItem('notes'))
  return (
    <div>
      <p>Notes</p>
      <textarea 
      value={notes} 
      onInput={e => {setNotes(e.target.value),localStorage.setItem('notes',e.target.value)}} 
      cols="30" 
      rows="10"
      style={{
        maxHeight : '200px',
        maxWidth : '400px'
      }}
      >
      </textarea>
    </div>
  )
}

export default Notes
