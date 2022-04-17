import React from "react";
import "./Popup.css";
const Popup = (props) => {
  const { open, setOpen } = props;
  if (open) {
    return (
      <div>
        <div className="popup">
          <div className="popup-inner">
            <button className="close-btn" onClick={() => setOpen(false)}>
              close
            </button>
            <h1 className="heading">{props.title}</h1>
             <div> this a PhotoGraphy event </div>
            <button className="register-btn">Register</button>
          </div>
        </div>
      </div>
    );
  } else return null;
};

export default Popup;
