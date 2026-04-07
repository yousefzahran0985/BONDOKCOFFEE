import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import { FaTrash } from "react-icons/fa";
import { useProducts } from "../../context/MyProduts";


const ItemCart = ({ product,setIsDeleteModalOpen ,setItemToDelete}) => {
  const { itemsCart, setItemsCart} = useProducts();
  
  const updateQuantity = (newQuantity) => {
    if (newQuantity < 1) return;

    setItemsCart(
      itemsCart.map((item) =>
        item.id === product.id &&
        item.size === product.size &&
        item.sugar === product.sugar &&
        item.ice === product.ice &&
        item.milk === product.milk
          ? { ...item, quantity: newQuantity }
          : item,
      ),
    );
  };
  return (
    <>
      <div className="itemProduct border-gray-300 border rounded-2xl bg-white flex gap-4 p-5 md:flex-row md:items-center w-full flex-col md:w-162.5">
        <div className="box1 md:w-35 w-20">
          <img
            src={product.image}
            alt={product.name}
            className="w-26 object-cover"
          />
        </div>
        <div className="info flex-1 flex flex-col justify-between items-start gap-2">
          <h3 className="lg:text-2xl md:text-xl font-medium ">
            {product.name}
          </h3>
          <div className="details flex items-center lg:gap-5 md:gap-3 gap-1">
            <p className="lg:text-[12px] text-[10px]  text-green-900 bg-[#73dfa41a] p-1.5 rounded-lg">
              {"Size " + product.size}
            </p>
            <p className="lg:text-[12px] text-[10px]  text-green-900 bg-[#73dfa41a] p-1.5 rounded-lg">
              {product.sugar + " Sugar"}
            </p>
            <p className="lg:text-[12px] text-[10px]  text-green-900 bg-[#73dfa41a] p-1.5 rounded-lg">
              {product.ice + " Ice"}
            </p>
            <p className="lg:text-[12px] text-[10px]  text-green-900 bg-[#73dfa41a] p-1.5 rounded-lg">
              {product.milk + " Milk"}
            </p>
          </div>
          <p className="lg:text-[18px] md:text-[16px] text-[14px] font-bold text-green-600">
            {product?.extraPrice + product.basePrice} EGY
          </p>
          <div className="quantity flex items-center gap-5 text-[17px] border rounded-2xl border-gray-300 p-2">
            <button
              disabled={product.count === 0}
              className={`minuesVanilla w-6 h-6 flex items-center justify-center  
            rounded-full ${product.quantity === 1 ? "opacity-50  cursor-default" : "cursor-pointer "} `}
              onClick={() => updateQuantity(product.quantity - 1)}
            >
              <FaMinus />
            </button>
            <span className="text-color1">{product.quantity}</span>
            <button
              className="plusVanilla w-6 h-6 flex items-center justify-center cursor-pointer rounded-full"
              onClick={() => updateQuantity(product.quantity + 1)}
            >
              <FaPlus />
            </button>
          </div>
        </div>
        <div className="box3 md:w-20 flex md:flex-col flex-row justify-between items-end md:justify-center md:gap-5 ">
          <button
              onClick={(e) => {
              e.stopPropagation();
              e.preventDefault();
              setIsDeleteModalOpen(true)
              setItemToDelete(product)
            }}
            className="text-red-600 text-[15px] p-2.5 border bg-[#f33a3a2c] hover:text-white hover:bg-red-600 duration-300 rounded-xl cursor-pointer  order-1 md:order-0"
          >
            <FaTrash />
          </button>
          <p className="text-lg font-bold ">
            {(product?.extraPrice + product.basePrice) * product.quantity} EGY
          </p>
        </div>
      </div>
    </>
  );
};

export default ItemCart;
