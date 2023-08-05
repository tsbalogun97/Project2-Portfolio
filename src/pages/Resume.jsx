import React from "react";
import myresume from "../Pictures/resume.pdf";


function Resume() {
  return (
  
    <div className="rWrapper">
      
      
      <Document className="resuP" file={myresume}></Document>

      {/* <object data={pdfFile} type="application/pdf"></object> */}
    </div>
  
  );
}

export default Resume;
