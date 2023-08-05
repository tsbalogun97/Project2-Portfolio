import React from "react";
import phoneimg from "../Pictures/phone.png";
import emailimg from "../Pictures/email.png";

function ContactInfo() {
  return (
    <div className="cntInfoWrapp">
      <div className="phone">
        
      <div className="phonewrapper">
        <div className="contactlistPhoneImg">
          <img className="phoneimg" src={phoneimg} alt="" />
        </div>
        <div className="txt">
          <h4>645-890-8978</h4>
        </div>
      </div>
      <div className="emailwrapper">
        <div className="contactlistEmailImg">
        <img className="emailimg" src={emailimg} alt="" />
        </div>
        <div className="txt">
          <h4>abc@yahoo.com</h4>
        </div>
      </div>
      </div>
    </div>
  );
}

export default ContactInfo;
