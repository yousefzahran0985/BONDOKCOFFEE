import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Mybutton from "../components/Home/Mybutton";
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";

const scrollBart ={
    hidden: { opacity:0 ,y:70 ,filter: "blur(3px)"},
    visible: { 
      opacity: 1, 
      y:0,
      filter: "blur(0px)",
      transition: { duration: .7, ease: "easeOut" }
  }
}

export default function Footer(){
  return(
    <footer className="bg-color2 pt-20">
      <div className="main-container flex md:flex-row flex-col gap-10 md:justify-between items-center">
          <motion.div 
            variants={scrollBart}
            initial ="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }} 
            className="social_footer w-50 flex flex-col items-center ">
            <h2 className="text-[20px] font-medium mb-3 text-center text-text-color">Sucial</h2>
            <div 
            className="social_footer social flex gap-5 text-text-color *:cursor-pointer *:duration-600 *:hover:-translate-y-2 *:text-[20px]">
              <FaFacebookF />
              <FaInstagram />
              <FaXTwitter />
            </div>
          </motion.div>
          <motion.div 
            variants={scrollBart}
            initial ="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}  
            className="Subscribe_footer flex flex-col items-center order-1 md:order-0">
              <h2 className="text-[20px] font-medium mb-3 text-center text-text-color">Payment Methods</h2>
              <div className="input_footer bg-color1 p-2 md:w-90 w-80 flex justify-between">
                <input className="focus:outline-none w-34" type="text" placeholder="Email"/>
                <Mybutton title="Subscribe" className=""></Mybutton>
            </div>
          </motion.div>
          <motion.div 
          variants={scrollBart}
            initial ="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }} 
          className="payment">
            <h2 className="text-[20px] font-medium mb-3 text-center text-text-color w-50">Payment Methods</h2>
            <div className="Payment_fotos flex [&>img]:w-10 gap-2">
              <img src="/images/footer-card-1.png" alt="" />
              <img src="/images/footer-card-2.png" alt="" />
              <img src="/images/footer-card-3.png" alt="" />
              <img src="/images/footer-card-4.png" alt="" />
            </div>
          </motion.div>
        </div>
    <hr className="text-text-color mt-17" />
    <div className="end_footer flex justify-center items-center">
    <span className="footer__copy text-text-color text-[12px] pb-5 pt-5">© 2026 All Rights Reserved By Yousef-Zahran</span>
    </div>
    </footer>
  )
}