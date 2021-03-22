import React, { useState, useEffect } from "react";

{/* ADD EVENT FORM */}
function AddEvent() {
  return (
    <section>
      <h2>Add Event</h2>
      <form id="add-event" action="http://localhost:9000/addEvent" method="POST">
        <fieldset>
          <label htmlFor="name">Name:</label>
          <input
            type="text" name="name"
            id="add-event-name"
            placeholder="Event Name"
          />
        </fieldset>
        <fieldset>
          <label htmlFor="event-category">Category:</label>
          <input
          type="text" name="category"
          id="event-category" 
          placeholder="Event Category"
          />
        </fieldset>
        <fieldset>
          <label htmlFor="event-location">Location:</label>
          <input
          type="text" name="location"
          id="event-location" 
          placeholder="Location"
          />
        </fieldset>
        <fieldset>
          <label htmlFor="event-date">Date:</label>
          <input
          type="text" name="date"
          id="event-date" 
          placeholder="MM-DD-YYYY"
          />
        </fieldset>
        <fieldset>
          <label htmlFor="event-time">Time:</label>
          <input
          type="text" name="time"
          id="event-time" 
          placeholder="HH-MM"
          />
        </fieldset>
        <fieldset>
          <label htmlFor="event-price">Price:</label>
          <input
          type="text" name="price"
          id="event-price" 
          placeholder="0.00"
          />
        </fieldset>
        <input type="submit" value="Add Event"/>
      </form>
    </section>
  );
}

export default AddEvent;