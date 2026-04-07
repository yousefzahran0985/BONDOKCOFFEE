import Mybutton from "../../components/Home/Mybutton";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const scrollInfo = {
  hidden: { opacity: 0, x: -170 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1, ease: "easeOut" },
  },
};
const scrollFoto = {
  hidden: { opacity: 0, x: 160 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1, ease: "easeOut" },
  },
};
export default function About() {
  return (
    <section
      id="about"
      className="about_section main-section bg-color1 pt-40 overflow-hidden"
    >
      <div
        className="
      second-container flex  
      flex-col
      md:flex-row 
      md:gap-20
      gap-25
      "
      >
        <motion.div
          variants={scrollInfo}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="info_about flex flex-col justify-center gap-4 items-start relative"
        >
          <h2
            className="
          text-5xl font-semiboldold
          lg:text-6xl
          "
          >
            LEARN MORE ABOUT US
          </h2>
          <p className="text-[16px] leading-4.5 mb-10 font-normal max-w-100">
            Welcome to BONDOKCOFFEE, where coffee is pure passion. From bean to
            cup, we are dedicated to delivering excellence in every sip. Join us
            on a journey of flavor and quality, crafted with love to create the
            ultimate coffee experience.
          </p>
          <Mybutton title="The Bast Coffees"></Mybutton>
        </motion.div>

        <motion.div
          variants={scrollFoto}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="
        foto_about  bg-color2 relative shrink-0 items-center justify-center rounded-[50%]
        w-70 h-70
        self-center
        
        md:w-90 md:h-90
        lg:w-112.5 lg:h-112.5
        "
        >
          <img
            className="w-full relative z-3"
            src="/images/about-coffee.png"
            alt=""
          />
          <motion.img
            variants={{
              hidden: { opacity: 0, y: 40, rotate: "90deg" },
              visible: {
                opacity: 1,
                y: 0,
                rotate: 0,
                transition: { duration: 1.3, ease: "easeOut", delay: 1.4 },
              },
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="
          absolute -rotate-40 z-0 
          w-35 left-10 -top-20
          md:w-50 md:left-10 md:-top-25
          "
            src="/images/leaf4-img.png"
            alt=""
          />
          <motion.img
            variants={{
              hidden: { opacity: 0, x: -40, rotate: "-90deg" },
              visible: {
                opacity: 1,
                x: 10,
                rotate: 0,
                transition: { duration: 1, ease: "easeOut", delay: 0.8 },
              },
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="
          absolute z-0
          bottom-36 right-5 w-14
          md:bottom-50 md:right-6 md:w-20
          "
            src="/images/leaf-img.png"
            alt=""
          />
          <motion.img
            variants={{
              hidden: { opacity: 0, y: 40, rotate: "90deg" },
              visible: {
                opacity: 1,
                y: 0,
                rotate: 0,
                transition: { duration: 1.3, ease: "easeOut", delay: 1 },
              },
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="
          absolute w-30 -left-7 bottom-23 rotate-220 z-0
          md:w-40 md:-left-10 md:bottom-30
          "
            src="/images/leaf2-img.png"
            alt=""
          />
        </motion.div>
      </div>
    </section>
  );
}
