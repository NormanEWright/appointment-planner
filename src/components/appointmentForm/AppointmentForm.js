import React, { useMemo } from "react";
import { ContactPicker } from "../contactPicker/ContactPicker";

const getTodayString = () => {
  const [month, day, year] = new Date().toLocaleDateString("en-US").split("/");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};

export const AppointmentForm = ({
  title,
  setTitle,
  contacts,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit,
}) => {

  const contactNames = useMemo(() => {
    return contacts.map((contact) => contact.name);
  }, [contacts]);

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text"
        name="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
        placeholder="Appointment Name"
        aria-label="Appointment Name"
      />
      <br />
      <label>
        <ContactPicker 
          name="contact"
          value={contact}
          contacts={contactNames}
          onChange={(e) => setContact(e.target.value)}
        />
      </label>
      <input 
        type="date"
        name="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        min={getTodayString()}
        required
        aria-label="Date Picker"
      />
      <br />
      <input 
        type="time"
        name="time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        required
        aria-label="Time Picker"
      />
      <br />
      <input aria-label="Add Appointment" type="submit" value="Add Appointment" />
    </form>
  );
};
