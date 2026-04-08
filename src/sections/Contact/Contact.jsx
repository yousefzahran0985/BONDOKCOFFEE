import { FaWhatsapp } from "react-icons/fa";
import { FaFacebookMessenger } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
// eslint-disable-next-line no-unused-vars
import { motion, scale } from "motion/react";

const scrollBart ={
    hidden: { opacity:0 ,y:70 ,filter: "blur(2px)"},
    visible: { 
      opacity: 1, 
      y:0,
      filter: "blur(0px)",
      transition: { duration: 1, ease: "easeOut" }
  }
}
const scrollFoto ={
    hidden: { opacity:0 ,y:-70 ,filter: "blur(2px)"},
    visible: { 
      opacity: 1, 
      y:0,
      filter: "blur(0px)",
      transition: { duration: 1, ease: "easeOut",delay:1 }
  }
}
const scrollCicle ={
    hidden: { opacity:0 ,scale:0 },
    visible: { 
      opacity: 1, 
      scale:1,
      transition: { duration: 1, ease: "easeOut" }
  }
}
export default function Contact(){
  return (
    <section id="contact" className="contact_section main-section bg-color1">
      <h1 className="md:text-8xl text-5xl font-semibold text-center">CONTACT US</h1>
      <div className="
      second-container grid grid-cols-[400px] md:grid-cols-[500px] lg:grid-cols-[200px_500px_200px] mt-20
      justify-center
      gap-10
      lg:gap-0
      ">
        <div className="
        links flex justify-evenly items-center
        flex-col
        gap-10
        md:flex-row md:items-start md:gap-0
        lg:flex-col 
        ">
          <motion.div 
            variants={scrollBart}
            initial ="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }} 
            className="write-us relative">
            <h2 className="text-2xl font-semibold mb-3 text-center">Write Us</h2>
            <div className="social flex gap-7 text-color2 *:cursor-pointer *:duration-600 *:hover:-translate-y-1 *:text-[20px]">
              <FaWhatsapp className=""/>
              <FaFacebookMessenger />
              <FaTelegramPlane />
            </div>
          </motion.div>
          <motion.div 
            variants={scrollBart}
            initial ="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }} 
            className="location">
            <h2 className="text-2xl font-semibold mb-3 text-center">Location</h2>
            <div className="info_location text-center">
              <p>Cairo - Egypt</p>
              <a className=" flex gap-2 items-center mt-2 text-color2" href=""><FaLocationDot /> View On Map</a>
            </div>
          </motion.div>
        </div>
        <motion.div 
          variants={scrollCicle}
          initial ="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }} 
          className="
          contact-image rounded-[50%] bg-color2 order-2 flex items-center justify-center
          h-90 w-90 justify-self-center
          md:h-125 md:w-125 md:items-start
          lg:order-1
          ">
          <motion.img
            variants={scrollFoto}
            initial ="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4}} 
            className="w-[65%] mask-[linear-gradient(to_bottom,black_80%,transparent_100%)] " src="/images/yousef3.png" alt="" />
        </motion.div>
        <div className="
        information order-1 lg:order-2 flex justify-evenly items-center
        flex-col
        gap-10
        md:flex-row
        lg:flex-col 
        ">
          <motion.div 
            variants={scrollBart}
            initial ="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }} 
            className="delivery">
            <h2 className="text-2xl font-semibold mb-3 text-center">Delivery</h2>
            <div className="info_delivery">
              <p>+xx-xxx-xxx-xxxx</p>
              <p>+xx-xxx-xxx-xxxx</p>
            </div>
          </motion.div>
          <motion.div 
            variants={scrollBart}
            initial ="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }} 
            className="attention">
            <h2 className="text-2xl font-semibold mb-3 text-center">Attention</h2>
            <div className="info_attention text-center">
              <p>Monday - Saturday <br /> 9AM - 10PM</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}