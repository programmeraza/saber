import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Preloader from "../components/Preloader/Preloader";

const CartPage = () => {
  return (
    <>
      <Preloader />
      <Header />
      <h1>Cart</h1>
      <Footer />
    </>
  );
};

export default CartPage;
