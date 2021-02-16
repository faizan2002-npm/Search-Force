import { useState } from "react";
import { Container, Row, Col, Tab, Nav, Tabs, Image } from "react-bootstrap";

function Services(props) {
  const [Service, setService] = useState([
    {
      _id: 1,
      image: "/assets/img/real-estate.svg",
      name: "Agents",
    },
    {
      _id: 2,
      image: "/assets/img/real-estate.svg",
      name: "Lenders",
    },
    {
      _id: 3,
      image: "/assets/img/real-estate.svg",
      name: "Lawers",
    },
    {
      _id: 4,
      image: "/assets/img/real-estate.svg",
      name: "Plumbers",
    },
    {
      _id: 5,
      image: "/assets/img/real-estate.svg",
      name: "Electricians",
    },
    {
      _id: 6,
      image: "/assets/img/real-estate.svg",
      name: "Inspectors",
    },
    {
      _id: 7,
      image: "/assets/img/real-estate.svg",
      name: "Inspectors",
    },
  ]);
  return (
    <>
      <Container>
        <Row>
          <Col>
            <div
              className="services shadow"
              style={{
                marginTop: "-70",
              }}
            >
              <div className="owl-carousel">
                {Service.map((e, index) => (
                  <div key={`id_${index}-${e.image}`}>
                    <Image
                      src={e.image}
                      className="d-block mx-auto"
                      alt="reales"
                    />
                    <p className="text-center">{e.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Services;
