import React, { useState } from "react";
import LoginIllustration from "../assets/login4.jpg";
import RightBg from "../assets/bgi.image.jpg";

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
      w-full flex items-center justify-center gap-2
      py-2 rounded-lg
      bg-black/45
      border border-white/20
      text-white text-xs font-medium
      hover:bg-black/60
      transition
    "
  >
    <Icon className="text-sm" />
    {text}
  </button>
);

/* ================= INPUT ================= */
const IconInput = ({
  id,
  type = "text",
  placeholder,
  value,
  onChange,
  icon: Icon,
}) => (
  <div className="relative">
    <Icon className="absolute left-4 top-1/2 -translate-y-1/2 text-green-400/70 text-sm" />
    <input
      id={id}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required
      className="
        w-full pl-10 pr-4 py-3 rounded-xl
        bg-black/35 text-white
        border border-green-500/25
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
        <div className="absolute inset-0 bg-black/45" />

        {/* 🌿 BIGGER QUOTE CARD */}
        <div className="absolute left-44 top-1/2 -translate-y-1/2 max-w-2xl">

          {/* glow */}
          <div className="absolute -inset-12 bg-green-400/5 blur-3xl rounded-full" />

          <div
            className="
              relative
              rounded-3xl
              bg-white/6
              backdrop-blur-sm
              border border-white/25
              px-12 py-12
              text-white
            "
          >
            <div className="flex gap-8 items-start">
              <div className="w-[4px] bg-gradient-to-b from-green-400 to-emerald-300 rounded-full" />

              <div>
                <FaLeaf className="text-5xl text-green-400 mb-6" />

                <h2 className="text-5xl font-extrabold leading-tight">
                  The future
                  <br />
                  is shaped by
                  <br />
                  <span className="text-green-300">
                    what we protect.
                  </span>
                </h2>

                <p className="mt-6 text-white/80 text-lg leading-relaxed">
                  Every action we take today defines the world
                  that tomorrow must live in.
                </p>

                <div className="mt-5 text-xs tracking-widest uppercase text-green-300/70">
                  Environmental Responsibility
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ================= RIGHT LOGIN ================= */}
      <div className="relative w-full md:w-4/12 flex items-center justify-center p-8">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${RightBg})` }}
        />
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

        <div className="relative w-full max-w-md">

          <div className="absolute -inset-[1px] rounded-[26px] border border-green-400/30" />
          <div className="absolute inset-[6px] rounded-[20px] border border-white/10 pointer-events-none" />

          <div className="relative rounded-[24px] bg-green-900/25 backdrop-blur-xl px-8 py-8 text-white">

            {/* Header */}
            <div className="mb-6 pb-4 border-b border-green-500/25">
              <div className="flex items-center gap-3">
                <FaLeaf className="text-3xl text-green-400" />
                <div>
                  <h1 className="text-xl font-bold">
                    {showForgot ? "Reset Access" : "Environment Portal"}
                  </h1>
                  <p className="text-green-100 text-xs">
                    {showForgot
                      ? "Recover your credentials securely"
                      : "Authorized & responsible access"}
                  </p>
                </div>
              </div>
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

                  <div className="flex justify-between items-center pt-1">
                    <span className="text-xs text-green-200/70">
                      Secure login enabled
                    </span>
                    <button
                      type="button"
                      onClick={() => setShowForgot(true)}
                      className="text-xs text-green-300 hover:text-green-400"
                    >
                      Forgot password?
                    </button>
                  </div>

                  <button className="w-full mt-2 py-3 rounded-xl bg-green-400 text-black font-semibold hover:bg-green-500 transition">
                    Sign In
                  </button>
                </form>

                <div className="flex items-center gap-3 my-5">
                  <div className="flex-1 h-px bg-green-500/30" />
                  <span className="text-xs text-green-100">OR</span>
                  <div className="flex-1 h-px bg-green-500/30" />
                </div>

                <div className="space-y-2">
                  <SocialButton icon={FcGoogle} text="Google" />
                  <SocialButton icon={FaFacebookF} text="Facebook" />
                  <SocialButton icon={FaGithub} text="GitHub" />
                </div>
              </>
            )}

            {showForgot && (
              <form className="space-y-4">
                <p className="text-sm text-white/70 text-center">
                  Enter your registered email to receive a reset link.
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
              <p className="text-center mt-5 text-xs text-green-100">
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
