import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Charity from "../components/Charity/Charity";
import Preloader from "../components/Preloader/Preloader";

const CharityPage = () => {
  return (
    <>
      <Preloader />
      <Header />
      <Charity />
      <Footer />
    </>
  );
};

export default CharityPage;
