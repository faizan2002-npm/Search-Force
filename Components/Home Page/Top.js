import { useState } from "react";
import { Container, Row, Col, Tab, Nav, Tabs, Image } from "react-bootstrap";
function Top(props) {
  const [Top, setTop] = useState([
    {
      _id: 1,
      image: "/assets/img/a1.jpg",
      name: "New Projects",
      btnText: "View Project",
    },
    {
      _id: 2,
      image: "/assets/img/a1.jpg",
      name: "New Projects",
      btnText: "View Project",
    },
    {
      _id: 3,
      image: "/assets/img/a1.jpg",
      name: "New Projects",
      btnText: "View Project",
    },
    {
      _id: 4,
      image: "/assets/img/a1.jpg",
      name: "New Projects",
      btnText: "View Project",
    },
  ]);
  return (
    <>
      <section className="top-property">
        <Container>
          <h2 className="cheading">Top Property Collections For You</h2>
          <Row className="mt-5">
            {Top.map((e, index) => (
              <Col lg={3} key={`id_${e._id}-${index}`}>
                <div className="topproperty shadow-sm">
                  <Image src={e.image} fluid alt="topperoperty" />
                  <div className="caption">
                    <p>{e.name}</p>
                  </div>
                  <div className="view-project-btn">
                    <button type="button" className="btn btn">
                      {e.btnText}
                    </button>
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

export default Top;
