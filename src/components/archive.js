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
import BEST from "./data/text/BeH_BeS_Translation_Excerpt.pdf";

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

import PLH from "./data/scans/FAA_Personal_Law_mein_Tabdeeli_ka_Haal.pdf";
import PLHT from "./data/text/FAA_Personal_Law_mein_Tabdeeli_ka_Haal.pdf";

import FAAR from "./data/scans/Recipes_FAA_9by6cm.pdf";
import FRT from "./data/text/FAA_Recipes_1.pdf";

import img1 from "./author_imgs/Jeelani_Bano.jpg";
import img2 from "./author_imgs/Jeelani_Bano_Padmashri.png";
import img3 from "./author_imgs/FAA1.jpg";
import img4 from "./author_imgs/FAA2.jpg";
import img5 from "./author_imgs/FAA3.jpg";
import img6 from "./author_imgs/FAA4.jpg";

const useStyles = makeStyles({
  link: {
    fontFamily: "Craw Modern Bold",
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
    title: "Adeeba ki Samaaji Zimmedaari",
    image: AKSZ,
    author: "Fatima Alam Ali", // Add actual author name
    engInfo: "",
    urduInfo: "",
  },
  {
    id: 2,
    title: "Aiwan e Ghazal",
    image: AEG,
    author: "Jeelani Bano",
    engInfo: `<strong> Aiwan-e-Ghazal </strong> (trans. The Palace of Ghazal) is a 1976 novel by <a href="/archive/Jeelani%20Bano" target="_blank"> Jeelani Bano</a>. Set in the twilight of the British Raj and early years of independence in India, the story unfolds in the stratified feudal society of the erstwhile Hyderabad state. Depicting the impact of Hyderabad’s political instability, land reform, urbanisation, and assimilation on a wide array of caste-class groups, the main themes of the book are feudal oppression and the transformation of Urdu language and literature in the aftermath of national independence. The women, including the titular character, are the focus of the novel, and live their lives in the zenana of the nobility as well as the rural uprisings that challenged it. Punctuated by a collection of ghazals, amatory Urdu poems, the narrative disrupts the monotholic conception of Hyderabadi Muslims and describes the decline of Urdu literary culture and the political prestige of the ruling class. The book’s publication marks an important moment in modern Urdu literature from the Deccan.`,
    urduInfo: `
    ایوانِ غزل (غزل کا محل) جیلانی بانو کا 1976 کا ایک ناول ہے۔ برطانوی راج کے آخری اور ہندوستان میں آزادی کے ابتدائی سالوں پر مبنی یہ کہانی سابقہ حیدرآباد ریاست کے جاگیردارانہ سماج میں پیش آتی ہے۔ اس کہانی میں حیدرآباد کے سیاسی عدم استحکام، زمینی اصلاحات، شہری کاری، اور ذات پات کے مختلف گروہوں پر انضمام کے اثرات کو دکھایا گیا ہے۔ کتاب کے مرکزی موضوعات جاگیردارانہ جبر اور آزادی کے بعد اردو زبان و ادب کی تبدیلی اور زوال ہیں۔ عورتیں ناول کے مرکزی کردار ہیں; وہ پدرانہ اشرافیہ کے زنانہ اور اس کی مخالفت کرنے والی بغاوتوں دونوں میں رہتے ہیں۔ غزلوں کے مجموعے پر مشتمل یہ بیانیہ حیدرآبادی مسلم معاشرے کے یک سنگی تصور میں خلل ڈالتا ہے اور اردو ادبی ثقافت اور حکمران طبقے کے سیاسی وقار کے زوال کو بیان کرتا ہے۔ اس کتاب کی اشاعت جدید دکنی اردو ادب میں ایک اہم لمحہ ہے۔
    
    `,
  },
  {
    id: 3,
    title: "Baarish e Sang",
    image: BES,
    digitisedText: BEST,
    author: "Jeelani Bano",
    engInfo: `<strong> Baarish-e-Sang </strong> (trans. Rainfall of Stones) is a 1985 novel by <a href="/archive/Jeelani%20Bano" target="_blank">Jeelani Bano</a>. The story is set in the erstwhile Nizam’s state of Hyderabad in the 1940s during the fever-pitch of the Telangana peasant uprisings and political transformations. With central themes of exploitation by and liberation from a feudal gentry, the novel sees a young boy struggling against the chains of both bonded labour in the villages and capitalist servitude in the cities. Best read in conjunction with Bano’s first novel Aiwan-e-Ghazal, Baarish-e-Sang explores feudalism, patriarchy, violence, subjugation, and the fight for freedom as a “rainfall of stones” during a formative moment in India’s lesser-known history.`,
    urduInfo: `
    باریش سنگ جیلانی بانو کا 1985 کا ناول ہے۔ یہ کہانی 1940 کی دہائی میں نظام کی ریاست حیدرآباد میں تلنگانہ کسانوں کی بغاوتوں اور سیاسی تبدیلیوں کے عروج کے دوران پیش آتی ہے۔ کہانی کا مرکزی موضوع جاگیرداروں کا  استحصال اور اس سے آزادی ہے۔ اس میں ایک نوجوان کسان کو دیہات میں بندھوا مزدوری اور شہر میں سرمایہ دارانہ غلامی دونوں کی زنجیروں کے خلاف جدوجہد کرتے ہوئے دکھایا گیا ہے۔ یہ کتاب بانو کے پہلے ناول ایوانِ غزل کے ساتھ مل کر بھتر پڑھی جاتی ہے۔ باریش سنگ ہندوستان کی کم معروف تاریخ کے ایک ابتدائی لمحے کے دوران جاگیرداری، پدرانہ نظام، تشدد، محکومی، اور آزادی کی لڑائی کو "پتھروں کی بارش" کے طور پر پیش کرتا ہے۔
    
    `,
  },
  {
    id: 4,
    title: "Mom ki Maryam",
    image: MKM,
    author: "Jeelani Bano",
    engInfo: "",
    urduInfo: "",
  },
  
  
  {
    id: 5,
    title: "Badalti Qudratein aur Khawateen",
    image: BQS,
    digitisedText: BQT,
    author: "Fatima Alam Ali",
    engInfo: "",
    urduInfo: "",
  },
  {
    id: 6,
    title: "Humaara bhi Kya Zamaana Tha",
    image: HBS,
    digitisedText: HBT,
    author: "Fatima Alam Ali",
    engInfo: "",
    urduInfo: "",
  },
  {
    id: 7,
    title: "Humne Bandooq Chalaai",
    image: HBC,
    author: "Fatima Alam Ali",
    engInfo: "",
    urduInfo: "",
  },
  {
    id: 8,
    title: "Meri Zubaan wa Qalam Se Kisi ka Dil na Dukhey",
    image: MZS,
    digitisedText: MZT,
    author: "Fatima Alam Ali",
    engInfo: "",
    urduInfo: "",
  },

  {
    id: 9,
    title: "Personal Law mein Tabdeeli ka Haal",
    image: PLH,
    digitisedText: PLHT,
    author: "Fatima Alam Ali",
    engInfo: "",
    urduInfo: "",
  },
  {
    id: 10,
    title: "Rationing aur Hum",
    image: RAH,
    author: "Fatima Alam Ali",
    engInfo: "",
    urduInfo: "",
  },

  {
    id: 11,
    title: "Recipes",
    image: FAAR,
    digitisedText: FRT,
    author: "Fatima Alam Ali",
    engInfo: "",
    urduInfo: "",
  },
  {
    id: 12,
    title: "Sarojini Naidu",
    image: SN,
    author: "Fatima Alam Ali",
    engInfo: "",
    urduInfo: "",
  },
  {
    id: 13,
    title: "Yaadash Bakhair",
    image: YB,
    author: "Fatima Alam Ali",
    engInfo: `<strong> Yaadash Bakhair </strong> is a 1989 collection of khaaka (pen-portraiture) and tanz-o-mizah (satire and humour) essays authored by <a href="/archive/Fatima%20Alam%20Ali" target="_blank">Fatima Alam Ali</a>. The title of the collection is Persian for “May God preserve them,” or “Good remembrance,” and the essays within are appropriately based on Ali’s memories of contemporary figures in Hyderabadi society. These begin with her fond yet uneasy memories of her own father Qazi Abdul Ghaffar, a Progressive writer and journalist, for whose influence she is both grateful and self-conscious. The following essays are based on her memories of Agha Hyder Hussain, her father’s friend from Aligarh, Islamic scholar Habib ur-Rehman, her girlhood friend and Urdu literary stalwart Qurratulain Hyder, her revered and maternal Urdu teacher Razia Sajjad Zaheer, and Progressive Urdu poet Makhdoom Mohiuddin. Her most significant and exhaustive recollection is an essay titled Adabi Mehfil or “Literary Gathering,” which explores her memories of a mushayrah, a poetry recitation event, at her father’s home in 1945 and sees her characterise the luminaries she has grown up around. Running through the collection is the overarching theme of the nature of memory, its mischief, subjectivity, unreliability, and specificity.`,

    urduInfo: ` یادش بخیر 1989 میں فاطمہ عالم علی کی تحریر کردہ خاکہ اور تنز و میزہ کے مضامین کا مجموعہ ہے۔ مجموعے کے عنوان کا مطلب فارسی میں "خدا انہیں محفوظ رکھے،" یا "اچھی یاد" ہے، اور اس کے اندر موجود مضامین حیدرآبادی معاشرے میں معاصر شخصیات کے بارے میں مصنف کی یادوں پر مبنی ہیں۔اس مجموعے کا آغاز ان کے اپنے والد قاضی عبدالغفار، جو ایک ترقی پسند مصنف اور صحافی تھے، کی ان کی دلکش لیکن بے چین یادوں سے ہوتا ہے، جن کے اثر و رسوخ کے لیے وہ مشکور بھی ہیں اور فکر مند بھی۔مندرجہ ذیل مضامین آغا حیدر حسین، علی گڑھ سے ان کے والد کے دوست، اسلامی اسکالر حبیب الرحمان، ان کے بچپن کے دوست اور اردو ادب کے ماہر قرۃ العین حیدر، ان کی محترم اور مادر علمی اردو استاد رضیہ سجاد ظہیر، اور اردو کے ترقی پسند شاعر کی یادوں مخدوم محی الدین پر مبنی ہیں۔ان کی سب سے اہم اور مکمل یادداشت ادبی محفل کے عنوان سے ایک مضمون ہے جس میں 1945 میں اپنے والد کے گھر ہونے والے مشاعرے کی ان کی یادوں کو بیان کیا گیا ہے۔ اس میں وہ ان ادبی شخصیات کو نمایاں کرتی ہے جنہیں وہ بچپن سے جانتی ہے۔اس مجموعے کا مرکزی موضوع انسانی یادداشت کی نوعیت، شرارت، ناقابل اعتباری اور خاصیت ہے۔
    `,
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

  // State to track language display
  const [language, setLanguage] = useState("English");

  const changeToEnglish = () => {
    setLanguage("English");
  };

  const changeToUrdu = () => {
    setLanguage("Urdu");
  };

  const changeToHindi = () => {
    setLanguage("Hindi");
  };

  const changeToTelugu = () => {
    setLanguage("Telugu");
  };

  const authorText =
    author === "Fatima Alam Ali"
      ? `
      <strong> Fatima Alam Ali </strong> (1923-2020) was an Urdu-language writer and literary personality in the Deccan. The daughter of Progressive writer and journalist Qazi Adbul Ghaffar, she was raised in an illustrious literary circle at the peak of British colonialism in India. She began writing as a schoolgirl in Lucknow and sharpened her pen at Women’s College, Osmania University, Hyderabad in the 1940s, following which she published in newspapers, magazines, and books, and read in gatherings and on All India Radio. In 1949, she married Alam Ali, with whom she had a daughter and two sons.<br/>
      Ali’s was a significant voice in non-fiction from the Deccan, notably in the genres of khaaka (pen-portraiture) and tanzo-mizah (satire and humour). The definitive collection of these, titled Yaadash Bakhair, was published in 1989, including reflective essays and pen-portraits of her father, his peers, her girlhood friend, her female mentors, and her memories of them. Much of her other writing is in college notes, recipes, personal reflections, scholarly research, literary drafts, and accounting books that paint a more unassuming and domestic picture of life in 20th century Hyderabad for lettered middle-class women like her.
      `
      
      : author === "Jeelani Bano"
      ? `<strong> Jeelani Bano </strong> (born 14 July, 1936) is an Urdu writer and literary personality. Born in Badayun, Uttar Pradesh, and raised in Hyderabad, she is the daughter of Urdu poet Hairat Badayuni. Bano began writing at the age of eight, and she has since authored 22 books, including short story anthologies starting with Raushni ke Minar (1958), novels such as Aiwan-e-Ghazal (1976) and Baarish-e-Sang (1985), correspondence with other writers, and an autobiography. She is the wife of late Islamic studies scholar, Anwar Moazzam (1930-2023). Her accolades include a Padma Shri from the Government of India in 2001. Shyam Benegal’s 2009 Hindi film, “Well Done Abba,” was based on Bano’s satirical short story, “Narsaiyya ki Baudi.”<br/>
      Bano’s work brings together social commentary, humour, pain, irony, and the complexities of the human condition. As a female writer from the Deccan, she holds a significant place in Urdu literature for a radical social and political voice outside the remit of the Progressive Writers Association.
      `
      : ""; // Add more conditions as needed
  const authorUrduText =
    author === "Fatima Alam Ali"
      ? `
      فاطمہ عالم علی (1923-2020) دکن کی ایک اردو زبان کی مصنفہ اور ادبی شخصیت تھیں۔ وہ ترقی پسند مصنف اور صحافی قاضی عبدالغفار کی بیٹی تھیں، اور اسی لیے برطانوی نوآبادیات کے عروج پر اردو کی ایک ممتاز ادبی برادری میں پرورش پائی۔ انہوں
       نے لکھنؤ میں رہتے ہوئے اسکول میں لکھنا شروع کیا اور 1940 کی دہائی میں عثمانیہ یونیورسٹی، حیدرآباد میں “ومنس کالج” میں پڑھتے ہوئے لکھنا جاری رکھا۔ انہوں نے اپنا کام اخبارات، رسائل اور کتابوں میں شائع کیا اور اسے محفلوں اور آل انڈیا ریڈیو پر پڑھا۔ 1949 میں، انہوں نے عالم علی سے شادی کی، جن سے ان کی ایک بیٹی اور دو بیٹے ھیں۔
      فاطمہ عالم علی کی آواز دکن کی غیر افسانوی تحریروں میں خاص طور پر خاکہ اور طنزومزاح کی اصناف میں ایک اہم آواز ہے۔
      ان تحریروں کا ایک مجموعہ "یادش بخیر" کے نام سے 1989 میں شائع ہوا، جس میں عکاس مضامین، ان کے والد اور ان کے ساتھیوں، ان کے بچپن کے دوست، ان کے سرپرستوں اور ان کے بارے میں ان کی یادیں شامل ہیں۔ ان کی زیادہ تر تحریریں کالج کے نوٹس، ترکیبیں، ذاتی عکاسی، علمی تحقیق، ادبی مسودات، اور حساب کتاب کی کتابوں میں ہیں جو 20ویں صدی کے حیدرآباد میں ان جیسی متوسط طبقے کی خواتین کے لیے زندگی کی ایک زیادہ غیر معمولی اور گھریلو تصویر پیش کرتی ہیں۔
      `
      : author === "Jeelani Bano"
      ? ` 
      جیلانی بانو (پیدائش: 14 جولائی 1936) ایک اردو مصنفہ اور ادبی شخصیت ہیں۔ وہ بدایوں، اتر پردیش میں پیدا ہوئیں اور حیدرآباد میں پرورش پائی۔ وہ اردو کے شاعر ہیرت بدایونی کی بیٹی ہیں۔ بانو نے آٹھ سال کی عمر میں لکھنا شروع کیا۔ انہوں نے 22 کتابیں تصنیف کی ہیں جن میں مختصر کہانیوں کے انتھالوجیز، جیسے کہ “روشن کے مینار” (1958)، ناول، جیسے “ایوانِ غزل” (1976) اور “باریشِ سنگ” (1985)، دیگر مصنفین کے ساتھ خط و کتابت، اور ایک خود نوشت شامل ھیں- وہ اسلامی علوم کے اسکالر مرحوم انور معظم (1930-2023) کی اہلیہ ھیں۔ ان کی تعریفوں میں 2001 میں حکومت ہند کی طرف سے پدم شری بھی شامل ہے۔ شیام بینیگل کی 2009 کی ہندی فلم، "ویل ڈن ابا،" بانو کی طنزیہ مختصر کہانی "نرسایا کی باؤدی" پر مبنی تھی۔
      
      بانو کا کام سماجی تبصرے، مزاح، درد، ستم ظریفی اور انسانی حالت کی پیچیدگیوں کو بیان کرتا ہے۔ دکن سے آنے والی ایک خاتون مصنفہ کے طور پر، وہ ترقی پسند مصنفین کی تنظیم سے باہر ایک بنیاد پرست سماجی اور سیاسی آواز کے لیے اردو ادب میں ایک اہم مقام رکھتی ہیں۔
      `
      : ""; // Add more conditions as needed
  const authorTeluguText =
    author === "Fatima Alam Ali"
      ? `
      <strong> ఫాతిమా ఆలం అలీ </strong>(1923-2020) గారు దక్కనులో పేరు గాంచిన ఉర్దూ రచయిత్రి మరియు సాహిత్యవేత్త. అభ్యుదయ రచయిత మరియు పాత్రికేయుడు ఖాజీ అద్బుల్ గఫార్ గారి కుమార్తె, వీరు భారతదేశంలో బ్రిటిష్ వలసవాదం యొక్క శిఖరాగ్రంలో ఒక ప్రముఖ సాహిత్య వర్గంలో పెరిగారు. లక్నోలో స్కూలు విద్యార్థిని గానే ఉండగా మొదలు అయిన వీరి రచనలు , వీరు ఒస్మానియా మహిళా కళాశాల నుండి 1940లో పట్టభద్రులు అయ్యే సరికి పరిణితిని పొందాయి. ఆ తర్వాత వీరు తమ రచనలను వార్తాపత్రికల, మ్యాగజైన్‌ల మరియు పుస్తకాల రూపంలో ప్రచురించటం, సమావేశాలలో ఆకాశవాణి లోనూ ప్రసంగించడం చేశారు. 1949లో వీరి వివాహం ఆలం అలి గారితో జరిగింది. వీరికి ఒక కుమార్తె మరియు ఇద్దరు కుమారులు ఉన్నారు.<br/>
      శ్రీమతి అలి గారిది దక్కను రచనా రంగంలో లో నినదించిన గళం. <i> ఖాక </i>  అను రచనా చిత్రీకరణ,<i> తాంజో మైజః </i> అను వ్యంగ్య హాస్య రచనలు చేశారు. వీటి సంకలనం యాదశ్ బఖైర్ అను శీర్షికతో 1989 లో ప్రచురించారు. వీటిలో వీరు తమ తండ్రి, సమకాలీనులు, స్నేహితులు, మహిళా సహా రచయిత్రుల స్మృతులను పొందుపరచారు. వీరి రచనలు ఎక్కువగా కాలేజీ నోట్స్, వంటలు, వ్యక్తుల, పుస్తకాల మీద వీరి అభిప్రాయాలు, పరిశోధన, చిత్తుప్రతులు, పద్దు పుస్తకాలలో  ఉండటం వలన నాటి 20వ శతాబ్దంలో హైదరాబాద్ మధ్యతరగతి మహిళల స్థితి గతులు ప్రతింబింబిస్తాయి.
      `
      : author === "Jeelani Bano"
      ? ` 
      <strong> జీలానీ బానో </strong> (జననం 14 జూలై, 1936) ప్రముఖ ఉర్దూ రచయిత్రి మరియు సాహిత్యవేత్త.  ఉత్తరప్రదేశ్‌లోని బడాయున్‌లో పుట్టి, హైదరాబాద్‌లో పెరిగారు. ఉర్దూ కవి హైరత్ బదాయుని యొక్క కుమార్తె.  వీరు తమ ఎనిమిదేళ్ల వయసు నుండే రాయడం ప్రారంభించి 22 పుస్తకాలను, <i> రౌష్ని కే మినార్ </i> (1958) వంటి సంక్షిప్త కథనాలనూ సంకలనాలునూ,<i> ఐవాన్-ఎ-గజల్ <i/> (1976) మరియు <i> బారిష్-ఎ-సంగ్ </i> (1985) వంటి నవలలతో సహా తోటి ఇతర రచయితలతో తమ ఉత్తరప్రత్యుత్తరాలు మరియు ఆత్మకథనూ ప్రచురించారు. వీరు దివంగత ముస్లిము పండితుడు అన్వర్ మోజమ్ (1930-2023) భార్య. వీరిని భారత ప్రభుత్వం 2001లో పద్మశ్రీ పురస్కారంతో గౌరవించారు. ప్రముఖ దర్శక నిర్మాత శ్యామ్ బెనెగల్ యొక్క 2009 హిందీ చిత్రం,<i> "వెల్ డన్ అబ్బా," </i> బానో యొక్క వ్యంగ్య చిన్న కథ <i> "నర్సయ్య కి బౌడీ" </i> ఆధారంగా రూపొందించబడింది. <br/>
      బానో గారి రచనలలో  సామాజిక వ్యాఖ్యానమే కాక  హాస్యం, బాధ, వ్యంగ్యం,  మానవ జీవన పరిస్థితి యొక్క సంక్లిష్టతలు  మిళితమై మనకు గోచరిస్తాయి. ప్రోగ్రెసివ్ రైటర్స్ అసోసియేషన్ పరిధికి మించి రాజకీయ మరియు సామాజిక సంస్కరణ దిశగా గళం ఎత్తి, దక్కనుకు చెందిన మహిళా రచయిత్రిగా వీరు ఉర్దూ సాహిత్యంలో ప్రముఖమైన స్థానాన్ని అధిరోహించారు.
       `
      : ""; // Add more conditions as needed 
  const authorHindiText =
    author === "Fatima Alam Ali"
      ? `hindi text`
      : author === "Jeelani Bano"
      ? ` hindi text`
      : ""; // Add more conditions as needed
  return (
    <div>
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
          <div style={{ marginTop: "1vh", overflow: "auto" }}>
            <div>
              <div>
                <Button onClick={changeToEnglish}>English</Button>
                <Button onClick={changeToUrdu}>Urdu</Button>
                {/* <Button onClick={changeToHindi}>Hindi</Button> */}
                {/* <Button onClick={changeToTelugu}>Telugu</Button> */}
              </div>
              {language === "English" && <p dangerouslySetInnerHTML={{ __html: authorText }} /> }
              {language === "Urdu" && <p dangerouslySetInnerHTML={{ __html: authorUrduText }} /> }
              {/* {language === "Hindi" && <p dangerouslySetInnerHTML={{ __html: authorHindiText }} /> } */}
              {/* {language === "Telugu" && <p dangerouslySetInnerHTML={{ __html: authorTeluguText }} /> } */}
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
                      <Typography gutterBottom variant="h6" component="h6">
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
                        }?title=${encodeURIComponent(
                          card.title
                        )}&engInfo=${encodeURIComponent(
                          card.engInfo
                        )}&urduInfo=${encodeURIComponent(card.urduInfo)}`}
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
    </div>
  );
};

export default Archive;
