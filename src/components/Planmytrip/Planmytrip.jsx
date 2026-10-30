import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import TripPlannerForm from "../TripPlannerForm/TripPlannerForm";
import TripComponent from "../Content/TripComponent";
import { BASE_URL } from "../config/config";

const Planmytrip = () => {
  const [trip, setTrip] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchTrip = async ({ destination, duration }) => {
    console.log(destination);
    console.log(duration);
    try {
      setLoading(true);
      setError("");

      const response = await axios.get(
        `${BASE_URL}/api/travel-plan`,
        {
          params: {
            destination,
            days: duration,
          },
        },
      );

      setTrip(response.data.data);
    } catch (error) {
      setError("Failed to fetch trip.");
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  console.log("Trip inside 'trip'--", trip);

  return (
    <div className="content">
      <div className=" mx-2 mx-md-3 mx-lg-5 my-3">
        <TripPlannerForm onGenerate={fetchTrip} />

        {loading ? (
          <div className="text-center mt-5">
            <h2 className="text-white">Generating your AI trip...</h2>
          </div>
        ) : error ? (
          <div className="text-center mt-5">
            <h3 className="text-danger">{error}</h3>
          </div>
        ) : trip ? (
          <TripComponent trip={trip} />
        ) : (
          <div className="text-center mt-5">
            <h2 className="text-white">Plan your next adventure ✈️</h2>

            <p className="text-secondary">
              Choose a destination and trip duration to generate an AI-powered
              itinerary.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Planmytrip;
