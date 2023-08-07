import React from "react";
import phoneimg from "../Pictures/phone.png";
import emailimg from "../Pictures/email.png";

function ContactInfo() {
  return (
    <div className="cntInfoWrapp">
      <div className="phone">
        <div>
          <img src="https://cdn.dribbble.com/users/3873964/screenshots/14216267/media/fe34f0470ef7899cc9594a8c9f3f2cec.gif" className="contgif" alt="" />
        </div>
      <div className="phonewrapper">
        <div className="contactlistPhoneImg">
          <img className="phoneimg" src={phoneimg} alt="" />
        </div>
        <div className="txt">
          <h4>347-820-5658</h4>
        </div>
      </div>
      <div className="emailwrapper">
        <div className="contactlistEmailImg">
        <img className="emailimg" src={emailimg} alt="" />
        </div>
        <div className="txt">
          <h4>tsbalogun97@gmail.com</h4>
        </div>
      </div>
        {/* <div>
          <img src="https://wallpaperaccess.com/full/5927911.gif" alt="" className="contgif " />
        </div> */}
      </div>
    </div>
  );
}

export default ContactInfo;
