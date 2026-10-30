import React from "react";
import { Link } from "react-router-dom";
import { IoIosHome } from "react-icons/io";
import "./Sidebar.css";
import { FaPersonWalkingLuggage } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";

const Sidebar = () => {
  return (
    <div>
      <div className="logo">
        {/* Full Logo */}
        <img
          src="/TripGenie_logo.png"
          alt="TripGenie Logo"
          className="fullLogo"
          style={{ maxWidth: "150px", objectFit: "cover" }}
        />

        {/* Logo Icon */}
        <img
          src="/TripGenie_icon.png"
          alt="TripGenie Icon"
          className="logoIcon"
        />
      </div>

      <ul className="navbar">
        <li className="w-100">
          <Link className="navLink text-decoration-none text-white" to="/home">
            <IoIosHome size={21} />
            <span className="navText ms-2 fw-bold">Home</span>
          </Link>
        </li>

        {/* PLAN TRIP */}
        <li className="w-100">
          <Link
            className="navLink text-decoration-none text-white"
            to="/planmytrip"
          >
            <FaPersonWalkingLuggage size={21} />
            <span className="navText ms-2 fw-bold">Plan my trip</span>
          </Link>
        </li>

        {/* MY PROFILE */}
        <li className="w-100">
          <Link
            className="navLink text-decoration-none text-white"
            to="/profile"
          >
            <CgProfile size={21} />
            <span className="navText ms-2 fw-bold">My Profile</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
