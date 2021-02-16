import { Container, Row, Col, Tab, Nav, Tabs, Image } from "react-bootstrap";

function Footer(props) {
  return (
    <>
      <footer>
        <div className="footer-top">
          <Container>
            <Row>
              <Col lg={4} className="righoqw">
                <div className="footer-logo">
                  <Image src="/assets/img/white_logo.png" fluid alt="logo" />
                </div>
              </Col>
              <Col lg={8}>
                <p className="text-white">
                  searchforce.com, is brought to you by the Dadha &amp; Company
                  – one of India’s most trusted pharmacies, with over 100 years’
                  experience in dispensing quality medicines. searchforce.com,
                  is brought to you by the Dadha &amp; Company – one of India’s
                  most trusted Real Estates100 years’ experience in dispensing
                  quality Real Estates
                </p>
              </Col>
            </Row>
          </Container>
        </div>

        <div className="footer-mid">
          <Container>
            <Row className="footer-mid-one">
              <Col lg={3} className="footer-mid-one-link">
                <a href="">Condos for sale near me</a>
                <a href="">Land for sale near me</a>
                <a href="">Apartments for rent near me</a>
                <a href="">Homes for sale near me</a>
              </Col>

              <Col lg={3} className="footer-mid-one-link">
                <a href="">Condos for sale near me</a>
                <a href="">Land for sale near me</a>
                <a href="">Apartments for rent near me</a>
                <a href="">Homes for sale near me</a>
              </Col>

              <Col lg={3} className="footer-mid-one-link">
                <a href="">Condos for sale near me</a>
                <a href="">Land for sale near me</a>
                <a href="">Apartments for rent near me</a>
                <a href="">Homes for sale near me</a>
              </Col>

              <div lg={3} className="footer-mid-two">
                <p>Subscribe our newsletter</p>
                <form className="form-inline ">
                  <div className="form-group ">
                    <input
                      type="password"
                      className="form-control shadow"
                      id="inputPassword2"
                      placeholder="Search city by keyword"
                    />
                  </div>
                  <button type="submit" className="btn btn-primary shadow">
                    <i className="fa fa-paper-plane"></i>
                  </button>
                </form>

                <div className="social">
                  <span>
                    <i className="fa fa-facebook"></i>
                  </span>
                  <span>
                    <i className="fa fa-twitter"></i>
                  </span>
                  <span>
                    <i className="fa fa-linkedin"></i>
                  </span>
                  <span>
                    <i className="fa fa-facebook"></i>
                  </span>
                </div>
              </div>
            </Row>
          </Container>
        </div>

        <div className="footer-link text-center">
          <a href="">Who we are </a>
          <a href="">Why Choose Us </a>
          <a href="">Partners </a>
          <a href="">Advertise </a>
          <a href="">FAQs</a>
        </div>

        <div className="desclimer">
          <span>Desclimer</span>
          <p>
            Searchforce.com Limited is only an intermediary offering its
            platform to advertise properties of Seller for a Customer/Buyer/User
            coming on its Website and is not and cannot be a party to or privy
            to or control in any manner any transactions between the Seller and
            the Customer/Buyer/User. All the offers and discounts on this
            Website have been extended by various Builder(s)/Developer(s) who
            have advertised their products. Searchforce.com is only
            communicating the offers and not selling or rendering any of those
            products or services. It neither warrants nor is it making any
            representations with respect to offer(s) made on the site.
            Searchforce.com Realty Services Limited shall neither be responsible
            nor liable to mediate or resolve any disputes or disagreements
            between the Customer/Buyer/User and the Seller and both Seller and
            Customer/Buyer/User shall settle all such disputes without involving
            Magicbricks Realty Services Limited in any manner.
          </p>
        </div>

        <div className="copyright">
          <Container>
            <Row>
              <Col lg={6}>
                <p>2020, Copyright SearchForce.com. All Rights Reserved</p>
              </Col>
              <Col lg={6}>
                <div className="pt text-right">
                  <a href="/">Privacy</a>
                  <a href="/">Terms of use for B2B B2C</a>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </footer>
      <script
        src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
        integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
        crossOrigin="anonymous"
      ></script>
      <script
        src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
        integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
        crossOrigin="anonymous"
      ></script>
      <script
        src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
        integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
        crossOrigin="anonymous"
      ></script>
      <script src="https://unpkg.com/boxicons@latest/dist/boxicons.js"></script>
      <script
        src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js"
        integrity="sha512-bPs7Ae6pVvhOSiIcyUClR7/q2OAsRiovw4vAkX+zJbw3ShAeeqezq50RIIcIURq7Oa20rW2n2q+fyXBNcU9lrw=="
        crossOrigin="anonymous"
      ></script>
      <script
        src="https://cdnjs.cloudflare.com/ajax/libs/Swiper/6.4.10/swiper-bundle.min.js"
        integrity="sha512-uz3Nazs35uvwvoJC1+Wg64gwpP7NMLio5MWZp+tSb1npVCTOZkDPWcoMKunKr9+rfp4vUFzuf8Vko0H+phWMzg=="
        crossOrigin="anonymous"
      ></script>
      <script src="assets/js/custom.js"></script>
      <script
        src="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.js"
        integrity="sha512-XtmMtDEcNz2j7ekrtHvOVR4iwwaD6o/FUJe6+Zq+HgcCsk3kj4uSQQR8weQ2QVj1o0Pk6PwYLohm206ZzNfubg=="
        crossOrigin="anonymous"
      ></script>
    </>
  );
}

export default Footer;
