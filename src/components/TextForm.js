import React, { useState } from "react";

function TextForm(props) {
  // event-handling
  const handleUpClick = () => {
    console.log("Uppercase was called");
    setText(text.toUpperCase());
  };

  const handleLoClick = () => {
    console.log("Lowercase was called");
    setText(text.toLowerCase());
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState('');
  const words = text? text.split(" ").length: 0;
  return (
    <>
      <div className="container">
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
        
        <button className="btn btn-primary ms-3" onClick={handleLoClick}>
          Covert to Lowercase
        </button>
      </div>
      <div className="container my-3">
        <h2>Your text summary</h2>
        <p>{words} words and {text.length} characters</p>
        <p>{0.008 * words} minutes read</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}

export default TextForm;
