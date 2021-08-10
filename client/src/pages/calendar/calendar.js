import React from 'react';
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';

function calendar() {

  return (
    <>
      <div className="sizeContainer">
        <h1 className="datePicker">Choose and confirm a date</h1>
        <div className="signupContainer borderbox  flex center ">
          <div>
            <Calendar className="center"
            // onChange={onSomething}
            // value={value}
            />
          </div>
        </div>
      </div>
    </>
  )
}
export default calendar;
