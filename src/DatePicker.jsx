import React from 'react'
import './datepicker.css'

function DatePicker() {
  return (
    <div className='date-picker-container'>
      <label for="date-picker">Date:</label>
<input type="date" id="date-picker"></input>

    </div>

  )
}

export default DatePicker