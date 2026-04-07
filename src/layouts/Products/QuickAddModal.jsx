import SizeProduct from "../../components/BroductDetails/SizeProduct";
import CustomizedProduct from "../../components/BroductDetails/CustomizedProduct";
import { useState, useEffect } from "react";
import { IoClose } from "react-icons/io5";
import { useProducts } from "../../context/MyProduts";
import { toast ,Bounce } from 'react-toastify';

export const QuickAddModal = ({ product, onClose }) => {
  const [count, setCount] = useState(1);
  const [size, setSize] = useState("Medium");
  const [sugar, setSugar] = useState("Medium");
  const [ice, setIce] = useState("Medium");
  const [milk, setMilk] = useState("Skimmed");
  const { itemsCart, setItemsCart } = useProducts();

  
  useEffect(() => {
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = `${scrollbarWidth}px`;
      return () => {
        document.body.style.overflow = "unset";
        document.body.style.paddingRight = "0px";
      };
    }, []);

  return (
    <div
      onClick={onClose}
      className="fixed bg-[#0505059a] left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%] w-full h-full z-1100 flex items-center justify-center p-4"
    >
      
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative bg-white w-full top-0 max-w-md rounded-3xl p-6 shadow-2xl z-10 "
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-2xl text-gray-500 hover:text-black cursor-pointer"
        >
          <IoClose />
        </button>

        <h2 className="md:text-xl font-bold text-color1 ">
          Quick Add: {product.name}
        </h2>

        <div className="flex flex-col gap-3">
          <SizeProduct size={size} setSize={setSize} smallScreen={true} />

          <CustomizedProduct
            smallScreen={true}
            count={count}
            setCount={setCount}
            product={product}
            setSugar={setSugar}
            sugar={sugar}
            setIce={setIce}
            ice={ice}
            setMilk={setMilk}
            milk={milk}
          />

          <div className="buttons"></div>
          <button
            onClick={(e) => {
              
              onClose;
              e.preventDefault();
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
              const selectSizePrice = product.sizes.find(
                (s) => s.type === size,
              ).extraPrice;
              const isExist = itemsCart.find(
                (item) =>
                  item.id === product.id &&
                  item.size === size &&
                  item.sugar === sugar &&
                  item.ice === ice &&
                  item.milk === milk,
              );
              onClose();
              if (isExist) {
                setItemsCart(
                  itemsCart.map((item) =>
                    item.id === product.id &&
                    item.size === size &&
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
                    size: size,
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
            className="w-full border-color1 hover:border-color2 border-2 hover:text-white text-color1 py-2 rounded-[10px] hover:bg-color2 duration-300 font-bold"
          >
            Add to Cart -{" "}
            {(product.basePrice +
              product.sizes.find((s) => s.type === size).extraPrice) *
              count}{" "}
            EGY
          </button>
          <button className="w-full border-color1 hover:border-color2 border-2 bg-color1 text-white py-2 rounded-[10px] hover:bg-hover duration-300 font-bold">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};
