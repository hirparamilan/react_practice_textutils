import React, { useState } from "react";

function TextForm(props) {
  const [text, setText] = useState("");
  const [inputText, setinputText] = useState("");
  const words = text ? text.split(" ").filter((element) => element.length !== 0).length : 0;
  const [emails, setEmails] = useState([]);
  const emailRegex = /([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/gi;

  // event-handling
  const handleUpClick = () => {
    if (text) {
      console.log("Uppercase was called");
      setText(text.toUpperCase());
      props.showAlert("Converterd to Uppercase!", "success");
    }
    else {
      props.showAlert("Please enter some text to covert to Uppercase!", "danger")
    }
  };

  const handleLoClick = () => {
    if (text) {
      console.log("Lowercase was called");
      setText(text.toLowerCase());
      props.showAlert("Converterd to Lowercase!", "success");
    }
    else {
      props.showAlert("Please enter some text to covert to Lowercase!", "danger")
    }
  };

  const handleClear = () => {
    if (inputText) {
      console.log("Clearcase was called");
      setinputText('');
      props.showAlert("Input text cleared!", "success");
    }
    else {
      props.showAlert("No text to clear!", "danger")
    }

  };

  const handleClearAll = () => {
    if (inputText || text) {
      console.log("Clearcase was called");
      setText('');
      setinputText('');
      setEmails('');
      props.showAlert("All text cleared!", "success");
    }
    else {
      props.showAlert("No text to clear!", "danger")
    }
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
    setinputText(event.target.value);
  };

  const extractEmails = () => {
    if (inputText) {
      const extracted = inputText && inputText.match(emailRegex);
      extracted && setEmails(extracted || []);
      extracted ? props.showAlert("Emails extracted!", "success") : props.showAlert("No emails found", "danger");
    }
    else {
      props.showAlert("Please enter some text to extract emails!", "danger")
    }
  };

  const copyText = () => {
    if (inputText) {
      navigator.clipboard.writeText(inputText);
      props.showAlert("Copied to Clipboard!", "success");
    }
    else {
      props.showAlert("Please enter some text to copy!", "danger")
    }
  }

  // document.title = "Text Utils3";
  document.title = "Text Utils - Home";

  return (
    <>
      <div className={`container text-${props.darkMode ? 'light' : 'dark'}`}>
        <div className="container">
          <h1>{props.heading}</h1>
          <div>
            <textarea
              className={`form-control bg-${props.darkMode ? 'dark' : 'light'}  text-${props.darkMode ? 'light' : 'dark'}`}
              value={inputText}
              onChange={handleOnChange}
              id="myBox"
              rows="8"
            ></textarea>
          </div>

          <div className="row justify-content-between">
            <div className="col-md-2">
              <button className="btn btn-warning mt-3" onClick={handleClearAll}>
                Clear Everything
              </button>
            </div>
            <div className="col-md-7 justify-content-end  offset-md-3">
              <button className="btn btn-primary me-3 mt-3" onClick={handleUpClick}>
                Covert to Uppercase
              </button>

              <button className="btn btn-primary me-3 mt-3" onClick={handleLoClick}>
                Covert to Lowercase
              </button>

              <button className="btn btn-primary me-3 mt-3" onClick={extractEmails}>
                Extract Email
              </button>

              <button className="btn btn-primary me-3 mt-3" onClick={copyText}>
                Copy Text
              </button>

              <button className="btn btn-primary mt-3" onClick={handleClear}>
                Clear Text
              </button>
            </div>
          </div>
        </div>

        <div className="container my-3">
          <h2>Your text summary</h2>
          <p>
            {words} words and {text.length} characters
          </p>
          <p>{0.008 * words} minutes read</p>
          <h2>Preview</h2>
          <p>{text.length > 0 ? text : "Enter something to preview it here"}</p>
          <h2>Extracted Emails:</h2>
          <p>
            {emails.length > 0 ? emails.join(", ") : "No emails found."}
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
      </div>
    </>
  );
}

export default TextForm;
