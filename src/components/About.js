

export default function About(props) {

  // const [myStyle, setMyStyle] = useState({
  //   backgroundColor: 'white',
  //   color: 'black'
  // });

  // const [currentMode, setCurrentMode] = useState("light");
  // const [modeBtnStyle, setModeBtnStyle] = useState("btn btn-dark mt-3");
  // const [modeBtnText, setModeBtnText] = useState("Dark");

  // let modeBtnStyle;
  // let modeBtnText;
  // let myStyle;
  // let myAcHeaderStyle;

  // if (props.darkMode) {
  // setCurrentMode("light");
  // setModeBtnStyle("btn btn-light mt-3");
  // setModeBtnText("Dark");
  // setMyStyle({
  //   backgroundColor: 'white',
  //   color: 'black'
  // });
  // myStyle = {
  // backgroundColor: 'black',
  // color: 'white'
  // };

  // myAcHeaderStyle = {
  //   backgroundColor: '#242424',
  //   color: 'white'
  // }
  // }
  // else {
  // setCurrentMode("dark");
  // setModeBtnStyle("btn btn-dark mt-3");
  // setModeBtnText("Light");
  // setMyStyle({
  //   backgroundColor: 'black',
  //   color: 'white'
  // });
  // myStyle = {
  // backgroundColor: 'white',
  // color: ''
  // };

  //   myAcHeaderStyle = {
  //   };
  // }

  document.title = "About Us";

  return (
    <div className={`container p-3 text-${props.darkMode ? 'light' : 'dark'}`}>
      <h1 className='my-2'>About Us</h1>
      <div className="accordion" id="accordionExample" data-bs-theme={props.darkMode ? 'dark' : 'light'}>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              Analyze your text
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              Textutils gives you a way to analyze your text quickly and efficiently. Be it word count, character count or
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              Free to use
            </button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              TextUtils is a free character counter tool that provides instant character count & word count statistics for a given text. TextUtils reports the number of words and characters. Thus it is suitable for writing text with word/ character limit.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              Browser Compatible
            </button>
          </h2>
          <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              This word counter software works in any web browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count characters in facebook, blog, books, excel document, pdf document, essays, etc.
            </div>
          </div>
        </div>
      </div>

      {/* <button type="button" class="btn btn-light mt-3">Enable Light mode</button> */}
      {/* <div className="container">
        <button type="button" className={modeBtnStyle} onClick={toggleStyle}>Enable {modeBtnText} mode</button>
      </div> */}
    </div>
  )
}
