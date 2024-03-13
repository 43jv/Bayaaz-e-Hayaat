import React from "react";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

import JB from "./author_imgs/Jeelani_Bano.jpg";
import FAA from "./author_imgs/FAA2.jpg";

const useStyles = makeStyles({
  link: {
    fontFamily: "Raleway, sans-serif",
    color: "blue",
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
      backgroundColor: "blue",
      transform: "scaleX(0)",
      transition: "transform 0.3s ease-in-out",
    },
    "&:hover": {
      color: "blue", // Keep text color black on hover
      "&:after": {
        transform: "scaleX(1)",
      },
    },
  },
});

const authorCards = [
  {
    id: 1,
    title: "Jeelani Bano",
    image: JB,
    bio: ""
  },
  {
    id: 2,
    title: "Fatima Alam Ali",
    image: FAA,
  },
];


const Author = () => {
  const classes = useStyles();

  return (
    <div> <header id="header">
    <div className="intro">
      <div className="overlay">
        <div className="container">
          <div className="row">
            <div className="intro-text">
              <div>
              <h1 style={{marginBottom  :"10vh"}} >Authors</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </header>
    <div>
      <Container sx={{ py: 8 }} maxWidth="md">
        <Grid container spacing={4}>
          {authorCards.map((card) => (
            <Grid item key={card.id} xs={12} sm={6} md={4}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <CardMedia
                  component="div"
                  sx={{ pt: "100%" }}
                  image={card.image}
                />
                <CardContent sx={{ flexGrow: 1, paddingBottom: 0 }}>
                  <Typography gutterBottom variant="h5" component="h2">
                    {card.title}
                  </Typography>
                </CardContent>
                <CardActions sx={{ paddingTop: 0 }}>
                  <Link to={`/archive/${card.title}`} className={classes.link}>
                    View
                  </Link>
                </CardActions>
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
