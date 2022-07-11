import React, { useState } from "react";
import "./main.css";
import Homepage_image from "../../asset/Homepage_image.png";
import { BsArrowRight, BsFillShieldFill } from "react-icons/bs";
import OTPInput, { ResendOTP } from "otp-input-react";
import { motion } from "framer-motion";
import { useEffect } from "react";

const Main = () => {
  const [OTP, setOTP] = useState("");
  const [error, setError] = useState(false);
  const [err, setErr] = useState("");
  const [err1, setErr1] = useState("");
  const [err2, setErr2] = useState("");
  const [err3, setErr3] = useState("");
  const [err4, setErr4] = useState("");

  const animation = {
    offscreen: { opacity: 0, y: 25 },
    onscreen: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        restSpeed: 0.5,
        duration: 2,
      },
    },
  };

  const handleError = (e) => {
    e.preventDefault();
    if (error !== "pomo") {
      setError(true);
      setTimeout(() => setError(false), 3300);
    } else setError(true);
    setErr("");
    setErr1("");
    setErr2("");
    setErr3("");
    setErr4("");
  };
  

  return (
    <div className="main-container">
      <div className="main-wrapper">
        <div>
          <motion.div
            className="left"
            initial={"offscreen"}
            whileInView={"onscreen"}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ staggerChildren: 0.5 }}
            variants={animation}
          >
            <div className="text-wrap">
              <div className="title">Steamfest 2022 Quiz</div>
              <div className="subTitle">Great prizes to be won</div>
              <div className="enter-code-text">
              Enter your steamfest code to join and <br /> win exciting prizes!
            </div>
            </div>
            
            <form>
              <div className="code-input-wrap">
                <input
                  type="number"
                  name="pincode"
                  onInput={(e) => {
                    
                    if (e.target.value.length > e.target.maxLength)
                      e.target.value = e.target.value.slice(
                        0,
                        e.target.maxLength
                      );

                  }}
                  autoFocus={true}
                  maxLength={1}
                  className={error ? "otp" : "code-input"}
                  onChange={(e) => setErr(e.target.value)}
                  value={err}
                />
                <input
                  type="number"
                  name="pincode"
                  onKeyDown={(evt) => ["e", "E", "+", "-", "."].includes(evt.key) && evt.preventDefault()}
                  onInput={(e) => {
                    if (e.target.value.length > e.target.maxLength)
                      e.target.value = e.target.value.slice(
                        0,
                        e.target.maxLength
                      );
                  }}
                  maxLength="1"
                  className={error ? "otp" : "code-input"}
                  
                  onChange={(e) => setErr1(e.target.value)}
                  value={err1}
                />
                <input
                  type="number"
                  name="pincode"
                  onKeyDown={(evt) => ["e", "E", "+", "-", "."].includes(evt.key) && evt.preventDefault()}
                  onInput={(e) => {
                    if (e.target.value.length > e.target.maxLength)
                      e.target.value = e.target.value.slice(
                        0,
                        e.target.maxLength
                      );
                  }}
                  maxLength="1"
                  className={error ? "otp" : "code-input"}
                  
                  onChange={(e) => setErr2(e.target.value)}
                  value={err2}
                />
                <input
                  type="number"
                  name="pincode"
                  onInput={(e) => {
                    if (e.target.value.length > e.target.maxLength)
                      e.target.value = e.target.value.slice(
                        0,
                        e.target.maxLength
                      );
                  }}
                  onKeyDown={(evt) => ["e", "E", "+", "-", "."].includes(evt.key) && evt.preventDefault()}

                  maxLength="1"
                  className={error ? "otp" : "code-input"}
                  
                  onChange={(e) => setErr3(e.target.value)}
                  value={err3}
                />
               <input
                  type="number"
                  name="pincode"
                  onInput={(e) => {
                    if (e.target.value.length > e.target.maxLength)
                      e.target.value = e.target.value.slice(
                        0,
                        e.target.maxLength
                      );
                  }}
                  onKeyDown={(evt) => ["e", "E", "+", "-", "."].includes(evt.key) && evt.preventDefault()}

                  maxLength="1"
                  className={error ? "otp" : "code-input"}
                  
                  onChange={(e) => setErr4(e.target.value)}
                  value={err4}
                />
              </div>

              {error ? (
                <div className="error">
                  <BsFillShieldFill /> Error: Wrong code
                </div>
              ) : null}
              <div className="button-wrap">
                <button onClick={handleError}>
                  Start <BsArrowRight />
                </button>
              </div>
            </form>
          </motion.div>
          <div className="right">
            <img className="img-wrap" src={Homepage_image} alt="home image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
