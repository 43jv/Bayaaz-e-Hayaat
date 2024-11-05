import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { makeStyles } from "@material-ui/core/styles";
import { Link, useParams } from "react-router-dom";

import { authorWorks } from "./data/authorWorks";
import {
  authorImages,
  getAuthorText,
  getAuthorUrduText,
} from "./data/authorData";

// Link styles
const useStyles = makeStyles({
  link: {
    fontFamily: "Craw Modern Bold",
    color: "#8b4513",
    textDecoration: "none",
    position: "relative",
    outline: "none", // Remove focus outline
    "&:after": {
      content: '""',
      position: "absolute",
      bottom: 0,
      left: 0,
      right: 0,
      height: "2px",
      backgroundColor: "black",
      transform: "scaleX(0)",
      transition: "transform 0.3s ease-in-out",
    },
    "&:hover": {
      color: "black", // Keep text color black on hover
      "&:after": {
        transform: "scaleX(1)",
      },
    },
  },
  button: {
    backgroundColor: "#8b4513",
    color: "#fff",
    padding: "5px 10px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    marginRight: "10px",
    transition: "background-color 0.3s",
    "&:hover": {
      backgroundColor: "#5a2e0c",
    },
  },
  leftColumn: {
    flex: 1,
    marginRight: "2vw",
    width: "100%",
  },
  rightColumn: {
    flex: 2,
    width: "100%",
  },
});

const LanguageButtons = ({ changeToEnglish, changeToUrdu }) => {
  const classes = useStyles();
  return (
    <div>
      <button onClick={changeToEnglish} className={classes.button}>
        English
      </button>
      <button onClick={changeToUrdu} className={classes.button}>
        Urdu
      </button>
    </div>
  );
};

const AuthorCarousel = ({ images }) => (
  <Carousel
    nextIcon={
      <span
        aria-hidden="true"
        className="carousel-control-next-icon"
        style={{ backgroundColor: "black" }}
      />
    }
    prevIcon={
      <span
        aria-hidden="true"
        className="carousel-control-prev-icon"
        style={{ backgroundColor: "black" }}
      />
    }
    indicators={true}
  >
    {images.map((image, index) => (
      <Carousel.Item key={index}>
        <img
          className="d-block w-100"
          src={image}
          alt={`Slide ${index + 1}`}
          style={{ objectFit: "contain", height: "50vh" }}
        />
      </Carousel.Item>
    ))}
  </Carousel>
);

const AuthorWorksGrid = ({ works, classes }) => (
  <Container sx={{ py: 2 }} maxWidth="md">
    <Grid container spacing={4}>
      {works.map((card) => (
        <Grid item key={card.id} xs={12} sm={6} md={4}>
          <Card
            sx={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <CardActions>
              <Link
                to={`/RenderDoc/${encodeURIComponent(card.image)}${
                  card.digitisedText
                    ? `,${encodeURIComponent(card.digitisedText)}`
                    : ""
                }?title=${encodeURIComponent(card.title)}&year=${encodeURIComponent(
                  card.year
                )}&author=${encodeURIComponent(card.author)}&engInfo=${encodeURIComponent(
                  card.engInfo
                )}&urduInfo=${encodeURIComponent(card.urduInfo)}&genre=${encodeURIComponent(
                  card.genre
                )}&magazine=${encodeURIComponent(card.magazine)}&year=${encodeURIComponent(
                  card.year
                )}&keywords=${encodeURIComponent(card.keywords)}`}
                className={classes.link}
                target="_blank"
              >
                <Typography gutterBottom variant="h6" component="h6">
                  {card.title}
                </Typography>
              </Link>
            </CardActions>
            <CardContent sx={{ flexGrow: 1, paddingBottom: 0 }}>
              <Typography>{`${card.author}`}</Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  </Container>
);

const Archive = () => {
  const classes = useStyles();
  const { author } = useParams();

  const filteredCards = authorWorks.filter((card) => card.author === author);
  const carouselImages = authorImages[author] || []; // Default to an empty array if there are no images for this author

  // State to track language display
  const [language, setLanguage] = useState("English");

  const changeToEnglish = () => {
    setLanguage("English");
  };

  const changeToUrdu = () => {
    setLanguage("Urdu");
  };

  const authorText = getAuthorText(author);
  const authorUrduText = getAuthorUrduText(author);

  const sortedWorks = filteredCards.sort((a, b) =>
    a.title.localeCompare(b.title)
  );

  return (
    <div style={{ display: "flex", flexDirection: "row", marginTop: "12vh" }}>
      <div className={classes.leftColumn}>
        {carouselImages.length > 0 && <AuthorCarousel images={carouselImages} />}
        <div style={{ marginTop: "1vh", overflow: "auto" }}>
          {authorText && authorUrduText && (
            <LanguageButtons changeToEnglish={changeToEnglish} changeToUrdu={changeToUrdu} />
          )}
          {language === "English" && authorText && (
            <p dangerouslySetInnerHTML={{ __html: authorText }} />
          )}
          {language === "Urdu" && authorUrduText && (
            <p dangerouslySetInnerHTML={{ __html: authorUrduText }} />
          )}
        </div>
        <Link className={classes.link} to="/author">
          Back
        </Link>
      </div>
      <div className={classes.rightColumn}>
        <AuthorWorksGrid works={sortedWorks} classes={classes} />
      </div>
    </div>
  );
};

export default Archive;