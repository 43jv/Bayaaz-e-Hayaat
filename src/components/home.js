import React from "react";
import Carousel from "react-bootstrap/Carousel";
import intro from "./carousel_imgs/intro.png";
import img1 from "./carousel_imgs/1.jpg";
import img2 from "./carousel_imgs/2.jpeg";
import img3 from "./carousel_imgs/3.jpg";
import img4 from "./carousel_imgs/4.jpg";
import img5 from "./carousel_imgs/5.jpg";
import img6 from "./carousel_imgs/6.jpg";
import img7 from "./carousel_imgs/7.jpg";


function Home() {
  return (
    <div>
      <Carousel
        style={{ height: "50vh", marginTop: "10vh" }}
        nextIcon={
          <span aria-hidden="true" className="carousel-control-next-icon" style={{backgroundColor:"black"}} />
        }
        prevIcon={
          <span aria-hidden="true" className="carousel-control-prev-icon" style={{backgroundColor:"black"}}/>
        }
        indicators={true}
      >
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={intro}
            alt="First slide"
            style={{objectFit:"cover", height:"50vh"}}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-image"
            src={img2}
            alt="Second slide"
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
            alt="Fourth slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-image"
            src={img5}
            alt="Fifth slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-image"
            src={img6}
            alt="Sixth slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-image"
            src={img7}
            alt="Seventh slide"
          />
        </Carousel.Item>
      </Carousel>
      <div id="about">
        <div className="container">
          <div className="row">
            <div style={{ marginTop: "5vh" }}>
              <div className="about-text">
                <p style={{ fontSize: "20px" }}>
                  Bayāz-e-Hayāt is an online archive dedicated to preserving the
                  literary and textual heritage of Hyderabad. It offers access
                  to well-known as well as rare and hitherto unpublished works
                  by people writing in both the city as well as the erstwhile
                  princely state of Hyderabad in the twentieth century. Its
                  uniqueness is marked not only in its focus on Hyderabad, but
                  also in the light it shines on textual materials that are
                  either not preserved at all or found in physical archives that
                  are difficult for everyone to access. These materials include
                  diaries, recipes, notebooks, letters, associational records,
                  and unpublished drafts of literary texts. It is from these
                  materials that the name Bayāz-e-Hayāt, i.e. "The Notebook of
                  Life," emerges. In addition to these materials — which we
                  strive to make available as both scanned images as well as
                  digitized texts — the Bayāz e-Hayāt project also aims to
                  provide biographical information and literary history and
                  criticism about Hyderabad's multilingual literary culture.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
