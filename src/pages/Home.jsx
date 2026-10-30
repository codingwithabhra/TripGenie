import React from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import Content from "../components/Content/Content";
import MobileNavbar from "../components/Sidebar/MobileNavbar";

const Home = () => {
  return (
    <>
      {/* Mobile Navbar */}
      <div className="d-md-none">
        <MobileNavbar />
      </div>

      <div className="homeParent d-flex">
        {/* Sidebar (Tablet & Desktop) */}
        <section className="home-sidebar">
          <Sidebar />
        </section>

        {/* Content */}
        <section className="home-content">
          <Content />
        </section>
      </div>
    </>
  );
};

export default Home;
