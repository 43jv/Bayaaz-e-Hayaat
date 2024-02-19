import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { useParams, Link } from "react-router-dom";

function RenderDoc() {
  // Access the PDF file name from the route parameters
  const { pdfFileName } = useParams();

  return (
    <div>
      <div>
        <Link  style={{display: 'block', marginTop:"10vh", padding: '10px', color: 'blue', textDecoration: 'none'}} to="/archive">Back</Link>
        <div style={{ flex: '1' }}>
          <object
            style={{   width: '100%', height: 'calc(90vh - 10vh)' }}
            data={decodeURIComponent(pdfFileName)} 
            type="application/pdf"
          />
        </div>
      </div>
    </div>
  );
}

export default RenderDoc;