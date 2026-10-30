import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const TripContext = createContext();

const API_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:3000";

const api = axios.create({
  baseURL: API_URL,
});

export const TripProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Email and password sign in
  const signIn = async (email, password) => {
    const response = await api.post("/auth/login", {
      email,
      password,
    });

    const { token, user } = response.data;

    localStorage.setItem("token", token);
    setUser(user);

    return user;
  };

  // Name, email and password sign up
  const signUp = async (name, email, password) => {
    const response = await api.post("/auth/signup", {
      name,
      email,
      password,
    });

    const { token, user } = response.data;

    localStorage.setItem("token", token);
    setUser(user);

    return user;
  };

  // Google sign in / sign up
  const googleSignIn = async (credential) => {
    const response = await api.post("/auth/google", {
      credential,
    });

    const { token, user } = response.data;

    localStorage.setItem("token", token);
    setUser(user);

    return user;
  };

  // Fetch the currently logged-in user's profile
  const fetchProfile = async () => {
    const token = localStorage.getItem("token");

    if (!token) {
      setUser(null);
      return null;
    }

    const response = await api.get("/auth/profile", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    setUser(response.data.user);
    return response.data.user;
  };

  // Restore login after refreshing the browser
  useEffect(() => {
    const restoreSession = async () => {
      try {
        await fetchProfile();
      } catch (error) {
        localStorage.removeItem("token");
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    restoreSession();
  }, []);

  const signOut = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  return (
    <TripContext.Provider
      value={{
        user,
        loading,
        signIn,
        signUp,
        googleSignIn,
        fetchProfile,
        signOut,
      }}
    >
      {children}
    </TripContext.Provider>
  );
};

export const useTripContext = () => useContext(TripContext);
