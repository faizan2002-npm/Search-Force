import { Container, Row, Col, Tab, Nav, Tabs } from "react-bootstrap";
import Head from "next/head";
import Header from "./../Includes/Header";
import Banner from "./../Components/Home Page/Banner";
import Footer from "../Includes/Footer";
import Services from "./../Components/Home Page/Services";
import { Swiper, SwiperSlide } from "swiper/react";
import BuyHome from "./../Components/Home Page/BuyHome";
import RecentlyViewed from "./../Components/Home Page/RecentlyViewed";
import Popular from "./../Components/Home Page/Popular";
import RealEstate from "./../Components/Home Page/RealEstate";
import Top from "./../Components/Home Page/Top";
import Searches from "./../Components/Home Page/Searches";

export default function Home() {
  return (
    <>
      <Head>
        <title>Search Force | Home</title>
        <meta charset="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
      </Head>
      <Header />
      <Banner />
      <Services/>
      <BuyHome />
      <RecentlyViewed />
      <Popular />
      <RealEstate />
      <Top />
      <section
        className="bot_banner"
        style={{
          backgroundImage: "url(/assets/img/banner.jpg)",
        }}
      >
        <h3 className="text-center">
          Sell or Rent our Property for
          <span>free on SearchForce.com!</span>
        </h3>
        <p>
          Become a part of the growing searchforce to our real-estate agent
          community, all our listings are completely free &amp; always will be.
          Now you can grow your business happily. Further more, over a million
          buyers visit us every month, giving you the audience that you need.
          Download our searchforce app to avail all these benefits &amp;
          conveniently follow up with your clients.
        </p>
        <button type="button" className="btn btn d-block mx-auto">
          List Your Property
        </button>
      </section>
      <Searches />
      <Footer />
    </>
  );
}
