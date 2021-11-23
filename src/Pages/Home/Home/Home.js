import React from "react";
import Footer from "../../Shared/Footer/Footer";

import Header from "../Header/Header";
import Services from "../Services/Services";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
  return (
    <div>
      <Header />
      <Services></Services>
      <Testimonials></Testimonials>
      <Footer></Footer>
    </div>
  );
};

export default Home;
