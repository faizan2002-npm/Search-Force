import { useState } from "react";
import { Container, Row, Col, Tab, Nav, Tabs, Image } from "react-bootstrap";
function RealEstate(props) {
  const [RealEstate, setRealEstate] = useState([
    {
      _id: 1,
      image: "/assets/img/estate.jpg",
      name: "Courtesy of Leanna Cowie of Royal Lepage Network Realty Corp.",
      location: "Quebec City",
      price: "$28,900",
      wards: "Onwards",
      bed: "2 Bed",
      bath: "2 Bath",
      area: "992 Sqft",
      address: "5344 76 Street, Red Deer, AB•Northwood Estates",
      buttonText: "See Details",
    },
    {
      _id: 1,
      image: "/assets/img/estate.jpg",
      name: "Courtesy of Leanna Cowie of Royal Lepage Network Realty Corp.",
      location: "Quebec City",
      price: "$28,900",
      wards: "Onwards",
      bed: "2 Bed",
      bath: "2 Bath",
      area: "992 Sqft",
      address: "5344 76 Street, Red Deer, AB•Northwood Estates",
      buttonText: "See Details",
    },
    {
      _id: 1,
      image: "/assets/img/estate.jpg",
      name: "Courtesy of Leanna Cowie of Royal Lepage Network Realty Corp.",
      location: "Quebec City",
      price: "$28,900",
      wards: "Onwards",
      bed: "2 Bed",
      bath: "2 Bath",
      area: "992 Sqft",
      address: "5344 76 Street, Red Deer, AB•Northwood Estates",
      buttonText: "See Details",
    },
    {
      _id: 1,
      image: "/assets/img/estate.jpg",
      name: "Courtesy of Leanna Cowie of Royal Lepage Network Realty Corp.",
      location: "Quebec City",
      price: "$28,900",
      wards: "Onwards",
      bed: "2 Bed",
      bath: "2 Bath",
      area: "992 Sqft",
      address: "5344 76 Street, Red Deer, AB•Northwood Estates",
      buttonText: "See Details",
    },
    {
      _id: 1,
      image: "/assets/img/estate.jpg",
      name: "Courtesy of Leanna Cowie of Royal Lepage Network Realty Corp.",
      location: "Quebec City",
      price: "$28,900",
      wards: "Onwards",
      bed: "2 Bed",
      bath: "2 Bath",
      area: "992 Sqft",
      address: "5344 76 Street, Red Deer, AB•Northwood Estates",
      buttonText: "See Details",
    },
    {
      _id: 1,
      image: "/assets/img/estate.jpg",
      name: "Courtesy of Leanna Cowie of Royal Lepage Network Realty Corp.",
      location: "Quebec City",
      price: "$28,900",
      wards: "Onwards",
      bed: "2 Bed",
      bath: "2 Bath",
      area: "992 Sqft",
      address: "5344 76 Street, Red Deer, AB•Northwood Estates",
      buttonText: "See Details",
    },
  ]);
  return (
    <>
      <section className="real_estate">
        <Container>
          <Row>
            <Col>
              <h2 className="cheading">Canada Real Estate</h2>
            </Col>
          </Row>

          <Row>
            {RealEstate.map((e, index) => (
              <Col lg={4} key={`id_${e._id}-${index}`}>
                <div className="estate">
                  <div className="estate-img">
                    <Image src={e.image} fluid alt="estate" />

                    <div className="real-estate-city">
                      <span>{e.location}</span>
                    </div>
                  </div>

                  <div className="estate-content">
                    <p className="estate-content-one">{e.name}</p>

                    <p className="cad">
                      {e.price} <span className="onwards">{e.wards}</span>
                    </p>

                    <div className="estatesec">
                      <span className="shadow">
                        <i className="fa fa-bed"></i>&nbsp;{e.bed}
                      </span>
                      &nbsp;
                      <span className="shadow">
                        <i className="fa fa-bath"></i>&nbsp;{e.bath}
                      </span>
                      &nbsp;
                      <span className="shadow">
                        <i className="fa fa-dharmachakra"></i>&nbsp;{e.area}
                      </span>
                    </div>

                    <p className="address">{e.address}</p>
                    <button type="button" className="btn btn shadow">
                      {e.buttonText}
                    </button>
                    <div className="marketed_by"></div>
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

export default RealEstate;
