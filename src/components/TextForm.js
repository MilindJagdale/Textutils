import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    //console.log('i m clicked' +text);
    let newText = text.toUpperCase();
    setText(newText);
    //setText("I m changed");
    props.showAlert("converted to Uppercase","success")
  };
  const handleLoClick = () => {
    //console.log('i m clicked' +text);
    let newText = text.toLowerCase();
    setText(newText);
    //setText("I m changed");
    props.showAlert("converted to Lowercase","success")
  };

  const handleInveseCase=() =>{
    let currentValue =text.split("").reverse("").join("");
    setText(currentValue)
    props.showAlert("Text Invers","success")
   }

 

 
  const handleOnChange = (event) => {
    //console.log('On change');
    setText(event.target.value);  // when textarea value changes modify the text variable with new value
  };
  const [text, setText] = useState("Enter Text here");

  return (
    <>
      <div className="mb-3" style={{  color: props.mode==='light'?'black':'white'}}>
        <h1>{props.formheading}</h1>
        <textarea
        style={{  backgroundColor: props.mode==='light'?'white':'black', color:props.mode==='light'?'black':'white'}}
          value={text}
          className="form-control"
          id="myBox"
          rows="6"
          onChange={handleOnChange}
        ></textarea>
      </div>

      <div className="container my-3" style={{  color: props.mode==='light'?'black':'white'}}>
        <button className="btn btn-primary" onClick={handleUpClick}>
          Convert To Uppercase
        </button>

        <button className="btn btn-primary mx-1" onClick={handleLoClick}>
          Convert To Lowercase
        </button>

        <button className="btn btn-primary mx-1" onClick={handleInveseCase}>
          Inverse Text
        </button>
       
      
        <br />
        <div className="my-3">
          Words :{text.split(" ").length} | Characters : {text.length} | Minutes to read : {0.008 * text.split(" ").length} 
          <p>Preview: <br/>
          {text}</p>
        </div>
      </div>
    </>
  );
}
