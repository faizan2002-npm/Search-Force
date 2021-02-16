import { useState } from "react";
import { Container, Row, Col, Tab, Nav, Tabs, Image } from "react-bootstrap";
function Searches(props) {
  const [Searches, setSearches] = useState([
    {
      _id: 1,
      name: "New Projects",
      link: "#",
    },
    {
      _id: 2,
      name: "New Projects",
      link: "#",
    },
    {
      _id: 3,
      name: "New Projects",
      link: "#",
    },
    {
      _id: 4,
      name: "New Projects",
      link: "#",
    },
  ]);
  return (
    <>
      <section className="popular-search">
        <Container>
          <Row className="row">
            <Col>
              <h2 className="cheading">Popular Searches</h2>
            </Col>
          </Row>

          <Row className="row mt-5">
            {Searches.map((e, index) => (
              <Col lg={3} key={`id_${e._id}-${index}`}>
                <div className="popularsearch">
                  <a href={e.link}>{e.name}</a>
                </div>
              </Col>
            ))}
          </Row>
          <Row>
            <div className="search_more  d-block mx-auto mt-5 mb-5">
              <button type="button" className="btn btn">
                View More
              </button>
            </div>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Searches;
