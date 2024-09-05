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
});

// Author bibliography info
export const authorWorks = [
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
  {
    id: 14,
    title: "Matti Manishi",
    author: "Vasireddi Sita Devi",
    engInfo: `Picturized the rural life of peasant families, Samatha, Vurithadu depicted social conflicts in day to day life`,
    
    year: "2000",
  },

  {
    id: 15,
    title: "Mrutyunjayulu",
    author: "Bollimunta Sivaramakrishna",
    year: "1947",
  },
  { id: 16, title: "Agnidhara", author: "Dasarathi", year: "1949" },
  { id: 17, title: "Rudraveena", author: "Dasarathi", year: "1950" },
  { id: 18, title: "Vajrayudham", author: "Somasundar", year: "1949" },
  { id: 19, title: "Tvamevaham", author: "Arudra", year: "1949" },
  { id: 20, title: "Agniveena", author: "Anisetti", year: "1949" },
  { id: 21, title: "Udayini", author: "Gangineni", year: "1950" },
  { id: 22, title: "Daivamichina Bharya", author: "Chalam", year: "1923" },
  { id: 23, title: "Maidanam", author: "Chalam", year: "1927" },
  { id: 24, title: "Aruna", author: "Chalam", year: "1935" },
  { id: 25, title: "Ameena", author: "Chalam", year: "1942" },
  { id: 26, title: "Saalabhanjika", author: "Kuppili Padma", year: "2001" },
  { id: 27, title: "Musalamma Maranam", author: "C R Reddy", year: "1990" },
  {
    id: 28,
    title: "Mundadugu",
    author: "Sunkara and Vasireddi",
    engInfo:
      "Depicted how women used to take initiative to fight against landlords.",
    year: "1980",
  },
  {
    id: 29,
    title: "Ma Bhoomi",
    author: "Sunkara Satyanarayana and V. Bhaskara Rao",
    engInfo:
      "Deals with the atrocities of the autocratic rule of the Nizam of Hyderabad",
    year: "1947",
  },
  {
    id: 30,
    title: "Mundadugu",
    author: "Sunkara Satyanarayana and V. Bhaskara Rao",
    engInfo: "Deals with the atrocities of zamindars",
    year: "1945",
  },
  {
    id: 31,
    title: "Chaduvu",
    author: "Kodavatiganti Kutumba Rao",
    engInfo:
      "Deals with the social and cultural changes that took place in middle-class families during the colonial times and exposes the incongruity and absurdity that arose out of a collision of dissimilar cultures.",
    year: "1952",
  },
  { id: 32, title: "Devuni Pellam", author: "Madduri Nagesh Babu", year: "" },
  { id: 33, title: "Arachethi Randralu", author: "Satish Chander", year: "" },
  { id: 34, title: "Etti Thalli", author: "Vemula Yellayya", year: "" },
  { id: 35, title: "Devadasi", author: "Durga Prasad", year: "" },
  { id: 36, title: "Aido Vachakam", author: "Yendluri Sudhakar", year: "" },
  { id: 37, title: "Dakkali Pilla", author: "Yendluri Sudhakar", year: "" },
  { id: 38, title: "Peddinti Pilla", author: "Nagappa Sundar Raju", year: "" },
  { id: 39, title: "Veedi Akasam", author: "Nagesh Babu", year: "" },
  {
    id: 40,
    title: "Panigrihita",
    author: "Divakarla Tirupati Sastry and Chellapilla Venkata Sastry",
    year: "1909",
  },
  {
    id: 41,
    title: "Sravananandam",
    author: "Divakarla Tirupati Sastry and Chellapilla Venkata Sastry",
    year: "1909",
  },
  {
    id: 42,
    title: "Madhuri Darsanam",
    author: "Rayaprolu Subbarao",
    year: "1956",
  },
  {
    id: 43,
    title: "Kadapati Veedkolu",
    author: "Duvvuri Rami Reddy",
    year: "1924",
  },
  {
    id: 44,
    title: "Urvasi",
    author: "Devulapalli Krishna Sastry",
    year: "1926-1929",
  },
  { id: 45, title: "Sasikala", author: "Adivi Bapiraju", year: "1939" },
  {
    id: 46,
    title: "Hridayeshwari",
    author: "Tallavajjula Sivasankara Swamy",
    year: "1926",
  },
  {
    id: 47,
    title: "Prema Geethaalu",
    author: "Vishwanatha Satyanarayana's Girikumarudu",
    year: "1953",
  },
  { id: 48, title: "Gabbilam", author: "Gurramm Jashuva", year: "" },
  {
    id: 49,
    title: "Chikkanavuthunna Paata",
    author: "G.Laxminarsaiah and Tripuraneni Srinivas",
    year: "",
  },
  {
    id: 50,
    title: "Padunekkina Paata",
    author: "G.Laxminarsaiah",
    year: "1996",
  },

  {
    id: 51,
    author: "Sripada Subramanya Shastry",
    title: "Pallamraju",
    engInfo: "First ever dalit story written by a non-dalit",
    year: "1925",
  },
  {
    id: 52,
    author: "B. S Ramulu",
    title: "Chadhuvu",
    engInfo: "",
    year: "",
  },
  {
    id: 53,
    author: "Sannapureddi Venkatarami Reddy",
    title: "Chanubalu and Antu",
    engInfo: "",
    year: "",
  },
  {
    id: 54,
    author: "Allam Rajaih",
    title: "Madhyavarthulu",
    engInfo: "",
    year: "",
  },
  {
    id: 55,
    author: "Shanthi Narayana",
    title: "Ukkupadam",
    engInfo: "",
    year: "",
  },
  {
    id: 56,
    author: "Kaluva Mallaia",
    title: "Vairudhyalu",
    engInfo: "",
    year: "",
  },
  {
    id: 57,
    author: "Kolakaluri Enoch",
    title: "Dikkulenodu",
    engInfo: "",
    year: "1965",
  },
  {
    id: 58,
    author: "Kolakaluri Enoch",
    title: "Oorabavi",
    engInfo: "",
    year: "1969",
  },
  {
    id: 59,
    author: "Kolakaluri Enoch",
    title: "Godda Donga",
    engInfo: "",
    year: "",
  },
  {
    id: 60,
    author: "Toleti Jaganmohan Rao",
    title: "Kulam",
    engInfo: "",
    year: "",
  },
  {
    id: 61,
    author: "Boya Janagaiah",
    title: "Kolupulu",
    engInfo: "",
    year: "",
  },
  {
    id: 62,
    author: "Vemula Yellaiah",
    title: "Maila Kumkuma",
    engInfo: "",
    year: "",
  },
  {
    id: 63,
    author: "Yendluri Sudhakar",
    title: "Mallemoggala Godugu",
    engInfo: "",
    year: "1999",
  },
  {
    id: 64,
    author: "Nagappagari Sunder Raju",
    title: "Madigodu",
    engInfo: "",
    year: "1997",
  },
  {
    id: 65,
    author: "Unnava Laxminarayana",
    title: "Malapalli",
    engInfo: "",
    year: "1922",
  },
  {
    id: 66,
    author: "N G Ranga",
    title: "Harijana Nayakudu",
    engInfo: "",
    year: "",
  },
  {
    id: 67,
    author: "Dasarathi Rangacharya",
    title: "Chillara Devullu",
    engInfo: "",
    year: "",
  },
  {
    id: 68,
    author: "Kesava Reddy",
    title: "Athadu Adavini",
    engInfo: "",
    year: "",
  },
  {
    id: 69,
    author: "G Rama Mohan Rao",
    title: "Kakibathuku",
    engInfo: "",
    year: "1982",
  },
  {
    id: 70,
    author: "Chilukuri Devaputra",
    title: "Panchamam",
    engInfo: "",
    year: "1998",
  },
  {
    id: 71,
    author: "K. Sabha",
    title: "Samadhi",
    engInfo: "",
    year: "1945",
  },
  {
    id: 72,
    author: "K. Sabha",
    title: "Sasesham",
    engInfo: "",
    year: "1946",
  },
  {
    id: 73,
    author: "Alwaru Swami",
    title: "Gangu",
    engInfo:
      "Depicts how women, belonging to middle and upper class families, developed interest in Andhra Maha Sabha and started working for the upliftment of the poor people.",
    year: "1965",
  },

  { author: "Chilakamma", title: "Chilakamma Pata" },
  { author: "Chilakamma", title: "Padunekkina Pata" },
  { author: "Chilakamma", title: "Meme" },
  { author: "Chalapathi Vijayvardhanam", title: "Chalapathi Vijayvardhanam" },
  { author: "Varalaxmi", title: "Aame" },
  { author: "Volga", title: "Aakale Migilindi" },
  { author: "Gogu Shyamala", title: "Varadagudu" },
  { author: "Jajula Gowri", title: "Samrajyam" },
  { author: "Jajula Gowri", title: "Utiki Aarestha" },
  { author: "Rani", title: "Stri" },
  { author: "Rani", title: "Vastavamloki" },
  { author: "Rani", title: "Jolllai" },
  { author: "Anthology", title: "Ayayo Damakka" },
  { author: "Vijayalakshmi", title: "Pani Pilla" },
  { author: "Kolakaluri Swaroopa Rani", title: "Chandragrahanam" },
  { author: "Darisi Sasi Nirmala", title: "Muttugudda Kapputhunna" },
  { author: "Darisi Sasi Nirmala", title: "Dalituralu" },
  { author: "Vijayasri", title: "Panchayati" },
  { author: "Vijayasri", title: "Alisamma Shapam" },
  { author: "Challapalli Swaroopa Rani", title: "Nishiddha Charitra" },
  { author: "Challapalli Swaroopa Rani", title: "Vegu Chukka" },
  { author: "Challapalli Swaroopa Rani", title: "Mankenapuvvu" },
  { author: "Challapalli Swaroopa Rani", title: "Mayamma" },
  { author: "Challapalli Swaroopa Rani", title: "Prema Vaida" },
  { author: "M Gowri", title: "Pandina Chethulu" },
  { author: "Vijaya kumari", title: "Gavini Dati" },

  {
    author: "Gottamukkala Mangayamma",
    title: "Ayyopapam",
    year: "1935-03-01",
    magazine: "Gruhalakshmi",
    genre: "Short story",
    engInfo:
      "It is the story of a dalit(Harijan/Mala) couple, who are poor and have difficulty in getting food everyday. The story is set in hot summer and the description starts with a heat wave. It was so hot that people could only travel by trains or motor bikes. People stayed in their homes with doors shut because of it. It so happens that mother of Annapurna(wife), is sick and since she is the only daughter she has to go visit her mother. So the couple starts travelling on foot. Eventually, the heat keeps on increasing which makes it harder for them to travel. Their heads and feet are burning with the heat and they are so thirsty. Then, they see a brahmin, who is offering free buttermilk to people who pass by and also giving them opportunity to sit and relax in shade. However when the couple approaches him, they are shooed out because they are dalits and are warned not to touch anything. They try to get one glass of water from somewhere but they are chased out by brahmins living around saying that dalits roaming around in the street is a crime and that the couple almost deceived them into giving water. When they are chased out of the village, Annapurna faints. Bhaskar(husband) feels hopeless that how these people think of themselves as if they are god. Luckily, a muslim finds them under a tree, in this state and offers water.",
    keyword1: "Dalit Discrimination",
    keyword2: "Caste",
    keyword3: "Poverty",
    keyword4: "Prejudice",
  },
  {
    author: "Kuppili Padma",
    title: "Mukta",
    year: "1997-06-29",
    magazine: "Andhra Jyoti",
    genre: "Collection of Short Stories",
    engInfo:
      "It is the story of a working woman who is feeling stifled in her life because of the expectations of the family. The story starts with mukta(the protagonist), visiting the favorite rotating restaurant of her friend, brunda. She comes across a family of 4, parents and 2 girl children much like own family. Memories which are buried inside, swirl in her. She was an active volleyball player when she was a student. However, the atmosphere at home discouraged her to pursue sports. She had to give her salary at home while her brother was free to spend his salary however he chose to. When these memories bother her, brunda comes home. She shares her story, similar to mukta’s story that because she didnt want to marry, her family expected her to dedicate her space, time and money to them and that this expectation suffocated her. Hence she moved into an apartment eventually. She then mentions that she doesnt want to marry and her family was against it. Mukta also expresses similar sentiments towards marriage. She then reveals that her brother-in-law, is asking her to take a loan on her name and that she is already paying installments for quite a few things purchased in her house since she is living there. She also mentions how dealing with family is much difficult than dealing with a husband, because there is so many sentiments attached. Both brunda and mukta think of how single working women and their dreams/desires are not taken seriously. At the end, mukta decides to say no to taking a bank loan and take a transfer.",
    keyword1: "Gender Discrimination",
    keyword2: "Familal Pressure",
    keyword3: "Dutiful Protagonist",
    keyword4: "Repressed Desires",
  },
  {
    author: "Kuppili Padma",
    title: "Nirnayam",
    year: "1995-01-01",
    magazine: "India Today",
    genre: "Collection of Short Stories",
    engInfo: `The story is about the journey of a woman(Vaishnavi) who is slowly living according to her principles without conforming to societal standards. It all starts with vaishnavi getting stuck in the office because of the rain. One of her colleagues, mohan who is a bigger position than her offers her lift to the bus station. While travelling together, he encourages her to learn driving. He also comes to know that vaishnavi is divorced. Slowly, vaishnavi becomes more comfortable with herself and learns driving from both mohan and mohan’s sister lavanya. She reveals to mohan that she only studied till Intermediate 2nd year before she was forced to marry and later after her divorce she starting working with the help of her sister Vaidhehi and learnt skills useful for her work. She expresses her wish to get a B.Com degree to mohan. They become good friends, and go to meetings discuss books , visit several museums and practise english together. When her family visit her, they slut shame her for wearing salwar/lipstick and berate her for coming home late and hanging out with male friends. They want her to get back with her ex-husband. She gets upset and asks her parents to leave. Mohan once again consoles her, that too much change is difficult for them to accept and that she shouldnt pay attention to it.Vaishnavi passes B.Com in second class and her life gets busy as she tries to prepare for M.Com. Details about Mohan’s family are revealed in the story to vaishnavi, that mohan’s parents are quite open minded and wanted their own freedom since they were kids. His sister, lavanya also is in a live in relationship with a guy she likes. Mohan also comes to know about the reason for Vaishnavi’s divorce, that her husband wanted kids and because they werent having any he pressures her into agreement about marriage between him and Vaishnavi’s sister, Vaidhehi. Hence, Vaishnavi breaks off their marriage with the help of a lawyer despite the lack of family support. Gradually, both of them grow closer. Mohan expresses his opinion on marriage and family that he doesnt like them and never wants establish a family of his own. However, Vaishnavi gets pregnant with Mohan’s child and he is unable to accept the fact that Vaishnavi wants to raise the kid by herself as a single mother. He tries to tell Vaishnavi through lavanya that he would reluctantly marry her. Vaishnavi however makes it very clear to lavanya that she wouldn’t marry just because she’s pregnant. Lavanya expresses her stance in favor of Vaishnavi and tells her that they will always be friends.`,
    keyword1: "Personal Development",
    keyword2: "Divorce",
    keyword3: "Ambition",
    keyword4: "Female Friendships",
    keyword5: "Freedom",
    keyword6: "Free Will",
  },
  {
    author: "Kuppili Padma",
    title: "Kasai Thalli",
    year: "1995-09-10",
    magazine: "Andhra Jyoti",
    genre: "Collection of Short Stories",
    engInfo: `The story is about a unmarried young woman who got pregnant by rape. The story starts with a young woman, cradling her new born baby in a hospital room and thinking about the consequences. She is reminded of her mother’s harsh remarks on seeing a baby nearing dustbin. She is torn that she also has to leave her baby somewhere to live respectfully in a judgemental society. She recalls the moments of past months, where she dragged herself to home after getting raped not knowing what to do with herself. By the time, her mother returned home from her sister’s marriage rituals, she was pregnant. Her parents were feeling shameful and kept this within themselves without revealing to anybody else. She was taken to the hospital in the capital but it was declared that it was difficult to abort the baby since significant time has passed. Hence, she had to give birth to the baby. When her mother comes back to the hospital room, she is also rattled. The protagonist then speaks up and advocates for laws regarding single mothers. She acknowledges the hardships involved in being a single mother but refuses to part with the baby. She tries to plead her case to her parents that even though it would hard to give a great future, she will certainly give the child a better future than growing up on the streets. Parents fall silent at the end.`,
    keyword1: "Rape",
    keyword2: "Mentions of Abortion",
    keyword3: "Guilt and Shame",
    keyword4: "Sacrifice",
    keyword5: "Perseverance",
  },
  {
    author: "Kuppili Padma",
    title: "Aadi Paadina Illu",
    year: "1995-10-21",
    magazine: "India Today",
    genre: "Collection of Short Stories",
    engInfo: `The story is about a woman, Nirmala who visits her hometown after many years with her husband, Raju after marriage. Her husband is from around the same hometown as hers. Her husband has a land just at the border of both their hometowns. She revels in the visit and tells her husband all her old stories and gets lost in her memories. Her husband cant quite connect to her emotions but tries to keep up with her as she moves around excitedly at her old school and other landmarks. She also gets bewildered by the amount of change that the village, bhimli has gone through. When she reaches the home she grew up in for 10 years with her grandparents, she gets quite emotional and narrates the story and usage of every room in the house. This house was sold after she lost her grandfather. Her husband only notices the current state of the house, that its very downtrodden. She comes to know from her old neighbours that the current owners of her childhood home want to sell it, as they moved into the city. Her husband, upon seeing the profound love for the house suggests buying it by selling the land that he has. She however declines saying that even thought they buy the house and try to repair it, it would never be the same.`,
    keyword1: "Growing up",
    keyword2: "Rural vs City life",
    keyword3: "Nostalgia",
    keyword4: "Change",
    keyword5: "Love",
  },
  {
    author: "Kuppili Padma",
    title: "Avasaram",
    year: "1994-11-10",
    magazine: "Andhra Jyoti",
    genre: "Collection of Short Stories",
    engInfo: `The story is about a woman named Janaki. She is a young widow living with her brother sridhar, and sister-in-law Vijaya. Sridhar and Vijaya have 2 children and a fulfilling marriage life. Janaki feels quite alone and irritated about her life being not in her control. Relatives, allowing her to study just enough to support herself and not allowing her to study more as she liked. She wasnt allowed to live in a different place. Her life became a routine, sleep, office, eat , watching tv and sleeping. One day, one of distant relatives visits their home making Janaki think about her own desires and the need for companionship with another person. She tries to be friendly with him and is thwarted by her brother Sridhar because he thinks nobody would want to marry a girl whose husband died. When the relative leaves, janaki is back to feeling irritated and not really happy with herself. She fights with their tenants of the house which is just beside. As result of which, they leave and another family settles in the place. The youngest son of the family is Madhav. Madhav and Janaki begin talking to each other and days pass by for janaki. One day, Sridhar catches them talking to each other and slaps her along with his wife vijaya for not keeping an eye on her. Vijaya however feels Janaki did nothing wrong and supports the idea of second marriage. Not being able to handle the pressure from all the relatives, janaki tries to commit suicide by drinking pesticide. She however is taken to hospital and recovers well. She is reassured by Vijaya that what she’s doing is okay and that she shouldnt feel guilty. Later when Janaki’s relatives try to make her quit working, she refuses to and tells it to them firmly that they dont have to be responsible for her and that she’ll take another house somewhere else. While going, she says good bye to vijaya and vijaya smiles at her. Janaki leaves the house with a lighter heart.`,

    keyword1: "Female Solidarity",
    keyword2: "Mentions of Second Marriage",
    keyword3: "Suicide Attempt",
    keyword4: "Familal Judgement",
    keyword5: "Emancipation of Ideas",
  },
  {
    author: "Muppala Ranganayakamma",
    title: "Peka Medalu",
    year: "",
    magazine: "",
    genre: "",
    engInfo: ``,
  },
  {
    author: "Muppala Ranganayakamma",
    title: "Janaki Vimukti",
    year: "1981-01-01",
    magazine: "",
    genre: "Novel",
    engInfo: `Janaki Vimukti has 3 volumes and is a story about a woman janaki, who gets married young and faces alot of troubles with an abusive husband and mother-in-law. Janaki’s brother Satyam, is not happy about the troubles she’s facing. He wants to bring her back, however his friend Murthy advises him to wait and let janaki decide what she wants. Murthy advises Satyam to only show the path to be free from abuse. After a few years, janaki gets tired of the abuse and wants to commit suicide only to be stopped by satyam through his letters who caught onto janaki’s intention. She makes a friend called vishalakshi, who is also suffering abuse like her. Janaki then leaves her husband’s home to reach her brother. Janaki’s husband lies to her that he would be good to her and that his mother isnt at home. Janaki believes the lies only to go back into an abusive household. One day, she comes to know that she’s pregnant and gets horrified about it. She just leaves the household going to murthy who then takes her to her brother. Satyam is very happy that his sister is so brave. Murthy learns that Janaki is pregnant and is planning to abort the baby. He then talks to satyam about consequences of this decision and asks him to show her correct direction and to give her tools to make the right decision. Satyam talks to janaki and she reconsiders her decision. This story is based on the idea of women need to be educated on the issues before trying to fight them so that they know what they are trying to fight. Satyam is a communist and is in a group who discusses about such ideas. He dreams about a harsh, fair and righteous communist court. Janaki joins the group. She learns about various issue that plague the society and begins her journey. She becomes an active communist who not only participates in various activities conducted but also tries to spread awareness about the ideology. Towards the end, when her husband who married again and is abusing the current wife, intercepts janaki’s letter to vishalakshi. He realizes that Janaki has totally changed. He keeps wondering if she married again but is caught for intercepting the letter. The themes of marxism and communism are prominent in this story. Various discussions of society issues and their solutions are seen through the lens of communism.`,

    keyword1: "Marxism/communism",
    keyword2: "Emancipation of ideas",
    keyword3: "Striving for freedom",
    keyword4: "Courage",
    keyword5: "Personal Development",
    keyword6: "Perseverance",
  },
  {
    author: "Muppala Ranganayakamma",
    title: "Balipeetham",
    year: "1962",
    magazine: "",
    genre: "Novel",
    engInfo: `Balipeetham is a book which is the story of a man called Bhaskar who is a harijan but aspires to spend his life destigmatizing people of “lower” caste and help anybody who is in need regardless of their identity. He starts his social work at Karuna Samaj which influences the way he thinks alot. He meets a pair of brother sister through a diseased old man who are refugees coming from Burma. Their’s is a heart wrenching tale of betrayal and loss. Both of them become good friends of Bhaskar as they find his ideals fascinating. Sister, whose name is Tara becomes close to Bhaskar and he finds himself wanting to marry her. However, before that he is called to a different town to meet Aruna who is a brahmin widow. She is suffering with heart disease and her last wish is to die as the wife of somebody as “Sumangali”. Bhaskar nobly agrees to marry her after she assures him she doesnt care about his caste and apologises to tara for not being able to marry her. He joins aruna into nature’s therapy and she gets all better. They get married and live a happy 2 years. Shortly after their daughter is born, Bhaskar has to go live in mumbai for one year because of which aruna comes to her ex-mother and father-in-laws. They instigate the feeling of difference in caste in her and she gradually changes by the time bhaskar returns. She feels intense disgust towards Bhaskar’s relatives as the caste feeling gets stronger. She goes down the wrong path by continuously misunderstanding and hurting bhaskar. They have another son soon. Bhaskar is overcome with feelings of anger, frustration and hurt. He tries to stick to his principles and fails. She takes him to the court for divorce and lies about him, accusing him of horrible things he didnt do. Bhaskar wins the court case, however he leaves everything to go back and work at the Karuna Samaj with Tara. Aruna’s health gradually deteorates again and she sees the true colors of her family. Aruna’s sister amala, marries a christian showing Aruna how her life could have been without the prejudice. Aruna gets back into nature therapy which is anonymously sponsered by bhaskar, however she is terribly guilty of whats she done to her husband. At the end of the story, Aruna dies in the arms of bhaskar, who feels nothing but love for her in that moment. Bhaskar’s morals are continuously tested through out this story.`,

    keyword1: "Moral Corruption",
    keyword2: "Guilt and Shame",
    keyword3: "Suffering",
    keyword4: "Forgiveness",
    keyword5: "Caste and Community",
    keyword6: "Manipulation",
  },
  {
    author: "Muppala Ranganayakamma",
    title: "Ramayana Vishavriksham",
    year: "",
    magazine: "",
    genre: "Novel",
    engInfo: ``,
  },
  {
    author: "Muppala Ranganayakamma",
    title: "Muraleevaallamma",
    year: "1999-11-10",
    magazine: "Andhra Jyoti",
    genre: "",
    engInfo: `"It is the story about a family of 3, mother in law(Rukmini), son(Murali) and daughter in law(Rajini). The story starts with Murali being absent from his home because he is on a business trip to goa. He calls home, to check in but is very flippant about it. His colleague, constantly dominates the conversation and she’s coy about the attention that murali gives her. The story then unfolds into a flashback of murali’s childhood as narrated by Rukmini. Where he has an absent father because he cheated on his mother with another woman. Both mother and son leave the father behind. Murali reassures her mother and gives her strength to move forward. He was a very active participant in all the committees during his years of study and was keen on reading library books or listening to songs. He got good marks because of which he got a job. His job responsibilities kept increasing as he advanced in his career. It made way for neglect towards his mother and wife. He changes alot, belittles the career of his wife and also gets very arrogant about his salary. Rukmini however, is not happy with these changes and very vocal that her Rajini should be treated with respect. She also  notices the neglect and that he is giving all his time to his company and colleagues, especially a female colleague. When Murali comes back from the trip, his mother confronts him about it. It is an open ending. 
"`,

    keyword1: "Family life of a Woman",
    keyword2: "Domestic tensions",
    keyword3: "Gender Equality",
    keyword4: "Emotional Neglect",
    keyword5: "Infidelity",
    keyword6: "Undertones of slut shaming",
  },
  {
    author: "P.Satyavati",
    title: "Illalakagaane",
    year: "1990-05-04",
    magazine: "Udayam",
    genre: "Collection of Short Stories",
    engInfo: `Story about a married woman who is very keen on keeping her house clean and beautifully decorated and forgets her name in doing so. During initial days of her marriage, her husband praises her that she is very skilled at keeping the house clean and well decorated. Ever since, her routine is enthusiastically tending to household. One day, she realizes she doesnt remember her name. She asks anyone she passes by, her neighbours, her maid, her children, her husband and even her parents. For all of them, her identity is either how she is related to them or it is tied to her husband. She is known as a wife of a bank manager. She then gets very anxious that she forgot her name. Her husband, suggests to check her certificates and reluctantly allows her to go to her parents house for it. Upon arriving at her parents house, she realizes her certificates are hard to find. She feels very restless until she meets one of her classmates and the classmate remembers her name and the names of all her friends. She then takes pride in her name and insists that her husband also calls her by her name. In the end, she realizes decorated and cleaning the house is not the whole purpose of her life but just a part of it.`,

    keyword1: "Loss of Identity",
    keyword2: "Identity Crisis",
    keyword3: "Alienation",
    keyword4: "Gender",
    keyword5: "Marriage",
    keyword6: "Dowry",
  },
  {
    author: "P.Satyavati",
    title: "Aruna Sandhya",
    year: "1994-08-01",
    magazine: "Aahvanam",
    genre: "Collection of Short Stories",
    engInfo: `It is the story of a woman named Arundhati, who is portrayed as a stoic mother, wife and mother-in-law. The story starts with the debate of where arundhati and her husband suryanarayana should stay. Their children, Karuna and ravi debate on who should take them. Lata and Mohan are the daughter-in-law and son-in-law respectively. Mohan asks suryanarayana also to come with them to his house to live with Karuna and him. However, suryanarayana refuses to come stating his reason of staying in married daughter’s house is not proper. However in all of this discussion arundhati is silent and suryanarayana keeps rebuking her for it, that she isnt expressing her desire to stay with him. Lata keeps observing the situation paying special attention to arundhati. Lata keeps comparing her mother with arundhati. She observes how different her relationship is with her mother versus the relationship of Ravi and Arundhati. When she asks Ravi about it, he says she has always been like that, detached and uncaring. Lata doesnt think it is a good enough explanation. The arguments of where to stay kept continuing through out the lunch. After suryanarayana is asleep thinking arundhati wouldnt go anywhere leaving him, she tries to find keys to her cabinet in attempts of committing a suicide with sleeping pills in the cabinet. She desperately tries finding keys which are with Lata. Lata stops arundhati and tells her she wouldnt give her all the sleeping pills but just one. She tries to ask arundhati why she wouldnt speak out on whats going on with her. Arundhati recalls all the times when her husband mistreated her, cheating on her but she had to look like she was living a happy life for the children and how she stopped from killing herself before just because of children. When Lata embraces Arundhati, all her pain and anguish flows through in the form of tears.`,

    keyword1: "Stoicism",
    keyword2: "Suicide Attempt",
    keyword3: "Familal Tensions",
    keyword4: "Mentions of Infedility",
    keyword5: "Female Solidarity",
  },
  {
    author: "P.Satyavati",
    title: "Aakashambunanundi",
    year: "1989-11-10",
    magazine: "Andhra Jyoti",
    genre: "Collection of Short Stories",
    engInfo: `This is the story about a couple narayana and Sureesha. Narayana makes the end meet by being a rikshaw driver. The story starts with a person flagging down narayana for riksha to drive an expensive looking man and a woman. He is slightly suspicious of the distance he has to cycle for but he accepts it because he is struggling to make his ends meet and he needs money. He notices how the passengers of the rikshaw dont talk to each other. The woman starts telling herself a story. The name of the protagonist in her story is sureesha. Sureesha was described to be incredibly beautiful and traditional. While dying, her mother passed on her responsibility to narayana. Narayana is a poor guy who is unable to give dowry to marry off Sureesha. His mother suggests that he should marry her himself because sureesha regards him with love and also to save the dowry money. He starts having feelings for her and gets attracted to her after his mother suggestion and eventually marries her. They have quite a successful relationship for the first 2 years. She works in a big house whose kids use narayana’s rikshaw to go to school. One day, Sureesha refuses to go back to work at the big house. Narayana tries to persuade her to go because without her salary, its difficult for the house to go on. They also have a lot of debts because his mother died and his sister got pregnant. When Narayana approaches the lady of the big house, she tells him sureesha isnt working there anymore with a stern voice. He gets shocked and approaches sureesha to ask her whats going on and upon many questions she reveals that the man of the big house tried to molest her. The lady of the house, blamed her for trying to be beautiful and seducing her husband. Narayana gets shocked listening to it, not knowing what to believe. He starts smoking/drinking and abusing sureesha at every turn. He beats her and accuses her of cheating on him with everyone she walks close to. He starts feeling that her beauty is a burden. He looses his jobs also because of her. A person named appala konda, listens to her and sympathizes with her. He offers to take her away from this place. She is seen talking to him by narayana and he beats her so much that she could have died. She finally takes the step to leave from here, but appala konda abandons her. Everyone in the village thinks that she is the bad luck of narayana and its good that shes gone. The people who refused to employ him because of sureesha, now give him work again. He takes dowry and marries another woman, continues to behave like a typical abusing husband. He doesnt worry about sureesha who went missing. Sureesha there gets into prostitution to support herself , who goes to places with rich married men whose wives are ignorant. When the passengers of the rikshaw get down, narayana realizes that the woman who was just there was sureesha.`,
    keyword1: "Rich vs Poor",
    keyword2: "Beauty",
    keyword3: "Molested",
    keyword4: "Moral Corruption",
    keyword5: "Suffering",
    keyword6: "Mentions of prostitution",
  },
  {
    author: "P.Satyavati",
    title: "Indira",
    year: "1990-11-10",
    magazine: "Andhra Jyoti",
    genre: "Collection of Short Stories",
    engInfo: `This is the story of a young girl, indira. Indira has had to take up working and taking care of household duties because her parents were struggling to make the end meet. She also has a sibling she has to take care of. She always completes her work and have hot food ready by the time her parents get home. Her mother, Aadilakshmi reaches home after a long day of work and she realizes indira is not home , no household chores have been done and the baby is with her neighbours crying out of hunger. She gets initially angry but the feeling transforms into worry when she doesnt return at the end of the day. Yaadgiri, father of indira comes back at late night tired and hungry. Aadilakshmi scrambles to feed him while being worried about Indira. Yaadgiri dismisses her concerns and proceeds to sleep. Aadilakshmi worries and ponders over their situation. They live in a poor neighbourhood, everybody’s daughters were named indira(indira meaning slpendid/beauty). Aadilakshmi grinds flour, which makes her physically so tired. All her customers are ladies of the rich houses and try to bargain for flour which they can easily pay for. She realizes, just how much work indira was doing and how much responsibility she handled now that Indira was gone. Indira doesnt return for 3-4 days. Indira gets angsty and pressures yaadgiri to make a police complaint. Then he reveals that, they were going to debt because of the unexpected expenditures they had to incurr and he sent indira to work in a home, located in hyderabad. He dismisses her concerns over the issues and tells her that Indira would return in summer holidays. She sees a neighbourhood indira get beaten up by her father because she got accused for stealing in the big house she was working. Seeing this, Adilakshmi’s worry increases.Adilakshmi’s heart is heavy but she carries on with her life handling all the responsibilities. After 5 months, one day Indira comes back looking so haggard , thin and changed. She begs her mother not to send her back ever again. Both mother and daughter hug and cry.`,

    keyword1: "Poverty",
    keyword2: "Child Worker",
    keyword3: "Child Abuse/Neglect",
    keyword4: "Sacrifice",
    keyword5: "Mother and Daughter relationship",
  },
  {
    author: "P.Satyavati",
    title: "Gandhari Ragam",
    year: "1994-03-06",
    magazine: "Andhra Jyoti",
    genre: "Collection of Short Stories",
    engInfo: `The story is about a housewife named Saraswati. The story starts with her looking out of the window after cleaning the fully furnished home, seeing her daughter geeta playing shuttle with her friend rasheedha. Geeta is struggling to play and saraswati takes one step ahead to help her before remembering that she has to prepare food when both her kids and her husband come home. She remembers each of their preferences and starts cooking according to them. When Rasheeda comes along with Geeta, saraswati feeds her as well. Rasheeda praises her food making her feel good and Geeta says, her mother is a very good cook and gives the choice of food without asking. Later, when Babi(her son) comes home, she cooks for him too. She has to make sure their homeworks are done with the help of tuition teacher by the time her husband, Subbarao arrives home and saraswati makes hot chapatis for him. He needs the house to be clean and saraswati clean and neat by the time he comes home, otherwise he makes fun of her. She hates hearing his taunts, hence before he even spoke up a word, she takes care of everything. Subba rao often delegates work to everyone and he himself assigns the work of maintaining authority around the house and not letting things he doesnt like happen. After dinner, he needs saraswati to nod and smile at whatever he says according to his wish. That day, tuition teacher’s wife gave birth , hence he wasnt there to make sure the kids complete the work. However, Babi struggles with homework and asks his father to help with it. Subba Rao however gets frustrated that tuition teacher isnt here instead of helping babi. Geeta and Babi ask saraswati, that why their father isnt helping them. Like everytime, she couldnt defend subbarao because she was feeling stifled in her current environment. She was a good student, who could speak english well. She wanted to go for higher studies but her father refused to allow her saying, he cant give more dowry because he has to get a guy more qualified than her for her to marry. Even during their honeymoon, Subba Rao wanted to be the one in control, rebuking her at every turn asking her not to talk to people he doesnt talk to and telling her not to wear dresses since she is married now. While getting married, people told her he earns quite well and doesnt have any addictions of any kind hence he is a great guy to marry. Now, she feels that she has become Gandhari(from Mahabharat) giving up her abilities for her husband. The next time she sees her daughter geeta struggle with shuttle, she goes over to give her tips. Rasheedha then asks saraswati also to join and play. Girls State Shuttle Champion, Saraswati says that yes, she’ll come to play from tomorrow.`,

    keyword1: "Lack of Free Will",
    keyword2: "Loss of Identity",
    keyword3: "Manipulation",
    keyword4: "Power Imbalance",
    keyword5: "Emancipation of Ideas",
  },
  {
    author: "P.Satyavati",
    title: "Cheema",
    year: "1991-11-10",
    magazine: "Andhra Jyoti",
    genre: "Collection of Short Stories",
    engInfo: `The story is about a working woman vandana, who has to handle all the responsibilities both inside and outside the house. She wakes up to her maid not coming to work increasing her work load. She runs around the house frantically making sure everything is done while cursing that her maid has not come to work. She asks her husband to drop, but she is refused by him. Hence, she had to take permission from her office to come half an hour late. She looks at her colleague chandana, who is always on time and tension free. She asks her a long standing question that she has, to know how is that Chandana is always at peace and on time to the office. She wonders if its because chandana has a good and punctual maid. Chandana, however reveals that in her house everybody contributes to household duties equally, even her children. This makes vandana boil with jealousy. Throughout the day, she keeps working with her husband nagging in the background about how she is always so miserable and how she should just quit job to make it easier on house hold. Vandana is irritated beyond measure that even though she is financially independent, she doesnt enjoy this state. Even the next day, her maid doesnt come. So vandana lies and takes a sick leave. She works through out the day where her family keeps coming on to her with more and more work. Chandana visits her and suggests that why not just eat outside instead of working/cooking so much. It just irritates vandana further. When finally the maid comes after her 3 days absence, Vandana takes a breather. However she’s consumed by the desire to hurt the maid by scolding her and taunting her so much releasing all the negative feelings she has. She expresses how easy it is for her maid, that she only has to come work and go, that even if the maid is abused by her husband she can just heal in 2 days and that she isnt bothered by anything. Maid turns around and says, that she doesnt even have proper clothes to cover herself nor soap to clean her body using which she has to work. The maid goes on to tell how its so difficult to handle the abuse coming from a drunkard husband while trying to make sure her children study, how her bones break sometimes and that as long as this continues, she will continue to be absent sometimes. Vandana feels crushed.`,

    keyword1: "Power Imbalance",
    keyword2: "Working Woman struggles",
    keyword3: "Jealousy",
    keyword4: "Class and Community",
    keyword5: "Realization",
  },
  {
    author: "P.Satyavati",
    title: "Thailam",
    year: "1989-11-10",
    magazine: "Jyoti",
    genre: "Collection of Short Stories",
    engInfo: `The protagonist of the story is Sharadha who is a housewife. Her husband works in the marketing department and is a blindly devoted to the company thinking that company is his family just because company gave him amenities. He talks only about company in the house, and sharadha is forced to listen. She has been living as her hubands wife forgetting that she has a degree, that she learnt veena for 5 years and that veraboni varnam is her favorite thing to play. When she wanted to sit and play, for the first time in years she is interrupted because her husbands colleagues are coming home for dinner. Her routine is always like this and whenever her husband goes to conferences, there is always some other work to keep her occupied. One day, when she goes out to bazaar, she notices a tea shop which is quite busy. She speaks to the man sitting in the shop, saying that he is so lucky to have such an active business. The man then says, that he is only a worker and all the profit goes to his uncle who owns the shop and that his wages are meager. She comes back wondering how unfair it is. She has started to feeling stifled in her life because in her opposite apartment, the household is always lively with so many discussions about movies, politics, songs , literature etc., Sharadha has started to realize that she has completely lost her color, trying to fit into her husbands lifestyle. She tries to find her identity again, by starting to play veena even if it causes fight between her and the husband. When she sits by the window one day, she notices the uncle collecting the money from tea shop and giving a chocolate to the man for his hardwork of the day. She feels disgusted by how unfair it is. Just then, her husband comes home excited, saying that he got praised at the company and that he might get a promotion. He gives her a wrist watch saying that the company gave it for her since she helped him be his 100% at job. She is immediately reminded of the chocolate that was given to the worker and thinks behind every successful man, there is a woman and behind every woman who lost her identity there is the system of society.`,

    keyword1: "Loss of Identity",
    keyword2: "Identity Crisis",
    keyword3: "Individual vs System",
    keyword4: "Self-realization",
  },
  {
    author: "P.Satyavati",
    title: "Pelli Prayanam",
    year: "1995-01-01",
    magazine: "India Today",
    genre: "Collection of Short Stories",
    engInfo: `The story is about the journey of a daughter Jaya, who goes along with her mother to her native village on the occasion of a marriage. Mother is very excited about being in her hometown because she never had the chance to visit it because of household responsibilities. She is welcomed warmly by her family.She has a big family with 2 brothers and sisters each and their children. Eldest uncle, Anasuya are a couple and have 2 children, Raju and Srilakshmi. The younger uncle, Sharadha are a couple and have a son sundaram. Elder Sister has 2 kids Sudha and Ravi. Youngest Sister Pativrata , Badababu are a couple and has 2 children Rama and Krishnudu. Srilakshmi is the bride and she was dressed up quite beautifully. Jaya observes around her and how her mother seems to have come alive amidst of her people. She sees her aunt Pativrata always being at the beck and call of her husband who doesnt value her and behaves as if only he is the intelligent person in the room. She then meets Sudha and is immediately thrown off by how she looks so tired and older than her age. Sudha goes on to tell her how srilakshmi’s marriage had so many negotiations about dowry, travel expenses and food menu. She also tells Jaya about herself, that her mother is continuously getting marriage proposals for her since 10 years and is very strict with her. The groom family arrives and make a fuss about lack of proper arrangements. Ravi handles the tense atmosphere with ease. As srilakshmi finally leaves, Jaya wonders about the system of marriage and the show of extravagancy. She asks her eldest aunt about her marriage and comes to know about how simple it was back in the days. They are a fairly wealthy family. Jaya then expresses her confusion about the wealthy family daughters, she asks when dowry is a must and money is not a problem, why is the girl not allowed to marry the person she chooses. It is revealed that Jaya’s parents eloped and had to face many struggles before they finally settled down. By the time, Pativrata got married things changed. They stroll around the village discussing about the fate of women who are suppressed under feudal men and who have to work in the fields and also manage the households. About how things are changing rapidly in cities but villages dont seem to move forward. Raju narrates the conditions of different families living in the village and how so many people just abandon the fields and sell them even though its not required just to go to city and live on terms of their children. Jaya takes the initiative to talk sense into sudha, to speak up that she doesnt want to marry. She says that Sudha’s mother has to appear strict, but would understand if Sudha is absolutely sure of something. She says that people often dont actively try to create an atmosphere for women to think progressively, so sudha should take a step forward to educate and communicate with her mother. She also talks to pativrata, that she should come visit them and not limit herself to only serving her husband who is taking advantage of her. Jaya analyses that she isnt sure of her position in her household hence takes on more work of her husband to make him dependant on her. She realizes she doesnt see that happen with her and her parents. Jaya talks to sudha about how she lives a practical lifestyle, that she likes Raju and his ideologies but she doesnt need to marry to love him. That she would make her own choices and marry only when wants to living a practical but simple life. All of them leave the village together to travel and city. At the end, Jaya leaves for bangalore with imprints of her family on her soul.`,

    keyword1: "Free Will",
    keyword2: "Open Minded Protagonist",
    keyword3: "Family",
    keyword4: "Rural vs City Life",
    keyword5: "Youth and Age",
  },
  {
    author: "P.Satyavati",
    title: "Kaki Gutilo koila",
    magazine: "",
    genre: "Short Story",
    engInfo: `This story is about the trauma a man goes through at the mere thought of his wife cheating on him. He finds a love letter written by an unknown man in his house. He is heartbroken thinking that the letter was addressed to his wife and that the wife was cheating on him. The story describes in detail all the thoughts that cross his mind about what the consequences of confronting her would be. He starts to think about the situation of their kids, he’s worried about how the society would start looking at their family and of course about himself. He gathers all the courage he could on one day and takes leave from office to have the conversation with his wife but does not find the courage to do so. The same day his wife’s friend comes over and he ends up hearing their conversation. When the wife says she had not even had the time to read a book given by her friend he misinterprets the wife’s tone and thinks that she is accusing him and the burden of the family for not having any spare time to read the book. As the wife gets up to return the book to her friend since she is not reading it anyway, this letter falls out of the book. She calmly goes to her husband and gives it to him saying she finally found the fictional letter that he had written for his story. The husband then realises his mistake and is relieved to learn that his fears are not true.`,

    keyword1: "Illusion of betrayal",
    keyword2: "Doubt",
    keyword3: "Fear of failed Relationship",
    keyword4: "Misunderstandings",
    keyword5: "Overcoming Fear",
  },
  {
    author: "P.Satyavati",
    title: "Aayane Mee Alludu",
    magazine: "",
    genre: "Short Story",
    engInfo: `This story is about a small girl who is left to take care of her blind grandfather after her dad gives in to drinking and gambling, and ends up going to jail for not clearing the debts. The girl is later adopted by a rich actress who was once an orphan herself who helps the girl become an actress. The girl marries an orphan boy who is adopted by the same actress. Once her father is released from jail, the girl goes to meet him along with her husband, apologises to her father for not waiting and introduces him to her father. The father forgives the girl, validates her choice and blesses the couple.`,

    keyword1: "Childhood Neglect",
    keyword2: "Absent Father",
    keyword3: "Adoption",
    keyword4: "Personal Development",
    keyword5: "Love",
    keyword6: "Reuniting with family",
  },
  {
    author: "P.Satyavati",
    title: "Ratiraju",
    magazine: "",
    genre: "Short Story",
    engInfo: `The protagonist of the story is a young woman radha. The story starts with her getting ready for a devotional lecture in a nearby temple and is interrupted by her mother. Her family has been facing financial issues because her father passed away quite unexpectedly. Her mother give vents to her frustrations about being to find a new house. She asks radha to come with her to look at the house she has shortlisted. However radha declines, saying that she needs to go to the lecture. Her mother rebukes her for going to see a swamy named madhav, who is stone hearted. The story then unravels into the past of radha. There was a man called shankar who was initially in a relationship with a woman named leela. Leela refused to marry him making me desolate. Radha used to try to get through him, only to fall in love with him. She proposed that he can marry her and try to move on. However, soon after this incident he disappeared without trace. Ever since, she hasnt been able to love anybody else. In the present, Madhav spoke alot on bhagwat gita in the temple. After his lecture, many people including radha touch his feet for blessing. She invites him to her house to perform acts of service. He agrees to come, however she remains doubtful about it. She prepares for his arrival quite diligently. He eventually arrives at her house and is treated with honor. Initially he refuses to speak to her and radha continues to plead him to make her his slave. It is revealed that madhav is shankar who has given up all his desires and is on a spiritual path. Eventually he gives in and they both move to himalayas to spend their rest of lives in a spiritual way.`,

    keyword1: "Spiritual Life",
    keyword2: "Pining",
    keyword3: "Acts of Service",
    keyword4: "Overcoming conflicts",
  },
  {
    author: "P.Satyavati",
    title: "Badili",
    year: "1995-04-01",
    magazine: "Aahvanam",
    genre: "Collection of Short Stories",
    engInfo: ``,
  },
  {
    author: "Bandaru Acchamamba",
    title: "Streevidya",
    magazine: "",
    engInfo: ``,
  },
  {
    author: "Bandaru Acchamamba",
    title: "BeedaKutumbam",
    year: "1929-10-01",
    magazine: "Saavitri",
    genre: "Short Story",
    engInfo: `Story about a poor woman who has to fend for herself and her 5 kids after her husband's death. They start to live in an outhouse belonging to a middle class couple. The story revolves around the integrity of the poor family and how the poor woman raises her children to have the highest of moral values. The striking point in the story is that the middle class wife is at first offended by the poor woman’s behaviour when she denies the former’s request to come home and sit for a chat. The wife then complains to her husband about the same. He explains to her that the poor woman has no time to spare and that is the reason why she denied spending any time leisurely. It is only then that the wife realises how insensitive she was in her thinking and starts to respect the poor woman for doing an incredible job raising money and bringing up her kids all by herself.`,

    keyword1: "Poverty",
    keyword2: "Class Difference",
    keyword3: "Emancipation of Ideas",
    keyword4: "Personal Development",
  },
  {
    author: "M. Pushpavati Devi",
    title: "Sandhya",
    year: "1944-02-01",
    magazine: "Kathanjali",
    genre: "Short Story",
    engInfo: `Sandhya is a young woman who walks out of home one midnight and goes to her ex lovers house. She explains her dismal situation due to her mother’s death, bad marriage and eventually the death of her husband as well. She tells him that she has no one else to turn towards and that was why she came to his house. He is heartbroken at her situation and reminisces about a life they once led happily and together. He is distraught at how pale and unhealthy she looked compared to a few years back. He remembers leaving the city once Sandhya gets married and is, however, happy to have her back again. They start living together and as Sandhya’s health deteriorates she makes him promise to get married after her death. As promised, he ends up getting married and hangs Sandhya’s picture on a wall in his house as a sign of respect and admiration. When his wife asks him who the woman in the picture is, he describes her as his life’s wealth, his peace and the reason behind his marriage and his life. Upon hearing that, his wife is awestruck by the purity in his love and doesn’t ask any further questions.`,

    keyword1: "Loneliness",
    keyword2: "Love",
    keyword3: "Companionship",
    keyword4: "Loyalty",
    keyword5: "Loss",
  },
  {
    author: "Kanuparti Varalakshamma",
    title: "Streela Vesangi Pathashala",
    year: "1941-09-01",
    magazine: "Gruhalakshmi",
    genre: "Short Story",
    engInfo: ``,
  },
  {
    author: "Kanuparti Varalakshamma",
    title: "Saradha Lekhalu",
    magazine: "",
    engInfo: `This book addresses many legal acts and amendments made in this regard, including but not limited to the Child Marriage Restraint Act of 1929 in the British India, Bengal Sati Regulation of 1829, and Voting right for women in 1932 etc.`,
  },
  {
    author: "Kanuparti Varalakshamma",
    title: "Ee Gunapatam Chalu",
    year: "1941-10-01",
    magazine: "Gruhalakshmi",
    genre: "Short Story",
    engInfo: `This story is about a middle aged, middle class woman who participates in a crossword puzzle competition conducted by a local magazine/ newspaper. After a lot of persuasion and pleading, she manages to convince her husband to spend some money and post her answers to the publishers. Unfortunately, she doesn’t win and though some answers, given by a few men who participated were wrong, they end up winning. She is ridiculed by her husband for not winning and when asked if she wants to participate again, she says she has learnt her lesson and will listen to what her husband (who is believed to be more experienced and knowledgeable) has to say from the next time.`,

    keyword1: "Sexism",
    keyword2: "Oppression",
    keyword3: "Power Imbalance",
    keyword4: "Inequality in Marriage",
  },
  {
    author: "Yallapragada Sitakumari",
    title: "Uttaralu",
    year: "1938-04-01",
    magazine: "Gruhalakshmi",
    genre: "Short Story",
    engInfo: `This story is about a woman who goes to her friend’s ancestral house to stay for a few days during summer. She is asked to stay at her friend’s late aunt’s room. In the room she discovers an old table with a drawer with two stacks of letters. One stack of letters addressed to her and the other sent by her to a man. In one of the letters she received from the man, he expresses his sorrow about sending back all the letters he received from the aunt. He thinks that the aunt is doubting herself for sending messages to a strange man and has now changed her mind which is why she is asking the letters back. However, as per her wish, he sends her all the letters. As a reply to this message, the aunt then says that she doesn’t feel safe enough if the letters are with him and that she will be the only one blamed if someone finds the letters. She says that she has never once doubted her love towards him and that she just feels that all the letters will be safer with her. Even if in any case her husband does find the letters, she says that he will be too proud to tell anyone about his wife cheating on him. That will hurt his ego and something like this is not a problem that a man can share with his friends or family so the secret will never be out. These letters entirely change the perception of the woman towards the aunt and she feels like hid in the shadows behind the face of a dutiful wife who was always known for her good deeds, were the faces of selfishness, cunningness and hypocrisy.`,

    keyword1: "Infidelity",
    keyword2: "Hypocrisy",
    keyword3: "Betrayal",
    keyword4: "Secrets",
  },
  {
    author: "Achanta Sarada Devi",
    title: "Nidra Leni Ratri",
    year: "1950-05-01",
    magazine: "Andhra Mahila",
    genre: "Short Story",
    engInfo: `The story revolves around the thoughts of a middle class, uneducated, homemaker. One night, she is unable to sleep and the thoughts that cross her mind throughout the night form the plot of this story. She is forced to cancel plans with her own friend that morning to attend a drama performed by her husband's friend against her wishes. The husband even uses the money that she has been saving to buy a saree that she has been longing for to buy the tickets to this drama. When she disagrees to accompany him to the drama saying that she has prior plans, he says that he too had planned this in prior and assumes that his commitments have more value than hers. He even goes a step ahead and makes fun of the woman’s friendship saying that all they ever talk about revolves around what happens in the kitchen. She feels helpless, sad and angry at how her choices are not given any importance. It is always his favourite book, his friends, and his choice of music that are given priority. Her friend is given ‘permission’ to go out after a lot of fighting and pleading and cancelling plans with her would mean waiting for eternity till she gets permission to go out again. With all this in mind as she finally manages to fall asleep her husband wakes her up asking for coffee. With a little hesitation she agrees and as they walk out of the bedroom it never occurs to her husband to ask her about her weary eyes and it never occurs to the wife to tell him about her sleeplessness and what she went through that night. She gives him the coffee and he gets to reading his morning newspaper as usual.`,

    keyword1: "Lack of Free Will",
    keyword2: "Belitting Choices",
    keyword3: "Sexism",
    keyword4: "Inequality",
    keyword5: "Uneducated Wife",
  },
  {
    author: "Achanta Sarada Devi",
    title: "Selavullo",
    year: "1949-02-18",
    magazine: "Telugu Svatantra",
    genre: "Short Story",
    engInfo: `This is a story about a young girl whose family is transferred to a new place during her summer vacation. She has only one friend at this new place who is described as someone who keeps to herself and sings melancholy songs. The young girl, however, enjoys going to the beach and exploring the huge garden in front of her house. She often thinks about the holidays she spent at her maternal grandmother's house and how she got close to her grandmother and shared her deepest secrets only with her during those days. She was surprised that her grandmother was the only person who could convince her dad to let her stay for a few days. However, that happiness is short-lived and she is brought back to live in this strange place that she doesn’t like much. One day, the worker at her place comes to her mother and gives her some news upon hearing which her mother breaks down. When she asks her mother what was wrong, her mother wipes her tears and acts like nothing is wrong and asks her to go and play in the garden. Nothing in that garden interested her that day. Everything felt gloomy. She somehow felt like her grandmother passed away and there was no way she could meet her again. But her mother drowned herself in work and acted normal, wiping her tears off whenever she saw her. The little girl couldn’t take it anymore. She hugs her mother and cries her heart out saying she misses her grandmother. The mother consoles her and tells her that she does not like the new place either and they would go back to their old village. The girl is taken aback by that and felt like the little happiness of the garden, beach and her friend’s songs would also become a memory like the stories her grandmother used to tell her.`,

    keyword1: "Rural vs City Life",
    keyword2: "Trying to Adapt",
    keyword3: "Loneliness",
    keyword4: "Young Protagonist",
    keyword5: "Mother-daughter Relationship",
  },
  {
    author: "Dvivedula Vishalakshi",
    title: "Kaneesapu korekelu",
    year: "1953-06-01",
    magazine: "Gruhalakshmi",
    genre: "Short Story",
    engInfo: `The main character in this story is an uneducated newly married woman who moves with her husband to a new housing colony. She keeps to herself and has quite a lot of free time left after she finishes the household chores which she spends reading some books. One fine day her neighbour invites her to an all woman meeting and as she has nothing better to do she accompanies the neighbour thinking this would be a nice opportunity to get to know a few people in the neighbourhood. She goes there and is taken aback by the grandeur of their meeting place and finds a lot of woman leaders debating and giving speeches, arguing about what needs to be done to fight for their rights in such a patriarchal society. They conclude the meeting with an agreement to participate in a strike till their demands are met. They decide not to do any kind of household work as a part of the strike. And since they would not be cooking, they would also have to stay hungry till the strike ends. The woman is unwillingly forced to participate in the strike and she is taken along with a group of other women to go from house to house and make sure everyone participates in the strike. After 3 days of struggle the men in the village meet and agree to accept the demands put forward by the women. The woman leaders are overjoyed and celebrate their victory. During the celebratory speech the woman stands up and innocently asks what the demands of the strike were. Though the leaders are taken aback, they proceed to explain when all the women agree that they too were clueless about the demands of the strike they just participated in. The leader then tells them that they had asked for 8hrs of rest from household work everyday and 3-4 days of leave per month. The woman starts laughing and points out that these demands were indeed very pointless and that the strike was a waste of time as they get 8hrs of rest everyday when they sleep at night and 3-4 days break every month during their menstrual cycle. The educated leader finds herself speechless at this perspective of the uneducated woman`,

    keyword1: "Uneducated Protagonist",
    keyword2: "Rebellion",
    keyword3: "Ideas of Empowerment",
    keyword4: "Humor",
  },
  {
    author: "Illindala Saraswati Devi",
    title: "Salaha",
    year: "1941-05-01",
    magazine: "Gruhalakshmi",
    genre: "Short Story",
    engInfo: `This story is about a middle class couple who is faced with the problem of where to invest their hard earned money. The wife suggests buying a house whereas the husband wants to buy a car and a radio. They reach out to a respected elder in their village, Narasimha Rao for advice on what to do. The elderly man finds himself stuck in the situation and he does not want to hurt either of them with his advice. He keeps postponing his verdict everytime they approach him asking for a solution. Finally, on one fine day the village elder calls them home for lunch. After they finish eating, he takes them to the west of their village where they find a small bungalow surrounded by a beautiful garden. Beside the house they find a small garage with a two seater car. As they sit with Narasimha rao sits on a cement bench in the garden, they hear the sound of a radio from inside the house. The couple is overjoyed and thank Narasimha Rao profusely.`,

    keyword1: "Middle Class",
    keyword2: "Economic Decisions",
    keyword3: "Wisdom of Experience",
    keyword4: "Verdict",
    keyword5: "Happy Ending",
  },
  {
    author: "Illindala Saraswati Devi",
    title: "Aadapilla",
    year: "1949-09-21",
    magazine: "Andhra Patrika",
    genre: "Short Story",
    engInfo: `This is a story about the hardships faced by a woman who gives birth to 4 girl children continuously. She is treated harshly and not given any importance in the family. Her feelings and concerns are not taken into account and she is treated more like a maid than an equal partner all because she has failed to give birth to male progeny. For her 5th pregnancy there is no one left to take care of her. She is left at a hospital all alone where she shares her struggles with the nurse and hopes that she gives birth to a male child. Once she wakes up after delivering the baby, she is informed that it is again a girl child and the poor woman faints upon hearing this. The doctor there is angered by how she is treated at home and explains that she is extremely weak and has not been given proper food during pregnancy which has led to this situation. The husband then arrives and learns that it is a girl child again. He gets extremely irritated and when the doctor informs him that his wife is sick and has fainted he looks at it as an extra burden. He leaves saying that as if 5 girl children aren’t a burden enough his wife is now adding extra pressure and he doesn’t have the energy to deal with that anymore.`,

    keyword1: "Gender Discrimination",
    keyword2: "Domestic Abuse/Neglect",
    keyword3: "Losing Hope",
    keyword4: "Abandonment",
    keyword5: "Girl child treated as burden",
  },
  {
    author: "Munipalle Sarojini Devi",
    title: "Sitamma Paschathaapam",
    year: "1955-07-01",
    magazine: "Gruhalakshmi",
    genre: "Short Story",
    engInfo: `This is a very simple and straightforward story of a woman who rejects a certain marriage proposal from her relatives for her son because she is not satisfied with the amount of dowry they were willing to give. This angers the entire family and they cut her off. She eventually finds another match who agrees to pay the specified amount and hence gets her son married. She ends up spending a lot more than expected on the marriage and ends up in a lot of debt. She falls sick with all the stress and extra burden of house work because of the huge inflow of people attending the marriage but she is unfortunately left alone with absolutely no support as she is cut off from her family. She regrets her decision of being greedy for money but it was already too late by then.`,

    keyword1: "Dowry",
    keyword2: "Greed",
    keyword3: "Isolation",
    keyword4: "Financial Issues",
    keyword5: "Guilt/Shame",
  },
  {
    author: "K.Ramlakshmi",
    title: "Cheelipoyina Darulu",
    year: "1952-10-03",
    magazine: "Telugu Svatantra",
    genre: "Short Story",
    engInfo: `The story is of a man and woman whose names are not mentioned. Woman accuses man of being seen with another woman at the place of their usual rendezvous the night before. The man denies it saying what she saw was wrong and that he was with her the night before and declares that he loves her and that he only wants to be with her. Woman eventually quietens down about the accusations and plays up her playful natured antics even though she is feeling sad inside. She is unable to hold the persona for long. Both man and woman declare that they love each other and want to marry each other. However then it is revealed that this is the story of a teacher , his student and their forbidden love. Knowing that they can never marry each other without societal judgement, they part ways sadly without mentioning marriage again.`,

    keyword1: "Forbidden Relationship",
    keyword2: "Unnamed Protagonists",
    keyword3: "Conflicts",
    keyword4: "Heartbreak",
    keyword5: "Societal Norms",
    keyword6: "Repressing Desires",
  },
  {
    author: "K.Ramlakshmi",
    title: "Andam Chedina Kadantham",
    year: "1953-01-09",
    magazine: "Telugu Svatantra",
    genre: "Short Story",
    engInfo: `It is the story of poor painter, who wants to marry the daughter of a rich business man. He approaches the father of the girl and expresses his wishes with hesitation. The father reflects on the situation. He has been facing difficulty in selling his new food product. He asks the painter whether if he would marry his daughter even if she was from a poor family. The painter affirms it upon which he is presented a deal from the father. The deal is to make his product sell in the market and when it successfully sells the painter can marry his daughter. The painter comes with new marketing idea. He makes realistic imagery which people would be compelled to look at and uses it to promote the food product. It initially starts with housewives using the food product, thinking of innovative ways to incorporate the product in the meal. Very soon, this product becomes a hit in every household. The business man, however realizes that this marketing scheme wouldnt work for longer, hence he sells the rights of product to somebody else and cuts his loss. The painter who held up his end of the deal marries the daughter of a rich business man. The painter is compared to a rat and the business man is compared to a lion symbolising, how a small time painter solved the problem of a rich business man. A wise passerby comments that the painter’s destiny has changed and that he should be grateful.`,

    keyword1: "Rich vs Poor",
    keyword2: "Strategy",
    keyword3: "Ideas of Marriage",
    keyword4: "Success",
    keyword5: "Happy Ending",
  },
  {
    author: "K.Ramlakshmi",
    title: "Sameera",
    year: "1947-08-01",
    magazine: "Andhra Mahila",
    genre: "Short Story",
    engInfo: `This is a story of a young boy who is heartbroken as his lover is forced to marry a rich king. He accuses her of cheating on him and is angry at her for not refusing the alliance. A day before she gets married she meets him and tells him that she does not have a choice. If she does refuse the alliance and they get married, it will not end well and either both or one of their heads will be chopped off and that would not be an ideal situation. She explains to him that he atleast has his whole life ahead of him with his friends to support him. She on the other hand has to go to a strangers house and act happy and like nothing has ever happened before which is a worse situation to be in.`,

    keyword1: "Power of wealth",
    keyword2: "Social Position",
    keyword3: "Violence",
    keyword4: "Heartbreak",
    keyword5: "Suffering/Lack of free will",
  },
  {
    author: "G. Rajyalakshmi",
    title: "Manasu Mallindi",
    year: "1944-11-05",
    magazine: "Anand Vani",
    genre: "Short Story",
    engInfo: `This is a simple story of a poor working class couple, who are struggling to make ends meet working at the house of a zamindar. The husband is a drunkard and has an affair with another woman. The wife however, loves the husband and cannot imagine life without him. She takes care of him, gets food for the family and also gives him the money he needs for alcohol. All she asks in return is for him to come straight home and not meet the other woman. However, she is verbally and physically abused despite it all and the husband ends up leaving her when she falls sick. The woman is dejected but manages to do well even in his absence with the help of her friend. The husband returns one day and asks for forgiveness stating that he will never leave her again. The wife in all her innocence forgives him in the hope that he will stay with her now that she is not sick anymore.`,

    keyword1: "Class",
    keyword2: "Zamindar System",
    keyword3: "Infidelity",
    keyword4: "Domestic Abuse",
    keyword5: "Abandonment",
    keyword6: "Innocence",
  },
  {
    author: "Malathi Chendur",
    title: "Mannu",
    year: "1949-06-01",
    magazine: "Andhra Patrika",
    genre: "Short Story",
    engInfo: ``,
  },
  {
    author: "Malathi Chendur",
    title: "Madrasi",
    year: "1950-06-28",
    magazine: "Andhra Patrika",
    genre: "Short Story",
    engInfo: `The story revolves around a ‘Madrasi’ who is the central character.A man travelling from Madras to Rangoon in a ship happens to share a cabin with the Madrasi. He is a talkative person. He is short, but sturdy. He is dark skinned. His hair is thin and long. His nose is bulgy. His eyes are laden. The man dislikes his company. The Madrasi however, makes friends with everyone in the ship and behaves as if he knows about everything under the sky. The Madrasi once enters into an argument with Mr. Rao, regarding a chain worn by Mrs. Rao. While Mr. Rao says that the chain is made of fake pearls, the Madrasi argues that the pearls are natural and very valuable. They enter into a bet for 400 rupees. The Madrasi examines the chain. He appears to have found the pearls as natural. But, looking at Mrs. Rao’s pleading eyes, he does not reveal the truth. He accepts that the pearls are fake and loses 400 rupees to Mr. Rao. The next day, he receives an envelope containing 400 rupees thrown into his cabin. It was from Mrs. Rao. Upon asking for explanation, the Madrasi tells the man that by looking at Mrs. Rao’s pleading eyes, he understands that the pearls were gifted by her lover who is obviously hidden from Mr. Rao. Mr. Rao had left his wife alone in Madras for 7 years and it was very obvious to the Madrasi as to what had happened when he looked at Mrs. Rao’s eyes the previous night. Thus, the Madrasi, who appears as a silly character in the beginning, due to his talkative nature, proves himself as a helping and kind-hearted person and the man starts liking him.`,

    keyword1: "Friendly Protagonist",
    keyword2: "Omission of Truth",
    keyword3: "Infidelity",
    keyword4: "Separation",
    keyword5: "Kindness",
  },
  {
    author: "Janaki Rani",
    title: "Teesiponi Telivi",
    year: "1952-04-02",
    magazine: "Andhra Patrika",
    genre: "Short Story",
    engInfo: `This is a story about a middle class couple. One day when the wife asks her husband for a new saree he disagrees saying it is a waste of money. Angered by this the wife starts making fun of her husband saying that he is the one who wastes money as he had once bought a saree worth 10 rupees for 18 rupees and that he was a fool to do so. Unable to handle the ridicule, the husband confesses that the saree was indeed only 10 rupees and that he only lied to her that it was 18 rupees. And when he asks her where the saree was, she replies saying that it was damaged and she had hid it all this while but now there is no use in being clever about it because it wasn’t that costly afterall and that the husband had no right to say anything as he was in he wrong for lying all this while.`,

    keyword1: "Middle Class",
    keyword2: "Argument/Confrontation",
    keyword3: "Hypocrisy",
    keyword4: "Falsehood in relationship",
  },
  {
    author: "T.V Ratnavali",
    title: "Ardhika Hakku leni Aada Brathuku",
    year: "1951-01-01",
    magazine: "Gruhalakshmi",
    genre: "Short Story",
    engInfo: `This is a story about the life of a woman who is married into a middle class family and is given absolutely no financial freedom. She is oppressed by her mother-in-law and her husband who is very loyal to his mother. Her husband had grown up under his mother’s care after his father passed away during his childhood. All the decisions in the house are taken with no regard towards the woman. She then takes to secretly selling some rice from the kitchen or stealing from her husband to at least educate her daughter as much as she can. She is once caught by her mother-in-law but the latter decides not to complain to her son as she thinks her son will beat his wife to death if he comes to know about this. She continues living her life in the same way and as time passes by her son gets married. But unfortunately she is again treated in the same disrespectful manner by her daughter-in-law as well. And all because of her lack of financial independence she is forced to stay in the same situation and suffer with no way of escaping.`,

    keyword1: "Oppression",
    keyword2: "Fear",
    keyword3: "Mentions of Violence",
    keyword4: "Helplessness",
    keyword5: "Financial Dependency",
  },
  {
    author: "T.V Ratnavali",
    title: "Amma Nanna",
    year: "1954-03-19",
    magazine: "Telugu Svatantra",
    genre: "Short Story",
    engInfo: `This story revolves around the life of a young girl and her thoughts about her parents. Her dad is portrayed as someone who is very irresponsible and naive for bringing things like rotten vegetables or old and useless cows whenever he is sent to the market. Her mother feels helpless in such situations and ends up shouting and taunting her husband for being worthless. The young girl however feels like her mother is overreacting and that her father’s efforts should at least be acknowledged if not appreciated. One fine day, the father ends up getting an alliance for the young girl. The groom however, happens to be a very old man but the father is only interested in his wealth and the fact that he had agreed to take very less dowry. Despite the mother’s protests, the young girl is married and sent away. They later realise that they had been cheated and the groom had in fact been married twice in the past and is now on his deathbed. He soon passes away and the young girl turns into a widow even before she understands what is happening around her. She comes back home dejected. Her mother too feels helpless and can now do nothing but shed tears. The young girl thinks again and though now she understands her mother’s agony about her irresponsible father, she is still conditioned to believe that her father needs to be appreciated for doing the bare minimum because he is at least supporting the family in whatever small way that he can.`,

    keyword1: "Parental Abuse",
    keyword2: "Young Marrying Old",
    keyword3: "Deceit",
    keyword4: "Regrets",
    keyword5: "Arguments",
    keyword6: "Hazards Of Patriarchy",
  },
  {
    author: "Thenneti Krishnaveni Janaki Ramahemalatha",
    title: "Amrutha Ghadiyala Anubhuti",
    year: "1955-12-30",
    magazine: "Telugu Svatantra",
    genre: "Short Story",
    engInfo: `Poetic description of a 7 year old experience of the narrator. They (the narrator whose gender is not specified) see an extremely beautiful human one night during a train journey and are mesmerised by their beauty. The gender of the beautiful person who enters the train in the middle of the night is also not mentioned. The entire story describes that night and the narrator's feelings in detail. The narrator attempts to convey their feelings but fails to do so. The narrator ends the story saying that he still tries to look for that person in everyone he comes across and that societies judgement about their actions do not bother them.`,

    keyword1: "Genderless Narrator",
    keyword2: "Love",
    keyword3: "Beauty",
    keyword4: "Free Willed",
    keyword5: "Search for a person",
  },
  {
    author: "N.Devaki Devi",
    title: "Tinyu Cheera",
    year: "1950-05-28",
    magazine: "Anand Vani",
    genre: "Short Story",
    engInfo: `Its the story of a middle class husband and wife. The story starts with wife , requesting a saree for an upcoming wife. Husband denies the request with the excuse of it being the month end and having not enough money. Later, his friend comes over to visit them. Wife accidentally eavesdrop on a misleading conversation between both the friends while bringing coffee. The two friends discussing about buying something without even bargaining. Wife misunderstands this and thinks that the husband has another lover. She is distraught and thinks of death. However when the husband comes back with a saree for her, she confronts him about it and realizes that it was misunderstanding. Husband laughs at wife for the naviety.`,
  },
  {
    author: "Sunkara and Vasireddi",
    title: "Potugadda",
    magazine: "",
    engInfo: `Authors portrayed the socio-economic conditions of Telangana; the atrocities and exploitations of the landlords; and the people’s revolt and sacrifices of women for the sake of the movement`,
  },
  {
    author: "Kondapalli Koteshwaramma",
    title: "Nirjana Varadhi(Autobiography)",
    magazine: "",
    engInfo: ``,
  },
  {
    author: "Gogu Shyamala",
    title: "Nalla Poddu",
    magazine: "",
    genre: "Collection",
    engInfo: `Nalla Podu is an anthology of songs/poems/short stories written by 54 different dalit women and collected by Gogu Shyamala to be in one book. It took 3 years, to complete this. Starting from a list of names of writers to adding recommendations from writers to exhausting it. This anthology not only have dalit women literature, some subset of stories also focus on dalit christian women. This anthology is a huge step in Dalit women movement. The writers in this list are some of the pioneers for raising awareness about this issue, some tried to make sure education reached many more dalits. Some were part of committies like B. R ambedkar committee or women committee etc., This anthology was made possible by searching libraries, conducting interviews, by attending meetings especially on this topic, writing letters to people for manuscripts and even including articles from new paper. Their experiences while participating in the dalit movement were also recorded. This book not only has the details about each other and their works but it also explains the context and history of how dalit movement came about and how it changed after B.R ambedkar active efforts and also the problems faced especially by women. The genre of this book, can’t be fit into just one category. It is a mix of fiction , non-fiction and historical biographies. The book is the base for encouraging and revolutionizing dalit literature and its availability.`,
  },
  {
    author: "Dr. Vinodini",
    title: "Mugimpu",
    magazine: "",
    engInfo: ``,
  },
  {
    author: "Jajula Gowri",
    title: "Karsha Kula",
    magazine: "",
    engInfo: ``,
  },
  {
    author: "Joopaka Shubhadra and Gogu Shyamala",
    title: "Nalaregati Saalu",
    magazine: "",
    engInfo: ``,
  },
  {
    author: "Perumandla Sridevi",
    title: "Neelimeghalu",
    magazine: "",
    genre: "Collection of Short Stories by different authors",
    keyword1: "Questioning Morals",
    keyword2: "Tragedy",
    keyword3: "Storytelling",
    engInfo: `Neelimeghalu is an anthology of 10 stories by perumandla sridevi. Each story tackles a different situation faced by women. In one story, one fan of a male celebrity begins writing letters to him, maintaining the anonymity. He falls in love with her letters but they werent able to meet due to an accident. Another story talks about the morality of remarriage of a single mother with adolescent daughter. Some of other stories talk about the deception which women face by men who are only interested to have intercourse with them and how they deal with it. One story talks about struggles of working woman, while another talks about how a young boy is attracted to an older woman and the way he confronts his feelings. A story talks about an investigative female journalist exposing the truth. Each story has its own flavor and makes the reader think.`,
  },
  {
    author: "Volga(P.Lalitha kumari)",
    title: "Prayogam",
    magazine: "",
    engInfo: ``,
  },
  {
    author: "Volga(P.Lalitha kumari)",
    title: "Rajakeeya Kathalu",
    magazine: "",
    engInfo: ``,
  },
  {
    author: "J. Varalakshmi",
    title: "Kalayani Darulu",
    magazine: "",
    engInfo: ``,
  },
  {
    author: "Padmavati Devi",
    title: "Akka Thammudu",
    magazine: "",
    engInfo: ``,
  },
];
export const addBook = (book) => {
  authorWorks.push(book);
};

