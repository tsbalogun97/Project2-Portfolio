import React from "react";
import pdfFile from "../Picture/resume.pdf";

function Resume() {
  return (
    <div className="rWrapper">
      <Document className="resuP" file={pdfFile}>
        <Page pageNumber={3} />
      </Document>
      {/* <object data={R} type="application/pdf"></object> */}
    </div>
  );
}

export default Resume;
