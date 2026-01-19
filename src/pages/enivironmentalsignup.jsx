import React, { useState } from "react";
import BgImage from "../assets/earth.image.jpg";

import { FcGoogle } from "react-icons/fc";
import { FaFacebookF, FaGithub, FaLeaf } from "react-icons/fa";
import { Link } from "react-router-dom";

/* ================= SOCIAL BUTTON ================= */
const SocialButton = ({ icon: Icon, text }) => (
  <button
    type="button"
    className="
      flex items-center justify-center gap-3
      w-full py-2 rounded-lg
      bg-black/35 backdrop-blur-md
      border border-white/20
      text-white text-sm font-medium
      transition
      hover:bg-black/55 hover:border-green-400/40
    "
  >
    <Icon className="text-base" />
    {text}
  </button>
);

/* ================= PASSWORD RULE ================= */
const RuleItem = ({ ok, text }) => (
  <div className="flex items-center gap-2 text-xs transition-all">
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

  const rules = {
    length: password.length >= 8,
    uppercase: /[A-Z]/.test(password),
    number: /[0-9]/.test(password),
    special: /[^A-Za-z0-9]/.test(password),
  };

  return (
    <div className="relative min-h-screen overflow-hidden">

      {/* BACKGROUND */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${BgImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-green-900/25 to-green-900/10" />

      <div className="relative min-h-screen flex items-center">

        {/* LEFT CONTENT (QUOTE SLIGHTLY SMALLER) */}
        <div className="hidden md:flex w-1/2 px-20">
          <div className="max-w-lg text-white space-y-5">
            <FaLeaf className="text-4xl text-green-300" />

            <h2 className="text-4xl font-extrabold leading-tight">
              Protect the Earth,
              <br />
              <span className="text-green-300">Empower the Future.</span>
            </h2>

            <p className="text-base text-white/80">
              Sustainability is not optional.  
              It’s our responsibility.
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

                <div className="col-span-2 space-y-2">
                  <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-lg bg-black/40 text-white border border-white/20 outline-none focus:ring-1 focus:ring-green-400"
                  />

                  {password.length > 0 && (
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

                <button className="
                  col-span-2 mt-2 py-2.5 rounded-lg
                  font-semibold text-white
                  bg-gradient-to-r from-green-500 to-emerald-600
                  hover:from-green-600 hover:to-emerald-700
                  shadow-lg shadow-green-900/40
                  transition
                ">
                  Create Account
                </button>
              </form>

              <div className="flex items-center gap-4 my-4">
                <div className="flex-1 h-px bg-white/20" />
                <span className="text-xs text-gray-300">OR</span>
                <div className="flex-1 h-px bg-white/20" />
              </div>

              <div className="space-y-2">
                <SocialButton icon={FcGoogle} text="Continue with Google" />
                <SocialButton icon={FaFacebookF} text="Continue with Facebook" />
                <SocialButton icon={FaGithub} text="Continue with GitHub" />
              </div>

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
    </div>
  );
}
