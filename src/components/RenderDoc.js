import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { useParams, Link } from "react-router-dom";
import YBS from "./data/text/YB_summary.pdf";
function RenderDoc() {
  // Access the PDF file names from the route parameters
  const { pdfFileNames } = useParams();
  const fileNames = pdfFileNames.split(',');


  return (
    <div>
      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          {fileNames.map((fileName, index) => (
            <object
              key={index}
              style={{ width: fileNames.length > 1 ? '50vw' : '100%', height: '100vh', marginTop:'9vh' }}
              data={decodeURIComponent(fileName)} 
              type="application/pdf"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default RenderDoc;