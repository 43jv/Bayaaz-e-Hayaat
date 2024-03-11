import React, { useState } from "react";
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

import AKSZ from "./data/scans/Adeeba_ki_Samaaji_Zimmedaari.pdf";
import HBC from "./data/scans/Humne_Bandooq_Chalaai.pdf";

import AEG from "./data/text/Aiwan_e_Ghazal.pdf";
import BES from "./data/text/Barish_e_Sang.pdf";
import MKM from "./data/text/Mom_ki_Maryam.pdf";

import YB from "./data/text/Yaadash_Bakhair.pdf";
import YBS from "./data/text/YB_summary.pdf";

import BQS from "./data/scans/Badalti_Qudratein_aur_Khawateen.pdf";
import BQT from "./data/text/FAA_Badalti_Qudratein_aur_Khawateen.pdf";

import HBS from "./data/scans/FAA_Humaara_bhi_Kya_Zamaana_Tha.pdf";
import HBT from "./data/text/FAA_Humaara-Bhi-Kya-Zamaana-Tha.pdf";

import MZS from "./data/scans/FAA_Meri_Zubaan_wa_Qalam_Se_Kisi_ka_Dil_na_Dukhey.pdf";
import MZT from "./data/text/FAA_Meri_Zubaan-va-Qalam_se_Kisi_ka_Dil_na_Dukhey.pdf";

