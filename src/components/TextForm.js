import React, { useState } from "react";

function TextForm(props) {
  // event-handling
  const handleUpClick = () => {
    console.log("Uppercase was called");
    setText(text.toUpperCase());
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState("Enter text here");
  return (
    <div>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChange}
          id="myBox"
          rows="8"
        ></textarea>
      </div>
      <button className="btn btn-primary" onClick={handleUpClick}>
        Covert to Uppercase
      </button>
    </div>
  );
}

export default TextForm;
