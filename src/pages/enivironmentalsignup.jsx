import React from "react";
import BgImage from "../assets/earth.image.jpg";

import { FcGoogle } from "react-icons/fc";
import { FaFacebookF, FaGithub, FaLeaf } from "react-icons/fa";
import { Link } from "react-router-dom";

/* ================= SOCIAL BUTTON ================= */
const SocialButton = ({ icon: Icon, text, ring }) => (
  <button
    type="button"
    className="
      flex items-center justify-center gap-3
      w-full py-2 rounded-lg
      bg-black/40 backdrop-blur-md
      border border-white/20
      text-white text-sm font-medium
      transition-all
      hover:bg-black/55 hover:shadow-md
    "
  >
    <Icon className="text-base" />
    {text}
  </button>
);

export default function EnvironmentSignup() {
  return (
    <div className="relative min-h-screen overflow-hidden">

      {/* ===== BACKGROUND ===== */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${BgImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/45 via-green-900/30 to-green-900/20" />

      <div className="relative min-h-screen flex items-center">

        {/* ===== LEFT CONTENT ===== */}
        <div className="hidden md:flex w-1/2 px-20">
          <div className="max-w-lg text-white space-y-5">
            <FaLeaf className="text-5xl text-green-300" />
            <h2 className="text-5xl font-extrabold leading-tight">
              Protect the Earth,
              <br />
              <span className="text-green-300">Empower the Future.</span>
            </h2>
            <p className="text-lg text-green-100">
              Sustainability is not optional. It’s our responsibility.
            </p>
            <div className="h-1 w-20 bg-green-400 rounded-full" />
          </div>
        </div>

        {/* ===== RIGHT CARD ===== */}
        <div className="w-full md:w-1/2 flex px-8 md:px-24">

          <div
            className="
              ml-auto
              w-full max-w-md
              rounded-[24px]
              bg-black/50
              backdrop-blur-xl
              border border-white/20
              shadow-[0_25px_80px_rgba(0,0,0,0.6)]
              p-6
            "
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-5">
              <div>
                <h1 className="text-xl font-bold text-white">
                  Create Account
                </h1>
                <p className="text-green-200 text-sm">
                  Environment Governance Portal
                </p>
              </div>
              <FaLeaf className="text-2xl text-emerald-400" />
            </div>

            {/* Form */}
            <form className="grid grid-cols-2 gap-4">
              <input
                placeholder="Full Name"
                className="px-3 py-2.5 rounded-lg bg-black/40 text-white border border-white/20 placeholder-gray-400 focus:ring-2 focus:ring-green-400 outline-none"
              />
              <input
                placeholder="Email"
                className="px-3 py-2.5 rounded-lg bg-black/40 text-white border border-white/20 placeholder-gray-400 focus:ring-2 focus:ring-green-400 outline-none"
              />
              <input
                placeholder="Username"
                className="col-span-2 px-3 py-2.5 rounded-lg bg-black/40 text-white border border-white/20 placeholder-gray-400 focus:ring-2 focus:ring-green-400 outline-none"
              />
              <input
                type="password"
                placeholder="Password"
                className="px-3 py-2.5 rounded-lg bg-black/40 text-white border border-white/20 placeholder-gray-400 focus:ring-2 focus:ring-green-400 outline-none"
              />
              <input
                type="password"
                placeholder="Confirm Password"
                className="px-3 py-2.5 rounded-lg bg-black/40 text-white border border-white/20 placeholder-gray-400 focus:ring-2 focus:ring-green-400 outline-none"
              />

              <button
                className="
                  col-span-2 mt-1 py-2.5 rounded-lg
                  font-semibold text-white
                  bg-gradient-to-r from-green-500 to-emerald-600
                  hover:from-green-600 hover:to-emerald-700
                  transition-all
                "
              >
                Create Account
              </button>
            </form>

            {/* Divider */}
            <div className="flex items-center gap-4 my-4">
              <div className="flex-1 h-px bg-white/20" />
              <span className="text-xs text-gray-300">OR</span>
              <div className="flex-1 h-px bg-white/20" />
            </div>

            {/* Social */}
            <div className="space-y-2">
              <SocialButton icon={FcGoogle} text="Continue with Google" />
              <SocialButton icon={FaFacebookF} text="Continue with Facebook" />
              <SocialButton icon={FaGithub} text="Continue with GitHub" />
            </div>

            {/* Footer */}
            <p className="mt-4 text-xs text-gray-300 text-center">
              Already have an account?{" "}
              <Link to="/" className="text-green-400 font-semibold hover:underline">
                Sign In
              </Link>
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
