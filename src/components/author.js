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

// Link Styles
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

// Details for author cards
export const authorCards = [
  {
    id: 1,
    title: "Jeelani Bano"
  },
  {
    id: 2,
    title: "Fatima Alam Ali"
  },
  {
    id: 3,
    title: "Gottamukkala Mangayamma"
  },
  {
    id: 4,
    title: "Kuppili Padma"
  },
  {
    id: 5,
    title: "Muppala Ranganayakamma"
  },
  {
    id: 6,
    title: "P.Satyavati"
  },
  {
    id: 7,
    title: "Bandaru Acchamamba"
  },
  {
    id: 8,
    title: "Kanuparti Varalakshamma"
  },
  {
    id: 9,
    title: "Yellapragada Sita Kumari"
  },
  {
    id: 10,
    title: "Achanta Sarada Devi"
  },
  {
    id: 11,
    title: "Illindala Saraswati Devi"
  },
  {
    id: 12,
    title: "K Ramalakshmi"
  },
  {
    id: 13,
    title: "M. Pushpavati Devi"
  },
  {
    id: 14,
    title: "Dvivedula Vishalakshi"
  },
  {
    id: 15,
    title: "G. Rajyalakshmi"
  },
  {
    id: 16,
    title: "Malathi Chendur"
  },
  {
    id: 17,
    title: "Janaki Rani"
  },
  {
    id: 18,
    title: "T.V Ratnavali"
  },
  {
    id: 19,
    title: "Thenneti Krishnaveni Janaki Ramahemalatha"
  },
  {
    id: 20,
    title: "N.Devaki Devi"
  },
  {
    id: 21,
    title: "Sunkara and Vasireddi"
  },
  {
    id: 22,
    title: "Kondapalli Koteshwaramma"
  },
  {
    id: 23,
    title: "Gogu Shyamala"
  },
  {
    id: 24,
    title: "Dr. Vinodini"
  },
  {
    id: 25,
    title: "Jajula Gowri"
  },
  {
    id: 26,
    title: "Joopaka Shubhadra"
  },
  {
    id: 27,
    title: "Perumandla Sridevi"
  },
  {
    id: 28,
    title: "Volga(P.Lalitha kumari)"
  },
  {
    id: 29,
    title: "J. Varalakshmi"
  },
  {
    id: 30,
    title: "Padmavati Devi"
  },
  {
    id: 31,
    title: "Vijayalakshmi"
  },
  {
    id: 32,
    title: "Kolakaluri Swaroopa Rani"
  },
  {
    id: 33,
    title: "Darisi Sasi Nirmala"
  },
  {
    id: 34,
    title: "Vijayasri"
  },
  {
    id: 35,
    title: "Challapalli Swaroopa Rani"
  },
  {
    id: 36,
    title: "M Gowri"
  },
  {
    id: 37,
    title: "Vijaya kumari"
  },
  {
    id: 38,
    title: "Sripada Subramanya Shastry"
  },
  {
    id: 39,
    title: "B. S Ramulu"
  },
  {
    id: 40,
    title: "Sannapureddi Venkatarami Reddy"
  },
  {
    id: 41,
    title: "Allam Rajaih"
  },
  {
    id: 42,
    title: "Shanthi Narayana"
  },
  {
    id: 43,
    title: "Kaluva Mallaia"
  },
  {
    id: 44,
    title: "Kolakaluri Enoch"
  },
  {
    id: 45,
    title: "Toleti Jaganmohan Rao"
  },
  {
    id: 46,
    title: "Boya Janagaiah"
  },
  {
    id: 47,
    title: "Vemula Yellaiah"
  },
  {
    id: 48,
    title: "Yendluri Sudhakar"
  },
  {
    id: 49,
    title: "Nagappagari Sunder Raju"
  },
  {
    id: 50,
    title: "Unnava Laxminarayana"
  },
  {
    id: 51,
    title: "N G Ranga"
  },
  {
    id: 52,
    title: "Dasarathi Rangacharya"
  },
  {
    id: 53,
    title: "Kesava Reddy"
  },
  {
    id: 54,
    title: "G Rama Mohan Rao"
  },
  {
    id: 55,
    title: "Chilukuri Devaputra"
  },
  {
    id: 56,
    title: "K. Sabha"
  },
  {
    id: 57,
    title: "Alwaru Swami"
  },
  {
    id: 58,
    title: "Madduri Nagesh Babu"
  },
  {
    id: 59,
    title: "Satish Chander"
  },
  {
    id: 60,
    title: "Vemula Yellayya"
  },
  {
    id: 61,
    title: "Durga Prasad"
  },
  {
    id: 63,
    title: "Nagappa Sundar Raju"
  },
  {
    id: 65,
    title: "Divakarla Tirupati Sastry and Chellapilla Venkata Sastry"
  },
  {
    id: 66,
    title: "Rayaprolu Subbarao"
  },
  {
    id: 67,
    title: "Duvvuri Rami Reddy"
  },
  {
    id: 68,
    title: "Devulapalli Krishna Sastry"
  },
  {
    id: 69,
    title: "Adivi Bapiraju"
  },
  {
    id: 70,
    title: "Tallavajjula Sivasankara Swamy"
  },
  {
    id: 71,
    title: "Vishwanatha Satyanarayana's Girikumarudu"
  },
  {
    id: 72,
    title: "Gurramm Jashuva"
  },
  {
    id: 73,
    title: "G.Laxminarsaiah and Tripuraneni Srinivas"
  },
  {
    id: 74,
    title: "Vasireddi Sita Devi"
  },
  {
    id: 75,
    title: "Sunkara and Vasireddi"
  },
  {
    id: 76,
    title: "Sunkara Satyanarayana and V. Bhaskara Rao"
  },
  {
    id: 77,
    title: "Kodavatiganti Kutumba Rao"
  },
  {
    id: 78,
    title: "Bollimunta Sivaramakrishna"
  },
  {
    id: 79,
    title: "Dasarathi"
  },
  {
    id: 80,
    title: "Somasundar"
  },
  {
    id: 81,
    title: "Arudra"
  },
  {
    id: 82,
    title: "Anisetti"
  },
  {
    id: 83,
    title: "Gangineni"
  },
  {
    id: 84,
    title: "Chalam"
  },
  {
    id: 86,
    title: "C R Reddy"
  }
];
export const addAuthor = (author) => {
  authorCards.push(author);
};
// Header + Author Cards
const Author = () => {
  const classes = useStyles();
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
                  {/* <CardMedia
                    component="div"
                    sx={{ pt: "100%" }}
                    image={card.image}
                  /> <CardContent sx={{ flexGrow: 1, paddingBottom: 0 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {card.title}
                    </Typography>
                  </CardContent> */}
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
