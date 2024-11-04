import React, { useState } from "react";
import { Container, Grid, Card, Button } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { authorCards } from "./data/authorData";

// Link and Button Styles
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
});

// Header + Author Cards
const Author = () => {
  const classes = useStyles();
  const [selectedLanguage, setSelectedLanguage] = useState("All");
  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
  };

  const filteredAuthors =
    selectedLanguage === "All"
      ? authorCards
      : authorCards.filter((card) => card.language === selectedLanguage);
  const sortedAuthors = filteredAuthors.sort((a, b) => a.title.localeCompare(b.title));

  return (
    <div>
      <header id="header">
        <div className="intro">
          <div className="overlay">
            <div className="container">
              <div className="row">
                <div className="intro-text">
                  <h1 style={{ marginBottom: "10vh" }}>Authors</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "1vh",
        }}
      >
        <Button
          variant="contained"
          onClick={() => handleLanguageChange("All")}
          sx={{
            fontSize: "1.5rem",
            backgroundColor: "#8b4513",
            margin: "0 10px",
            "&:hover": {
              backgroundColor: "#5a2e0e",
            },
          }}
        >
          All
        </Button>
        <Button
          variant="contained"
          onClick={() => handleLanguageChange("Urdu")}
          sx={{
            fontSize: "1.5rem",
            backgroundColor: "#8b4513",
            margin: "0 10px",
            "&:hover": {
              backgroundColor: "#5a2e0e",
            },
          }}
        >
          Urdu
        </Button>
        <Button
          variant="contained"
          onClick={() => handleLanguageChange("Telugu")}
          sx={{
            fontSize: "1.5rem",
            backgroundColor: "#8b4513",
            margin: "0 10px",
            "&:hover": {
              backgroundColor: "#5a2e0e",
            },
          }}
        >
          Telugu
        </Button>
      </div>
      <div>
        <Container sx={{ py: 8 }} maxWidth="md">
          <Grid container spacing={4}>
            {filteredAuthors.map((card) => (
              <Grid item key={card.id} xs={12} sm={6} md={4}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  {/* <CardMedia
                    component="div"
                    sx={{ pt: "100%" }}
                    image={card.image}
                  /> <CardContent sx={{ flexGrow: 1, paddingBottom: 0 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {card.title}
                    </Typography>
                  </CardContent> */}
                  <div className={classes.cardContent}>
                    <CardActions sx={{ paddingTop: 0 }}>
                      <Link
                        to={`/archive/${card.title}`}
                        className={classes.link}
                        target="_blank"
                      >
                        <Typography gutterBottom variant="h5" component="h2">
                          {card.title}
                        </Typography>
                      </Link>
                    </CardActions>
                  </div>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </div>
    </div>
  );
};

export default Author;