export const searchAuthorWorks = (query) => {
  return authorWorks.filter((work) =>
    work.author.toLowerCase().includes(query.toLowerCase()) ||
    work.title.toLowerCase().includes(query.toLowerCase())
  );
};

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
      : author === "Kuppili Padma"
      ? `<strong> Kuppili Padma </strong> , is not only an author but also a columnist and a media professional. Her stories mainly revolve around the ideas of the ups and downs of adolescence, entrepreneurship, globalization, challenges faced by single women, and workplace issues. In a writing career of 25 years, she has published 9 short story collections, 3 novels , 1 poetry anthology and 2 collections of creative prose. Her female characters confront patriarchal values ​​in various situations playing the role with strong personalities. The characters also bear the challenges, inevitabilities, pressures and fluctuations that limit their independence and bravely face the consequences. Many of her works are translated into english. In her inimitable simple, lyrical and poetic style, she nudges readers to look beyond the cliche of women’s rights.` // Add more conditions as needed
      : author === "Gottamukkala Mangayamma"
      ? `Except for a story, “Oh, Pity!” or “Ayyo Papam” which was published in 1935, not much is known about her. She is a Harijan young lady and have potrayed her self-experiences with untouchability being a sin in the story.`
      : author === "Muppala Ranganayakamma"
      ? `<strong> Muppala Ranganayakamma </strong> is a staunch feminist born in Bommidi Village of Tedepalligudem Taluk, West Godavari district. She intially started writing with her full name but however later in 1970’s she started writing with the name “Ranganayakamma”. Majority of her works have marxism or feminism as a background. She won Sahitya Academy Award for Balipeetham Novel. This Novel is even made into a film.`
      : author === "P. Satyavati"
      ? `<strong> P. Satyavati </strong> became well known with her prize-winning story 'Glasu Pagilindi' in 1977. Illalakagaane (Quest for Identity), a volume of stories, won her the Chaso award and established her as a leading feminist writer in Telugu. With four novels, five anthologies of short stories and a volume of essays to her credit, she ran a regular column on the early women writers in Bhumika. She is a postgraduate in English and served as a lecturer for many years. Her Stories explore a variety of different kinds of woman and often women from these several categories populate one story and the reader gets a glimpse of the commonality of women's condition across race, class and caste. She is now translating Paula Richman's Many Ramayanas into Telugu. She is presently co-editing an anthology of contemporary Telugu women writers' stories translated into English and to be published by the Sahitya Akademi.`
      : author === "Bandaru Acchamamba"
      ? `<strong> Bandaru Acchamamba </strong> is the first feminist historian of the 19th century. She was born in Nandigama in coastal Andhra Pradesh. She got married at the age of 10 and didnt receive any formal education. She learnt how to read and write with the help of her brother and also learnt Telugu, Marathi, Hindi, English from him while learning Gujarati, Bengali and Sanskrit by herself. The fact that she travelled all over india to gather research materials for her stories, make them really rich and unprecedented. She isnt only a truth seeking scholar but also a feminist reformer. She believed that women were naturally intelligent species and to claim otherwise would be backward thinking. She insists on the need of women’s sisterhood, to make the society better. She died of an illness in 1905.`
      : author === "Kanuparti Varalakshamma"
      ? `<strong> Kanuparti Varalakshamma </strong> was born in 1896 in bapatla. She was an activist of Indian Freedom Movement from the age of 12. She was a follower of Mahatma Gandhi. She ran a column in Andhra Patrika Weekly discussing various issues like education for women, traditions, politics and current trends for 6 years. She was a pioneer of a literary process called Lekha Sahityam. These writings are in the form of letters written by the author or another fictional character and are in a casual tone similar to day-to-day conversations. She also started a column in Gruhalakshmi Magazine and discussed issues such as the Sharda Act, divorce law, the khadi movement, non-cooperation, erasing untouchability, unfounded customs, physical exercise, the changes implemented in measurements and weights and microphones. She started a women's organization, Stree Hitaishini Mandali to promote women's education, vocational skills and to improve their social status.`
      : author === "Yellapragada Sita Kumari"
      ? `<strong> Yellapragada Sita Kumari </strong>  was born on 9 October 1914 at Bapatla, Guntur District. She was expert in Telugu, Sanskrit and English. She worked as a Teacher at Key’s Girls High School, Secunderabad from 1946 to 1956. She was a pioneer of Nizam Andhra Mahila Sabha. She founded khadi production centre for training women in Hyderabad. Sita Kumari was also a member of All India Women’s Movement Association. She led satyagraha against the ban on Hyderabad State Congress by Nizam government. She also took on active part in the Quit India Movement. With Illindala Saraswati Devi, she established Andhra Yuvati Mandali and they used write their articles against immorality and publish them in Golconda Magazine. She died in 1986.`
      : author === "Achanta Sarada Devi"
      ? `<strong> Achanta Sarada Devi </strong> was born in Vijaywada in 1922. She is a Telugu M.A graduate , audited English M.A and has advanced diploma in Hindi. She started writing stories from 1945. Sarada Devi chose themes of philosophical and ponderous nature , submerged in pensive mood making her an atypical writer of the 50’s.She worked as a telugu lecturer in Tirupati Padmavati College. She died in 1999`
      : author === "Illindala Saraswati Devi"
      ? `<strong> Illindala Saraswati Devi </strong> in 1918 in Andhra Pradesh.  She started the Andhra Yuvati Mandali, a women's educational and social organization in 1936. Some time after 1950, she completed a course in journalism at Osmania University, She served as a member of both the central and state Film Award Committees. She was a nominated member of the State Legislative Council. She has published over forty works, including twelve novels, several plays, and essays, biographies and short stories. She has used literature as a way of upholding ethical and cultural values. She has also written children's literature, including a concise biography of Mahatma Gandhi.`
      : author === "K Ramalakshmi"
      ? `<strong> K Ramalakshmi </strong> was born in 1930 in Kotnandur, Kakinada District. She graduated from Andhra University. She started writing since 1951. She also worked as a sub-editor for English section of Telugu Swatantra. She worked in women welfare organizations. Besides being a towering literary figure and staunch supporter of women rights, Ramalakshmi also became quite revered for her bold and incisive opinions. Cine buffs appreciated how she minced no words while sharing her opinions about films. She did not hesitate to openly comment about the relationships and personal life of Telugu film stars.`
      : author === "Malathi Chendur"
      ? `<strong> Malathi Chendur </strong> was born in 1928, in Nuzvid. She is a popular Indian writer, novelist and columnist. She not only wrote 26 novels but also translated over 300 novels from other languages into telugu. She started writing in 1949 and also narrated her novels on radio.  Her novels contain practical solutions for the problems women encounter in daily life. She was a member of Central Board of Film Certification for 11 years. She died in 2013.`
      : author === "Janaki Rani"
      ? `<strong> T Janaki Rani </strong> was born in 1939, in machilipatnam. She did her post graduation in Indian History, Telugu, and Economics from Andhra University. She started her career in Central Social Welfare Board in 1958 as Welfare Officer, a central government voluntary organization for the welfare of disadvantaged sections of the society. She secured orientation certificate from Madras School of Social Work. During her service in the organization, she has initiated family and child welfare projects in tribal areas like Ashwaraopeta, Wankhidi and Addateegala. During her tenure, she also edited the official magazine of the board, ‘Subhashini’. She was a radio broadcaster, writer and social activist. She worked with AIR for over two decades. She also has initiated many series of programs in collaboration with Department of Education, Panchayati Raj, Osmania University and UNICEF. She has designed unique IEC campaigns on child rights and child labor, Bala Jagriti, produced audio cassettes for UNICEF.`
      : author === "Gogu Shyamala"
      ? `<strong> Gogu Shyamala </strong> was born in 1969 in Peddemul village. She was is a philosopher, poet, and prolific story writer working in the Telugu language. She is hailed as a landmark in Telangana Dalit literature. As a student, she was active with the Communist Party of India (Marxist-Leninist) but eventually became disenchanted when she saw how issues of caste inequality persisted among the group’s membership despite their stated convictions. She has also edited a collection of Telangana Madiga poetry, and works on biographies of significant Dalit female political leaders. Shyamala’s stories are highly attuned to how, particularly for women, the heaped responsibilities of running a household divert and distract from what should be the narrative thread of their lives.`
      : author === "Jajula Gowri"
      ? `<strong> Jajula Gauri </strong> is a famous Dalit author. Her real name is Muningam Sushila. She was born on March 2, 1969 in Lothkunta , Hyderabad to Mallaiah and Lakshmi.She did her B.A from B R Ambedkar Universal university. She is poetry in listening to songs from her childhood Also interested in writing.Since then she has written about 300 poems about child labor and poverty. After magazines refused to publish those poems, she began writing poetry from a Dalit perspective. Her poetry contributed to the strengthening of Dalit movement in Andhra state. Jajula Gauri's life and literature are inseparable. She depicts her past life in literature .She is a writer who knows herself in the background of the Madiga Dandora movement in Telugu literature and moves forward with the self-confidence that their lives are also worthy of literature. She is working as the President of Democratic Writers Forum. She is actively involved in Dalit Bahujan social movements, especially in movements fighting women's issues.
`
      : author === "Volga(P.Lalitha Kumari)"
      ? `<strong> Popuri Lalita Kumari </strong> , popularly known by her pen name Volga </strong> , is Telugu poet and writer well known for her feminist perspective. She was born in Guntur, Andhra Pradesh, India. Along with being a writer, she has also been a professor and head of scripting division in Tollywood. After a long teaching stint, she worked as the head of the scripting division in Usha Kiran Movies. She made three feature films, which won critical acclaim and awards. Her work initiated debates across the country about feminism, in times when the idea was hardly accepted. Volga is known for her feminist literary works. Her novels, articles, poems portray women with modern, progressive ideologies. She while keeping the quality of work maintains the reality of characters, intact. All of her novels were written while she was a full-time employee, rather than fully dedicating her time to the novels.`
      : author === "Kondapalli Koteshwaramma"
      ? `<strong> Kondapalli Koteshwaramma </strong> was an Indian communist leader, feminist, revolutionary and writer born in 1918, in Pamuru. She became a widow at 9 years and remarried later at the age of 19 years. She faced a lot of discrimination because of it. She was the founder of the Maoist movement in Andhra Pradesh, Koteswaramma’s life spans a tumultuous century of the Independence movement. She worked actively for the Communist Party of India along with her husband and the likes of Puchapalli Sundaraiah. She contributed actively to the Telangana Rebellion. She worked for the party for few years staying underground (In Bandar, Eluru, Puri, Raichur), Later, she completed matriculation and joined polytechnic while participating in various literary events. Her writings tell us about the movements, its lows and highs and the difficulties faced by ordinary activists.Reading her accounts, we find that the history of left movement largely has been that of upper caste Hindu men. Differences in the lives of women while in the movement and out, were far more stark than men, since they invested more in terms of lifestyle and aspirations. This is an extremely painful process and has not been written about, and this is what we can read in the silences of Koteswaramma’s text.`
      : "";

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
      : "";

  return (
    <div>
      <div style={{ display: "flex", marginTop: "12vh" }}>
        <div style={{ flex: 1, marginLeft: "1vw" }}>
          {carouselImages && carouselImages.length > 0 && (
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
          )}
          <div style={{ marginTop: "1vh", overflow: "auto" }}>
          <div>
    {authorText && authorUrduText && (
      <div>
        <Button onClick={changeToEnglish}>English</Button>
        <Button onClick={changeToUrdu}>Urdu</Button>
      </div>
    )}
              
              {language === "English" && authorText && (
                <p dangerouslySetInnerHTML={{ __html: authorText }} />
              )}
              {language === "Urdu" && authorUrduText && (
                <p dangerouslySetInnerHTML={{ __html: authorUrduText }} />
              )}
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
                    {/* <CardMedia
                      component="div"
                      sx={{ pt: "56.25%" }}
                      image={card.image}
                    /> */}
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
        </div>
      </div>
    </div>
  );
};

export default Archive;
