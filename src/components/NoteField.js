import React from "react";

// styles
import "./NoteField.css";

const NoteField = ({ setNote, note, placeholder = "note...", finished }) => {
  return (
    <form className="note-field">
      {!finished && (
        <textarea
          rows="5"
          value={note}
          onChange={(e) => setNote(e.target.value)}
          placeholder={placeholder}
        ></textarea>
      )}
      {finished && (
        <textarea
          disabled
          rows="5"
          value={note}
          onChange={(e) => setNote(e.target.value)}
          placeholder={placeholder}
        ></textarea>
      )}
    </form>
  );
};

export default NoteField;
