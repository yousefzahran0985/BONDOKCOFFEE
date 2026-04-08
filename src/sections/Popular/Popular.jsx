import ProductPopular from "../../components/Home/ProductPopular";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay, Pagination } from 'swiper/modules';
import { useProducts } from "../../context/MyProduts";
import { QuickAddModal } from "../../layouts/Products/QuickAddModal";
import { useState } from "react";

const scrollProduct = {
    hidden: { opacity: 0, y: 70, filter: "blur(2px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 1, ease: "easeOut" },
    },
  };

export default function Popular() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [itemQuickAdd, setItemQuickAdd] = useState(null);
  const {productsData} = useProducts();
  const products = productsData;
  return (
  <>
    <motion.section id="popular" className="popular main-section pb-10">
      <div className="main-container">
        <h1 className="md:text-6xl text-big font-semibold text-color1 text-center">POPULAR <br /> CREATIONS</h1>
        <motion.div 
        initial={["initial", "hidden"]}
        whileHover="moveSub"
        variants={scrollProduct}
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }} className="product_popular mt-14 ">
          <Swiper modules={[Autoplay, Pagination]} simulateTouch={true} grabCursor={true} pagination={{
              clickable: true,
              dynamicBullets: true,
            }} loop={products.filter((product) => product.popular).length > 3} breakpoints={{768: {slidesPerView: 2,},1024: {slidesPerView: 3,},}}  autoplay={{
              delay: 3500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }} >

          {products.filter((product) => product.popular).map((product) =>(
            <SwiperSlide key={product.id}>
              <ProductPopular product={product} setIsModalOpen={setIsModalOpen} setItemQuickAdd={setItemQuickAdd}></ProductPopular>
            </SwiperSlide>
          ))}

          </Swiper>
        </motion.div>
      </div>
    </motion.section>
    {isModalOpen &&
      <QuickAddModal
            product={itemQuickAdd}
            onClose={() => setIsModalOpen(false)}
          />
      }
  </>
  );
}