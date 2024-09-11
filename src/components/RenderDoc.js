import React, { useState, useEffect } from "react";
import { useParams, Link, useLocation } from "react-router-dom";
import Button from "@mui/material/Button";
import { textAlign } from "@mui/system";
import BeS from "./BeS_audio.mp3";

function RenderDoc() {
  const { pdfFileNames } = useParams();
  const fileNames = pdfFileNames.split(",");
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const title_ = queryParams.get("title");
  const author = queryParams.get("author"); 
  const eng_info = queryParams.get("engInfo") ;
  const urdu_info = queryParams.get("urduInfo");
  const genre = queryParams.get("genre") ;
  const magazine = queryParams.get("magazine") ;
  const year = queryParams.get("year") ;
  const keywords = queryParams.get("keywords") ;
  const [isEnglish, setIsEnglish] = useState(true); // State to track language display

  const toggleToUrdu = () => {
    setIsEnglish(false);
  };

  const toggleToEnglish = () => {
    setIsEnglish(true);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <h1
        style={{
          textAlign: "center",
          marginTop: "10vh",
          fontFamily: "Craw Modern Bold",
          color: "#8b4513",
          fontWeight: "bold",
        }}
      >
        {title_}
      </h1>
      <div style={{ textAlign: "center", marginTop: "2vh" }}>
      <p><strong>Author:</strong> {author}</p>
        <p><strong>Genre:</strong> {genre}</p>
        <p><strong>Magazine:</strong> {magazine}</p>
        <p><strong>Year:</strong> {year}</p>
        <p><strong>Keywords:</strong> {keywords}</p>
     </div>
      {(eng_info || urdu_info) && (
        <div
          style={{
            display: "flex",
            marginRight: "2vh",
            justifyContent: "space-between",
          }}
        >
          {title_ === "Baarish-e-Sang" ? (
            <audio controls>
              <source src={BeS} type="audio/mpeg" />
            </audio>
          ) : null}
          <div>
            <Button onClick={toggleToEnglish}>English</Button>
            <Button onClick={toggleToUrdu}>Urdu</Button>
          </div>
        </div>
      )}
      {isEnglish ? (
        <div
          dangerouslySetInnerHTML={{ __html: eng_info }}
          style={{
            fontSize: "20px",
            marginTop: "1vh",
            marginLeft: "3vh",
            marginRight: "3vh",
            textAlign: "center",
          }}
        />
      ) : (
        <div
          dangerouslySetInnerHTML={{ __html: urdu_info }}
          style={{
            fontSize: "20px",
            marginTop: "1vh",
            marginLeft: "3vh",
            marginRight: "3vh",
            textAlign: "center",
          }}
        />
      )}

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "20px",
        }}
      >
        {fileNames.map((fileName, index) => (
          <object
            key={index}
            style={{
              width: fileNames.length > 1 ? "50vw" : "100%",
              height: "calc(100vh)",
            }}
            data={decodeURIComponent(fileName)}
            type="application/pdf"
          />
        ))}
      </div>
    </div>
  );
}

export default RenderDoc;
