import React, { useState } from "react";

export default function TextForm(props) {
  const clickMe = () => {
    let NewText = text.toUpperCase();
    setText(NewText);
    props.showAlert("Converted To Upper Case", "Success");
  };
  const LowMe = () => {
    let NewText = text.toLowerCase();
    setText(NewText);
    props.showAlert("Converted To Lower Case", "Success");
  };
  const clearMe = () => {
    let NewText = "";
    setText(NewText);
    props.showAlert("Text has been cleared", "Success");
    if (NewText = ""){
      props.showAlert("Nothing to cear", "Alert");
    }
  };
  const CopyMe = () =>{
    let text = document.getElementById('myBox');
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copyed to Clipbord", "Success");
  }
  const onChange = (event) => {
    setText(event.target.value);
  };
  const [text, setText] = useState("");
  return (
    <>
      <div className="container" style={{color: props.mode === 'dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            style={{backgroundColor: props.mode === 'dark'?'#131310':'white', color: props.mode === 'dark'?'white':'black'}}
            placeholder="Enter Text Here"
            onChange={onChange}
            id="myBox"
            rows="10"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={clickMe}>
          Conver to Uppercase
        </button>
        <button className="btn btn-primary mx-2" onClick={LowMe}>
          Conver to Lowercase
        </button>
        <button className="btn btn-primary mx-2" onClick={clearMe}>
          Clear
        </button>
        <button className="btn btn-primary mx-2" onClick={CopyMe}>
          Copy
        </button>
      </div>
      <div className="container my-3" style={{color: props.mode === 'dark'?'white':'black'}}>
        <h2>Your Text Summary</h2>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Review</h2>
        <p>{text.length>0?text:"Enter something on the box to review"}</p>
      </div>
    </>
  );
}