import RAH from "./data/scans/Rationing_aur_Hum.pdf";
import SN from "./data/scans/FAA_Sarojini_Naidu.pdf";

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
    image: BQS,
    digitisedText: BQT,
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
  {
    id: 9,
    title: "Humaara bhi Kya Zamaana Tha",
    image: HBS,
    digitisedText: HBT,
    author: "Fatima Alam Ali",
  },
  {
    id: 10,
    title: "Meri Zubaan wa Qalam Se Kisi ka Dil na Dukhey",
    image: MZS,
    digitisedText: MZT,
    author: "Fatima Alam Ali",
  },
  {
    id: 11,
    title: "Sarojini Naidu",
    image: SN,
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

  const [isEnglish, setIsEnglish] = useState(true); // State to track language display

  const toggleLanguage = () => {
    setIsEnglish(!isEnglish);
  };
  const authorText =
    author === "Fatima Alam Ali"
      ? `Fatima Alam Ali (1923-2020) was an Urdu-language writer and literary personality in the Deccan. The daughter of Progressive writer and journalist Qazi Adbul Ghaffar, she was raised in an illustrious literary circle at the peak of British colonialism in India. She began writing as a schoolgirl in Lucknow and sharpened her pen at Women’s College, Osmania University, Hyderabad in the 1940s, following which she published in newspapers, magazines, and books, and read in gatherings and on All India Radio. In 1949, she married Alam Ali, with whom she had a daughter, Asma Burney.
Ali’s was a significant voice in non-fiction from the Deccan, notably in the genres of khaaka (pen-portraiture) and tanzo-mizah (satire and humour). The definitive collection of these, titled Yaadash Bakhair, was published in 1989, including reflective essays and pen-portraits of her father, his peers, her girlhood friend, her female mentors, and her memories of them. Much of her other writing is in college notes, recipes, personal reflections, scholarly research, literary drafts, and accounting books that paint a more unassuming and domestic picture of life in 20th century Hyderabad for lettered middle-class women like her.`
      : author === "Jeelani Bano"
      ? `Jeelani Bano (born 14 July, 1936) is an Urdu writer and literary personality. Born in Badayun, Uttar Pradesh, and raised in Hyderabad, she is the daughter of Urdu poet Hairat Badayuni. Bano began writing at the age of eight, and she has since authored 22 books, including short story anthologies starting with Raushni ke Minar (1958), novels such as Aiwan-e-Ghazal (1976) and Baarish-e-Sang (1985), correspondence with other writers, and an autobiography. She is the wife of late Islamic studies scholar, Anwar Moazzam (1930-2023). Her accolades include a Padma Shri from the Government of India in 2001. Shyam Benegal’s 2009 Hindi film, “Well Done Abba,” was based on Bano’s satirical short story, “Narsaiyya ki Baudi.”
    
    Bano’s work brings together social commentary, humour, pain, irony, and the complexities of the human condition. As a female writer from the Deccan, she holds a significant place in Urdu literature for a radical social and political voice outside the remit of the Progressive Writers Association.`
      : ""; // Add more conditions as needed
  const authorUrduText =
    author === "Fatima Alam Ali"
      ? `
فاطمہ عالم علی (1923-2020) دکن کی ایک اردو زبان کی مصنفہ اور ادبی شخصیت تھیں۔ وہ ترقی پسند مصنف اور صحافی قاضی عبدالغفار کی بیٹی تھیں، اور اسی لیے برطانوی نوآبادیات کے عروج پر اردو کی ایک ممتاز ادبی برادری میں پرورش پائی۔ انہوں
نے لکھنؤ میں رہتے ہوئے اسکول میں لکھنا شروع کیا اور 1940 کی دہائی میں عثمانیہ یونیورسٹی، حیدرآباد میں “ومنس کالج” میں پڑھتے ہوئے لکھنا جاری رکھا۔ انہوں نے اپنا کام اخبارات، رسائل اور کتابوں میں شائع کیا اور اسے محفلوں اور آل انڈیا ریڈیو پر پڑھا۔ 1949 میں، انہوں نے عالم علی سے شادی کی، جن سے ان کی ایک بیٹی عاصمہ برنی تھی۔
فاطمہ عالم علی کی آواز دکن کی غیر افسانوی تحریروں میں خاص طور پر خاکہ اور طنزومزاح کی اصناف میں ایک اہم آواز ہے۔
ان تحریروں کا ایک مجموعہ "یادش بخیر" کے نام سے 1989 میں شائع ہوا، جس میں عکاس مضامین، ان کے والد اور ان کے ساتھیوں، ان کے بچپن کے دوست، ان کے سرپرستوں اور ان کے بارے میں ان کی یادیں شامل ہیں۔ ان کی زیادہ تر تحریریں کالج کے نوٹس، ترکیبیں، ذاتی عکاسی، علمی تحقیق، ادبی مسودات، اور حساب کتاب کی کتابوں میں ہیں جو 20ویں صدی کے حیدرآباد میں ان جیسی متوسط طبقے کی خواتین کے لیے زندگی کی ایک زیادہ غیر معمولی اور گھریلو تصویر پیش کرتی ہیں۔
`
      : author === "Jeelani Bano"
      ? ` 
جیلانی بانو (پیدائش: 14 جولائی 1936) ایک اردو مصنفہ اور ادبی شخصیت ہیں۔ وہ بدایوں، اتر پردیش میں پیدا ہوئیں اور حیدرآباد میں پرورش پائی۔ وہ اردو کے شاعر ہیرت بدایونی کی بیٹی ہیں۔ بانو نے آٹھ سال کی عمر میں لکھنا شروع کیا۔ انہوں نے 22 کتابیں تصنیف کی ہیں جن میں مختصر کہانیوں کے انتھالوجیز، جیسے کہ “روشن کے مینار” (1958)، ناول، جیسے “ایوانِ غزل” (1976) اور “باریشِ سنگ” (1985)، دیگر مصنفین کے ساتھ خط و کتابت، اور ایک خود نوشت شامل ھیں- وہ اسلامی علوم کے اسکالر مرحوم انور معظم (1930-2023) کی اہلیہ ھیں۔ ان کی تعریفوں میں 2001 میں حکومت ہند کی طرف سے پدم شری بھی شامل ہے۔ شیام بینیگل کی 2009 کی ہندی فلم، "ویل ڈن ابا،" بانو کی طنزیہ مختصر کہانی "نرسایا کی باؤدی" پر مبنی تھی۔

بانو کا کام سماجی تبصرے، مزاح، درد، ستم ظریفی اور انسانی حالت کی پیچیدگیوں کو بیان کرتا ہے۔ دکن سے آنے والی ایک خاتون مصنفہ کے طور پر، وہ ترقی پسند مصنفین کی تنظیم سے باہر ایک بنیاد پرست سماجی اور سیاسی آواز کے لیے اردو ادب میں ایک اہم مقام رکھتی ہیں۔
`
      : ""; // Add more conditions as needed
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
        <div style={{ marginTop: "1vh", height: "70vh", overflow: "auto" }}>
        <div>
      <div>
        <Button onClick={toggleLanguage}>English</Button>
        <Button onClick={toggleLanguage}>Urdu</Button>
      </div>
      <div style={{ marginTop: "1vh"}}>
        {isEnglish ? <p>{authorText}</p> : <p>{authorUrduText}</p>}
      </div>
    </div>
</div>

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
                      to={`/RenderDoc/${encodeURIComponent(card.image)}${
                        card.digitisedText
                          ? `,${encodeURIComponent(card.digitisedText)}`
                          : ""
                      }`}
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
