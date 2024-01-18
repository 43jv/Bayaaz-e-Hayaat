import React from "react";
import YB from "./data/Yaadash_Bakhair.pdf"
function Test() {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
  {/* <div style={{ flex: '1' }}>
    <object
      style={{ marginTop: '80px', width: '100%', height: 'calc(100vh - 80px)' }}
      data={RAH}
      type="application/pdf"
    />
  </div> */}
  {/* <div style={{ flex: '1' }}>
    <iframe
      className="overlay"
      src="./files/Mom_ki_Maryam.html"
      style={{ marginTop: '80px', width: '100%', height: 'calc(100vh - 80px)' }}
    ></iframe>
  </div> */}
  <div style={{ flex: '1' }}>
  
    <object
      style={{ marginTop: '80px', width: '100%', height: 'calc(100vh - 80px)' }}
      data={YB}
      type="application/pdf"
    />
  </div>
</div>

  );
}

export default Test;
