
import React from "react";
import { useNavigate } from "react-router-dom";
import {
  FaUser,
  FaEnvelope,
  FaShieldHalved,
  FaCalendarDays,
  FaArrowRightFromBracket,
  FaCompass,
} from "react-icons/fa6";
import { useTripContext } from "../context/tripContext";
import "./Myprofile.css";

const Myprofile = () => {
  const { user, loading, signOut } = useTripContext();
  const navigate = useNavigate();

  const handleLogout = () => {
    signOut();
    navigate("/", { replace: true });
  };

  const formatDate = (date) => {
    if (!date) return "Not available";

    return new Date(date).toLocaleDateString("en-IN", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  if (loading) {
    return (
      <div className="profile-page d-flex justify-content-center align-items-center">
        <div className="text-center">
          <div className="spinner-border text-success mb-3" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <p className="text-secondary mb-0">Loading your profile...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="profile-page d-flex flex-column justify-content-center align-items-center text-center p-4">
        <FaCompass className="profile-empty-icon mb-3" />
        <h3>You're not signed in</h3>
        <p className="text-secondary">
          Sign in to view your TripGenie profile.
        </p>
        <button
          className="btn profile-primary-btn px-4"
          onClick={() => navigate("/signin")}
        >
          Go to sign in
        </button>
      </div>
    );
  }

  const initials = (user.name || "Traveler")
    .trim()
    .split(/\s+/)
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  const profileDetails = [
    {
      label: "Full name",
      value: user.name || "Not available",
      icon: <FaUser />,
    },
    {
      label: "Email address",
      value: user.email || "Not available",
      icon: <FaEnvelope />,
    },
    {
      label: "Sign-in method",
      value:
        user.authType === "google"
          ? "Google"
          : user.authType === "email"
            ? "Email and password"
            : "Not available",
      icon: <FaShieldHalved />,
    },
    {
      label: "Member since",
      value: formatDate(user.createdAt),
      icon: <FaCalendarDays />,
    },
  ];

  return (
    <main className="profile-page container-fluid py-5 px-3 px-md-4">
      <div className="profile-container mx-auto">
        {/* Page heading */}
        <div className="d-flex align-items-center gap-3 mb-4">
          <div className="profile-heading-icon">
            <FaUser />
          </div>

          <div>
            <h1 className="profile-page-title mb-1">My Profile</h1>
            <p className="text-secondary mb-0">
              Manage your account and personal details.
            </p>
          </div>
        </div>

        {/* Profile banner */}
        <section className="profile-banner rounded-4 p-4 p-md-5 mb-4">
          <div className="row align-items-center g-4">
            <div className="col-12 col-md">
              <div className="d-flex flex-column flex-sm-row align-items-center align-items-sm-center gap-3 text-center text-sm-start">
                <div className="profile-avatar flex-shrink-0">
                  {initials}
                </div>

                <div>
                  <span className="profile-member-badge">
                    <span className="profile-status-dot"></span>
                    TRIPGENIE MEMBER
                  </span>

                  <h2 className="profile-user-name mt-2 mb-1">
                    {user.name}
                  </h2>

                  <p className="profile-user-email mb-0">
                    {user.email}
                  </p>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-auto text-center">
              <div className="profile-travel-icon mx-auto mb-2">
                <FaCompass />
              </div>
              <span className="profile-travel-caption">
                Ready for your next adventure?
              </span>
            </div>
          </div>
        </section>

        {/* Account details */}
        <section className="profile-card rounded-4 p-4 p-md-5 mb-4">
          <div className="mb-4">
            <h3 className="profile-section-title mb-1">
              Personal information
            </h3>
            <p className="text-secondary small mb-0">
              Your account details at a glance.
            </p>
          </div>

          <div className="row g-3">
            {profileDetails.map((detail) => (
              <div className="col-12 col-md-6" key={detail.label}>
                <div className="profile-detail h-100 d-flex align-items-start gap-3 p-3">
                  <div className="profile-detail-icon flex-shrink-0">
                    {detail.icon}
                  </div>

                  <div className="overflow-hidden">
                    <p className="profile-detail-label mb-1">
                      {detail.label}
                    </p>
                    <p className="profile-detail-value mb-0 text-break">
                      {detail.value}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Account actions */}
        <section className="profile-card rounded-4 p-4 p-md-5">
          <div className="row align-items-center g-3">
            <div className="col">
              <h3 className="profile-section-title mb-1">
                Account actions
              </h3>
              <p className="text-secondary small mb-0">
                Finished planning for now? You can safely sign out.
              </p>
            </div>

            <div className="col-12 col-sm-auto">
              <button
                type="button"
                className="btn profile-logout-btn w-100"
                onClick={handleLogout}
              >
                <FaArrowRightFromBracket className="me-2" />
                Log out
              </button>
            </div>
          </div>
        </section>

        <p className="profile-footer text-center mt-4 mb-0">
          <FaCompass className="me-2" />
          Your next journey begins with TripGenie.
        </p>
      </div>
    </main>
  );
};

export default Myprofile;
