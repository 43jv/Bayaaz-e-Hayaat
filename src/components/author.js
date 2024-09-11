import React, { useState } from "react";
import { Container, Grid, Card, Button } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
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

// Details for author cards
export const authorCards = [
  {
    id: 1,
    title: "Jeelani Bano",
    language: "Urdu",
  },
  {
    id: 2,
    title: "Fatima Alam Ali",
    language: "Urdu",
  },
  {
    id: 3,
    title: "Gottamukkala Mangayamma",
    language: "Telugu",
  },
  {
    id: 4,
    title: "Kuppili Padma",
    language: "Telugu",
  },
  {
    id: 5,
    title: "Muppala Ranganayakamma",
    language: "Telugu",
  },
  {
    id: 6,
    title: "P.Satyavati",
    language: "Telugu",
  },
  {
    id: 7,
    title: "Bandaru Acchamamba",
    language: "Telugu",
  },
  {
    id: 8,
    title: "Kanuparti Varalakshamma",
    language: "Telugu",
  },
  {
    id: 9,
    title: "Yellapragada Sita Kumari",
    language: "Telugu",
  },
  {
    id: 10,
    title: "Achanta Sarada Devi",
    language: "Telugu",
  },
  {
    id: 11,
    title: "Illindala Saraswati Devi",
    language: "Telugu",
  },
  {
    id: 12,
    title: "K Ramalakshmi",
    language: "Telugu",
  },
  {
    id: 13,
    title: "M. Pushpavati Devi",
    language: "Telugu",
  },
  {
    id: 14,
    title: "Dvivedula Vishalakshi",
    language: "Telugu",
  },
  {
    id: 15,
    title: "G. Rajyalakshmi",
    language: "Telugu",
  },
  {
    id: 16,
    title: "Malathi Chendur",
    language: "Telugu",
  },
  {
    id: 17,
    title: "Janaki Rani",
    language: "Telugu",
  },
  {
    id: 18,
    title: "T.V Ratnavali",
    language: "Telugu",
  },
  {
    id: 19,
    title: "Thenneti Krishnaveni Janaki Ramahemalatha",
    language: "Telugu",
  },
  {
    id: 20,
    title: "N.Devaki Devi",
    language: "Telugu",
  },
  {
    id: 21,
    title: "Sunkara and Vasireddi",
    language: "Telugu",
  },
  {
    id: 22,
    title: "Kondapalli Koteshwaramma",
    language: "Telugu",
  },
  {
    id: 23,
    title: "Gogu Shyamala",
    language: "Telugu",
  },
  {
    id: 24,
    title: "Dr. Vinodini",
    language: "Telugu",
  },
  {
    id: 25,
    title: "Jajula Gowri",
    language: "Telugu",
  },
  {
    id: 26,
    title: "Joopaka Shubhadra",
    language: "Telugu",
  },
  {
    id: 27,
    title: "Perumandla Sridevi",
    language: "Telugu",
  },
  {
    id: 28,
    title: "Volga(P.Lalitha kumari)",
    language: "Telugu",
  },
  {
    id: 29,
    title: "J. Varalakshmi",
    language: "Telugu",
  },
  {
    id: 30,
    title: "Padmavati Devi",
    language: "Telugu",
  },
  {
    id: 31,
    title: "Vijayalakshmi",
    language: "Telugu",
  },
  {
    id: 32,
    title: "Kolakaluri Swaroopa Rani",
    language: "Telugu",
  },
  {
    id: 33,
    title: "Darisi Sasi Nirmala",
    language: "Telugu",
  },
  {
    id: 34,
    title: "Vijayasri",
    language: "Telugu",
  },
  {
    id: 35,
    title: "Challapalli Swaroopa Rani",
    language: "Telugu",
  },
  {
    id: 36,
    title: "M Gowri",
    language: "Telugu",
  },
  {
    id: 37,
    title: "Vijaya kumari",
    language: "Telugu",
  },
  {
    id: 38,
    title: "Sripada Subramanya Shastry",
    language: "Telugu",
  },
  {
    id: 39,
    title: "B. S Ramulu",
    language: "Telugu",
  },
  {
    id: 40,
    title: "Sannapureddi Venkatarami Reddy",
    language: "Telugu",
  },
  {
    id: 41,
    title: "Allam Rajaih",
    language: "Telugu",
  },
  {
    id: 42,
    title: "Shanthi Narayana",
    language: "Telugu",
  },
  {
    id: 43,
    title: "Kaluva Mallaia",
    language: "Telugu",
  },
  {
    id: 44,
    title: "Kolakaluri Enoch",
    language: "Telugu",
  },
  {
    id: 45,
    title: "Toleti Jaganmohan Rao",
    language: "Telugu",
  },
  {
    id: 46,
    title: "Boya Janagaiah",
    language: "Telugu",
  },
  {
    id: 47,
    title: "Vemula Yellaiah",
    language: "Telugu",
  },
  {
    id: 48,
    title: "Yendluri Sudhakar",
    language: "Telugu",
  },
  {
    id: 49,
    title: "Nagappagari Sunder Raju",
    language: "Telugu",
  },
  {
    id: 50,
    title: "Unnava Laxminarayana",
    language: "Telugu",
  },
  {
    id: 51,
    title: "N G Ranga",
    language: "Telugu",
  },
  {
    id: 52,
    title: "Dasarathi Rangacharya",
    language: "Telugu",
  },
  {
    id: 53,
    title: "Kesava Reddy",
    language: "Telugu",
  },
  {
    id: 54,
    title: "G Rama Mohan Rao",
    language: "Telugu",
  },
  {
    id: 55,
    title: "Chilukuri Devaputra",
    language: "Telugu",
  },
  {
    id: 56,
    title: "K. Sabha",
    language: "Telugu",
  },
  {
    id: 57,
    title: "Alwaru Swami",
    language: "Telugu",
  },
  {
    id: 58,
    title: "Madduri Nagesh Babu",
    language: "Telugu",
  },
  {
    id: 59,
    title: "Satish Chander",
    language: "Telugu",
  },
  {
    id: 60,
    title: "Vemula Yellayya",
    language: "Telugu",
  },
  {
    id: 61,
    title: "Durga Prasad",
    language: "Telugu",
  },
  {
    id: 63,
    title: "Nagappa Sundar Raju",
    language: "Telugu",
  },
  {
    id: 65,
    title: "Divakarla Tirupati Sastry and Chellapilla Venkata Sastry",
    language: "Telugu",
  },
  {
    id: 66,
    title: "Rayaprolu Subbarao",
    language: "Telugu",
  },
  {
    id: 67,
    title: "Duvvuri Rami Reddy",
    language: "Telugu",
  },
  {
    id: 68,
    title: "Devulapalli Krishna Sastry",
    language: "Telugu",
  },
  {
    id: 69,
    title: "Adivi Bapiraju",
    language: "Telugu",
  },
  {
    id: 70,
    title: "Tallavajjula Sivasankara Swamy",
    language: "Telugu",
  },
  {
    id: 71,
    title: "Vishwanatha Satyanarayana's Girikumarudu",
    language: "Telugu",
  },
  {
    id: 72,
    title: "Gurramm Jashuva",
    language: "Telugu",
  },
  {
    id: 73,
    title: "G.Laxminarsaiah and Tripuraneni Srinivas",
    language: "Telugu",
  },
  {
    id: 74,
    title: "Vasireddi Sita Devi",
    language: "Telugu",
  },
  {
    id: 75,
    title: "Sunkara and Vasireddi",
    language: "Telugu",
  },
  {
    id: 76,
    title: "Sunkara Satyanarayana and V. Bhaskara Rao",
    language: "Telugu",
  },
  {
    id: 77,
    title: "Kodavatiganti Kutumba Rao",
    language: "Telugu",
  },
  {
    id: 78,
    title: "Bollimunta Sivaramakrishna",
    language: "Telugu",
  },
  {
    id: 79,
    title: "Dasarathi",
    language: "Telugu",
  },
  {
    id: 80,
    title: "Somasundar",
    language: "Telugu",
  },
  {
    id: 81,
    title: "Arudra",
    language: "Telugu",
  },
  {
    id: 82,
    title: "Anisetti",
    language: "Telugu",
  },
  {
    id: 83,
    title: "Gangineni",
    language: "Telugu",
  },
  {
    id: 84,
    title: "Chalam",
    language: "Telugu",
  },
  {
    id: 86,
    title: "C R Reddy",
    language: "Telugu",
  },
];

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
