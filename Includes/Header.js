import { Container, Row, Col, Image, Nav } from "react-bootstrap";
import Link from "next/link";

function Header(props) {
  return (
    <>
      <header className="header">
        <Container fluid>
          <Row className="total-header stickyNav">
            <Col lg={3}>
              <div className="logo">
                <Image fluid src="/assets/img/logo.png" alt="logo" />
              </div>
            </Col>
            <Col lg={6}>
              <div className="menubar">
                <Nav as="ul">
                  <Nav.Item as="li">
                    <Link href="/">Find Agent</Link>
                  </Nav.Item>
                  <Nav.Item as="li">
                    <Link href="/">Services</Link>
                  </Nav.Item>
                  <Nav.Item as="li">
                    <Link href="/">Brokeraget</Link>
                  </Nav.Item>
                  <Nav.Item as="li">
                    <Link href="/">Construction</Link>
                  </Nav.Item>
                  <Nav.Item as="li">
                    <Link href="/">Restaurants</Link>
                  </Nav.Item>
                </Nav>
              </div>

              <div id="mySidepanel" className="sidepanel">
                <input id="menu__toggle" type="checkbox" />
                <label className="menu__btn" htmlFor="menu__toggle">
                  <span></span>
                </label>

                <Nav className="menu__box" as="ul">
                  <Nav.Item as="li">
                    <Link className="menu__item" href="/">
                      Find Agent
                    </Link>
                  </Nav.Item>
                  <Nav.Item as="li">
                    <Link className="menu__item" href="/">
                      Services
                    </Link>
                  </Nav.Item>
                  <Nav.Item as="li">
                    <Link className="menu__item" href="/">
                      Brokeraget
                    </Link>
                  </Nav.Item>
                  <Nav.Item as="li">
                    <Link className="menu__item" href="/">
                      Construction
                    </Link>
                  </Nav.Item>
                  <Nav.Item as="li">
                    <Link className="menu__item" href="/">
                      Restaurants
                    </Link>
                  </Nav.Item>
                </Nav>
              </div>
            </Col>
            <Col lg={3}>
              <div className="other">
                <div className="other-signin">
                  <span>&nbsp;Sign In</span>
                </div>
                <div className="post-property shadow">
                  <span className="pp">Post Your Property</span>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </header>
    </>
  );
}

export default Header;
