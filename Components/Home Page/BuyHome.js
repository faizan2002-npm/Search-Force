import { Swiper, SwiperSlide } from "swiper/react";
import { Container, Row, Col, Tab, Nav, Tabs, Image } from "react-bootstrap";
import { useState } from "react";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

function BuyHome(props) {
  const [BuyHome, setBuyHome] = useState([
    {
      _id: 1,
      image: "assets/img/a1a.jpg",
      name: "Upto $1M = $999",
      text: "Visit the property from the comfort of your home",
      link: "#",
      linkText: "Find Now",
    },
    {
      _id: 2,
      image: "assets/img/a1a.jpg",
      name: "Upto $1M = $999",
      text: "Visit the property from the comfort of your home",
      link: "#",
      linkText: "Find Now",
    },
    {
      _id: 3,
      image: "assets/img/a1a.jpg",
      name: "Upto $1M = $999",
      text: "Visit the property from the comfort of your home",
      link: "#",
      linkText: "Find Now",
    },
    {
      _id: 4,
      image: "assets/img/a1a.jpg",
      name: "Upto $1M = $999",
      text: "Visit the property from the comfort of your home",
      link: "#",
      linkText: "Find Now",
    },
    {
      _id: 5,
      image: "assets/img/a1a.jpg",
      name: "Upto $1M = $999",
      text: "Visit the property from the comfort of your home",
      link: "#",
      linkText: "Find Now",
    },
  ]);
  return (
    <>
      <section className="buy_home">
        <Container>
          <Row>
            <Col>
              <h2 className="cheading">Buy a Home</h2>
              <p className="cpara">
                Lorem Ipsum is simply dummy text of the printing
                <br /> and typesetting industry.
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <Swiper
                autoplay={true}
                scrollbar={{ draggable: true }}
                navigation={true}
                spaceBetween={10}
                slidesPerView={1}
                onSlideChange={() => console.log("slide change")}
                onSwiper={(swiper) => console.log(swiper)}
              >
                {BuyHome.map((e, index) => (
                  <SwiperSlide key={`id_${index}-${e._id}`}>
                    <Image src={e.image} fluid alt="img" />
                    <div className="swiper-banner-content">
                      <h3>{e.name}</h3>
                      <p>{e.text}</p>
                      <a href={e.link} className="btn btn">
                        {e.linkText}
                      </a>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default BuyHome;
