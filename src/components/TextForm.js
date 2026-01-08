import React, { useState } from "react";

function TextForm(props) {
  const [text, setText] = useState("");
  const [inputText, setinputText] = useState("");
  const words = text ? text.split(" ").length : 0;
  const [emails, setEmails] = useState([]);
  const emailRegex = /([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/gi;

  // event-handling
  const handleUpClick = () => {
    console.log("Uppercase was called");
    setText(text.toUpperCase());
  };

  const handleLoClick = () => {
    console.log("Lowercase was called");
    setText(text.toLowerCase());
  };

  const handleClear = () => {
    console.log("Clearcase was called");
    setinputText('');
  };

  const handleClearAll = () => {
    console.log("Clearcase was called");
    setText('');
    setinputText('');
    setEmails('');
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
    setinputText(event.target.value);
  };

  const extractEmails = () => {
    const extracted = inputText.match(emailRegex);
    setEmails(extracted || []);
  };

  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={inputText}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
          ></textarea>
        </div>

        <button className="btn btn-warning me-5" onClick={handleClearAll}>
          Clear Everything
        </button>

        <button className="btn btn-primary ms-5 me-3" onClick={handleUpClick}>
          Covert to Uppercase
        </button>

        <button className="btn btn-primary me-3" onClick={handleLoClick}>
          Covert to Lowercase
        </button>

        <button className="btn btn-primary me-3" onClick={handleClear}>
          Clear Text
        </button>

        <button className="btn btn-primary" onClick={extractEmails}>
          Extract Email
        </button>
      </div>
      <div className="container my-3">
        <h2>Your text summary</h2>
        <p>
          {words} words and {text.length} characters
        </p>
        <p>{0.008 * words} minutes read</p>
        <h2>Preview</h2>
        <p>{text}</p>
        <h2>Extracted Emails:</h2>
        <p>
            {emails.length>0? emails.join(", "): "No emails found."}
        </p>
        {/* {emails.length > 0 ? (
          <ul>
            {emails.map((email, index) => (
              <li key={index}>{email}</li>
            ))}
          </ul>
        ) : (
          <p>No emails found.</p>
        )} */}
      </div>
    </>
  );
}

export default TextForm;
