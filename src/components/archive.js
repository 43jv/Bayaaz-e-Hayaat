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

import AKSZ from "./data/Adeeba_ki_Samaaji_Zimmedaari.pdf";
import AEG from "./data/Aiwan_e_Ghazal.pdf";
import BQAK from "./data/Badalti_Qudratein_aur_Khawateen.pdf";
import HBC from "./data/Humne_Bandooq_Chalaai.pdf";
import MKM from "./data/Mom_ki_Maryam.pdf";
import RAH from "./data/Rationing_aur_Hum.pdf";
import YB from "./data/Yaadash_Bakhair.pdf";
import BES from "./data/Barish_e_Sang.pdf";

const cardsData = [
  {
    id: 1,
    title: "Adeeba ki Samaaji Zimmedaari",
    image: AKSZ,
    author: "Author Name 1", // Add actual author name
  },
  {
    id: 2,
    title: "Aiwan e Ghazal",
    image: AEG,
    author: "Author Name 2",
  },
  {
    id: 3,
    title: "Badalti Qudratein aur Khawateen",
    image: BQAK,
    author: "Author Name 3",
  },
  {
    id: 4,
    title: "Humne Bandooq Chalaai",
    image: HBC,
    author: "Author Name 4",
  },
  {
    id: 5,
    title: "Mom ki Maryam",
    image: MKM,
    author: "Author Name 5",
  },
  {
    id: 6,
    title: "Rationing aur Hum",
    image: RAH,
    author: "Author Name 6",
  },
  {
    id: 7,
    title: "Yaadash Bakhair",
    image: YB,
    author: "Author Name 7",
  },
  {
    id: 8,
    title: "Baarish e Sang",
    image: BES,
    author: "Author Name 7",
  },
];

const Archive = () => {
  return (
    <div>
      <Container sx={{ py: 8 }} maxWidth="md">
        <Grid container spacing={4}>
          {cardsData.map((card) => (
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
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2">
                    {card.title}
                  </Typography>
                  <Typography>{`${card.author}`}</Typography>
                </CardContent>

                <CardActions>
                  <Button
                    component={Link}
                    to={`/urdu/${encodeURIComponent(card.image)}`}
                    size="small"
                  >
                    View
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default Archive;
