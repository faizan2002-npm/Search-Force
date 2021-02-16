import { Container, Row, Col, Tab, Nav, Tabs, Image } from "react-bootstrap";
import { useState } from "react";
import Slider from "react-slick";

function RecentlyViewed(props) {
  const [RecentlyViewed, setRecentlyViewed] = useState([
    {
      _id: 1,
      image: "/assets/img/lstvwd.jpg",
      address: "39-48 56th Street, Queens, NY",
      price: "USD - 1,300,000",
      text: "MultiFamily",
    },
    {
      _id: 2,
      image: "/assets/img/lstvwd.jpg",
      address: "39-48 56th Street, Queens, NY",
      price: "USD - 1,300,000",
      text: "MultiFamily",
    },
    {
      _id: 3,
      image: "/assets/img/lstvwd.jpg",
      address: "39-48 56th Street, Queens, NY",
      price: "USD - 1,300,000",
      text: "MultiFamily",
    },
    {
      _id: 4,
      image: "/assets/img/lstvwd.jpg",
      address: "39-48 56th Street, Queens, NY",
      price: "USD - 1,300,000",
      text: "MultiFamily",
    },
  ]);
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  };
  return (
    <>
      <section className="viewd_listing">
        <Container>
          <Row>
            <Col>
              <h2 className="cheading">Your Recently Viewed Listings</h2>
              <p className="cpara">
                Lorem Ipsum is simply dummy text of the printing
                <br />
                and typesetting industry.
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <Slider className="listing_viewd shadow" {...settings}>
                {RecentlyViewed.map((e, index) => (
                  <div className="lstvwd" key={`key_${index}-${e._id}`}>
                    <div className="row">
                      <Col lg={6}>
                        <Image src={e.image} fluid alt="lstvwd" />
                      </Col>
                      <Col lg={6}>
                        <div className="lstvwd_add">
                          <p>{e.address}</p>

                          <p className="lstvwd_price">{e.price}</p>

                          <p>{e.text}</p>
                        </div>
                        <div className="lstvwd_shape">
                          <Image
                            src="/assets/img/lstvwd-shape.png"
                            fluid
                            alt="shape"
                          />
                        </div>
                      </Col>
                    </div>
                  </div>
                ))}
              </Slider>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default RecentlyViewed;
