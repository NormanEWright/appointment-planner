import React from "react";

export const ContactPicker = ({ name, value, contacts, onChange }) => {
  return (
    <select aria-label="Contact Picker" name={name} value={value} onChange={onChange} >
      <option value={""} key={-1}>
        No Contact Selected
      </option>
      {contacts.map((contact) => {
        return (
          <option value={contact} key={contact}>
            {contact}
          </option>
        );
      })}
    </select>
  );
};
