import React from "react";
import RAH from "./data/Rationing _aur_Hum.pdf"

function UrduText() {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
  <div style={{ flex: '1' }}>
    <object
      style={{ marginTop: '80px', width: '100%', height: 'calc(100vh - 80px)' }}
      data={RAH}
      type="application/pdf"
    />
  </div>
  <div style={{ flex: '1' }}>
    <iframe
      className="overlay"
      src="./files/Mom_ki_Maryam.html"
      style={{ marginTop: '80px', width: '100%', height: 'calc(100vh - 80px)' }}
    ></iframe>
  </div>
</div>

  );
}

export default UrduText;
