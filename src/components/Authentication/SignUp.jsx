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

const SignUp = () => {
  const { signUp, googleSignIn } = useTripContext();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
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
      await signUp(
        formData.name.trim(),
        formData.email.trim(),
        formData.password,
      );

      navigate("/");
    } catch (err) {
      setError(
        err.response?.data?.message ||
          "Unable to create your account. Please try again.",
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
      navigate("/");
    } catch (err) {
      setError(
        err.response?.data?.message ||
          "Google sign-up failed. Please try again.",
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main className="auth-page container-fluid">
      <div className="row min-vh-100 g-0">
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
              <FaWandMagicSparkles /> YOUR NEXT CHAPTER
            </span>

            <h1>
              Dream it.
              <br />
              Plan it.
              <br />
              <span>Go live it.</span>
            </h1>

            <p>
              Your travel story deserves more than a generic itinerary. Create
              your account and let AI help make every trip yours.
            </p>

            <div className="travel-preview">
              <div className="preview-icon">
                <FaCompass />
              </div>
              <div>
                <h6>Adventure is calling</h6>
                <p>Your personalized journey is one step away.</p>
              </div>
              <span className="preview-sparkle">✦</span>
            </div>
          </div>

          <div className="visual-footer">
            <span>More exploring. Less planning stress.</span>
            <span>✳</span>
          </div>
        </section>

        <section className="col-12 col-lg-6 auth-form-section px-2">
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
              <span className="eyebrow">START YOUR JOURNEY</span>
              <h2>Create your account.</h2>
              <p>Join TripGenie and plan something extraordinary.</p>
            </div>

            {error && (
              <div className="alert alert-danger py-2" role="alert">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Full name
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  className="form-control auth-input"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={handleChange}
                  autoComplete="name"
                  maxLength={100}
                  required
                />
              </div>

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
                <label htmlFor="password" className="form-label">
                  Password
                </label>

                <div className="password-wrapper">
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    name="password"
                    className="form-control auth-input"
                    placeholder="Create a password"
                    value={formData.password}
                    onChange={handleChange}
                    autoComplete="new-password"
                    minLength={7}
                    maxLength={15}
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

                <small className="auth-hint">
                  Use 7–15 characters, as required by the backend.
                </small>
              </div>

              <button
                type="submit"
                className="btn auth-submit w-100 mt-2"
                disabled={submitting}
              >
                {submitting ? "Creating account..." : "Create account"}
                {!submitting && <span>→</span>}
              </button>
            </form>

            <div className="auth-divider">
              <span></span>
              <small>OR SIGN UP WITH</small>
              <span></span>
            </div>

            <div className="google-login-wrapper">
              <GoogleLogin
                onSuccess={handleGoogleSuccess}
                onError={() => setError("Google sign-up was unsuccessful.")}
                theme="filled_black"
                shape="rectangular"
                size="large"
                text="signup_with"
                width="320"
              />
            </div>

            <p className="auth-switch">
              Already have an account? <Link to="/signin">Sign in</Link>
            </p>

            <p className="auth-terms">
              By creating an account, you're ready to explore new possibilities.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
};

export default SignUp;
