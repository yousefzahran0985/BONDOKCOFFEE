// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import Mybutton from "../../components/Home/Mybutton";
import { HashLink } from "react-router-hash-link";

export default function Hero() {
  return (
    <section id="#" className="hero main-section bg-color1  md:pt-30 md:pb-20 lg:pb-10 md:h-screen flex items-center justify-center">
      <div className="second-container flex flex-col gap-6 ">
        <div className="home-title">
          <motion.h1
            className="text-7xl font-second text-center leading-[110%] font-semibold h-26 md:text-8xl lg:text-9xl"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 4, ease: "expoOut" }}
          >
            COLD<br className="md:hidden"/> COFFEE
          </motion.h1>
        </div>
        <div className="home_info flex justify-between flex-col items-center mt-15 md:mt-0 md:flex-row md:items-end lg:h-120 relative">
          <motion.div
            className="home_data flex-1 flex flex-col gap-10 mb-3 order-2 items-center  md:order-1"
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 4, ease: "expoOut" }}
          >
            <p className="leading-tight z-2 text-[14px] w-80 mt-20 md:mt-0 md:w-auto text-center md:text-start lg:text-[16px] lg:font-normal lg:pr-4">
              Find delicious hot and cold coffees with the best varieties, calm
              the pleasure and enjoy a good coffee, order now.
            </p>
            <HashLink smooth to="/#about" className="self-start">
              <Mybutton  title="Learn More"></Mybutton>
            </HashLink>
          </motion.div>
          <div className="home_images shrink-0 flex justify-center items-center relative order-1 md:order-2 w-90 md:w-100 lg:w-120">
            <motion.div
              className="main-cicle w-120 bg-color2 rounded-full z-0 h-90 md:h-100 lg:h-120"
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, ease: "expoOut" }}
            ></motion.div>
            <motion.img
              style={{ cursor: "grab" }}
              drag
              whileDrag={{ zIndex: 100, cursor: "grabbing" }}
              dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
              dragTransition={{ bounceStiffness: 100, bounceDamping: 40 }}
              className="home_cop z-2 absolute bottom-0 rotate-11 w-50.5 md:w-57.5 lg:w-67.5"
              src="/images/home-coffee.png"
              alt="Coffee Cup"
              initial={{ opacity: 0, y: -120 }}
              animate={{ opacity: 1, y: 30 }}
              transition={{ duration: 1, delay: 1, ease: "expoOut" }}
            />
            <motion.img
              className="home_coffe z-1 absolute top-12 left-9 w-14 lg:w-17"
              src="/images/bean-img.png"
              alt=""
              initial={{ scale: 0, rotate: "180deg", y: "-50px" }}
              animate={{ scale: 1, rotate: "0deg", y: 0 }}
              transition={{ duration: 1, delay: 2.5, ease: "expoOut" }}
            />
            <motion.img
              className="home_chocalat absolute z-1 rotate-10 max-w-157.5 bottom-0 w-97 right-0 md:w-122.5 md:-right-5.5 lg:w-162.5 lg:-right-12.5"
              src="/images/home-splash.png"
              alt=""
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.3, delay: 1.5, ease: "expoOut" }}
            />
            <motion.img
              className="home_ice absolute z-2 left-8 bottom-18 rotate-[-20deg] w-17 lg:w-22"
              src="/images/ice-img.png"
              alt=""
              initial={{ scale: 0, rotate: "180deg", y: "-150px", x: -70 }}
              animate={{ scale: 1, rotate: "0deg", y: 0, x: 0 }}
              transition={{ duration: 1.3, delay: 2.8, ease: "expoOut" }}
            />
            <motion.img
              className="home_coffe2 absolute blur-[2px] rotate-[-89deg] w-14 right-18 bottom-32 md:w-14 md:right-20 md:bottom-42 lg:w-18 lg:right-25 md::bottom-42"
              src="/images/bean-img.png"
              alt=""
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.3, delay: 2.5 }}
            />
            <motion.img
              className="home_ice2 absolute right-7 top-23 rotate-60 w-14 lg:w-18"
              src="/images/ice-img.png"
              alt=""
              initial={{ scale: 0, rotate: "180deg", y: -40 }}
              animate={{ scale: 1, rotate: "0deg", y: 0 }}
              transition={{ duration: 1, delay: 2.7, ease: "expoOut" }}
            />
            <motion.img
              className="home_leaf absolute right-20 bottom-0 w-12 lg:w-15"
              src="/images/leaf-img.png"
              alt=""
              initial={{ scale: 0, rotate: "180deg", y: -40 }}
              animate={{ scale: 1, rotate: "0deg", y: 0 }}
              transition={{ duration: 1.6, delay: 2.9, ease: "expoOut" }}
            />
          </div>
          <motion.div
            className="home_sticker flex-1 mr-4 order-3 absolute bottom-10 right-0 md:static"
            initial={{ y: -80, opacity: 0, rotate: 22 }}
            animate={{ y: 0, opacity: 1, rotate: 22 }}
            transition={{ duration: 1, delay: 4, ease: "expoOut" }}
          >
            <img
              className=" justify-self-end w-23 md:w-35 lg:w-45"
              src="/images/home-sticker.svg"
              alt=""
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
