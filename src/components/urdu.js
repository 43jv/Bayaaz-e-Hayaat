import React from "react";
import { useParams } from "react-router-dom";
function UrduText() {
  // Access the PDF file name from the route parameters
  const { pdfFileName } = useParams();

  return (
    <div>
      <div
        style={{ height: "100vh", display: "flex", flexDirection: "column" }}
      >
        <div style={{ flex: "1", overflow: "auto" }}>
          {/* Use the dynamically loaded PDF file */}
          <object
            style={{ width: "100%", height: "100%" }}
            data={decodeURIComponent(pdfFileName)} // Decode the file name
            type="application/pdf"
          />
        </div>
      </div>
    </div>
  );
}

export default UrduText;
