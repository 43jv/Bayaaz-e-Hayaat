import React from "react";
import MKM from "./data/Mom_ki_Maryam.pdf"

function UrduText() {
  return (
    <div>
  <div style={{ flex: '1' }}>
    <object
      style={{ marginTop: '80px', width: '100%', height: 'calc(100vh - 80px)' }}
      data={MKM}
      type="application/pdf"
    />
  </div>
  {/* <div style={{ flex: '1' }}>
    <iframe
      className="overlay"
      src="./files/Mom_ki_Maryam.html"
      style={{ marginTop: '80px', width: '100%', height: 'calc(100vh - 80px)' }}
    ></iframe>
  </div> */}
</div>

  );
}

export default UrduText;
