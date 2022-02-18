import React, { useState } from "react";
export default function TextForm(props) {
  const [text, setText] = useState("Enter text here...");
  const handleOnChange = (event) => {
    console.log("On change");
    setText(event.target.value)
    // setText(text);
  };
  const handleUpClick = () => {
      // console.log("Handle up click")
      let newText = text.toUpperCase()
      setText(newText)
  };
  const handleLoClick = () => {
    // console.log("Handle up click")
    let newText = text.toLowerCase()
    setText(newText)
};
const handleEncryptOnClick = () => {
  let newText="";
  for(let i=0;i<text.length-1;i++)
  {
    let code = (text.charCodeAt(i)*text.charCodeAt(i+1))%26 + 97
    let nc = String.fromCharCode(code)
    newText+= nc
  }
  setText(newText+text.charAt(text.length-1))
};
return (
    <>
      <h1>{props.heading}</h1>
      <div className="form-group">
        <textarea
          className="form-control" value={text} 
          onChange={handleOnChange}                     // on change is used to make changes to the text 
          id="exampleFormControlTextarea1"  rows="8"
        ></textarea>
        <div>
        <button className="btn btn-primary my-2 mx-3" onClick={handleUpClick}>Convert to uppercase</button>
        <button className="btn btn-primary my-2 mx-3" onClick={handleLoClick}>Convert to lowercase</button>
        <button className="btn btn-primary my-2 mx-3" onClick={handleEncryptOnClick}>Convert to encrypted text</button>
        </div>
        <h2>Your text Summary</h2>
        {/* <p>words = {text.length==0?0:text.split(" ").length} characters = {text.length}</p> */}
        <p>words = {text.split(" ").filter((element)=>{return element.length!=0}).length} characters = {text.length}</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
