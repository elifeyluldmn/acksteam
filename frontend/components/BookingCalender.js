import React, { useState } from "react";
import BigCalendar from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = BigCalendar.momentLocalizer(moment);

const BookingCalendar = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedOption, setSelectedOption] = useState("sauna");

  const handleDateSelect = (date) => {
    setSelectedDate(date);
  };

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const calculatePrice = () => {
    if (!selectedDate) return 0;

    let price = 0;
    const startDate = selectedDate;

    if (selectedOption === "sauna") {
      price = 50; // Sauna için saatlik fiyat
    } else if (selectedOption === "coldPlunge") {
      price = 60; // Cold plunge için saatlik fiyat
    } else if (selectedOption === "both") {
      price = 100; // Sauna + Cold plunge için fiyat
    }

    return price;
  };

  return (
    <div>
      <h2>Select Your Date and Time</h2>
      <BigCalendar
        localizer={localizer}
        events={[]}
        startAccessor="start"
        endAccessor="end"
        onSelectSlot={handleDateSelect}
        selectable
        views={["month", "week", "day"]}
        defaultView="month"
      />
      {selectedDate && (
        <div>
          <p>Selected Date: {moment(selectedDate).format("MMMM Do YYYY")}</p>
          <div>
            <label>Select an option:</label>
            <select value={selectedOption} onChange={handleOptionChange}>
              <option value="sauna">Sauna</option>
              <option value="coldPlunge">Cold Plunge</option>
              <option value="both">Sauna + Cold Plunge</option>
            </select>
          </div>
          <p>Price: ${calculatePrice()}</p>
        </div>
      )}
    </div>
  );
};

export default BookingCalendar;
