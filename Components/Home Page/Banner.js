import { Container, Row, Col, Tab, Nav, Tabs } from "react-bootstrap";
function Banner(props) {
  return (
    <>
      <section
        className="main-banner"
        style={{
          backgroundImage: "url(/assets/img/main-banner.png)",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="sectiobn">
                <div className="section-text">
                  <h2>Real Estate Listing &amp; Services</h2>
                  <h1 className="main-heading">
                    Sell your home for a flat realtor fee:
                  </h1>
                </div>
                <div className="sections-forms">
                  <Tab.Container
                    id="left-tabs-example"
                    defaultActiveKey="first"
                  >
                    <Nav variant="tabs" as="ul" id="myTab">
                      <Nav.Item as="li">
                        <Nav.Link eventKey="first">For Rent</Nav.Link>
                      </Nav.Item>
                      <Nav.Item as="li">
                        <Nav.Link eventKey="second">For Sell</Nav.Link>
                      </Nav.Item>
                      <Nav.Item as="li">
                        <Nav.Link eventKey="third">For Commercial</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content>
                      <Tab.Pane eventKey="first">
                        <div className="form-row">
                          <div className="col">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter your location, projects or landmark"
                            />
                          </div>

                          <div className="col">
                            <div className="dropdown">
                              <button
                                className="btn btn-secondary dropdown-toggle"
                                type="button"
                                id="dropdownMenuButton"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                              >
                                Budget
                              </button>
                              <div
                                className="dropdown-menu rvs"
                                aria-labelledby="dropdownMenuButton"
                                x-placement="bottom-start"
                                style={{
                                  position: "absolute",
                                  top: "0",
                                  left: "0",
                                }}
                              >
                                <div className="rangeOption">
                                  <input
                                    maxLength="10"
                                    className="rangeLink rangeMinLink active"
                                    type="text"
                                    placeholder="Min"
                                    name="budgetBuyPerSqftMin3"
                                    defaultValue=""
                                    text=""
                                  />
                                  <span className="dividerH"></span>
                                  <input
                                    maxLength="11"
                                    className="rangeLink rangeMaxLink"
                                    type="text"
                                    placeholder="Max"
                                    name="budgetPerSqftMax"
                                    defaultValue=""
                                    text=""
                                  />
                                  <div className="clearAll"></div>
                                </div>

                                <a className="dropdown-item" href="#">
                                  5 Million
                                </a>
                                <a className="dropdown-item" href="#">
                                  10 Million
                                </a>
                                <a className="dropdown-item" href="#">
                                  15 Million
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="col">
                            <div className="dropdown">
                              <button
                                className="btn btn-secondary dropdown-toggle"
                                type="button"
                                id="dropdownMenuButton"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                              >
                                Flat
                              </button>
                              <div
                                className="dropdown-menu"
                                aria-labelledby="dropdownMenuButton"
                                x-placement="bottom-start"
                                style={{
                                  position: "absolute",
                                  top: "0",
                                  left: "0",
                                }}
                              >
                                <div
                                  className="propertyTypeDD_Home"
                                  style={{
                                    display: "block",
                                  }}
                                  id="propType_buy"
                                >
                                  <div className="col1 columnCommon">
                                    <h6 className="propertyHeading">
                                      RESIDENTIAL
                                    </h6>
                                    <ul className="bhkWrap">
                                      <li>
                                        <span
                                          className="checkBox checked"
                                          id="propType_buy_span_10002_10003_10021_10022"
                                        >
                                          <input
                                            type="checkbox"
                                            defaultValue="10002_10003_10021_10022"
                                            name="bar_propertyType_new_buy"
                                            title="Flat"
                                            id="propType_buy_chk_10002_10003_10021_10022"
                                            // onClick={
                                            //   (clickOnPropertyType(
                                            //     "propType_buy_span_10002_10003_10021_10022",
                                            //     "propType_buy_chk_10002_10003_10021_10022",
                                            //     "buy_proertyTypeDefault",
                                            //     "propType_buy_disable_1",
                                            //     "bar_propertyType_new_buy",
                                            //     "buy_proertyTypeCount",
                                            //     "Y",
                                            //     "Property Type",
                                            //     "colDisableBuy"
                                            //   ),
                                            //   setCheckedFlag(),
                                            //   setBusinessTypeCheckedFlag("S"))
                                            // }
                                            defaultChecked="checked"
                                          />
                                        </span>
                                        <label
                                          id="10002_10003_10021_10022"
                                          // onClick={
                                          //   (clickOnPropertyType(
                                          //     "propType_buy_span_10002_10003_10021_10022",
                                          //     "propType_buy_chk_10002_10003_10021_10022",
                                          //     "buy_proertyTypeDefault",
                                          //     "propType_buy_disable_1",
                                          //     "bar_propertyType_new_buy",
                                          //     "buy_proertyTypeCount",
                                          //     "N",
                                          //     "Property Type",
                                          //     "colDisableBuy"
                                          //   ),
                                          //   setCheckedFlag(),
                                          //   setBusinessTypeCheckedFlag("S"))
                                          // }
                                        >
                                          Flat
                                        </label>
                                      </li>
                                      <li>
                                        <span
                                          className="checkBox"
                                          id="propType_buy_span_10001_10017"
                                        >
                                          <input
                                            type="checkbox"
                                            defaultValue="10001_10017"
                                            name="bar_propertyType_new_buy"
                                            title="House/Villa"
                                            id="propType_buy_chk_10001_10017"
                                            // onClick={
                                            //   (clickOnPropertyType(
                                            //     "propType_buy_span_10001_10017",
                                            //     "propType_buy_chk_10001_10017",
                                            //     "buy_proertyTypeDefault",
                                            //     "propType_buy_disable_1",
                                            //     "bar_propertyType_new_buy",
                                            //     "buy_proertyTypeCount",
                                            //     "Y",
                                            //     "Property Type",
                                            //     "colDisableBuy"
                                            //   ),
                                            //   setCheckedFlag(),
                                            //   setBusinessTypeCheckedFlag("S"))
                                            // }
                                          />
                                        </span>
                                        <label
                                          id="10001_10017"
                                          // onClick={
                                          //   (clickOnPropertyType(
                                          //     "propType_buy_span_10001_10017",
                                          //     "propType_buy_chk_10001_10017",
                                          //     "buy_proertyTypeDefault",
                                          //     "propType_buy_disable_1",
                                          //     "bar_propertyType_new_buy",
                                          //     "buy_proertyTypeCount",
                                          //     "N",
                                          //     "Property Type",
                                          //     "colDisableBuy"
                                          //   ),
                                          //   setCheckedFlag(),
                                          //   setBusinessTypeCheckedFlag("S"))
                                          // }
                                        >
                                          House/Villa
                                        </label>
                                      </li>
                                      <li>
                                        <span
                                          className="checkBox"
                                          id="propType_buy_span_10000"
                                        >
                                          <input
                                            type="checkbox"
                                            defaultValue="10000"
                                            name="bar_propertyType_new_buy"
                                            title="Plot/Land"
                                            id="propType_buy_chk_10000"
                                            // onClick={
                                            //   (clickOnPropertyType(
                                            //     "propType_buy_span_10000",
                                            //     "propType_buy_chk_10000",
                                            //     "buy_proertyTypeDefault",
                                            //     "propType_buy_disable_1",
                                            //     "bar_propertyType_new_buy",
                                            //     "buy_proertyTypeCount",
                                            //     "Y",
                                            //     "Property Type",
                                            //     "colDisableBuy"
                                            //   ),
                                            //   setCheckedFlag(),
                                            //   setBusinessTypeCheckedFlag("S"))
                                            // }
                                          />
                                        </span>
                                        <label
                                          id="10000"
                                          // onClick={
                                          //   (clickOnPropertyType(
                                          //     "propType_buy_span_10000",
                                          //     "propType_buy_chk_10000",
                                          //     "buy_proertyTypeDefault",
                                          //     "propType_buy_disable_1",
                                          //     "bar_propertyType_new_buy",
                                          //     "buy_proertyTypeCount",
                                          //     "N",
                                          //     "Property Type",
                                          //     "colDisableBuy"
                                          //   ),
                                          //   setCheckedFlag(),
                                          //   setBusinessTypeCheckedFlag("S"))
                                          // }
                                        >
                                          Plot/Land
                                        </label>
                                      </li>
                                    </ul>
                                    <div className="clearAll"></div>
                                    <div
                                      className="colDisableBuy"
                                      style={{
                                        display: "none",
                                      }}
                                      id="propType_buy_disable_1"
                                    ></div>
                                    <div className="bhkAdded_S">
                                      <div className="">
                                        <div className="clearAll"></div>
                                        <ul className="bhkWrap">
                                          <li>
                                            <span className="checkBox">
                                              <input
                                                type="checkbox"
                                                defaultValue="11700"
                                                name="bhkCheckbox"
                                                title="1 BHK"
                                                id="bhk_11700"
                                                // onClick={setBhkAction(
                                                //   this,
                                                //   "11700",
                                                //   "1",
                                                //   "bedroom_name",
                                                //   "bar_bedrooms"
                                                // )}
                                              />
                                            </span>
                                            <label
                                              htmlFor="bhk_11700"
                                              // onClick={setBhkAction(
                                              //   this,
                                              //   "11700",
                                              //   "1",
                                              //   "bedroom_name",
                                              //   "bar_bedrooms"
                                              // )}
                                            >
                                              1 BHK
                                            </label>
                                          </li>
                                          <li>
                                            <span className="checkBox">
                                              <input
                                                type="checkbox"
                                                defaultValue="11701"
                                                name="bhkCheckbox"
                                                title="2 BHK"
                                                id="bhk_11701"
                                                // onClick={setBhkAction(
                                                //   this,
                                                //   "11701",
                                                //   "2",
                                                //   "bedroom_name",
                                                //   "bar_bedrooms"
                                                // )}
                                              />
                                            </span>
                                            <label
                                              htmlFor="bhk_11701"
                                              // onClick={setBhkAction(
                                              //   this,
                                              //   "11701",
                                              //   "2",
                                              //   "bedroom_name",
                                              //   "bar_bedrooms"
                                              // )}
                                            >
                                              2 BHK
                                            </label>
                                          </li>
                                          <li>
                                            <span className="checkBox">
                                              <input
                                                type="checkbox"
                                                defaultValue="11702"
                                                name="bhkCheckbox"
                                                title="3 BHK"
                                                id="bhk_11702"
                                                // onClick={setBhkAction(
                                                //   this,
                                                //   "11702",
                                                //   "3",
                                                //   "bedroom_name",
                                                //   "bar_bedrooms"
                                                // )}
                                              />
                                            </span>
                                            <label
                                              htmlFor="bhk_11702"
                                              // onClick={setBhkAction(
                                              //   this,
                                              //   "11702",
                                              //   "3",
                                              //   "bedroom_name",
                                              //   "bar_bedrooms"
                                              // )}
                                            >
                                              3 BHK
                                            </label>
                                          </li>
                                          <li>
                                            <span className="checkBox">
                                              <input
                                                type="checkbox"
                                                defaultValue="11703"
                                                name="bhkCheckbox"
                                                title="4 BHK"
                                                id="bhk_11703"
                                                // onClick={setBhkAction(
                                                //   this,
                                                //   "11703",
                                                //   "4",
                                                //   "bedroom_name",
                                                //   "bar_bedrooms"
                                                // )}
                                              />
                                            </span>
                                            <label
                                              htmlFor="bhk_11703"
                                              // onClick={setBhkAction(
                                              //   this,
                                              //   "11703",
                                              //   "4",
                                              //   "bedroom_name",
                                              //   "bar_bedrooms"
                                              // )}
                                            >
                                              4 BHK
                                            </label>
                                          </li>
                                          <li>
                                            <span className="checkBox">
                                              <input
                                                type="checkbox"
                                                defaultValue="11704"
                                                name="bhkCheckbox"
                                                title="5 BHK"
                                                id="bhk_11704"
                                                // onClick={setBhkAction(
                                                //   this,
                                                //   "11704",
                                                //   "5",
                                                //   "bedroom_name",
                                                //   "bar_bedrooms"
                                                // )}
                                              />
                                            </span>
                                            <label
                                              htmlFor="bhk_11704"
                                              // onClick={setBhkAction(
                                              //   this,
                                              //   "11704",
                                              //   "5",
                                              //   "bedroom_name",
                                              //   "bar_bedrooms"
                                              // )}
                                            >
                                              5 BHK
                                            </label>
                                          </li>
                                          <li>
                                            <span className="checkBox">
                                              <input
                                                type="checkbox"
                                                defaultValue="11705-11706-11707-11708-11709-11710"
                                                name="bhkCheckbox"
                                                title=">5 BHK"
                                                id="bhk_11705-11706-11707-11708-11709-11710"
                                                // onClick={setBhkAction(
                                                //   this,
                                                //   "11705-11706-11707-11708-11709-11710",
                                                //   ">5",
                                                //   "bedroom_name",
                                                //   "bar_bedrooms"
                                                // )}
                                              />
                                            </span>
                                            <label
                                              htmlFor="bhk_11705-11706-11707-11708-11709-11710"
                                              // onClick={setBhkAction(
                                              //   this,
                                              //   "11705-11706-11707-11708-11709-11710",
                                              //   ">5",
                                              //   "bedroom_name",
                                              //   "bar_bedrooms"
                                              // )}
                                            >
                                              &gt;5 BHK
                                            </label>
                                          </li>
                                        </ul>
                                        <div className="clearAll"></div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col2 columnCommon">
                                    <h6 className="propertyHeading">
                                      COMMERCIAL
                                    </h6>
                                    <ul className="bhkWrap">
                                      <li>
                                        <span
                                          className="checkBox"
                                          id="propType_buy_span_10007_10018"
                                        >
                                          <input
                                            type="checkbox"
                                            defaultValue="10007_10018"
                                            name="bar_propertyType_new_buy"
                                            title="Office Space"
                                            id="propType_buy_chk_10007_10018"
                                            // onClick={
                                            //   (clickOnPropertyType(
                                            //     "propType_buy_span_10007_10018",
                                            //     "propType_buy_chk_10007_10018",
                                            //     "buy_proertyTypeDefault",
                                            //     "propType_buy_disable_2",
                                            //     "bar_propertyType_new_buy",
                                            //     "buy_proertyTypeCount",
                                            //     "Y",
                                            //     "Property Type",
                                            //     "colDisableBuy"
                                            //   ),
                                            //   setCheckedFlag(),
                                            //   setBusinessTypeCheckedFlag("S"))
                                            // }
                                          />
                                        </span>
                                        <label
                                          id="10007_10018"
                                          // onClick={
                                          //   (clickOnPropertyType(
                                          //     "propType_buy_span_10007_10018",
                                          //     "propType_buy_chk_10007_10018",
                                          //     "buy_proertyTypeDefault",
                                          //     "propType_buy_disable_2",
                                          //     "bar_propertyType_new_buy",
                                          //     "buy_proertyTypeCount",
                                          //     "N",
                                          //     "Property Type",
                                          //     "colDisableBuy"
                                          //   ),
                                          //   setCheckedFlag(),
                                          //   setBusinessTypeCheckedFlag("S"))
                                          // }
                                        >
                                          Office Space
                                        </label>
                                      </li>
                                      <li>
                                        <span
                                          className="checkBox"
                                          id="propType_buy_span_10008_10009"
                                        >
                                          <input
                                            type="checkbox"
                                            defaultValue="10008_10009"
                                            name="bar_propertyType_new_buy"
                                            title="Shop/Showroom"
                                            id="propType_buy_chk_10008_10009"
                                            // onClick={
                                            //   (clickOnPropertyType(
                                            //     "propType_buy_span_10008_10009",
                                            //     "propType_buy_chk_10008_10009",
                                            //     "buy_proertyTypeDefault",
                                            //     "propType_buy_disable_2",
                                            //     "bar_propertyType_new_buy",
                                            //     "buy_proertyTypeCount",
                                            //     "Y",
                                            //     "Property Type",
                                            //     "colDisableBuy"
                                            //   ),
                                            //   setCheckedFlag(),
                                            //   setBusinessTypeCheckedFlag("S"))
                                            // }
                                          />
                                        </span>
                                        <label
                                          id="10008_10009"
                                          // onClick={
                                          //   (clickOnPropertyType(
                                          //     "propType_buy_span_10008_10009",
                                          //     "propType_buy_chk_10008_10009",
                                          //     "buy_proertyTypeDefault",
                                          //     "propType_buy_disable_2",
                                          //     "bar_propertyType_new_buy",
                                          //     "buy_proertyTypeCount",
                                          //     "N",
                                          //     "Property Type",
                                          //     "colDisableBuy"
                                          //   ),
                                          //   setCheckedFlag(),
                                          //   setBusinessTypeCheckedFlag("S"))
                                          // }
                                        >
                                          Shop/Showroom
                                        </label>
                                      </li>
                                      <li>
                                        <span
                                          className="checkBox"
                                          id="propType_buy_span_10006_10012"
                                        >
                                          <input
                                            type="checkbox"
                                            defaultValue="10006_10012"
                                            name="bar_propertyType_new_buy"
                                            title="Commercial Land"
                                            id="propType_buy_chk_10006_10012"
                                            // onClick={
                                            //   (clickOnPropertyType(
                                            //     "propType_buy_span_10006_10012",
                                            //     "propType_buy_chk_10006_10012",
                                            //     "buy_proertyTypeDefault",
                                            //     "propType_buy_disable_2",
                                            //     "bar_propertyType_new_buy",
                                            //     "buy_proertyTypeCount",
                                            //     "Y",
                                            //     "Property Type",
                                            //     "colDisableBuy"
                                            //   ),
                                            //   setCheckedFlag(),
                                            //   setBusinessTypeCheckedFlag("S"))
                                            // }
                                          />
                                        </span>
                                        <label
                                          id="10006_10012"
                                          // onClick={
                                          //   (clickOnPropertyType(
                                          //     "propType_buy_span_10006_10012",
                                          //     "propType_buy_chk_10006_10012",
                                          //     "buy_proertyTypeDefault",
                                          //     "propType_buy_disable_2",
                                          //     "bar_propertyType_new_buy",
                                          //     "buy_proertyTypeCount",
                                          //     "N",
                                          //     "Property Type",
                                          //     "colDisableBuy"
                                          //   ),
                                          //   setCheckedFlag(),
                                          //   setBusinessTypeCheckedFlag("S"))
                                          // }
                                        >
                                          Commercial Land
                                        </label>
                                      </li>
                                      <li>
                                        <span
                                          className="checkBox"
                                          id="propType_buy_span_10011"
                                        >
                                          <input
                                            type="checkbox"
                                            defaultValue="10011"
                                            name="bar_propertyType_new_buy"
                                            title="Warehouse/ Godown"
                                            id="propType_buy_chk_10011"
                                            // onClick={
                                            //   (clickOnPropertyType(
                                            //     "propType_buy_span_10011",
                                            //     "propType_buy_chk_10011",
                                            //     "buy_proertyTypeDefault",
                                            //     "propType_buy_disable_2",
                                            //     "bar_propertyType_new_buy",
                                            //     "buy_proertyTypeCount",
                                            //     "Y",
                                            //     "Property Type",
                                            //     "colDisableBuy"
                                            //   ),
                                            //   setCheckedFlag(),
                                            //   setBusinessTypeCheckedFlag("S"))
                                            // }
                                          />
                                        </span>
                                        <label
                                          id="10011"
                                          // onClick={
                                          //   (clickOnPropertyType(
                                          //     "propType_buy_span_10011",
                                          //     "propType_buy_chk_10011",
                                          //     "buy_proertyTypeDefault",
                                          //     "propType_buy_disable_2",
                                          //     "bar_propertyType_new_buy",
                                          //     "buy_proertyTypeCount",
                                          //     "N",
                                          //     "Property Type",
                                          //     "colDisableBuy"
                                          //   ),
                                          //   setCheckedFlag(),
                                          //   setBusinessTypeCheckedFlag("S"))
                                          // }
                                        >
                                          Warehouse/ Godown
                                        </label>
                                      </li>
                                      <li>
                                        <span
                                          className="checkBox"
                                          id="propType_buy_span_10013"
                                        >
                                          <input
                                            type="checkbox"
                                            defaultValue="10013"
                                            name="bar_propertyType_new_buy"
                                            title="Industrial Building"
                                            id="propType_buy_chk_10013"
                                            // onClick={
                                            //   (clickOnPropertyType(
                                            //     "propType_buy_span_10013",
                                            //     "propType_buy_chk_10013",
                                            //     "buy_proertyTypeDefault",
                                            //     "propType_buy_disable_2",
                                            //     "bar_propertyType_new_buy",
                                            //     "buy_proertyTypeCount",
                                            //     "Y",
                                            //     "Property Type",
                                            //     "colDisableBuy"
                                            //   ),
                                            //   setCheckedFlag(),
                                            //   setBusinessTypeCheckedFlag("S"))
                                            // }
                                          />
                                        </span>
                                        <label
                                          id="10013"
                                          // onClick={
                                          //   (clickOnPropertyType(
                                          //     "propType_buy_span_10013",
                                          //     "propType_buy_chk_10013",
                                          //     "buy_proertyTypeDefault",
                                          //     "propType_buy_disable_2",
                                          //     "bar_propertyType_new_buy",
                                          //     "buy_proertyTypeCount",
                                          //     "N",
                                          //     "Property Type",
                                          //     "colDisableBuy"
                                          //   ),
                                          //   setCheckedFlag(),
                                          //   setBusinessTypeCheckedFlag("S"))
                                          // }
                                        >
                                          Industrial Building
                                        </label>
                                      </li>
                                      <li>
                                        <span
                                          className="checkBox"
                                          id="propType_buy_span_10014"
                                        >
                                          <input
                                            type="checkbox"
                                            defaultValue="10014"
                                            name="bar_propertyType_new_buy"
                                            title="Industrial Shed"
                                            id="propType_buy_chk_10014"
                                            // onClick={
                                            //   (clickOnPropertyType(
                                            //     "propType_buy_span_10014",
                                            //     "propType_buy_chk_10014",
                                            //     "buy_proertyTypeDefault",
                                            //     "propType_buy_disable_2",
                                            //     "bar_propertyType_new_buy",
                                            //     "buy_proertyTypeCount",
                                            //     "Y",
                                            //     "Property Type",
                                            //     "colDisableBuy"
                                            //   ),
                                            //   setCheckedFlag(),
                                            //   setBusinessTypeCheckedFlag("S"))
                                            // }
                                          />
                                        </span>
                                        <label
                                          id="10014"
                                          // onClick={
                                          //   (clickOnPropertyType(
                                          //     "propType_buy_span_10014",
                                          //     "propType_buy_chk_10014",
                                          //     "buy_proertyTypeDefault",
                                          //     "propType_buy_disable_2",
                                          //     "bar_propertyType_new_buy",
                                          //     "buy_proertyTypeCount",
                                          //     "N",
                                          //     "Property Type",
                                          //     "colDisableBuy"
                                          //   ),
                                          //   setCheckedFlag(),
                                          //   setBusinessTypeCheckedFlag("S"))
                                          // }
                                        >
                                          Industrial Shed
                                        </label>
                                      </li>
                                    </ul>
                                    <div className="clearAll"></div>
                                    <div
                                      className="colDisableBuy"
                                      style={{
                                        display: "none",
                                      }}
                                      id="propType_buy_disable_2"
                                    ></div>
                                  </div>
                                  <div className="col3 columnCommon">
                                    <h6 className="propertyHeading">OTHERS</h6>
                                    <ul className="bhkWrap">
                                      <li>
                                        <span
                                          className="checkBox"
                                          id="propType_buy_span_10005"
                                        >
                                          <input
                                            type="checkbox"
                                            defaultValue="10005"
                                            name="bar_propertyType_new_buy"
                                            title="Agricultural Land"
                                            id="propType_buy_chk_10005"
                                            // onClick={
                                            //   (clickOnPropertyType(
                                            //     "propType_buy_span_10005",
                                            //     "propType_buy_chk_10005",
                                            //     "buy_proertyTypeDefault",
                                            //     "propType_buy_disable_3",
                                            //     "bar_propertyType_new_buy",
                                            //     "buy_proertyTypeCount",
                                            //     "Y",
                                            //     "Property Type",
                                            //     "colDisableBuy"
                                            //   ),
                                            //   setCheckedFlag(),
                                            //   setBusinessTypeCheckedFlag("S"))
                                            // }
                                          />
                                        </span>
                                        <label>Agricultural Land</label>
                                      </li>
                                      <li>
                                        <span
                                          className="checkBox"
                                          id="propType_buy_span_10004"
                                        >
                                          <input
                                            type="checkbox"
                                            defaultValue="10004"
                                            name="bar_propertyType_new_buy"
                                            title="Farm House"
                                            id="propType_buy_chk_10004"
                                            // onClick={
                                            //   (clickOnPropertyType(
                                            //     "propType_buy_span_10004",
                                            //     "propType_buy_chk_10004",
                                            //     "buy_proertyTypeDefault",
                                            //     "propType_buy_disable_3",
                                            //     "bar_propertyType_new_buy",
                                            //     "buy_proertyTypeCount",
                                            //     "Y",
                                            //     "Property Type",
                                            //     "colDisableBuy"
                                            //   ),
                                            //   setCheckedFlag(),
                                            //   setBusinessTypeCheckedFlag("S"))
                                            // }
                                          />
                                        </span>
                                        <label id="10004">Farm House</label>
                                      </li>
                                    </ul>
                                    <div className="clearAll"></div>
                                    <div
                                      className="colDisableBuy"
                                      style={{
                                        display: "none",
                                      }}
                                      id="propType_buy_disable_3"
                                    ></div>
                                  </div>
                                  <div className="clearAll"></div>
                                </div>
                              </div>
                              <div className="clearAll"></div>
                            </div>
                          </div>
                          <div className="col">
                            <span className="input-group-btn">
                              <button
                                className="btn btn-default searchbtn"
                                type="button"
                              >
                                Search
                              </button>
                            </span>
                          </div>
                        </div>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <div className="form-row">
                          <div className="col">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter your location, projects or landmark"
                            />
                          </div>

                          <div className="col">
                            <div className="dropdown">
                              <button
                                className="btn btn-secondary dropdown-toggle"
                                type="button"
                                id="dropdownMenuButton"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                              >
                                Budget
                              </button>
                              <div
                                className="dropdown-menu rvs"
                                aria-labelledby="dropdownMenuButton"
                                x-placement="bottom-start"
                                style={{
                                  position: "absolute",
                                  top: "0",
                                  left: "0",
                                }}
                              >
                                <div className="rangeOption">
                                  <input
                                    maxLength="10"
                                    className="rangeLink rangeMinLink active"
                                    type="text"
                                    placeholder="Min"
                                    name="budgetBuyPerSqftMin1"
                                    defaultValue=""
                                    text=""
                                  />
                                  <span className="dividerH"></span>
                                  <input
                                    maxLength="11"
                                    className="rangeLink rangeMaxLink"
                                    type="text"
                                    placeholder="Max"
                                    name="budgetPerSqftMax"
                                    defaultValue=""
                                    text=""
                                  />
                                  <div className="clearAll"></div>
                                </div>

                                <a className="dropdown-item" href="#">
                                  5 Million
                                </a>
                                <a className="dropdown-item" href="#">
                                  10 Million
                                </a>
                                <a className="dropdown-item" href="#">
                                  15 Million
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="col">
                            <div className="dropdown">
                              <button
                                className="btn btn-secondary dropdown-toggle"
                                type="button"
                                id="dropdownMenuButton"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                              >
                                Flat
                              </button>
                              <div
                                className="dropdown-menu"
                                aria-labelledby="dropdownMenuButton"
                                x-placement="bottom-start"
                                style={{
                                  position: "absolute",
                                  top: "0",
                                  left: "0",
                                }}
                              >
                                <div
                                  className="propertyTypeDD_Home"
                                  style={{
                                    display: "block",
                                  }}
                                  id="propType_buy"
                                >
                                  <div className="col1 columnCommon">
                                    <h6 className="propertyHeading">
                                      RESIDENTIAL
                                    </h6>
                                    <ul className="bhkWrap">
                                      <li>
                                        <span
                                          className="checkBox checked"
                                          id="propType_buy_span_10002_10003_10021_10022"
                                        >
                                          <input
                                            type="checkbox"
                                            defaultValue="10002_10003_10021_10022"
                                            name="bar_propertyType_new_buy"
                                            title="Flat"
                                            id="propType_buy_chk_10002_10003_10021_10022"
                                            // onClick={
                                            //   (clickOnPropertyType(
                                            //     "propType_buy_span_10002_10003_10021_10022",
                                            //     "propType_buy_chk_10002_10003_10021_10022",
                                            //     "buy_proertyTypeDefault",
                                            //     "propType_buy_disable_1",
                                            //     "bar_propertyType_new_buy",
                                            //     "buy_proertyTypeCount",
                                            //     "Y",
                                            //     "Property Type",
                                            //     "colDisableBuy"
                                            //   ),
                                            //   setCheckedFlag(),
                                            //   setBusinessTypeCheckedFlag("S"))
                                            // }
                                            defaultChecked="checked"
                                          />
                                        </span>
                                        <label
                                          id="10002_10003_10021_10022"
                                          // onClick={
                                          //   (clickOnPropertyType(
                                          //     "propType_buy_span_10002_10003_10021_10022",
                                          //     "propType_buy_chk_10002_10003_10021_10022",
                                          //     "buy_proertyTypeDefault",
                                          //     "propType_buy_disable_1",
                                          //     "bar_propertyType_new_buy",
                                          //     "buy_proertyTypeCount",
                                          //     "N",
                                          //     "Property Type",
                                          //     "colDisableBuy"
                                          //   ),
                                          //   setCheckedFlag(),
                                          //   setBusinessTypeCheckedFlag("S"))
                                          // }
                                        >
                                          Flat
                                        </label>
                                      </li>
                                      <li>
                                        <span
                                          className="checkBox"
                                          id="propType_buy_span_10001_10017"
                                        >
                                          <input
                                            type="checkbox"
                                            defaultValue="10001_10017"
                                            name="bar_propertyType_new_buy"
                                            title="House/Villa"
                                            id="propType_buy_chk_10001_10017"
                                            // onClick={
                                            //   (clickOnPropertyType(
                                            //     "propType_buy_span_10001_10017",
                                            //     "propType_buy_chk_10001_10017",
                                            //     "buy_proertyTypeDefault",
                                            //     "propType_buy_disable_1",
                                            //     "bar_propertyType_new_buy",
                                            //     "buy_proertyTypeCount",
                                            //     "Y",
                                            //     "Property Type",
                                            //     "colDisableBuy"
                                            //   ),
                                            //   setCheckedFlag(),
                                            //   setBusinessTypeCheckedFlag("S"))
                                            // }
                                          />
                                        </span>
                                        <label
                                          id="10001_10017"
                                          // onClick={
                                          //   (clickOnPropertyType(
                                          //     "propType_buy_span_10001_10017",
                                          //     "propType_buy_chk_10001_10017",
                                          //     "buy_proertyTypeDefault",
                                          //     "propType_buy_disable_1",
                                          //     "bar_propertyType_new_buy",
                                          //     "buy_proertyTypeCount",
                                          //     "N",
                                          //     "Property Type",
                                          //     "colDisableBuy"
                                          //   ),
                                          //   setCheckedFlag(),
                                          //   setBusinessTypeCheckedFlag("S"))
                                          // }
                                        >
                                          House/Villa
                                        </label>
                                      </li>
                                      <li>
                                        <span
                                          className="checkBox"
                                          id="propType_buy_span_10000"
                                        >
                                          <input
                                            type="checkbox"
                                            defaultValue="10000"
                                            name="bar_propertyType_new_buy"
                                            title="Plot/Land"
                                            id="propType_buy_chk_10000"
                                            // onClick={
                                            //   (clickOnPropertyType(
                                            //     "propType_buy_span_10000",
                                            //     "propType_buy_chk_10000",
                                            //     "buy_proertyTypeDefault",
                                            //     "propType_buy_disable_1",
                                            //     "bar_propertyType_new_buy",
                                            //     "buy_proertyTypeCount",
                                            //     "Y",
                                            //     "Property Type",
                                            //     "colDisableBuy"
                                            //   ),
                                            //   setCheckedFlag(),
                                            //   setBusinessTypeCheckedFlag("S"))
                                            // }
                                          />
                                        </span>
                                        <label
                                          id="10000"
                                          // onClick={
                                          //   (clickOnPropertyType(
                                          //     "propType_buy_span_10000",
                                          //     "propType_buy_chk_10000",
                                          //     "buy_proertyTypeDefault",
                                          //     "propType_buy_disable_1",
                                          //     "bar_propertyType_new_buy",
                                          //     "buy_proertyTypeCount",
                                          //     "N",
                                          //     "Property Type",
                                          //     "colDisableBuy"
                                          //   ),
                                          //   setCheckedFlag(),
                                          //   setBusinessTypeCheckedFlag("S"))
                                          // }
                                        >
                                          Plot/Land
                                        </label>
                                      </li>
                                    </ul>
                                    <div className="clearAll"></div>
                                    <div
                                      className="colDisableBuy"
                                      style={{
                                        display: "none",
                                      }}
                                      id="propType_buy_disable_1"
                                    ></div>
                                    <div className="bhkAdded_S">
                                      <div className="">
                                        <div className="clearAll"></div>
                                        <ul className="bhkWrap">
                                          <li>
                                            <span className="checkBox">
                                              <input
                                                type="checkbox"
                                                defaultValue="11700"
                                                name="bhkCheckbox"
                                                title="1 BHK"
                                                id="bhk_11700"
                                                // onClick={setBhkAction(
                                                //   this,
                                                //   "11700",
                                                //   "1",
                                                //   "bedroom_name",
                                                //   "bar_bedrooms"
                                                // )}
                                              />
                                            </span>
                                            <label
                                              htmlFor="bhk_11700"
                                              // onClick={setBhkAction(
                                              //   this,
                                              //   "11700",
                                              //   "1",
                                              //   "bedroom_name",
                                              //   "bar_bedrooms"
                                              // )}
                                            >
                                              1 BHK
                                            </label>
                                          </li>
                                          <li>
                                            <span className="checkBox">
                                              <input
                                                type="checkbox"
                                                defaultValue="11701"
                                                name="bhkCheckbox"
                                                title="2 BHK"
                                                id="bhk_11701"
                                                // onClick={setBhkAction(
                                                //   this,
                                                //   "11701",
                                                //   "2",
                                                //   "bedroom_name",
                                                //   "bar_bedrooms"
                                                // )}
                                              />
                                            </span>
                                            <label
                                              htmlFor="bhk_11701"
                                              // onClick={setBhkAction(
                                              //   this,
                                              //   "11701",
                                              //   "2",
                                              //   "bedroom_name",
                                              //   "bar_bedrooms"
                                              // )}
                                            >
                                              2 BHK
                                            </label>
                                          </li>
                                          <li>
                                            <span className="checkBox">
                                              <input
                                                type="checkbox"
                                                defaultValue="11702"
                                                name="bhkCheckbox"
                                                title="3 BHK"
                                                id="bhk_11702"
                                                // onClick={setBhkAction(
                                                //   this,
                                                //   "11702",
                                                //   "3",
                                                //   "bedroom_name",
                                                //   "bar_bedrooms"
                                                // )}
                                              />
                                            </span>
                                            <label
                                              htmlFor="bhk_11702"
                                              // onClick={setBhkAction(
                                              //   this,
                                              //   "11702",
                                              //   "3",
                                              //   "bedroom_name",
                                              //   "bar_bedrooms"
                                              // )}
                                            >
                                              3 BHK
                                            </label>
                                          </li>
                                          <li>
                                            <span className="checkBox">
                                              <input
                                                type="checkbox"
                                                defaultValue="11703"
                                                name="bhkCheckbox"
                                                title="4 BHK"
                                                id="bhk_11703"
                                                // onClick={setBhkAction(
                                                //   this,
                                                //   "11703",
                                                //   "4",
                                                //   "bedroom_name",
                                                //   "bar_bedrooms"
                                                // )}
                                              />
                                            </span>
                                            <label
                                              htmlFor="bhk_11703"
                                              // onClick={setBhkAction(
                                              //   this,
                                              //   "11703",
                                              //   "4",
                                              //   "bedroom_name",
                                              //   "bar_bedrooms"
                                              // )}
                                            >
                                              4 BHK
                                            </label>
                                          </li>
                                          <li>
                                            <span className="checkBox">
                                              <input
                                                type="checkbox"
                                                defaultValue="11704"
                                                name="bhkCheckbox"
                                                title="5 BHK"
                                                id="bhk_11704"
                                                // onClick={setBhkAction(
                                                //   this,
                                                //   "11704",
                                                //   "5",
                                                //   "bedroom_name",
                                                //   "bar_bedrooms"
                                                // )}
                                              />
                                            </span>
                                            <label
                                              htmlFor="bhk_11704"
                                              // onClick={setBhkAction(
                                              //   this,
                                              //   "11704",
                                              //   "5",
                                              //   "bedroom_name",
                                              //   "bar_bedrooms"
                                              // )}
                                            >
                                              5 BHK
                                            </label>
                                          </li>
                                          <li>
                                            <span className="checkBox">
                                              <input
                                                type="checkbox"
                                                defaultValue="11705-11706-11707-11708-11709-11710"
                                                name="bhkCheckbox"
                                                title=">5 BHK"
                                                id="bhk_11705-11706-11707-11708-11709-11710"
                                                // onClick={setBhkAction(
                                                //   this,
                                                //   "11705-11706-11707-11708-11709-11710",
                                                //   ">5",
                                                //   "bedroom_name",
                                                //   "bar_bedrooms"
                                                // )}
                                              />
                                            </span>
                                            <label
                                              htmlFor="bhk_11705-11706-11707-11708-11709-11710"
                                              // onClick={setBhkAction(
                                              //   this,
                                              //   "11705-11706-11707-11708-11709-11710",
                                              //   ">5",
                                              //   "bedroom_name",
                                              //   "bar_bedrooms"
                                              // )}
                                            >
                                              &gt;5 BHK
                                            </label>
                                          </li>
                                        </ul>
                                        <div className="clearAll"></div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col2 columnCommon">
                                    <h6 className="propertyHeading">
                                      COMMERCIAL
                                    </h6>
                                    <ul className="bhkWrap">
                                      <li>
                                        <span
                                          className="checkBox"
                                          id="propType_buy_span_10007_10018"
                                        >
                                          <input
                                            type="checkbox"
                                            defaultValue="10007_10018"
                                            name="bar_propertyType_new_buy"
                                            title="Office Space"
                                            id="propType_buy_chk_10007_10018"
                                            // onClick={
                                            //   (clickOnPropertyType(
                                            //     "propType_buy_span_10007_10018",
                                            //     "propType_buy_chk_10007_10018",
                                            //     "buy_proertyTypeDefault",
                                            //     "propType_buy_disable_2",
                                            //     "bar_propertyType_new_buy",
                                            //     "buy_proertyTypeCount",
                                            //     "Y",
                                            //     "Property Type",
                                            //     "colDisableBuy"
                                            //   ),
                                            //   setCheckedFlag(),
                                            //   setBusinessTypeCheckedFlag("S"))
                                            // }
                                          />
                                        </span>
                                        <label
                                          id="10007_10018"
                                          // onClick={
                                          //   (clickOnPropertyType(
                                          //     "propType_buy_span_10007_10018",
                                          //     "propType_buy_chk_10007_10018",
                                          //     "buy_proertyTypeDefault",
                                          //     "propType_buy_disable_2",
                                          //     "bar_propertyType_new_buy",
                                          //     "buy_proertyTypeCount",
                                          //     "N",
                                          //     "Property Type",
                                          //     "colDisableBuy"
                                          //   ),
                                          //   setCheckedFlag(),
                                          //   setBusinessTypeCheckedFlag("S"))
                                          // }
                                        >
                                          Office Space
                                        </label>
                                      </li>
                                      <li>
                                        <span
                                          className="checkBox"
                                          id="propType_buy_span_10008_10009"
                                        >
                                          <input
                                            type="checkbox"
                                            defaultValue="10008_10009"
                                            name="bar_propertyType_new_buy"
                                            title="Shop/Showroom"
                                            id="propType_buy_chk_10008_10009"
                                            // onClick={
                                            //   (clickOnPropertyType(
                                            //     "propType_buy_span_10008_10009",
                                            //     "propType_buy_chk_10008_10009",
                                            //     "buy_proertyTypeDefault",
                                            //     "propType_buy_disable_2",
                                            //     "bar_propertyType_new_buy",
                                            //     "buy_proertyTypeCount",
                                            //     "Y",
                                            //     "Property Type",
                                            //     "colDisableBuy"
                                            //   ),
                                            //   setCheckedFlag(),
                                            //   setBusinessTypeCheckedFlag("S"))
                                            // }
                                          />
                                        </span>
                                        <label
                                          id="10008_10009"
                                          // onClick={
                                          //   (clickOnPropertyType(
                                          //     "propType_buy_span_10008_10009",
                                          //     "propType_buy_chk_10008_10009",
                                          //     "buy_proertyTypeDefault",
                                          //     "propType_buy_disable_2",
                                          //     "bar_propertyType_new_buy",
                                          //     "buy_proertyTypeCount",
                                          //     "N",
                                          //     "Property Type",
                                          //     "colDisableBuy"
                                          //   ),
                                          //   setCheckedFlag(),
                                          //   setBusinessTypeCheckedFlag("S"))
                                          // }
                                        >
                                          Shop/Showroom
                                        </label>
                                      </li>
                                      <li>
                                        <span
                                          className="checkBox"
                                          id="propType_buy_span_10006_10012"
                                        >
                                          <input
                                            type="checkbox"
                                            defaultValue="10006_10012"
                                            name="bar_propertyType_new_buy"
                                            title="Commercial Land"
                                            id="propType_buy_chk_10006_10012"
                                            // onClick={
                                            //   (clickOnPropertyType(
                                            //     "propType_buy_span_10006_10012",
                                            //     "propType_buy_chk_10006_10012",
                                            //     "buy_proertyTypeDefault",
                                            //     "propType_buy_disable_2",
                                            //     "bar_propertyType_new_buy",
                                            //     "buy_proertyTypeCount",
                                            //     "Y",
                                            //     "Property Type",
                                            //     "colDisableBuy"
                                            //   ),
                                            //   setCheckedFlag(),
                                            //   setBusinessTypeCheckedFlag("S"))
                                            // }
                                          />
                                        </span>
                                        <label
                                          id="10006_10012"
                                          // onClick={
                                          //   (clickOnPropertyType(
                                          //     "propType_buy_span_10006_10012",
                                          //     "propType_buy_chk_10006_10012",
                                          //     "buy_proertyTypeDefault",
                                          //     "propType_buy_disable_2",
                                          //     "bar_propertyType_new_buy",
                                          //     "buy_proertyTypeCount",
                                          //     "N",
                                          //     "Property Type",
                                          //     "colDisableBuy"
                                          //   ),
                                          //   setCheckedFlag(),
                                          //   setBusinessTypeCheckedFlag("S"))
                                          // }
                                        >
                                          Commercial Land
                                        </label>
                                      </li>
                                      <li>
                                        <span
                                          className="checkBox"
                                          id="propType_buy_span_10011"
                                        >
                                          <input
                                            type="checkbox"
                                            defaultValue="10011"
                                            name="bar_propertyType_new_buy"
                                            title="Warehouse/ Godown"
                                            id="propType_buy_chk_10011"
                                            // onClick={
                                            //   (clickOnPropertyType(
                                            //     "propType_buy_span_10011",
                                            //     "propType_buy_chk_10011",
                                            //     "buy_proertyTypeDefault",
                                            //     "propType_buy_disable_2",
                                            //     "bar_propertyType_new_buy",
                                            //     "buy_proertyTypeCount",
                                            //     "Y",
                                            //     "Property Type",
                                            //     "colDisableBuy"
                                            //   ),
                                            //   setCheckedFlag(),
                                            //   setBusinessTypeCheckedFlag("S"))
                                            // }
                                          />
                                        </span>
                                        <label
                                          id="10011"
                                          // onClick={
                                          //   (clickOnPropertyType(
                                          //     "propType_buy_span_10011",
                                          //     "propType_buy_chk_10011",
                                          //     "buy_proertyTypeDefault",
                                          //     "propType_buy_disable_2",
                                          //     "bar_propertyType_new_buy",
                                          //     "buy_proertyTypeCount",
                                          //     "N",
                                          //     "Property Type",
                                          //     "colDisableBuy"
                                          //   ),
                                          //   setCheckedFlag(),
                                          //   setBusinessTypeCheckedFlag("S"))
                                          // }
                                        >
                                          Warehouse/ Godown
                                        </label>
                                      </li>
                                      <li>
                                        <span
                                          className="checkBox"
                                          id="propType_buy_span_10013"
                                        >
                                          <input
                                            type="checkbox"
                                            defaultValue="10013"
                                            name="bar_propertyType_new_buy"
                                            title="Industrial Building"
                                            id="propType_buy_chk_10013"
                                            // onClick={
                                            //   (clickOnPropertyType(
                                            //     "propType_buy_span_10013",
                                            //     "propType_buy_chk_10013",
                                            //     "buy_proertyTypeDefault",
                                            //     "propType_buy_disable_2",
                                            //     "bar_propertyType_new_buy",
                                            //     "buy_proertyTypeCount",
                                            //     "Y",
                                            //     "Property Type",
                                            //     "colDisableBuy"
                                            //   ),
                                            //   setCheckedFlag(),
                                            //   setBusinessTypeCheckedFlag("S"))
                                            // }
                                          />
                                        </span>
                                        <label
                                          id="10013"
                                          // onClick={
                                          //   (clickOnPropertyType(
                                          //     "propType_buy_span_10013",
                                          //     "propType_buy_chk_10013",
                                          //     "buy_proertyTypeDefault",
                                          //     "propType_buy_disable_2",
                                          //     "bar_propertyType_new_buy",
                                          //     "buy_proertyTypeCount",
                                          //     "N",
                                          //     "Property Type",
                                          //     "colDisableBuy"
                                          //   ),
                                          //   setCheckedFlag(),
                                          //   setBusinessTypeCheckedFlag("S"))
                                          // }
                                        >
                                          Industrial Building
                                        </label>
                                      </li>
                                      <li>
                                        <span
                                          className="checkBox"
                                          id="propType_buy_span_10014"
                                        >
                                          <input
                                            type="checkbox"
                                            defaultValue="10014"
                                            name="bar_propertyType_new_buy"
                                            title="Industrial Shed"
                                            id="propType_buy_chk_10014"
                                            // onClick={
                                            //   (clickOnPropertyType(
                                            //     "propType_buy_span_10014",
                                            //     "propType_buy_chk_10014",
                                            //     "buy_proertyTypeDefault",
                                            //     "propType_buy_disable_2",
                                            //     "bar_propertyType_new_buy",
                                            //     "buy_proertyTypeCount",
                                            //     "Y",
                                            //     "Property Type",
                                            //     "colDisableBuy"
                                            //   ),
                                            //   setCheckedFlag(),
                                            //   setBusinessTypeCheckedFlag("S"))
                                            // }
                                          />
                                        </span>
                                        <label
                                          id="10014"
                                          // onClick={
                                          //   (clickOnPropertyType(
                                          //     "propType_buy_span_10014",
                                          //     "propType_buy_chk_10014",
                                          //     "buy_proertyTypeDefault",
                                          //     "propType_buy_disable_2",
                                          //     "bar_propertyType_new_buy",
                                          //     "buy_proertyTypeCount",
                                          //     "N",
                                          //     "Property Type",
                                          //     "colDisableBuy"
                                          //   ),
                                          //   setCheckedFlag(),
                                          //   setBusinessTypeCheckedFlag("S"))
                                          // }
                                        >
                                          Industrial Shed
                                        </label>
                                      </li>
                                    </ul>
                                    <div className="clearAll"></div>
                                    <div
                                      className="colDisableBuy"
                                      style={{
                                        display: "none",
                                      }}
                                      id="propType_buy_disable_2"
                                    ></div>
                                  </div>
                                  <div className="col3 columnCommon">
                                    <h6 className="propertyHeading">OTHERS</h6>
                                    <ul className="bhkWrap">
                                      <li>
                                        <span
                                          className="checkBox"
                                          id="propType_buy_span_10005"
                                        >
                                          <input
                                            type="checkbox"
                                            defaultValue="10005"
                                            name="bar_propertyType_new_buy"
                                            title="Agricultural Land"
                                            id="propType_buy_chk_10005"
                                            // onClick={
                                            //   (clickOnPropertyType(
                                            //     "propType_buy_span_10005",
                                            //     "propType_buy_chk_10005",
                                            //     "buy_proertyTypeDefault",
                                            //     "propType_buy_disable_3",
                                            //     "bar_propertyType_new_buy",
                                            //     "buy_proertyTypeCount",
                                            //     "Y",
                                            //     "Property Type",
                                            //     "colDisableBuy"
                                            //   ),
                                            //   setCheckedFlag(),
                                            //   setBusinessTypeCheckedFlag("S"))
                                            // }
                                          />
                                        </span>
                                        <label>Agricultural Land</label>
                                      </li>
                                      <li>
                                        <span
                                          className="checkBox"
                                          id="propType_buy_span_10004"
                                        >
                                          <input
                                            type="checkbox"
                                            defaultValue="10004"
                                            name="bar_propertyType_new_buy"
                                            title="Farm House"
                                            id="propType_buy_chk_10004"
                                            // onClick={
                                            //   (clickOnPropertyType(
                                            //     "propType_buy_span_10004",
                                            //     "propType_buy_chk_10004",
                                            //     "buy_proertyTypeDefault",
                                            //     "propType_buy_disable_3",
                                            //     "bar_propertyType_new_buy",
                                            //     "buy_proertyTypeCount",
                                            //     "Y",
                                            //     "Property Type",
                                            //     "colDisableBuy"
                                            //   ),
                                            //   setCheckedFlag(),
                                            //   setBusinessTypeCheckedFlag("S"))
                                            // }
                                          />
                                        </span>
                                        <label id="10004">Farm House</label>
                                      </li>
                                    </ul>
                                    <div className="clearAll"></div>
                                    <div
                                      className="colDisableBuy"
                                      style={{
                                        display: "none",
                                      }}
                                      id="propType_buy_disable_3"
                                    ></div>
                                  </div>
                                  <div className="clearAll"></div>
                                </div>
                              </div>
                              <div className="clearAll"></div>
                            </div>
                          </div>
                          <div className="col">
                            <span className="input-group-btn">
                              <button
                                className="btn btn-default searchbtn"
                                type="button"
                              >
                                Search
                              </button>
                            </span>
                          </div>
                        </div>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <div className="form-row">
                          <div className="col">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter your location, projects or landmark"
                            />
                          </div>

                          <div className="col">
                            <div className="dropdown">
                              <button
                                className="btn btn-secondary dropdown-toggle"
                                type="button"
                                id="dropdownMenuButton"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                              >
                                Budget
                              </button>
                              <div
                                className="dropdown-menu rvs"
                                aria-labelledby="dropdownMenuButton"
                                x-placement="bottom-start"
                                style={{
                                  position: "absolute",
                                  top: "0",
                                  left: "0",
                                }}
                              >
                                <div className="rangeOption">
                                  <input
                                    maxLength="10"
                                    className="rangeLink rangeMinLink active"
                                    type="text"
                                    placeholder="Min"
                                    name="budgetBuyPerSqftMin2"
                                    defaultValue=""
                                    text=""
                                  />
                                  <span className="dividerH"></span>
                                  <input
                                    maxLength="11"
                                    className="rangeLink rangeMaxLink"
                                    type="text"
                                    placeholder="Max"
                                    name="budgetPerSqftMax"
                                    defaultValue=""
                                    text=""
                                  />
                                  <div className="clearAll"></div>
                                </div>

                                <a className="dropdown-item" href="#">
                                  5 Million
                                </a>
                                <a className="dropdown-item" href="#">
                                  10 Million
                                </a>
                                <a className="dropdown-item" href="#">
                                  15 Million
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="col">
                            <div className="dropdown">
                              <button
                                className="btn btn-secondary dropdown-toggle"
                                type="button"
                                id="dropdownMenuButton"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                              >
                                Flat
                              </button>
                              <div
                                className="dropdown-menu"
                                aria-labelledby="dropdownMenuButton"
                                x-placement="bottom-start"
                                style={{
                                  position: "absolute",
                                  top: "0",
                                  left: "0",
                                }}
                              >
                                <div
                                  className="propertyTypeDD_Home"
                                  style={{
                                    display: "block",
                                  }}
                                  id="propType_buy"
                                >
                                  <div className="col1 columnCommon">
                                    <h6 className="propertyHeading">
                                      RESIDENTIAL
                                    </h6>
                                    <ul className="bhkWrap">
                                      <li>
                                        <span
                                          className="checkBox checked"
                                          id="propType_buy_span_10002_10003_10021_10022"
                                        >
                                          <input
                                            type="checkbox"
                                            defaultValue="10002_10003_10021_10022"
                                            name="bar_propertyType_new_buy"
                                            title="Flat"
                                            id="propType_buy_chk_10002_10003_10021_10022"
                                            // onClick={
                                            //   (clickOnPropertyType(
                                            //     "propType_buy_span_10002_10003_10021_10022",
                                            //     "propType_buy_chk_10002_10003_10021_10022",
                                            //     "buy_proertyTypeDefault",
                                            //     "propType_buy_disable_1",
                                            //     "bar_propertyType_new_buy",
                                            //     "buy_proertyTypeCount",
                                            //     "Y",
                                            //     "Property Type",
                                            //     "colDisableBuy"
                                            //   ),
                                            //   setCheckedFlag(),
                                            //   setBusinessTypeCheckedFlag("S"))
                                            // }
                                            defaultChecked="checked"
                                          />
                                        </span>
                                        <label
                                          id="10002_10003_10021_10022"
                                          // onClick={
                                          //   (clickOnPropertyType(
                                          //     "propType_buy_span_10002_10003_10021_10022",
                                          //     "propType_buy_chk_10002_10003_10021_10022",
                                          //     "buy_proertyTypeDefault",
                                          //     "propType_buy_disable_1",
                                          //     "bar_propertyType_new_buy",
                                          //     "buy_proertyTypeCount",
                                          //     "N",
                                          //     "Property Type",
                                          //     "colDisableBuy"
                                          //   ),
                                          //   setCheckedFlag(),
                                          //   setBusinessTypeCheckedFlag("S"))
                                          // }
                                        >
                                          Flat
                                        </label>
                                      </li>
                                      <li>
                                        <span
                                          className="checkBox"
                                          id="propType_buy_span_10001_10017"
                                        >
                                          <input
                                            type="checkbox"
                                            defaultValue="10001_10017"
                                            name="bar_propertyType_new_buy"
                                            title="House/Villa"
                                            id="propType_buy_chk_10001_10017"
                                            // onClick={
                                            //   (clickOnPropertyType(
                                            //     "propType_buy_span_10001_10017",
                                            //     "propType_buy_chk_10001_10017",
                                            //     "buy_proertyTypeDefault",
                                            //     "propType_buy_disable_1",
                                            //     "bar_propertyType_new_buy",
                                            //     "buy_proertyTypeCount",
                                            //     "Y",
                                            //     "Property Type",
                                            //     "colDisableBuy"
                                            //   ),
                                            //   setCheckedFlag(),
                                            //   setBusinessTypeCheckedFlag("S"))
                                            // }
                                          />
                                        </span>
                                        <label
                                          id="10001_10017"
                                          // onClick={
                                          //   (clickOnPropertyType(
                                          //     "propType_buy_span_10001_10017",
                                          //     "propType_buy_chk_10001_10017",
                                          //     "buy_proertyTypeDefault",
                                          //     "propType_buy_disable_1",
                                          //     "bar_propertyType_new_buy",
                                          //     "buy_proertyTypeCount",
                                          //     "N",
                                          //     "Property Type",
                                          //     "colDisableBuy"
                                          //   ),
                                          //   setCheckedFlag(),
                                          //   setBusinessTypeCheckedFlag("S"))
                                          // }
                                        >
                                          House/Villa
                                        </label>
                                      </li>
                                      <li>
                                        <span
                                          className="checkBox"
                                          id="propType_buy_span_10000"
                                        >
                                          <input
                                            type="checkbox"
                                            defaultValue="10000"
                                            name="bar_propertyType_new_buy"
                                            title="Plot/Land"
                                            id="propType_buy_chk_10000"
                                            // onClick={
                                            //   (clickOnPropertyType(
                                            //     "propType_buy_span_10000",
                                            //     "propType_buy_chk_10000",
                                            //     "buy_proertyTypeDefault",
                                            //     "propType_buy_disable_1",
                                            //     "bar_propertyType_new_buy",
                                            //     "buy_proertyTypeCount",
                                            //     "Y",
                                            //     "Property Type",
                                            //     "colDisableBuy"
                                            //   ),
                                            //   setCheckedFlag(),
                                            //   setBusinessTypeCheckedFlag("S"))
                                            // }
                                          />
                                        </span>
                                        <label
                                          id="10000"
                                          // onClick={
                                          //   (clickOnPropertyType(
                                          //     "propType_buy_span_10000",
                                          //     "propType_buy_chk_10000",
                                          //     "buy_proertyTypeDefault",
                                          //     "propType_buy_disable_1",
                                          //     "bar_propertyType_new_buy",
                                          //     "buy_proertyTypeCount",
                                          //     "N",
                                          //     "Property Type",
                                          //     "colDisableBuy"
                                          //   ),
                                          //   setCheckedFlag(),
                                          //   setBusinessTypeCheckedFlag("S"))
                                          // }
                                        >
                                          Plot/Land
                                        </label>
                                      </li>
                                    </ul>
                                    <div className="clearAll"></div>
                                    <div
                                      className="colDisableBuy"
                                      style={{
                                        display: "none",
                                      }}
                                      id="propType_buy_disable_1"
                                    ></div>
                                    <div className="bhkAdded_S">
                                      <div className="">
                                        <div className="clearAll"></div>
                                        <ul className="bhkWrap">
                                          <li>
                                            <span className="checkBox">
                                              <input
                                                type="checkbox"
                                                defaultValue="11700"
                                                name="bhkCheckbox"
                                                title="1 BHK"
                                                id="bhk_11700"
                                                // onClick={setBhkAction(
                                                //   this,
                                                //   "11700",
                                                //   "1",
                                                //   "bedroom_name",
                                                //   "bar_bedrooms"
                                                // )}
                                              />
                                            </span>
                                            <label
                                              htmlFor="bhk_11700"
                                              // onClick={setBhkAction(
                                              //   this,
                                              //   "11700",
                                              //   "1",
                                              //   "bedroom_name",
                                              //   "bar_bedrooms"
                                              // )}
                                            >
                                              1 BHK
                                            </label>
                                          </li>
                                          <li>
                                            <span className="checkBox">
                                              <input
                                                type="checkbox"
                                                defaultValue="11701"
                                                name="bhkCheckbox"
                                                title="2 BHK"
                                                id="bhk_11701"
                                                // onClick={setBhkAction(
                                                //   this,
                                                //   "11701",
                                                //   "2",
                                                //   "bedroom_name",
                                                //   "bar_bedrooms"
                                                // )}
                                              />
                                            </span>
                                            <label
                                              htmlFor="bhk_11701"
                                              // onClick={setBhkAction(
                                              //   this,
                                              //   "11701",
                                              //   "2",
                                              //   "bedroom_name",
                                              //   "bar_bedrooms"
                                              // )}
                                            >
                                              2 BHK
                                            </label>
                                          </li>
                                          <li>
                                            <span className="checkBox">
                                              <input
                                                type="checkbox"
                                                defaultValue="11702"
                                                name="bhkCheckbox"
                                                title="3 BHK"
                                                id="bhk_11702"
                                                // onClick={setBhkAction(
                                                //   this,
                                                //   "11702",
                                                //   "3",
                                                //   "bedroom_name",
                                                //   "bar_bedrooms"
                                                // )}
                                              />
                                            </span>
                                            <label
                                              htmlFor="bhk_11702"
                                              // onClick={setBhkAction(
                                              //   this,
                                              //   "11702",
                                              //   "3",
                                              //   "bedroom_name",
                                              //   "bar_bedrooms"
                                              // )}
                                            >
                                              3 BHK
                                            </label>
                                          </li>
                                          <li>
                                            <span className="checkBox">
                                              <input
                                                type="checkbox"
                                                defaultValue="11703"
                                                name="bhkCheckbox"
                                                title="4 BHK"
                                                id="bhk_11703"
                                                // onClick={setBhkAction(
                                                //   this,
                                                //   "11703",
                                                //   "4",
                                                //   "bedroom_name",
                                                //   "bar_bedrooms"
                                                // )}
                                              />
                                            </span>
                                            <label
                                              htmlFor="bhk_11703"
                                              // onClick={setBhkAction(
                                              //   this,
                                              //   "11703",
                                              //   "4",
                                              //   "bedroom_name",
                                              //   "bar_bedrooms"
                                              // )}
                                            >
                                              4 BHK
                                            </label>
                                          </li>
                                          <li>
                                            <span className="checkBox">
                                              <input
                                                type="checkbox"
                                                defaultValue="11704"
                                                name="bhkCheckbox"
                                                title="5 BHK"
                                                id="bhk_11704"
                                                // onClick={setBhkAction(
                                                //   this,
                                                //   "11704",
                                                //   "5",
                                                //   "bedroom_name",
                                                //   "bar_bedrooms"
                                                // )}
                                              />
                                            </span>
                                            <label
                                              htmlFor="bhk_11704"
                                              // onClick={setBhkAction(
                                              //   this,
                                              //   "11704",
                                              //   "5",
                                              //   "bedroom_name",
                                              //   "bar_bedrooms"
                                              // )}
                                            >
                                              5 BHK
                                            </label>
                                          </li>
                                          <li>
                                            <span className="checkBox">
                                              <input
                                                type="checkbox"
                                                defaultValue="11705-11706-11707-11708-11709-11710"
                                                name="bhkCheckbox"
                                                title=">5 BHK"
                                                id="bhk_11705-11706-11707-11708-11709-11710"
                                                // onClick={setBhkAction(
                                                //   this,
                                                //   "11705-11706-11707-11708-11709-11710",
                                                //   ">5",
                                                //   "bedroom_name",
                                                //   "bar_bedrooms"
                                                // )}
                                              />
                                            </span>
                                            <label
                                              htmlFor="bhk_11705-11706-11707-11708-11709-11710"
                                              // onClick={setBhkAction(
                                              //   this,
                                              //   "11705-11706-11707-11708-11709-11710",
                                              //   ">5",
                                              //   "bedroom_name",
                                              //   "bar_bedrooms"
                                              // )}
                                            >
                                              &gt;5 BHK
                                            </label>
                                          </li>
                                        </ul>
                                        <div className="clearAll"></div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col2 columnCommon">
                                    <h6 className="propertyHeading">
                                      COMMERCIAL
                                    </h6>
                                    <ul className="bhkWrap">
                                      <li>
                                        <span
                                          className="checkBox"
                                          id="propType_buy_span_10007_10018"
                                        >
                                          <input
                                            type="checkbox"
                                            defaultValue="10007_10018"
                                            name="bar_propertyType_new_buy"
                                            title="Office Space"
                                            id="propType_buy_chk_10007_10018"
                                            // onClick={
                                            //   (clickOnPropertyType(
                                            //     "propType_buy_span_10007_10018",
                                            //     "propType_buy_chk_10007_10018",
                                            //     "buy_proertyTypeDefault",
                                            //     "propType_buy_disable_2",
                                            //     "bar_propertyType_new_buy",
                                            //     "buy_proertyTypeCount",
                                            //     "Y",
                                            //     "Property Type",
                                            //     "colDisableBuy"
                                            //   ),
                                            //   setCheckedFlag(),
                                            //   setBusinessTypeCheckedFlag("S"))
                                            // }
                                          />
                                        </span>
                                        <label
                                          id="10007_10018"
                                          // onClick={
                                          //   (clickOnPropertyType(
                                          //     "propType_buy_span_10007_10018",
                                          //     "propType_buy_chk_10007_10018",
                                          //     "buy_proertyTypeDefault",
                                          //     "propType_buy_disable_2",
                                          //     "bar_propertyType_new_buy",
                                          //     "buy_proertyTypeCount",
                                          //     "N",
                                          //     "Property Type",
                                          //     "colDisableBuy"
                                          //   ),
                                          //   setCheckedFlag(),
                                          //   setBusinessTypeCheckedFlag("S"))
                                          // }
                                        >
                                          Office Space
                                        </label>
                                      </li>
                                      <li>
                                        <span
                                          className="checkBox"
                                          id="propType_buy_span_10008_10009"
                                        >
                                          <input
                                            type="checkbox"
                                            defaultValue="10008_10009"
                                            name="bar_propertyType_new_buy"
                                            title="Shop/Showroom"
                                            id="propType_buy_chk_10008_10009"
                                            // onClick={
                                            //   (clickOnPropertyType(
                                            //     "propType_buy_span_10008_10009",
                                            //     "propType_buy_chk_10008_10009",
                                            //     "buy_proertyTypeDefault",
                                            //     "propType_buy_disable_2",
                                            //     "bar_propertyType_new_buy",
                                            //     "buy_proertyTypeCount",
                                            //     "Y",
                                            //     "Property Type",
                                            //     "colDisableBuy"
                                            //   ),
                                            //   setCheckedFlag(),
                                            //   setBusinessTypeCheckedFlag("S"))
                                            // }
                                          />
                                        </span>
                                        <label
                                          id="10008_10009"
                                          // onClick={
                                          //   (clickOnPropertyType(
                                          //     "propType_buy_span_10008_10009",
                                          //     "propType_buy_chk_10008_10009",
                                          //     "buy_proertyTypeDefault",
                                          //     "propType_buy_disable_2",
                                          //     "bar_propertyType_new_buy",
                                          //     "buy_proertyTypeCount",
                                          //     "N",
                                          //     "Property Type",
                                          //     "colDisableBuy"
                                          //   ),
                                          //   setCheckedFlag(),
                                          //   setBusinessTypeCheckedFlag("S"))
                                          // }
                                        >
                                          Shop/Showroom
                                        </label>
                                      </li>
                                      <li>
                                        <span
                                          className="checkBox"
                                          id="propType_buy_span_10006_10012"
                                        >
                                          <input
                                            type="checkbox"
                                            defaultValue="10006_10012"
                                            name="bar_propertyType_new_buy"
                                            title="Commercial Land"
                                            id="propType_buy_chk_10006_10012"
                                            // onClick={
                                            //   (clickOnPropertyType(
                                            //     "propType_buy_span_10006_10012",
                                            //     "propType_buy_chk_10006_10012",
                                            //     "buy_proertyTypeDefault",
                                            //     "propType_buy_disable_2",
                                            //     "bar_propertyType_new_buy",
                                            //     "buy_proertyTypeCount",
                                            //     "Y",
                                            //     "Property Type",
                                            //     "colDisableBuy"
                                            //   ),
                                            //   setCheckedFlag(),
                                            //   setBusinessTypeCheckedFlag("S"))
                                            // }
                                          />
                                        </span>
                                        <label
                                          id="10006_10012"
                                          // onClick={
                                          //   (clickOnPropertyType(
                                          //     "propType_buy_span_10006_10012",
                                          //     "propType_buy_chk_10006_10012",
                                          //     "buy_proertyTypeDefault",
                                          //     "propType_buy_disable_2",
                                          //     "bar_propertyType_new_buy",
                                          //     "buy_proertyTypeCount",
                                          //     "N",
                                          //     "Property Type",
                                          //     "colDisableBuy"
                                          //   ),
                                          //   setCheckedFlag(),
                                          //   setBusinessTypeCheckedFlag("S"))
                                          // }
                                        >
                                          Commercial Land
                                        </label>
                                      </li>
                                      <li>
                                        <span
                                          className="checkBox"
                                          id="propType_buy_span_10011"
                                        >
                                          <input
                                            type="checkbox"
                                            defaultValue="10011"
                                            name="bar_propertyType_new_buy"
                                            title="Warehouse/ Godown"
                                            id="propType_buy_chk_10011"
                                            // onClick={
                                            //   (clickOnPropertyType(
                                            //     "propType_buy_span_10011",
                                            //     "propType_buy_chk_10011",
                                            //     "buy_proertyTypeDefault",
                                            //     "propType_buy_disable_2",
                                            //     "bar_propertyType_new_buy",
                                            //     "buy_proertyTypeCount",
                                            //     "Y",
                                            //     "Property Type",
                                            //     "colDisableBuy"
                                            //   ),
                                            //   setCheckedFlag(),
                                            //   setBusinessTypeCheckedFlag("S"))
                                            // }
                                          />
                                        </span>
                                        <label
                                          id="10011"
                                          // onClick={
                                          //   (clickOnPropertyType(
                                          //     "propType_buy_span_10011",
                                          //     "propType_buy_chk_10011",
                                          //     "buy_proertyTypeDefault",
                                          //     "propType_buy_disable_2",
                                          //     "bar_propertyType_new_buy",
                                          //     "buy_proertyTypeCount",
                                          //     "N",
                                          //     "Property Type",
                                          //     "colDisableBuy"
                                          //   ),
                                          //   setCheckedFlag(),
                                          //   setBusinessTypeCheckedFlag("S"))
                                          // }
                                        >
                                          Warehouse/ Godown
                                        </label>
                                      </li>
                                      <li>
                                        <span
                                          className="checkBox"
                                          id="propType_buy_span_10013"
                                        >
                                          <input
                                            type="checkbox"
                                            defaultValue="10013"
                                            name="bar_propertyType_new_buy"
                                            title="Industrial Building"
                                            id="propType_buy_chk_10013"
                                            // onClick={
                                            //   (clickOnPropertyType(
                                            //     "propType_buy_span_10013",
                                            //     "propType_buy_chk_10013",
                                            //     "buy_proertyTypeDefault",
                                            //     "propType_buy_disable_2",
                                            //     "bar_propertyType_new_buy",
                                            //     "buy_proertyTypeCount",
                                            //     "Y",
                                            //     "Property Type",
                                            //     "colDisableBuy"
                                            //   ),
                                            //   setCheckedFlag(),
                                            //   setBusinessTypeCheckedFlag("S"))
                                            // }
                                          />
                                        </span>
                                        <label
                                          id="10013"
                                          // onClick={
                                          //   (clickOnPropertyType(
                                          //     "propType_buy_span_10013",
                                          //     "propType_buy_chk_10013",
                                          //     "buy_proertyTypeDefault",
                                          //     "propType_buy_disable_2",
                                          //     "bar_propertyType_new_buy",
                                          //     "buy_proertyTypeCount",
                                          //     "N",
                                          //     "Property Type",
                                          //     "colDisableBuy"
                                          //   ),
                                          //   setCheckedFlag(),
                                          //   setBusinessTypeCheckedFlag("S"))
                                          // }
                                        >
                                          Industrial Building
                                        </label>
                                      </li>
                                      <li>
                                        <span
                                          className="checkBox"
                                          id="propType_buy_span_10014"
                                        >
                                          <input
                                            type="checkbox"
                                            defaultValue="10014"
                                            name="bar_propertyType_new_buy"
                                            title="Industrial Shed"
                                            id="propType_buy_chk_10014"
                                            // onClick={
                                            //   (clickOnPropertyType(
                                            //     "propType_buy_span_10014",
                                            //     "propType_buy_chk_10014",
                                            //     "buy_proertyTypeDefault",
                                            //     "propType_buy_disable_2",
                                            //     "bar_propertyType_new_buy",
                                            //     "buy_proertyTypeCount",
                                            //     "Y",
                                            //     "Property Type",
                                            //     "colDisableBuy"
                                            //   ),
                                            //   setCheckedFlag(),
                                            //   setBusinessTypeCheckedFlag("S"))
                                            // }
                                          />
                                        </span>
                                        <label
                                          id="10014"
                                          // onClick={
                                          //   (clickOnPropertyType(
                                          //     "propType_buy_span_10014",
                                          //     "propType_buy_chk_10014",
                                          //     "buy_proertyTypeDefault",
                                          //     "propType_buy_disable_2",
                                          //     "bar_propertyType_new_buy",
                                          //     "buy_proertyTypeCount",
                                          //     "N",
                                          //     "Property Type",
                                          //     "colDisableBuy"
                                          //   ),
                                          //   setCheckedFlag(),
                                          //   setBusinessTypeCheckedFlag("S"))
                                          // }
                                        >
                                          Industrial Shed
                                        </label>
                                      </li>
                                    </ul>
                                    <div className="clearAll"></div>
                                    <div
                                      className="colDisableBuy"
                                      style={{
                                        display: "none",
                                      }}
                                      id="propType_buy_disable_2"
                                    ></div>
                                  </div>
                                  <div className="col3 columnCommon">
                                    <h6 className="propertyHeading">OTHERS</h6>
                                    <ul className="bhkWrap">
                                      <li>
                                        <span
                                          className="checkBox"
                                          id="propType_buy_span_10005"
                                        >
                                          <input
                                            type="checkbox"
                                            defaultValue="10005"
                                            name="bar_propertyType_new_buy"
                                            title="Agricultural Land"
                                            id="propType_buy_chk_10005"
                                            // onClick={
                                            //   (clickOnPropertyType(
                                            //     "propType_buy_span_10005",
                                            //     "propType_buy_chk_10005",
                                            //     "buy_proertyTypeDefault",
                                            //     "propType_buy_disable_3",
                                            //     "bar_propertyType_new_buy",
                                            //     "buy_proertyTypeCount",
                                            //     "Y",
                                            //     "Property Type",
                                            //     "colDisableBuy"
                                            //   ),
                                            //   setCheckedFlag(),
                                            //   setBusinessTypeCheckedFlag("S"))
                                            // }
                                          />
                                        </span>
                                        <label>Agricultural Land</label>
                                      </li>
                                      <li>
                                        <span
                                          className="checkBox"
                                          id="propType_buy_span_10004"
                                        >
                                          <input
                                            type="checkbox"
                                            defaultValue="10004"
                                            name="bar_propertyType_new_buy"
                                            title="Farm House"
                                            id="propType_buy_chk_10004"
                                            // onClick={
                                            //   (clickOnPropertyType(
                                            //     "propType_buy_span_10004",
                                            //     "propType_buy_chk_10004",
                                            //     "buy_proertyTypeDefault",
                                            //     "propType_buy_disable_3",
                                            //     "bar_propertyType_new_buy",
                                            //     "buy_proertyTypeCount",
                                            //     "Y",
                                            //     "Property Type",
                                            //     "colDisableBuy"
                                            //   ),
                                            //   setCheckedFlag(),
                                            //   setBusinessTypeCheckedFlag("S"))
                                            // }
                                          />
                                        </span>
                                        <label id="10004">Farm House</label>
                                      </li>
                                    </ul>
                                    <div className="clearAll"></div>
                                    <div
                                      className="colDisableBuy"
                                      style={{
                                        display: "none",
                                      }}
                                      id="propType_buy_disable_3"
                                    ></div>
                                  </div>
                                  <div className="clearAll"></div>
                                </div>
                              </div>
                              <div className="clearAll"></div>
                            </div>
                          </div>
                          <div className="col">
                            <span className="input-group-btn">
                              <button
                                className="btn btn-default searchbtn"
                                type="button"
                              >
                                Search
                              </button>
                            </span>
                          </div>
                        </div>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Banner;
