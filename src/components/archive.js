import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { makeStyles } from "@material-ui/core/styles";
import { Link, useParams } from "react-router-dom";

import AKSZ from "./data/Adeeba_ki_Samaaji_Zimmedaari.pdf";
import AEG from "./data/Aiwan_e_Ghazal.pdf";
import BQAK from "./data/Badalti_Qudratein_aur_Khawateen.pdf";
import HBC from "./data/Humne_Bandooq_Chalaai.pdf";
import MKM from "./data/Mom_ki_Maryam.pdf";
import RAH from "./data/Rationing_aur_Hum.pdf";
import YB from "./data/Yaadash_Bakhair.pdf";
import BES from "./data/Barish_e_Sang.pdf";
import img1 from "./author_imgs/Jeelani_Bano.jpg";
import img2 from "./author_imgs/Jeelani_Bano_Padmashri.png";
import img3 from "./author_imgs/FAA1.jpg";
import img4 from "./author_imgs/FAA2.jpg";
import img5 from "./author_imgs/FAA3.jpg";
import img6 from "./author_imgs/FAA4.jpg";

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

const authorWorks = [
  {
    id: 1,
    title: "Aiwan e Ghazal",
    image: AEG,
    author: "Jeelani Bano",
  },
  {
    id: 2,
    title: "Mom ki Maryam",
    image: MKM,
    author: "Jeelani Bano",
  },
  {
    id: 3,
    title: "Baarish e Sang",
    image: BES,
    author: "Jeelani Bano",
  },
  {
    id: 4,
    title: "Adeeba ki Samaaji Zimmedaari",
    image: AKSZ,
    author: "Fatima Alam Ali", // Add actual author name
  },
  {
    id: 5,
    title: "Badalti Qudratein aur Khawateen",
    image: BQAK,
    author: "Fatima Alam Ali",
  },
  {
    id: 6,
    title: "Humne Bandooq Chalaai",
    image: HBC,
    author: "Fatima Alam Ali",
  },
  {
    id: 7,
    title: "Rationing aur Hum",
    image: RAH,
    author: "Fatima Alam Ali",
  },
  {
    id: 8,
    title: "Yaadash Bakhair",
    image: YB,
    author: "Fatima Alam Ali",
  },
];

const authorImages = {
  "Jeelani Bano": [img1, img2],
  "Fatima Alam Ali": [img3, img4, img5, img6],
  // Add more authors and their images here
};

const Archive = () => {
  const classes = useStyles();
  const { author } = useParams();

  const filteredCards = authorWorks.filter((card) => card.author === author);
  const carouselImages = authorImages[author] || []; // Default to an empty array if there are no images for this author

  return (
    <div style={{ display: "flex", marginTop: "12vh" }}>
      <div style={{ flex: 1, marginLeft: "1vw" }}>
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
          {carouselImages.map((image, index) => (
            <Carousel.Item key={index}>
              <img
                className="d-block w-100"
                src={image}
                style={{ objectFit: "contain", height: "50vh" }}
              />
            </Carousel.Item>
          ))}
        </Carousel>
        <p style={{ marginTop: "1vh" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          fringilla, risus sed aliquet luctus, nisl nisl tincidunt nunc, id
          aliquet nunc nisl id nunc. Nulla facilisi. Sed id enim non mauris
          tincidunt tincidunt. Sed auctor, sem ac lacinia efficitur, mauris
          justo fringilla urna, id luctus mauris elit id nisl. Sed at vestibulum
          purus. Sed nec nunc euismod, aliquam metus nec, commodo tellus. Nulla
          facilisi. Sed id enim non mauris tincidunt tincidunt.
        </p>
        <Link className={classes.link} to="/author">
          Back
        </Link>
      </div>
      <div style={{ flex: 2 }}>
        <Container sx={{ py: 2 }} maxWidth="md">
          <Grid container spacing={4}>
            {filteredCards.map((card) => (
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
                    sx={{ pt: "56.25%" }}
                    image={card.image}
                  />
                  <CardContent sx={{ flexGrow: 1, paddingBottom: 0 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {card.title}
                    </Typography>
                    <Typography>{`${card.author}`}</Typography>
                  </CardContent>

                  <CardActions>
                    <Link
                      to={`/RenderDoc/${encodeURIComponent(card.image)}`}
                      size="small"
                      className={classes.link}
                    >
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

export default Archive;
