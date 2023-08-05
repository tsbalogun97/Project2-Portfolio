import React from "react";
import myresume from "../Pictures/resume.pdf";


function Resume() {
  return (
  
    <div className="rWrapper">
      
      <object className="resumeE" data={myresume} type="application/pdf" width="100%" height="100%"></object>
      
    </div>
  
  );
}

export default Resume;
