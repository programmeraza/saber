import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Preloader from "../components/Preloader/Preloader";

const ProfilePage = () => {
  return (
    <>
      <Preloader />
      <Header />
      <h1>Profile</h1>
      <Footer />
    </>
  );
};

export default ProfilePage;
