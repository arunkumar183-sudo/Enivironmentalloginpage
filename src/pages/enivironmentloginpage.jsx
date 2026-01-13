import React, { useState } from "react";
import LoginIllustration from "../assets/login4.jpg";
import RightBg from "../assets/k.image.jpg";

import { FcGoogle } from "react-icons/fc";
import { FaFacebookF, FaGithub, FaLeaf } from "react-icons/fa";

/* ================= SOCIAL BUTTON ================= */
const SocialButton = ({ icon: Icon, text }) => (
  <button
    type="button"
    className="
      w-full flex items-center justify-center gap-3
      py-2.5 rounded-xl
      bg-black/55
      border border-green-500/25
      text-white text-sm font-medium
      hover:bg-black/70
      hover:border-green-400
      transition-all
    "
  >
    <Icon className="text-lg" />
    {text}
  </button>
);

export default function SignIn() {
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setLoginData((p) => ({ ...p, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login:", loginData);
  };

  return (
    <div className="min-h-screen flex overflow-hidden bg-black">

      {/* ================= LEFT IMAGE ================= */}
      <div className="hidden md:flex w-8/12 relative">
        <img
          src={LoginIllustration}
          alt="Environment"
          className="w-full h-full object-cover"
        />

        {/* Light overlay – keeps image clear */}
        <div className="absolute inset-0 bg-black/30" />

        {/* Quote */}
        <div className="absolute inset-0 flex items-center px-28">
          <div className="max-w-xl space-y-6 text-white">

            <FaLeaf className="text-5xl text-green-400 drop-shadow-lg" />

            <h2 className="text-4xl font-extrabold leading-tight">
              Protect Nature.
              <br />
              <span className="text-white">
                Empower Tomorrow.
              </span>
            </h2>

            <p className="text-white/90 text-lg leading-relaxed">
              A secure digital gateway for environmental governance.
            </p>

            <div className="h-1 w-24 bg-green-400 rounded-full" />
          </div>
        </div>
      </div>

      {/* ================= RIGHT LOGIN ================= */}
      <div className="relative w-full md:w-4/12 flex items-center justify-center p-8">

        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${RightBg})` }}
        />
        <div className="absolute inset-0 bg-black/35 backdrop-blur-sm" />

        {/* ================= GLASS CARD ================= */}
        <div className="relative w-full max-w-lg rounded-[34px] overflow-hidden">

          {/* Border glow */}
          <div className="absolute inset-0 rounded-[34px] border border-green-500/30 shadow-[0_0_60px_rgba(34,197,94,0.15)]" />

          {/* Card body */}
          <div className="relative rounded-[34px] bg-green-900/30 backdrop-blur-2xl">

            <div className="px-10 py-10 text-white">

              {/* Header */}
              <div className="text-center mb-8">
                <FaLeaf className="text-3xl text-green-400 mx-auto mb-2" />
                <h1 className="text-2xl font-extrabold">
                  Environment Portal
                </h1>
                <p className="text-green-100 text-sm">
                  Secure & responsible access
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  id="username"
                  placeholder="Username"
                  value={loginData.username}
                  onChange={handleChange}
                  className="
                    w-full px-4 py-3 rounded-xl
                    bg-black/50
                    text-white
                    border border-green-500/30
                    placeholder-gray-400
                    focus:ring-2 focus:ring-green-400
                    outline-none
                  "
                  required
                />

                <input
                  id="password"
                  type="password"
                  placeholder="Password"
                  value={loginData.password}
                  onChange={handleChange}
                  className="
                    w-full px-4 py-3 rounded-xl
                    bg-black/50
                    text-white
                    border border-green-500/30
                    placeholder-gray-400
                    focus:ring-2 focus:ring-green-400
                    outline-none
                  "
                  required
                />

                <button
                  className="
                    w-full py-3 rounded-xl
                    font-semibold
                    text-black
                    bg-green-400
                    hover:bg-green-500
                    transition-all
                  "
                >
                  Sign In
                </button>
              </form>

              {/* Divider */}
              <div className="flex items-center gap-3 my-6">
                <div className="flex-1 h-px bg-green-500/30" />
                <span className="text-xs text-green-100">OR</span>
                <div className="flex-1 h-px bg-green-500/30" />
              </div>

              {/* Social */}
              <div className="space-y-3">
                <SocialButton icon={FcGoogle} text="Continue with Google" />
                <SocialButton icon={FaFacebookF} text="Continue with Facebook" />
                <SocialButton icon={FaGithub} text="Continue with GitHub" />
              </div>

              {/* Footer */}
              <p className="text-center mt-6 text-xs text-green-100">
                Don’t have an account?{" "}
                <a href="/signup" className="text-green-400 font-semibold">
                  Sign Up
                </a>
              </p>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
