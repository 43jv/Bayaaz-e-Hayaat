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
  const title_ = queryParams.get("title") || "";
  const eng_info = queryParams.get("engInfo") || "";
  const urdu_info = queryParams.get("urduInfo") || "";
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
  console.log(fileNames);
  return (
    <div>
      <h1
        style={{
          textAlign: "center",
          marginTop: "10vh",
          fontFamily: "Raleway, sans-serif",
          color: "#8b4513",
          fontWeight: "bold",
        }}
      >
        {title_}
      </h1>

      {(eng_info || urdu_info) && (
        <div
          style={{
            display: "flex",
            marginRight: "2vh",
            justifyContent: "space-between",
          }}
        >
          {title_ === "Baarish e Sang" ? (
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
