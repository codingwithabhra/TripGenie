import { Link } from "react-router-dom";
import { IoIosHome } from "react-icons/io";
import { FaPersonWalkingLuggage } from "react-icons/fa6";
import "./MobileNavbar.css";
import { CgProfile } from "react-icons/cg";

const MobileNavbar = () => {
  return (
    <nav
      className="navbar navbar-expand-md fixed-top py-2"
      style={{
        background: "rgba(255,255,255,0.12)",
        backdropFilter: "blur(15px)",
        WebkitBackdropFilter: "blur(15px)",
      }}
    >
      <div className="container-fluid">
        {/* Logo */}
        <Link className="navbar-brand" to="/">
          {/* Full Logo */}
          <img
            src="/TripGenie_logo.png"
            alt="TripGenie Logo"
            className="fullLogo"
            style={{ maxWidth: "120px", objectFit: "cover" }}
          />
        </Link>

        {/* Hamburger */}
        <button
          className="navbar-toggler border-0 shadow-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mobileNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu */}
        <div className="collapse navbar-collapse mt-3" id="mobileNavbar">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link text-white" to="/home">
                <IoIosHome className="me-2" />
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link text-white" to="/planmytrip">
                <FaPersonWalkingLuggage className="me-2" />
                Plan My Trip
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link text-white" to="/profile">
                <CgProfile className="me-2" />
                My Profile
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default MobileNavbar;
