import { useState } from "react";
import { Container, Row, Col, Tab, Nav, Tabs, Image } from "react-bootstrap";
function Popular(props) {
    
  const [Popular, setPopular] = useState([
    {
      _id: 1,
      name: "New York Homes for Sale",
      link: "#",
      image: "assets/img/city.jpg",
    },
    {
      _id: 2,
      name: "New York Homes for Sale",
      link: "#",
      image: "assets/img/city.jpg",
    },
    {
      _id: 3,
      name: "New York Homes for Sale",
      link: "#",
      image: "assets/img/city.jpg",
    },
    {
      _id: 4,
      name: "New York Homes for Sale",
      link: "#",
      image: "assets/img/city.jpg",
    },
    {
      _id: 5,
      name: "New York Homes for Sale",
      link: "#",
      image: "assets/img/city.jpg",
    },
    {
      _id: 6,
      name: "New York Homes for Sale",
      link: "#",
      image: "assets/img/city.jpg",
    },
    {
      _id: 7,
      name: "New York Homes for Sale",
      link: "#",
      image: "assets/img/city.jpg",
    },
    {
      _id: 8,
      name: "New York Homes for Sale",
      link: "#",
      image: "assets/img/city.jpg",
    },
    {
      _id: 9,
      name: "New York Homes for Sale",
      link: "#",
      image: "assets/img/city.jpg",
    },
    {
      _id: 10,
      name: "New York Homes for Sale",
      link: "#",
      image: "assets/img/city.jpg",
    },
    {
      _id: 11,
      name: "New York Homes for Sale",
      link: "#",
      image: "assets/img/city.jpg",
    },
    {
      _id: 12,
      name: "New York Homes for Sale",
      link: "#",
      image: "assets/img/city.jpg",
    },
  ]);
  return (
    <>
      <section className="popular_city">
        <Container>
          <Row>
            <Col>
              <h2 className="cheading">Popular Cities in Canada</h2>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col>
              <form className="form-inline mt-5">
                <div className="form-group ">
                  <input
                    type="search"
                    className="form-control shadow"
                    id="inputPassword2"
                    placeholder="Search city by keyword"
                  />
                </div>
                <button type="submit" className="btn btn-primary shadow">
                  <i className="fa fa-paper-plane"></i>
                </button>
              </form>
            </Col>
          </Row>

          <Row>
            {Popular.map((e, index) => (
              <Col lg={3} className="mb-5" key={`id_${e._id}-${index}`}>
                <div className="city-lists">
                  <div className="city-list-img">
                    <img src={e.image} className="img-fluid" alt="city" />
                  </div>

                  <div className="city-details shadow">
                    <p>{e.name}</p>
                    <span>
                      <a href={e.link}>
                        <i className="fa fa-caret-right"></i>
                      </a>
                    </span>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Popular;
