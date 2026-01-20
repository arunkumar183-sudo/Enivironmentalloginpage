import React, { useState } from "react";
import BgImage from "../assets/earth.image.jpg";

import { FcGoogle } from "react-icons/fc";
import { FaFacebookF, FaGithub, FaLeaf, FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";

/* ================= SOCIAL ICON ================= */
const SocialIcon = ({ icon: Icon, iconClass = "" }) => (
  <button
    type="button"
    className="
      w-10 h-10 flex items-center justify-center
      rounded-full
      bg-white
      border border-white/80
      shadow-sm
      transition
      hover:scale-105
      active:scale-95
    "
  >
    <Icon className={`text-lg ${iconClass}`} />
  </button>
);

/* ================= PASSWORD RULE ================= */
const RuleItem = ({ ok, text }) => (
  <div className="flex items-center gap-2 text-xs">
    <span className={ok ? "text-green-400" : "text-white/40"}>
      {ok ? "✔" : "✖"}
    </span>
    <span className={ok ? "text-green-200" : "text-white/60"}>
      {text}
    </span>
  </div>
);

export default function EnvironmentSignup() {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);

  const rules = {
    length: password.length >= 8,
    uppercase: /[A-Z]/.test(password),
    number: /[0-9]/.test(password),
    special: /[^A-Za-z0-9]/.test(password),
  };

  const showRules = passwordFocused || password.length > 0;

  return (
    <div className="relative min-h-screen overflow-hidden">

      {/* BACKGROUND */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${BgImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-green-900/25 to-green-900/10" />

      <div className="relative min-h-screen flex items-center">

        {/* LEFT CONTENT */}
        <div className="hidden md:flex w-1/2 px-20">
          <div className="max-w-lg text-white space-y-5">
            <FaLeaf className="text-4xl text-green-300" />
            <h2 className="text-4xl font-extrabold leading-tight">
              Protect the Earth,
              <br />
              <span className="text-green-300">Empower the Future.</span>
            </h2>
            <p className="text-base text-white/80">
              Sustainability is not optional. It’s our responsibility.
            </p>
            <div className="h-1 w-20 bg-green-400 rounded-full" />
          </div>
        </div>

        {/* RIGHT CARD */}
        <div className="w-full md:w-1/2 flex justify-end pl-20 md:pl-36 pr-6">
          <div className="relative w-full max-w-md">

            <div className="absolute -inset-[1.5px] rounded-[26px] bg-gradient-to-br from-green-400/40 via-transparent to-emerald-400/30" />
            <div className="absolute inset-[6px] rounded-[22px] border border-white/10 pointer-events-none" />

            <div className="
              relative rounded-[24px]
              bg-black/45 backdrop-blur-xl
              border border-white/20
              shadow-[0_30px_90px_rgba(0,0,0,0.7)]
              p-6
            ">

              {/* HEADER */}
              <div className="mb-5 pb-4 border-b border-green-400/30">
                <div className="flex items-center justify-between">
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
              </div>

              {/* FORM */}
              <form className="grid grid-cols-2 gap-4">

                <input
                  placeholder="Full Name"
                  className="px-3 py-2.5 rounded-lg bg-black/40 text-white border border-white/20 outline-none focus:ring-1 focus:ring-green-400"
                />

                <input
                  placeholder="Email"
                  className="px-3 py-2.5 rounded-lg bg-black/40 text-white border border-white/20 outline-none focus:ring-1 focus:ring-green-400"
                />

                <input
                  placeholder="Username"
                  className="col-span-2 px-3 py-2.5 rounded-lg bg-black/40 text-white border border-white/20 outline-none focus:ring-1 focus:ring-green-400"
                />

                {/* PASSWORD */}
                <div className="col-span-2 space-y-2">
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      onFocus={() => setPasswordFocused(true)}
                      onBlur={() => setPasswordFocused(false)}
                      className="w-full px-3 py-2.5 pr-10 rounded-lg bg-black/40 text-white border border-white/20 outline-none focus:ring-1 focus:ring-green-400"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-white/60 hover:text-white"
                    >
                      {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </button>
                  </div>

                  {showRules && (
                    <div className="pl-1 space-y-1">
                      <RuleItem ok={rules.length} text="At least 8 characters" />
                      <RuleItem ok={rules.uppercase} text="One uppercase letter" />
                      <RuleItem ok={rules.number} text="One number" />
                      <RuleItem ok={rules.special} text="One special character" />
                    </div>
                  )}
                </div>

                <input
                  type="password"
                  placeholder="Confirm Password"
                  className="col-span-2 px-3 py-2.5 rounded-lg bg-black/40 text-white border border-white/20 outline-none focus:ring-1 focus:ring-green-400"
                />

                {/* CREATE ACCOUNT */}
                <button
                  className="
                    col-span-2 mt-2 py-2.5 rounded-lg
                    font-semibold text-white
                    bg-gradient-to-r from-green-500 to-emerald-600
                    hover:from-green-600 hover:to-emerald-700
                    transition
                  "
                >
                  Create Account
                </button>

                {/* OR */}
                <div className="col-span-2 flex items-center gap-3 mt-4">
                  <div className="flex-1 h-px bg-white/20" />
                  <span className="text-xs text-white/60">OR</span>
                  <div className="flex-1 h-px bg-white/20" />
                </div>

                {/* SOCIAL ICONS */}
                <div className="col-span-2 mt-4 flex justify-center gap-4">
                  <SocialIcon icon={FcGoogle} />
                  <SocialIcon icon={FaFacebookF} iconClass="text-blue-500" />
                  <SocialIcon icon={FaGithub} iconClass="text-black" />
                </div>

                {/* LAST LINE */}
                <p className="col-span-2 mt-4 text-xs text-gray-300 text-center">
                  Already have an account?{" "}
                  <Link to="/" className="text-green-400 font-semibold hover:underline">
                    Sign In
                  </Link>
                </p>

              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
