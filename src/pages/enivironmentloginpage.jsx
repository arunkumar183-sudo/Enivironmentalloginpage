import React, { useState } from "react";
import LoginIllustration from "../assets/login4.jpg";
import RightBg from "../assets/k.image.jpg";

import { FcGoogle } from "react-icons/fc";
import {
  FaFacebookF,
  FaGithub,
  FaLeaf,
  FaUser,
  FaLock,
  FaEnvelope,
} from "react-icons/fa";

/* ================= SOCIAL BUTTON ================= */
const SocialButton = ({ icon: Icon, text }) => (
  <button
    type="button"
    className="
      w-full flex items-center justify-center gap-3
      py-2.5 rounded-xl
      bg-black/50
      border border-green-500/25
      text-white text-sm font-medium
      hover:bg-black/70
      transition
    "
  >
    <Icon className="text-lg" />
    {text}
  </button>
);

/* ================= INPUT WITH ICON ================= */
const IconInput = ({
  id,
  type = "text",
  placeholder,
  value,
  onChange,
  icon: Icon,
}) => (
  <div className="relative">
    <Icon className="absolute left-4 top-1/2 -translate-y-1/2 text-green-400/60 text-sm" />
    <input
      id={id}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required
      className="
        w-full pl-10 pr-4 py-3 rounded-xl
        bg-black/45 text-white
        border border-green-500/30
        placeholder-gray-400
        focus:ring-2 focus:ring-green-400
        outline-none
      "
    />
  </div>
);

export default function SignIn() {
  const [showForgot, setShowForgot] = useState(false);
  const [loginData, setLoginData] = useState({ username: "", password: "" });
  const [email, setEmail] = useState("");

  return (
    <div className="min-h-screen flex overflow-hidden bg-black">

      {/* ================= LEFT IMAGE ================= */}
      <div className="hidden md:flex w-8/12 relative">
        <img
          src={LoginIllustration}
          alt="Environment"
          className="w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50" />

        {/* 🌿 STYLED QUOTE (EMBEDDED INTO IMAGE) */}
        <div className="absolute left-24 top-1/2 -translate-y-1/2 flex gap-6 text-white max-w-xl">

          {/* Accent line */}
          <div className="w-[3px] bg-green-400/80 rounded-full" />

          <div>
            <FaLeaf className="text-4xl text-green-400 mb-4" />

            <h2 className="text-5xl font-extrabold leading-tight">
              The future
              <br />
              is shaped by
              <br />
              <span className="text-green-300">
                what we protect.
              </span>
            </h2>

            <p className="mt-5 text-white/75 text-base leading-relaxed max-w-lg">
              Every action we take today defines the world
              that tomorrow must live in.
            </p>

            <p className="mt-3 text-xs tracking-widest uppercase text-green-300/80">
              Environmental Responsibility
            </p>
          </div>
        </div>
      </div>

      {/* ================= RIGHT LOGIN CARD ================= */}
      <div className="relative w-full md:w-4/12 flex items-center justify-center p-8">

        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${RightBg})` }}
        />
        <div className="absolute inset-0 bg-black/45 backdrop-blur-sm" />

        <div className="relative w-full max-w-lg rounded-[32px] overflow-hidden">
          <div className="absolute inset-0 border border-green-500/30 rounded-[32px]" />

          <div className="relative rounded-[32px] bg-green-900/25 backdrop-blur-xl px-10 py-10 text-white">

            {/* Header */}
            <div className="text-center mb-8">
              <FaLeaf className="text-3xl text-green-400 mx-auto mb-2" />
              <h1 className="text-2xl font-bold">
                {showForgot ? "Reset Password" : "Environment Portal"}
              </h1>
              <p className="text-green-100 text-sm">
                {showForgot
                  ? "Enter your email to reset your password"
                  : "Secure & responsible access"}
              </p>
            </div>

            {!showForgot && (
              <>
                <form className="space-y-4">
                  <IconInput
                    id="username"
                    placeholder="Username"
                    value={loginData.username}
                    onChange={(e) =>
                      setLoginData({ ...loginData, username: e.target.value })
                    }
                    icon={FaUser}
                  />

                  <IconInput
                    id="password"
                    type="password"
                    placeholder="Password"
                    value={loginData.password}
                    onChange={(e) =>
                      setLoginData({ ...loginData, password: e.target.value })
                    }
                    icon={FaLock}
                  />

                  <div className="flex justify-end">
                    <button
                      type="button"
                      onClick={() => setShowForgot(true)}
                      className="text-xs text-green-300 hover:text-green-400"
                    >
                      Forgot password?
                    </button>
                  </div>

                  <button className="w-full py-3 rounded-xl bg-green-400 text-black font-semibold hover:bg-green-500 transition">
                    Sign In
                  </button>
                </form>

                <div className="flex items-center gap-3 my-6">
                  <div className="flex-1 h-px bg-green-500/30" />
                  <span className="text-xs text-green-100">OR</span>
                  <div className="flex-1 h-px bg-green-500/30" />
                </div>

                <div className="space-y-3">
                  <SocialButton icon={FcGoogle} text="Continue with Google" />
                  <SocialButton icon={FaFacebookF} text="Continue with Facebook" />
                  <SocialButton icon={FaGithub} text="Continue with GitHub" />
                </div>
              </>
            )}

            {showForgot && (
              <form className="space-y-4">
                <p className="text-sm text-white/70 text-center">
                  We’ll send a password reset link to your registered email.
                </p>

                <IconInput
                  id="email"
                  type="email"
                  placeholder="Registered Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  icon={FaEnvelope}
                />

                <button className="w-full py-3 rounded-xl bg-green-400 text-black font-semibold hover:bg-green-500 transition">
                  Send Reset Link
                </button>

                <button
                  type="button"
                  onClick={() => setShowForgot(false)}
                  className="w-full text-xs text-green-300 hover:text-green-400"
                >
                  ← Back to Sign In
                </button>
              </form>
            )}

            {!showForgot && (
              <p className="text-center mt-6 text-xs text-green-100">
                Don’t have an account?{" "}
                <a href="/signup" className="text-green-400 font-semibold">
                  Sign Up
                </a>
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
