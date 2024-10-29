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
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        marginTop: "2vh",
      }}
    >
      <div style={{ flex: "1", marginRight: "2vh" }}>
        <p><strong>Author:</strong> {author}</p>
        <p><strong>Genre:</strong> {genre}</p>
        <p><strong>Magazine:</strong> {magazine}</p>
        <p><strong>Year:</strong> {year}</p>
        <p><strong>Keywords:</strong> {keywords}</p>
      </div>
      <div style={{ flex: "3" }}>
        {(eng_info || urdu_info) && (
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "2vh",
            }}
          >
            {title_ === "Baarish-e-Sang" ? (
              <audio controls>
                <source src={BeS} type="audio/mpeg" />
              </audio>
            ) : null}
            <div>
              <button
                onClick={toggleToEnglish}
                style={{
                  backgroundColor: "#8b4513",
                  color: "#fff",
                  padding: "10px 20px",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                  marginRight: "10px",
                  transition: "background-color 0.3s",
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = "#5a2e0c";
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "#8b4513";
                }}
              >
                English
              </button>
              <button
                onClick={toggleToUrdu}
                style={{
                  backgroundColor: "#8b4513",
                  color: "#fff",
                  padding: "10px 20px",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                  transition: "background-color 0.3s",
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = "#5a2e0c";
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "#8b4513";
                }}
              >
                Urdu
              </button>
            </div>
          </div>
        )}
        {isEnglish ? (
          <div
            dangerouslySetInnerHTML={{ __html: eng_info }}
            style={{
              textAlign: "justify",
            }}
          />
        ) : (
          <div
            dangerouslySetInnerHTML={{ __html: urdu_info }}
            style={{
              textAlign: "justify",
            }}
          />
        )}
      </div>
    </div>
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
