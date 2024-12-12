import React, { useState } from 'react';
import styles from '../Styles/Calendar.module.css';

const CalendarGrid = ({ currentMonth, events, onNextMonth, onPrevMonth }) => {
  const daysInMonth = new Date(currentMonth.year, currentMonth.month + 1, 0).getDate();
  const firstDay = new Date(currentMonth.year, currentMonth.month, 1).getDay();

  const [selectedDay, setSelectedDay] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [newEvent, setNewEvent] = useState({ name: '', startTime: '', endTime: '', description: '' });

  const handleDayClick = (day) => {
    if (!events[currentMonth.year]?.[currentMonth.month]?.[day]) {
      setSelectedDay(day);
      setShowForm(true);
    } else {
      setSelectedDay(day);
    }
  };

  const handleCloseForm = () => {
    setShowForm(false);
    setSelectedDay(null);
    setNewEvent({ name: '', startTime: '', endTime: '', description: '' }); // Clear form fields
  };

  const handleInputChange = (e) => {
    setNewEvent({ ...newEvent, [e.target.name]: e.target.value });
  };

  const handleSaveEvent = (e) => {
    e.preventDefault();

    if (selectedDay && newEvent.name.trim() && newEvent.startTime && newEvent.endTime) {
      events[currentMonth.year] = events[currentMonth.year] || {};
      events[currentMonth.year][currentMonth.month] = events[currentMonth.year][currentMonth.month] || {};
      events[currentMonth.year][currentMonth.month][selectedDay] = { ...newEvent };
      setShowForm(false);
      setSelectedDay(null);
      setNewEvent({ name: '', startTime: '', endTime: '', description: '' }); // Reset form fields
    }
  };

  const handleEditEvent = () => {
    setShowForm(true);
  };

  const handleDeleteEvent = () => {
    delete events[currentMonth.year][currentMonth.month][selectedDay];
    setShowForm(false);
    setSelectedDay(null);
    setNewEvent({ name: '', startTime: '', endTime: '', description: '' }); // Clear form fields
  };

  const rows = [];
  let dayCount = 1;

  for (let week = 0; week < 6; week++) {
    let row = [];
    for (let dayOfWeek = 0; dayOfWeek < 7; dayOfWeek++) {
      if (week === 0 && dayOfWeek < firstDay) {
        row.push(null);
      } else if (dayCount <= daysInMonth) {
        row.push(dayCount++);
      } else {
        row.push(null);
      }
    }
    rows.push(row);
  }

  return (
    <div className={styles.calendarContainer}>
      <div className={styles.header}>
        <h2>
          {new Date(currentMonth.year, currentMonth.month).toLocaleString('default', {
            month: 'long',
          })} {currentMonth.year}
        </h2>
        <div className={styles.headerBtns}>
          <button onClick={onPrevMonth}>Previous</button>
          <button onClick={onNextMonth}>Next</button>
        </div>
      </div>
      <div className={styles.weekdays}>
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day, index) => (
          <div key={index}>{day}</div>
        ))}
      </div>
      <div className={styles.days}>
        {rows.map((week, rowIndex) => (
          <div key={rowIndex} className={styles.weekRow}>
            {week.map((day, colIndex) => (
              <div
                key={colIndex}
                className={day ? styles.day : styles.emptyDay}
                onClick={day ? () => handleDayClick(day) : undefined}
                style={day && events[currentMonth.year]?.[currentMonth.month]?.[day] ? { border: '3px solid #168141' } : {}}
              >
                {day}
              </div>
            ))}
          </div>
        ))}
      </div>
      {showForm && selectedDay && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <span className={styles.close} onClick={handleCloseForm}>&times;</span>
            <form onSubmit={handleSaveEvent}>
              <label htmlFor="name">Event Name:</label>
              <input type="text" id="name" name="name" value={newEvent.name} onChange={handleInputChange} placeholder="Enter event name" required />
              <label htmlFor="startTime">Start Time:</label>
              <input type="time" id="startTime" name="startTime" value={newEvent.startTime} onChange={handleInputChange} required />
              <label htmlFor="endTime">End Time:</label>
              <input type="time" id="endTime" name="endTime" value={newEvent.endTime} onChange={handleInputChange} required />
              <label htmlFor="description">Description:</label>
              <textarea id="description" name="description" value={newEvent.description} onChange={handleInputChange} placeholder="Optional"></textarea>
              <button type="submit">Save Event</button>
            </form>
          </div>
        </div>
      )}
      {selectedDay && events[currentMonth.year]?.[currentMonth.month]?.[selectedDay] && !showForm && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <span className={styles.close2} onClick={handleCloseForm}>&times;</span>
            <h3>{events[currentMonth.year][currentMonth.month][selectedDay].name}</h3>
            <p>Timing: {events[currentMonth.year][currentMonth.month][selectedDay].startTime} - {events[currentMonth.year][currentMonth.month][selectedDay].endTime}</p>
            <p>{events[currentMonth.year][currentMonth.month][selectedDay].description}</p>
            <div className={styles.displayBtns}>
              <button onClick={handleEditEvent}>Edit Event</button>
              <button onClick={handleDeleteEvent}>Delete Event</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CalendarGrid;
