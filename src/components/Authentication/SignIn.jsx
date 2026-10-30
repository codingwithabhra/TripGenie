import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";
import {
  FaCompass,
  FaEye,
  FaEyeSlash,
  FaWandMagicSparkles,
} from "react-icons/fa6";
import { useTripContext } from "../context/tripContext";
import "./Auth.css";

const SignIn = () => {
  const { signIn, googleSignIn } = useTripContext();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSubmitting(true);

    try {
      await signIn(formData.email, formData.password);
      navigate("/home");
    } catch (err) {
      setError(
        err.response?.data?.message || "Unable to sign in. Please try again.",
      );
    } finally {
      setSubmitting(false);
    }
  };

  const handleGoogleSuccess = async (credentialResponse) => {
    if (!credentialResponse.credential) {
      setError("Google did not return a valid credential.");
      return;
    }

    setError("");
    setSubmitting(true);

    try {
      await googleSignIn(credentialResponse.credential);
      navigate("/home");
    } catch (err) {
      setError(
        err.response?.data?.message ||
          "Google sign-in failed. Please try again.",
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main className="auth-page">
      <div className="row min-vh-100 g-0">
        {/* Left welcome panel */}
        <section className="col-lg-6 d-none d-lg-flex auth-visual px-5 px-lg-4">
          <div className="auth-brand">
            {/* Full Logo */}
            <img
              src="/TripGenie_logo.png"
              alt="TripGenie Logo"
              style={{ maxWidth: "150px", objectFit: "cover" }}
            />
          </div>

          <div className="visual-content">
            <span className="visual-badge">
              <FaWandMagicSparkles /> YOUR AI TRAVEL COMPANION
            </span>

            <h1>
              Your next
              <br />
              adventure starts
              <br />
              <span>with a little magic.</span>
            </h1>

            <p>
              Tell us your travel dreams. Let AI turn them into unforgettable
              journeys, personalized just for you.
            </p>

            <div className="travel-preview">
              <div className="preview-icon">
                <FaCompass />
              </div>
              <div>
                <h6>Your journey, reimagined</h6>
                <p>Discover places. Plan smarter. Travel better.</p>
              </div>
              <span className="preview-sparkle">✦</span>
            </div>
          </div>

          <div className="visual-footer">
            <span>Made for curious minds and wandering souls.</span>
            <span>✳</span>
          </div>
        </section>

        {/* Right sign-in form */}
        <section className="col-12 col-lg-6 auth-form-section px-3">
          <div className="mobile-brand d-lg-none">
            {/* Full Logo */}
            <img
              src="/TripGenie_logo.png"
              alt="TripGenie Logo"
              style={{ maxWidth: "130px", objectFit: "cover" }}
            />
          </div>

          <div className="auth-form-wrapper">
            <div className="auth-heading">
              <span className="eyebrow">WELCOME BACK</span>
              <h2>Let's get you going.</h2>
              <p>Sign in to continue planning your next adventure.</p>
            </div>

            {error && (
              <div className="alert alert-danger py-2" role="alert">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email address
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  className="form-control auth-input"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  autoComplete="email"
                  required
                />
              </div>

              <div className="mb-3">
                <div className="d-flex justify-content-between">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                </div>

                <div className="password-wrapper">
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    name="password"
                    className="form-control auth-input"
                    placeholder="Enter your password"
                    value={formData.password}
                    onChange={handleChange}
                    autoComplete="current-password"
                    required
                  />
                  <button
                    type="button"
                    className="password-toggle"
                    onClick={() => setShowPassword(!showPassword)}
                    aria-label={
                      showPassword ? "Hide password" : "Show password"
                    }
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
              </div>

              <button
                type="submit"
                className="btn auth-submit w-100 mt-2"
                disabled={submitting}
              >
                {submitting ? "Signing in..." : "Sign in"}
                {!submitting && <span>→</span>}
              </button>
            </form>

            <div className="auth-divider">
              <span></span>
              <small>OR CONTINUE WITH</small>
              <span></span>
            </div>

            <div className="google-login-wrapper">
              <GoogleLogin
                onSuccess={handleGoogleSuccess}
                onError={() => setError("Google sign-in was unsuccessful.")}
                theme="filled_black"
                shape="rectangular"
                size="large"
                text="continue_with"
                width="320"
              />
            </div>

            <p className="auth-switch">
              New to TripGenie? <Link to="/signup">Create an account</Link>
            </p>

            <p className="auth-terms">
              By continuing, you agree to use TripGenie responsibly.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
};

export default SignIn;
