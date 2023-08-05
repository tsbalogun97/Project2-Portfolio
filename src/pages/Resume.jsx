import React from "react";
import pdfFile from "../Pictures/resume.pdf";

function Resume() {
  return (
    <div className="rWrapper">
      <Document className="resuP" file={pdfFile}></Document>

      {/* <object data={pdfFile} type="application/pdf"></object> */}
    </div>
  );
}

export default Resume;
