import React from "react";
import Carousel from "react-bootstrap/Carousel";
import img1 from "./data/carousel_imgs/1.jpg";
import img2 from "./data/carousel_imgs/2.jpeg";
import img3 from "./data/carousel_imgs/3.jpg";
import img4 from "./data/carousel_imgs/4.jpg";
import img5 from "./data/carousel_imgs/5.jpg";
import img6 from "./data/carousel_imgs/6.jpg";
import img7 from "./data/carousel_imgs/7.jpg";

function Home() {
  const images = [img1, img2, img3, img4, img5, img6, img7]; // Array of images

  return (
    <div>
      <header id="header">
        <div className="intro">
          <div className="overlay">
            <div className="container">
              <div className="row">
                <div className="intro-text">
                  <div>
                    <h1>Bayāz-e-Hayāt</h1>
                    <p style={{fontFamily:"Craw Modern"}}>A Textual Archive of Hyderabad</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div
        style={{
          display: "flex"
        }}
      >
        <div className="about-text" style={{ marginLeft:"15px",marginTop:"15px", width: "50%" }}>
          <p style={{ fontSize: "22px" }}>
            Bayāz-e-Hayāt is an online archive dedicated to preserving the
            literary and textual heritage of Hyderabad. It offers access to
            well-known as well as rare and hitherto unpublished works by people
            writing in both the city as well as the erstwhile princely state of
            Hyderabad in the twentieth century. Its uniqueness is marked not
            only in its focus on Hyderabad, but also in the light it shines on
            textual materials that are either not preserved at all or found in
            physical archives that are difficult for everyone to access. These
            materials include diaries, recipes, notebooks, letters,
            associational records, and unpublished drafts of literary texts. It
            is from these materials that the name Bayāz-e-Hayāt, i.e. "The
            Notebook of Life," emerges. In addition to these materials — which
            we strive to make available as both scanned images as well as
            digitized texts — the Bayāz-e-Hayāt project also aims to provide
            biographical information and literary history and criticism about
            Hyderabad's multilingual literary culture.
          </p>
        </div>

        <div style={{ marginTop:"38px", width: "50%"}}>
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
            <Carousel.Item>
              <img
                className="d-block w-100 carousel-image"
                src={img1}
                alt="Picture of Rafia Manzoor-ul-Ameen's Books 'Alam Panah' and 'Yeh Raaste'"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 carousel-image"
                src={img2}
                alt="Picture of Amena Tahseen's 'Hyderabad mein Urdu ka Nisaai Adab'"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 carousel-image"
                src={img3}
                alt="Third slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 carousel-image"
                src={img4}
                alt="Picture of Zeenath Sajida's Book"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 carousel-image"
                src={img5}
                alt="Picture of Fatima Alam Ali's Papers and Writings"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 carousel-image"
                src={img6}
                alt="Image of Hussaini Alam House by Huma R.Kidwai"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 carousel-image"
                src={img7}
                alt="Picture of Jeelani Bano's Book"
              />
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </div>
  );
}
export default Home;
