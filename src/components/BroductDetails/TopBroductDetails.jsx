import SizeProduct from "./SizeProduct";
import CustomizedProduct from "./CustomizedProduct";
import { useState } from "react";
import { useProducts } from "../../context/MyProduts";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { toast ,Bounce } from 'react-toastify';

const TopBroductDetails = ({ product }) => {
  const [count, setCount] = useState(1);
  const [Size, setSize] = useState("Medium");
  const [sugar, setSugar] = useState("Medium");
  const [ice, setIce] = useState("Medium");
  const [milk, setMilk] = useState("Skimmed");
  const { itemsCart, setItemsCart } = useProducts();

  const currentExtraPrice =
    product?.sizes.find((s) => s.type === Size)?.extraPrice || 0;
  const totalPrice = (product.basePrice + currentExtraPrice) * count;
  return (
    <div className="ProductDetails pt-33 main-container flex flex-col md:flex-row justify-center lg:gap-20 gap-10">
      <div className="imagesProductDetails flex flex-col gap-10 lg:flex-1 md:flex-.8">
        <div className="images bg-color2 w-70 py-10 rounded-lg self-center flex justify-center">
          <img className="w-30" src={product?.image} alt={product?.name} />
        </div>
        <SizeProduct size={Size} setSize={setSize} />
      </div>
      <div className="info flex-1">
        <div className="info">
          <h1 className="text-3xl font-bold text-color1">{product?.name}</h1>
          <p className="text-color1 text-[14.5px] mt-2 leading-none">
            {product?.shortDescription}
          </p>
        </div>
        <CustomizedProduct
          count={count}
          setCount={setCount}
          product={product}
          setSugar={setSugar}
          sugar={sugar}
          setIce={setIce}
          setMilk={setMilk}
          milk={milk}
          ice={ice}
        />
        <br />
        <div className="totalPrice flex items-center justify-between mt-4 mb-6">
          <h2 className="text-color1 text-xl font-bold ">Total Price:</h2>
          <motion.p
            key={totalPrice}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
            className="text-red-800 font-medium text-xl"
          >
            {totalPrice} EGY
          </motion.p>
        </div>
        <div className="buttons flex items-center gap-1 mb-10">
          <button
            className="w-full flex-1 bg-white text-color1 cursor-pointer hover:bg-color1 hover:text-white 
              duration-300 border-2 border-color1 lg:text-[19px] py-2.5"
            onClick={(e) => {
              toast.success('Added to cart!', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                transition: Bounce,
                });
              e.preventDefault();
              const selectSizePrice = product.sizes.find(
                (s) => s.type === Size,
              ).extraPrice;
              const isExist = itemsCart.find(
                (item) =>
                  item.id === product.id &&
                  item.size === Size &&
                  item.sugar === sugar &&
                  item.ice === ice &&
                  item.milk === milk,
              );
              if (isExist) {
                setItemsCart(
                  itemsCart.map((item) =>
                    item.id === product.id &&
                    item.size === Size &&
                    item.sugar === sugar &&
                    item.ice === ice &&
                    item.milk === milk
                      ? { ...item, quantity: item.quantity + count }
                      : item,
                  ),
                );
              } else {
                setItemsCart((prevItems) => [
                  ...prevItems,
                  {
                    ...product,
                    size: Size,
                    quantity: count,
                    extraPrice: selectSizePrice,
                    price: product.basePrice,
                    sugar: sugar,
                    ice: ice,
                    milk: milk,
                  },
                ]);
              }
              setCount(1);
              setSize("Medium");
              setSugar("Medium");
              setIce("Medium");
              setMilk("Skimmed");
            }}
          >
            Add To Cart
          </button>

          <button
            className="w-full flex-1 bg-color1 text-white cursor-pointer hover:bg-hover duration-300 border-2
              border-color1 hover:border-hover lg:text-[19px] py-2.5"
          >
            Order now
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopBroductDetails;
