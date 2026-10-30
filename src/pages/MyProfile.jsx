import React from "react";
import "../App.css";
import Sidebar from "../components/Sidebar/Sidebar";
import MobileNavbar from "../components/Sidebar/MobileNavbar";
import Myprofile from "../components/Profile/Myprofile";

const MyProfile = () => {
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
          <Myprofile />
        </section>
      </div>
    </>
  );
};

export default MyProfile;
