import { RiShoppingBag3Fill } from "react-icons/ri";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

import { Link } from "react-router-dom";

export default function Product({ product ,setIsModalOpen ,setItemQuickAdd}) {
  const childAnimation = {
    initial: { y: 5 },
    moveSub: { y: 0 },
  };
  const scrollProduct = {
    hidden: { opacity: 0, y: 70, filter: "blur(2px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 1, ease: "easeOut" },
    },
  };
  
  return (
    <>
      <motion.div
        initial={["initial", "hidden"]}
        whileHover="moveSub"
        variants={scrollProduct}
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="product w-65 h-80 bg-[#13382a] flex flex-col justify-center items-center p-4 relative self-center"
      >
        <Link to={`/product/${product.id}`} >
        
        <div className="foto_product bg-color2 w-45 h-45 rounded-[50%] flex items-center justify-center relative">
          <motion.img
            variants={childAnimation}
            transition={{ ease: "easeOut", duration: 0.3, type: "spring" }}
            className="w-28 mt-3 z-1"
            src={`${product.image}`}
            alt=""
          />

          <motion.img
            variants={{ initial: { y: 0, x: 0 }, moveSub: { y: 7, x: -7 } }}
            transition={{ type: "tween", ease: "easeOut", duration: 0.3 }}
            className="absolute w-12 left-0 bottom-3 z-2"
            src="/images/ice-img.png"
            alt=""
          />
          <motion.img
            variants={{ initial: { y: 0 }, moveSub: { y: -7 } }}
            transition={{ type: "tween", ease: "easeOut", duration: 0.3 }}
            className="absolute w-7 right-6 top-13 rotate-70 z-0"
            src="/images/ice-img.png"
            alt=""
          />
        </div>
        </Link>
        <h3 className="text-[22px] font-medium self-start mt-3">
          {product.name}
        </h3>
        <span className="text-color2 text-[22px] self-start font-medium">
          {product.basePrice} EGY
        </span>
        <button
          onClick={(e) => {
            e.stopPropagation();
            e.preventDefault();
            setIsModalOpen(true);
            setItemQuickAdd(product)
          }}
          className="absolute z-200 right-3.5 bottom-3.5 bg-color2 rounded-[50%] w-8.5 h-8.5 flex items-center justify-center text-[#13382a] hover:bg-white cursor-pointer duration-300"
        >
          <RiShoppingBag3Fill
            style={{ fontSize: "22px" }}
            title="add to cart"
          />
        </button>
      </motion.div>
    </>
  );
}
