import React, { useState } from "react";

export default function AboutUs() {             // contain function of enable dark mode
    const [myStyle,setMyStyle] = useState({
        color:'black',
        backgroundColor:'white',
        border : "2px solid grey"
    })
    const [btnText,setBtnText] = useState("Enable Dark Mode")
    const switchMode = ()=>{
            if(myStyle.color==='white')     // switching to light mode
            {
                setMyStyle({
                    color:'black',
                    backgroundColor : 'white'
                })
                setBtnText("Enable Dark Mode")
            }else{                          // // switching to dark mode
                setMyStyle({
                    color:'white',
                    backgroundColor : '#212529'
                })
                setBtnText("Enable Light Mode")
            }
    }
  return (
    <>
    <h1 className="my-5">About Us</h1>
      <div className="accordion" id="accordionExample" style={myStyle}>
        <div className="accordion-item" >
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Accordion Item #1
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>This is the first item's accordion body.</strong> It is
              shown by default, until the collapse plugin adds the appropriate
              classNamees that we use to style each element. These classNamees
              control the overall appearance, as well as the showing and hiding
              via CSS transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
        <button className="btn btn-primary my-3" onClick={switchMode}>{btnText}</button>
      </div>
    </>
  );
}
