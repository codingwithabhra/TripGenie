import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import "./Content.css";
import TripComponent from "./TripComponent";
import { BASE_URL } from "../config/config";

const Content = () => {
  const [trip, setTrip] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchTrip();
  }, []);

  const fetchTrip = async () => {
    try {
      const response = await axios.get(
        `${BASE_URL}/api/travel-plan`,
      );
      setTrip(response.data.data);
      console.log("Trip data--", response.data.data);
    } catch (error) {
      setError("Failed to fetch trip.");
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  console.log("Trip inside 'trip'--", trip);

  if (loading)
    return <h2 className="text-center pt-5 text-white">Loading...</h2>;

  if (error) return <h2 className="text-center pt-5 text-danger">{error}</h2>;

  return (
    <div className="content container-fluid">
      <div className="mx-3 mx-xl-5">
        <TripComponent trip={trip} />
      </div>
    </div>
  );
};

export default Content;
