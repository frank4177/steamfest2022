import React, {useState} from 'react';
import './main.css'
import Homepage_image from '../../asset/Homepage_image.png';
import {BsArrowRight, BsFillShieldFill} from 'react-icons/bs'
import OTPInput, { ResendOTP } from "otp-input-react";
import { motion} from "framer-motion";
import { useEffect } from 'react';


const Main = () => {
    const [OTP, setOTP] = useState("");
    const [error, setError] = useState(false);

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

    const handleError = (e) =>{
        e.preventDefault()
        if(error === false){
            setError(true)
        }
        setOTP("")
    }
    


  return (
    <div className='main-container'>
        <div className='main-wrapper'>
            <div>
                <motion.div className='left'
                initial={"offscreen"}
                whileInView={"onscreen"}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ staggerChildren: 0.5 }}
                variants={animation}>

                <div className='title-wrap'>
                <div className='title'>Steamfest 2022 Quiz</div>
                <div className='subTitle'>Great prizes to be won</div>
                </div>
                
                <div className='enter-code-text'>Enter your steamfest code to join and <br /> win exciting prizes!</div>
                <form action="">
                <div className='code-input-wrap'>
                <OTPInput value={OTP} onChange={setOTP} autoFocus OTPLength={5} otpType="number" disabled={false} inputClassName={error ? "otp" : "code-input"}   inputStyles={{height: "55px"}} />
                </div>
                {error ? <div className='error'><BsFillShieldFill/> Error: Wrong code</div> : null}

                <div className='button-wrap'>
                <button type='submit' onClick={handleError}>Start <BsArrowRight/></button> 
                </div> 
              </form>

            </motion.div>
            <div className='right'>
                <img className='img-wrap' src={Homepage_image} alt="home image" />
            </div>
            </div>
        </div>
    </div>
  )
}

export default Main;
