// src/pages/CalendarPage.js

import React, { useState, useEffect } from 'react';
import CalendarGrid from '../Components/CalendarGrid';
import styles from '../Styles/Calendar.module.css';

const CalendarPage = () => {
  const currentDate = new Date();
  const [currentMonth, setCurrentMonth] = useState({
    year: currentDate.getFullYear(),
    month: currentDate.getMonth(),
  });
  const [events, setEvents] = useState(() => {
    const storedEvents = JSON.parse(localStorage.getItem('events'));
    return storedEvents || {};
  });
  const [selectedDay, setSelectedDay] = useState(null);

  const handleDayClick = (day) => setSelectedDay(day);

  const handleNextMonth = () => {
    setCurrentMonth(prev => ({
      year: prev.month === 11 ? prev.year + 1 : prev.year,
      month: (prev.month + 1) % 12,
    }));
  };

  const handlePrevMonth = () => {
    setCurrentMonth(prev => ({
      year: prev.month === 0 ? prev.year - 1 : prev.year,
      month: (prev.month - 1 + 12) % 12,
    }));
  };

  const handleEventSubmit = (newEvent) => {
    const updatedEvents = { ...events };
    const dayKey = `${currentMonth.year}-${currentMonth.month + 1}-${selectedDay}`;
    if (!updatedEvents[dayKey]) updatedEvents[dayKey] = [];
    updatedEvents[dayKey].push(newEvent);

    setEvents(updatedEvents);
    localStorage.setItem('events', JSON.stringify(updatedEvents));
    setSelectedDay(null);
  };

  



  return (
    <div className={styles.container}>
      <CalendarGrid
        currentMonth={currentMonth}
        events={events}
        onDayClick={handleDayClick}
        onNextMonth={handleNextMonth}
        onPrevMonth={handlePrevMonth}
      />
    
    </div>
  );
};

export default CalendarPage;
