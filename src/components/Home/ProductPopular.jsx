// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

export default function ProductPopular({product,setIsModalOpen,setItemQuickAdd}){
  
  return(
    <>
      <motion.div 
        className="product1 flex flex-col items-center justify-center gap-3 text-center pt-5 p-3 pb-16"
        initial="initial"
        whileHover="hoverEffect" 
        >
        <div className="popular_shape md:w-70 md:h-70 w-60 h-60 bg-color2 rounded-full relative flex justify-center items-center">
          <motion.img className="md:w-40 w-36 z-2" src={`${product.image}`} alt="" />
          <motion.img 
            variants={{
              initial: { y: 0, x: 0, rotate: 90 }, 
              hoverEffect: { y:-13, x: -20 }        
            }} 
            transition={{ type: "tween", ease: "easeOut", duration: 0.3 }}
            className="absolute w-12 top-15 left-2 rotate-[-20deg]" 
            src="/images/bean-img.png" 
            alt="" />
          
          <motion.img 
            variants={{
              initial: { y: 0, x: -6, rotate: 90 }, 
              hoverEffect: { y:6, x: 0 }        
            }} 
            transition={{ type: "tween", ease: "easeOut", duration: 0.3 }}
            className="absolute w-8 blur-[.8px] bottom-11 right-6 z-1 rotate-[-10deg]" 
            src="/images/bean-img.png" 
            alt="" 
          />
        </div>
      
        <h2 className="text-3xl font-semibold text-color1 text-center mt-3">{product.name}</h2>
        <p className=" text-color1 text-[17px]">Indulge in the simplicity of our delicious cold brew coffee.</p>
        <button 
          onClick={(e)=>{
            e.stopPropagation();
            e.preventDefault();
            setIsModalOpen(true)
            setItemQuickAdd(product)
          }}
        className="bg-color1 py-3 px-8 duration-300 hover:bg-color2 cursor-pointer hover:shadow-[0_3px_10px_rgba(0,0,0,0.3)]">Order now: {product.basePrice} EGY</button>
      </motion.div>
      
    </>
  )
}