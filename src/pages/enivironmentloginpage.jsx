// src/components/EnvironmentLogin.jsx
import React, { useState } from "react";
import LoginIllustration from "../assets/eimage.jpg";
import RightBg from "../assets/bgi.image.jpg";

export default function EnvironmentLogin() {
  const [isSignup, setIsSignup] = useState(false);
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });

  const handleLoginChange = (e) => {
    const { id, value } = e.target;
    setLoginData((prev) => ({ ...prev, [id]: value }));
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    console.log("Login:", loginData);
  };

  return (
    <div className="min-h-screen flex bg-gradient-to-br from-green-200 via-lime-100 to-yellow-100">

      {/* ================= LEFT SIDE (CLEAR IMAGE) ================= */}
      <div className="hidden md:flex w-1/2 relative">
        <img
          src={LoginIllustration}
          alt="Environment"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-green-900/50 to-green-900/20 flex items-center justify-center px-12">
          <div className="text-white text-center space-y-4">
            <h2 className="text-4xl font-extrabold leading-tight">
              Protect Nature.<br /> Empower Tomorrow.
            </h2>
            <p className="text-lg text-green-100">
              Sustainable access to environmental governance
            </p>
          </div>
        </div>
      </div>

      {/* ================= RIGHT SIDE (LIGHT BLUR ONLY) ================= */}
      <div className="relative w-full md:w-1/2 flex items-center justify-center p-6 overflow-hidden">

        {/* Right background – VERY LIGHT blur */}
        <div
          className="absolute inset-0 bg-cover bg-center scale-105 blur-sm"
          style={{ backgroundImage: `url(${RightBg})` }}
        ></div>

        {/* Soft gradient overlay (keeps image visible) */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-white/70 to-white/60"></div>

        {/* ================= CARD ================= */}
        <div className="relative w-full max-w-md rounded-3xl bg-white/85 backdrop-blur-md
                        shadow-[0_20px_60px_rgba(0,0,0,0.18)]
                        border border-white/50
                        transition-all duration-300 hover:shadow-[0_30px_80px_rgba(0,0,0,0.22)]
                        p-10">

          {/* ================= LOGIN ================= */}
          {!isSignup && (
            <>
              <div className="text-center mb-8">
                <h1 className="text-4xl font-extrabold text-gray-800">
                  Environment Portal
                </h1>
                <p className="text-gray-600 mt-2">
                  Secure & responsible access 🌍
                </p>
              </div>

              <form onSubmit={handleLoginSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">
                    Environment / Username
                  </label>
                  <input
                    type="text"
                    id="username"
                    value={loginData.username}
                    onChange={handleLoginChange}
                    className="w-full rounded-xl border border-gray-300 py-3 px-4
                               focus:ring-2 focus:ring-green-500 focus:border-green-500
                               transition-all shadow-sm"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    value={loginData.password}
                    onChange={handleLoginChange}
                    className="w-full rounded-xl border border-gray-300 py-3 px-4
                               focus:ring-2 focus:ring-green-500 focus:border-green-500
                               transition-all shadow-sm"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl font-semibold text-white
                             bg-gradient-to-r from-green-600 to-emerald-500
                             hover:from-green-700 hover:to-emerald-600
                             transition-all shadow-lg"
                >
                  Sign In
                </button>
              </form>

              <p className="mt-8 text-center text-sm text-gray-600">
                Need an account?{" "}
                <button
                  type="button"
                  onClick={() => setIsSignup(true)}
                  className="text-green-700 font-semibold hover:underline"
                >
                  Sign Up
                </button>
              </p>
            </>
          )}

          {/* ================= SIGNUP ================= */}
          {isSignup && (
            <>
              <div className="text-center mb-8">
                <h1 className="text-3xl font-extrabold text-gray-800">
                  Create Account
                </h1>
                <p className="text-gray-600 mt-2">
                  Join the Environment Portal 🌱
                </p>
              </div>

              <form className="space-y-4">
                <input className="w-full p-3 rounded-xl border" placeholder="Full Name" />
                <input className="w-full p-3 rounded-xl border" placeholder="Email" />
                <input className="w-full p-3 rounded-xl border" placeholder="Username" />
                <input type="password" className="w-full p-3 rounded-xl border" placeholder="Password" />
                <input type="password" className="w-full p-3 rounded-xl border" placeholder="Confirm Password" />

                <button className="w-full bg-emerald-600 text-white py-3 rounded-xl font-semibold hover:bg-emerald-700 transition-all shadow-lg">
                  Create Account
                </button>
              </form>

              <p className="mt-6 text-center text-sm text-gray-600">
                Already have an account?{" "}
                <button
                  type="button"
                  onClick={() => setIsSignup(false)}
                  className="text-green-700 font-semibold hover:underline"
                >
                  Sign In
                </button>
              </p>
            </>
          )}

        </div>
      </div>
    </div>
  );
}
