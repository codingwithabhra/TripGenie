import React from "react";
import { SlLocationPin } from "react-icons/sl";
import { FaCalendarCheck } from "react-icons/fa";
import { IoTime } from "react-icons/io5";
import { FaMapMarkedAlt } from "react-icons/fa";
import { FiMapPin } from "react-icons/fi";
import { GoChecklist } from "react-icons/go";
import { LiaMoneyBillWaveSolid } from "react-icons/lia";
import { FaEuroSign } from "react-icons/fa";
import { MdOutlineTipsAndUpdates } from "react-icons/md";
import "./Content.css";

const TripComponent = ({ trip }) => {
  return (
    <div className="">
      <div className="trip-content my-3">
        {/* DESTINATION */}
        <div className="destination d-flex align-items-center py-2">
          <h1 className="d-flex justify-content-center align-items-center">
            {" "}
            <span className="me-2" style={{ color: "#43ac3c" }}>
              <SlLocationPin />
            </span>{" "}
            Destination :{" "}
          </h1>
          <p className="text-white ms-4 mb-0">{trip.destination}</p>
        </div>

        {/* BEST TIME TO VISIT + DURATION */}
        <div className="timetovisit-duration">
          <div className="timetovisit">
            <h4 className="text-white d-flex align-items-center">
              <FaCalendarCheck />
              <span className="ms-2">Best Time to Visit : </span>
            </h4>
            <p className="text-white mb-0">{trip.bestTime}</p>
          </div>
          <div className="duration">
            <h4 className="text-white d-flex align-items-center">
              <IoTime />
              <span className="ms-2">Ideal Duration : </span>
            </h4>
            <p className="text-white mb-0">{trip.durationDays} days</p>
          </div>
        </div>

        {/* TOP ATTRACTIONS */}
        <div className="topAttractions">
          <h4 className="text-white d-flex align-items-center">
            <FaMapMarkedAlt />
            <span className="ms-2">Must-Visit Places : </span>
          </h4>
          <div className="row mt-4">
            {trip.topAttractions?.map((place, index) => (
              <div key={index} className="col-lg-4 col-md-6 mb-4">
                <div className="must-visit-card h-100">
                  <FiMapPin className="icon" />
                  <p>{place}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* TRIP ITINERARY */}
        <div className="tripItinerary">
          <h4 className="text-white d-flex align-items-center">
            <GoChecklist />
            <span className="ms-2">Trip Itinerary : </span>
          </h4>
          <div className="row mt-4">
            {trip?.sampleItinerary?.map((day) => (
              <div key={day.day} className="mb-4">
                <div className="itinerary-card h-100">
                  <h5 className="mb-0">Day {day.day} : </h5>
                  <p className="mb-0">{day.plan}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* BUDGET IN EUROS */}
        <div className="budget">
          <h4 className="text-white d-flex align-items-center">
            <LiaMoneyBillWaveSolid />
            <span className="ms-2">Estimated Trip Cost : </span>
          </h4>
          <div className="row mt-4">
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="must-visit-card h-100 text-white">
                <div className="card-body">
                  <h5>Low</h5>
                  <h4>
                    <span className="me-2">
                      <FaEuroSign className="icon" />
                    </span>
                    {trip.estimatedBudgetEuros?.low} / person
                  </h4>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mb-4">
              <div className="must-visit-card h-100 text-white">
                <div className="card-body">
                  <h5>Medium</h5>
                  <h4>
                    <span className="me-2">
                      <FaEuroSign className="icon" />
                    </span>
                    {trip.estimatedBudgetEuros?.mid} / person
                  </h4>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mb-4">
              <div className="must-visit-card h-100 text-white">
                <div className="card-body">
                  <h5>High</h5>
                  <h4>
                    <span className="me-2">
                      <FaEuroSign className="icon" />
                    </span>
                    {trip.estimatedBudgetEuros?.high} / person
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* LOCAL TIPS */}
        <div className="localTips">
          <h4 className="text-white d-flex align-items-center">
            <MdOutlineTipsAndUpdates />
            <span className="ms-2">Local Tips : </span>
          </h4>
          <div className="row mt-4">
            {trip?.localTips?.map((tip, index) => (
              <div key={index} className="mb-4">
                <div className="localtip-card h-100">
                  <h6 className="mb-0">{index + 1}</h6>
                  <p className="mb-0">{tip}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TripComponent;
