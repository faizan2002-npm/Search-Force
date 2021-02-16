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
      <section class="popular-search">
        <Container>
          <Row class="row">
            <Col>
              <h2 class="cheading">Popular Searches</h2>
            </Col>
          </Row>

          <Row class="row mt-5">
            {Searches.map((e, index) => (
              <Col lg={3} key={`id_${e._id}-${index}`}>
                <div class="popularsearch">
                  <a href={e.link}>{e.name}</a>
                </div>
              </Col>
            ))}
          </Row>
          <Row>
            <div class="search_more  d-block mx-auto mt-5 mb-5">
              <button type="button" class="btn btn">
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
