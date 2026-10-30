import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PlanMyTrip from "./pages/PlanMyTrip.jsx";
import Home from "./pages/Home.jsx";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { TripProvider } from "./components/context/tripContext.jsx";
import Signingup from "./pages/Signingup.jsx";
import MyProfile from "./pages/MyProfile.jsx";

const GOOGLE_CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID;

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/signup",
    element: <Signingup />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/planmytrip",
    element: <PlanMyTrip />,
  },
  {
    path: "/profile",
    element: <MyProfile />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID || ""}>
      <TripProvider>
        <RouterProvider router={router} />
      </TripProvider>
    </GoogleOAuthProvider>
  </StrictMode>,
);
