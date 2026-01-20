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
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";

const SocialButton = ({ icon: Icon, label, iconClass = "" }) => (
  <button
    type="button"
    title={label}
    className="
      w-11 h-11 flex items-center justify-center
      rounded-full
      bg-white/80 backdrop-blur-md
      border border-white/60
      hover:bg-white
      transition
    "
  >
    <Icon className={`text-lg ${iconClass}`} />
  </button>
);


const IconInput = ({
  id,
  type = "text",
  placeholder,
  value,
  onChange,
  icon: Icon,
  rightIcon,
  onRightIconClick,
}) => (
  <div className="relative">
    <Icon className="absolute left-4 top-1/2 -translate-y-1/2 text-emerald-300/70 text-sm" />
    <input
      id={id}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="
        w-full pl-10 pr-10 py-3 rounded-xl
        bg-emerald-900/25 text-white
        border border-white/20
        placeholder-white/60
        outline-none
        focus:ring-2 focus:ring-emerald-400/50
      "
    />
    {rightIcon && (
      <button
        type="button"
        onClick={onRightIconClick}
        className="absolute right-3 top-1/2 -translate-y-1/2 text-white/60 hover:text-white"
      >
        {rightIcon}
      </button>
    )}
  </div>
);

export default function SignIn() {
  const [showForgot, setShowForgot] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });

  const [email, setEmail] = useState("");

  return (
    <div className="min-h-screen flex overflow-hidden bg-black">

      
      <div className="hidden md:flex w-8/12 relative">
        <img src={LoginIllustration} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/45" />

        <div className="absolute left-44 top-1/2 -translate-y-1/2 max-w-2xl">
          <div className="relative rounded-3xl bg-white/6 backdrop-blur-sm border border-white/25 px-12 py-12 text-white">
            <FaLeaf className="text-5xl text-green-400 mb-6" />
            <h2 className="text-5xl font-extrabold leading-tight">
              The future
              <br />
              is shaped by
              <br />
              <span className="text-green-300">what we protect.</span>
            </h2>
            <p className="mt-6 text-white/80 text-lg">
              Every action we take today defines the world tomorrow lives in.
            </p>
          </div>
        </div>
      </div>

      
      <div className="relative w-full md:w-4/12 flex items-center justify-center p-8">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${RightBg})` }}
        />
        <div className="absolute inset-0 bg-black/35 backdrop-blur-sm" />

        <div className="relative w-full max-w-md">
          
          <div className="
            rounded-[24px]
            bg-emerald-900/40
            backdrop-blur-xl
            px-8 py-8
            text-white
            shadow-xl
            border border-white/25
          ">

           
            <div className="mb-6 pb-4 border-b border-white/20">
              <div className="flex items-center gap-3">
                <FaLeaf className="text-3xl text-emerald-400" />
                <div>
                  <h1 className="text-xl font-semibold">Environment Portal</h1>
                  <p className="text-white/70 text-xs">
                    Authorized & responsible access
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
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    value={loginData.password}
                    onChange={(e) =>
                      setLoginData({ ...loginData, password: e.target.value })
                    }
                    icon={FaLock}
                    rightIcon={showPassword ? <FaEyeSlash /> : <FaEye />}
                    onRightIconClick={() => setShowPassword(!showPassword)}
                  />

                  <div className="flex justify-between items-center text-xs">
                    <span className="text-white/60">
                      Secure login enabled
                    </span>
                    <button
                      type="button"
                      onClick={() => setShowForgot(true)}
                      className="text-emerald-300 hover:text-emerald-400"
                    >
                      Forgot password?
                    </button>
                  </div>

                  <button className="
                    w-full mt-2 py-3 rounded-xl
                    bg-gradient-to-r from-emerald-400 to-green-500
                    text-black font-semibold
                  ">
                    Sign In
                  </button>
                </form>

                <div className="flex items-center gap-3 my-6">
                  <div className="flex-1 h-px bg-white/20" />
                  <span className="text-xs text-white/70">OR</span>
                  <div className="flex-1 h-px bg-white/20" />
                </div>

                <div className="flex justify-center gap-4">
                  <SocialButton icon={FcGoogle} />
                  <SocialButton icon={FaFacebookF} iconClass="text-blue-600" />
                  <SocialButton icon={FaGithub} iconClass="text-black" />
                </div>

                <p className="mt-6 text-center text-xs text-white/70">
                  Don’t have an account?{" "}
                  <a href="/signup" className="text-emerald-400 font-semibold">
                    Sign Up
                  </a>
                </p>
              </>
            )}

            {showForgot && (
              <form className="space-y-4">
                <IconInput
                  id="email"
                  type="email"
                  placeholder="Registered Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  icon={FaEnvelope}
                />
                <button className="w-full py-3 rounded-xl bg-emerald-400 text-black font-semibold">
                  Send Reset Link
                </button>
                <button
                  type="button"
                  onClick={() => setShowForgot(false)}
                  className="w-full text-xs text-emerald-300"
                >
                  ← Back to Sign In
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
