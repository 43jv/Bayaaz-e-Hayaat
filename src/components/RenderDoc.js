import React, { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import BeS from "./data/BeS_audio.mp3";
import "./styles.css";

const AudioTranscript = ({ showTranscript, setShowTranscript }) => (
  <div>
    <div>
      <audio controls>
        <source src={BeS} type="audio/mpeg" />
      </audio>
    </div>
    <div>
      <button
        className="button"
        onClick={() => setShowTranscript(!showTranscript)}
      >
        {showTranscript ? "Hide Transcript" : "Show Transcript"}
      </button>
    </div>
    {showTranscript && (
      <div className="transcript">
        <p>
          What is interesting about the introductory chapter of Jeelani Bano's
          novel Baarish-e-Sang, which translates as "A Rain of Stones," is that
          it immediately places the reader in the fields of Telangana, amidst
          the lives of the Telangana tillers just before independence. This
          scene depicts a daring and exhilarating moment where a young boy
          manages to steal some good quality grain from the landlord’s stores
          and runs away with it. He will now sow the same grain in his own
          little field, which generally yields a poor crop, because the landlord
          will not give the tillers good quality grain to sow. The chapter
          introduces the enduring protagonist of this novel, the same young boy
          who steals the grain: Salim. Salim absolutely refuses to accept his
          lot as the son of a bonded laborer, struggling to pay off various
          debts. In this translation, the reader also comes across his mother,
          Ahmad Bi, who is singing songs as she begins her day’s work before
          sunrise, and before her children awake. These sowing or grinding songs
          are an important archive in themselves, capturing not only the lives
          of the rural peasantry and their worldview but also the lives and
          creativity of women.
        </p>
      </div>
    )}
  </div>
);

const LanguageButtons = ({ toggleToEnglish, toggleToUrdu }) => (
  <div>
    <button className="button" onClick={toggleToEnglish}>
      English
    </button>
    <button className="button" onClick={toggleToUrdu}>
      Urdu
    </button>
  </div>
);

const RenderDoc = () => {
  const { pdfFileNames } = useParams();
  const fileNames = pdfFileNames.split(",");
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const title_ = queryParams.get("title");
  const author = queryParams.get("author");
  const eng_info = queryParams.get("engInfo");
  const urdu_info = queryParams.get("urduInfo");
  const genre = queryParams.get("genre");
  const magazine = queryParams.get("magazine");
  const year = queryParams.get("year");
  const keywords = queryParams.get("keywords");
  const [isEnglish, setIsEnglish] = useState(true);
  const [showTranscript, setShowTranscript] = useState(false);

  const toggleToUrdu = () => setIsEnglish(false);
  const toggleToEnglish = () => setIsEnglish(true);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container">
      <h1 className="header">{title_}</h1>
      <div className="info-container">
        <div className="info">
          <p>
            <strong>Author:</strong> {author}
          </p>
          <p>
            <strong>Genre:</strong> {genre}
          </p>
          <p>
            <strong>Magazine:</strong> {magazine}
          </p>
          <p>
            <strong>Year:</strong> {year}
          </p>
          <p>
            <strong>Keywords:</strong> {keywords}
          </p>
        </div>
        <div style={{ flex: "3" }}>
          {(eng_info || urdu_info) && (
            <div className="buttons">
              {title_ === "Baarish-e-Sang" && (
                <AudioTranscript
                  showTranscript={showTranscript}
                  setShowTranscript={setShowTranscript}
                />
              )}
              <LanguageButtons
                toggleToEnglish={toggleToEnglish}
                toggleToUrdu={toggleToUrdu}
              />
            </div>
          )}
          {isEnglish ? (
            <div
              dangerouslySetInnerHTML={{ __html: eng_info }}
              style={{ textAlign: "justify" }}
            />
          ) : (
            <div
              dangerouslySetInnerHTML={{ __html: urdu_info }}
              style={{ textAlign: "justify" }}
            />
          )}
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "1vh",
        }}
      >
        {fileNames.map((fileName, index) => (
          <object
            key={index}
            style={{
              width: fileNames.length > 1 ? "50vw" : "100vw",
              height: "calc(100vh)",
            }}
            data={decodeURIComponent(fileName)}
            type="application/pdf"
          />
        ))}
      </div>
    </div>
  );
};

export default RenderDoc;
