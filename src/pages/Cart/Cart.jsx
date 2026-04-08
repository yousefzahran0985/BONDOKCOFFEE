import { useProducts } from "../../context/MyProduts";
import ItemCart from "../../components/Cart/ItemCart";
import { useState } from "react";
import { IoBagCheck } from "react-icons/io5";
import { FaLock } from "react-icons/fa";
import { FaTag } from "react-icons/fa";
import { MdDeliveryDining } from "react-icons/md";
import { FaCoffee } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa6";
import { FaTrash } from "react-icons/fa";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
import { MdOutlineRemoveShoppingCart } from "react-icons/md";
import { IoBag } from "react-icons/io5";
import ConfirmDelete from "../../components/other/ConfirmDelete";




const Cart = () => {
  const { itemsCart ,setItemsCart} = useProducts();
  const [deliveryType, setDeliveryType] = useState("delivery");
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [removeAllItems,setRemoveAllItems] = useState(false)
  const [itemToDelete, setItemToDelete] = useState(null);
  const deliveryFee = 20;


  
  const confirmDelete = () => {
      setItemsCart(itemsCart.filter(item => 
        !(item.id === itemToDelete.id && 
          item.size === itemToDelete.size && 
          item.sugar === itemToDelete.sugar &&
          item.ice === itemToDelete.ice &&
          item.milk === itemToDelete.milk)
      ));
      setIsDeleteModalOpen(false);
      setItemToDelete(null);
    };

  return (
    <>
      <div className="pt-40 pb-20 bg-gray-50 text-black">
        
        {itemsCart?.length > 0 ? (
          <>
            <div className="cart-container bg-gray-50 flex gap-10 flex-col lg:flex-row md:items-center lg:items-start lg:justify-evenly">
            <div className="">
              <div className="mb-3 text-sm">
                <Link to="/" className="text-gray-600 hover:text-color2 ">Home</Link> / Shopping Cart
                <h3 className="text-2xl mt-3 flex items-center gap-2 "><IoBag className="bg-color2 text-white p-2 text-big rounded-2xl"/> Shopping Cart</h3>
                <p className="font-medium text-[16px]">You have <span className="text-color2">{itemsCart.length} item</span> in your cart</p>
              </div>
                <div className="itemsCart flex flex-col gap-5 flex-2">
                  {itemsCart.map((item) => (
                    <ItemCart
                      key={`${item.id}-${item.size}-${item.sugar}`}
                      product={item}
                      setIsDeleteModalOpen={setIsDeleteModalOpen}
                      setItemToDelete={setItemToDelete}
                    />
                  ))}
                </div>
                  <div className="flex items-center justify-between px-2 pt-2">
                    <HashLink to="/#products">
                      <h3 className="flex items-center gap-2 my-2 cursor-pointer text-green-500 hover:text-green-600 duration-300">
                        <FaArrowLeft />Continue shopping
                      </h3>
                    </HashLink>
                    <div className="flex items-center gap-1 my-2 text-sm text-gray-400 hover:text-red-500 duration-300 cursor-pointer"
                        onClick={()=>{
                          setRemoveAllItems(true)
                        }}
                    >
                      <FaTrash />Clear all items
                    </div>
                  </div>
              </div>

              <div
                className="totalPrice lg:self-start flex flex-col items-center justify-end md:w-162.5 gap-2 lg:flex-[.7] w-full bg-white rounded-b-2xl
                sticky top-40 border-gray-300 border-x border-b pb-3 rounded-2xl md:mt-20"
              >
                <div className="top bg-color1 p-4 rounded-t-2xl w-full">
                  <h2 className="text-white text-xl font-bold flex gap-1">
                    <IoBagCheck />
                    Order Summary
                  </h2>
                  <p className="text-sm text-white">
                    You have {itemsCart.length} items in your cart
                  </p>
                </div>
                <div className="delivery-options w-full px-4 rounded-lg my-6">
                  <div className="flex gap-2">
                    <label
                      className={`flex flex-1 items-center justify-center gap-2 p-3 rounded-md border-2 cursor-pointer duration-300 
                    ${deliveryType === "takeaway" ? "border-hover bg-hover text-white scale-[.95]" : "border-gray-300 bg-white text-color1"}`}
                    >
                      <input
                        type="radio"
                        className="hidden"
                        value="takeaway"
                        checked={deliveryType === "takeaway"}
                        onChange={(e) => setDeliveryType(e.target.value)}
                      />
                      <span className="font-medium text-sm">
                        {" "}
                        <FaCoffee className="text-sm m-auto" />
                        Takeaway
                      </span>
                    </label>

                    <label
                      className={`flex flex-1 items-center justify-center gap-2 p-3 rounded-md border-2 cursor-pointer duration-300 
                    ${deliveryType === "delivery" ? "border-hover bg-hover text-white scale-[.95]" : "border-gray-300 bg-white text-color1"}`}
                    >
                      <input
                        type="radio"
                        className="hidden"
                        value="delivery"
                        checked={deliveryType === "delivery"}
                        onChange={(e) => setDeliveryType(e.target.value)}
                      />
                      <span className="font-medium text-sm ">
                        <MdDeliveryDining className="m-auto" />
                        Delivery{" "}
                      </span>
                    </label>
                  </div>
                </div>
                <div className="Subtotal flex items-center justify-between w-full px-4">
                  <p className="text-sm text-gray-600">Subtotal:</p>
                  <p className="text-[15px] font-medium">
                    {itemsCart
                      .reduce(
                        (total, item) =>
                          total +
                          (item.extraPrice + item.basePrice) * item.quantity,
                        0,
                      )
                      .toFixed(2)}{" "}
                    EGY
                  </p>
                </div>

                <div className="Subtotal flex items-center justify-between w-full px-4">
                  <p className="text-sm text-gray-600">
                    {deliveryType === "delivery" ? "Delivery:" : "Takeaway"}
                  </p>
                  {deliveryType === "delivery" && (
                    <p className="text-[15px] font-medium">
                      {deliveryFee.toFixed(2)} EGY
                    </p>
                  )}
                </div>

                <hr className=" border-gray-300 w-[90%] " />
                <div className="Subtotal flex items-center justify-between w-full p-4 pb-0">
                  <p className="text-[16px] text-black font-medium">Total:</p>
                  <p className="text-[15px] font-medium">
                    {(
                      itemsCart.reduce(
                        (total, item) =>
                          total +
                          (item.extraPrice + item.basePrice) * item.quantity,
                        0,
                      ) + (deliveryType === "delivery" ? deliveryFee : 0)
                    ).toFixed(2)}{" "}
                    EGY
                  </p>
                </div>
                <hr className=" border-gray-300 w-[90%] mb-3" />
                <button className="flex text-sm items-center gap-1 text-black border-color1 hover:border-hover border hover:text-white p-3 rounded-lg w-[90%] justify-center hover:bg-hover duration-300 cursor-pointer">
                  <FaTag />
                  Apply Promo Code
                </button>
                <button className="flex text-sm items-center gap-1 bg-color1 text-white p-3 rounded-lg w-[90%] justify-center hover:bg-hover duration-300 mt-2">
                  <FaLock />
                  Secure Checkout
                </button>
              </div>
            </div>
          </>
        ) : (
          <div className="flex flex-col items-center gap-4 mb-20 py-30">
            <MdOutlineRemoveShoppingCart className="w-16 h-16 text-gray-400" />
            <h2 className="text-2xl text-gray-600 font-medium">
              Your cart is empty
            </h2>
            <p className="text-gray-600 text-sm">
              Looks like you haven't added anything to your cart yet.
            </p>
            <HashLink to="/#products">
            <button className=" hover:bg-white hover:text-color1 cursor-pointer bg-color1 text-white 
              duration-300 border-2 border-color1 lg:text-[19px] p-2.5 rounded-2xl flex items-center gap-2"><FaArrowLeft /> Continue Shopping</button>
            </HashLink>
          </div>
        )}
      </div>
      {(isDeleteModalOpen || removeAllItems )&& <ConfirmDelete 
        onConfirm={confirmDelete} 
        onCancel={() => {
          setIsDeleteModalOpen(false)
          setRemoveAllItems(false)
          setItemToDelete(null)
        }}
        itemToDelete={itemToDelete}
        removeAllItems={removeAllItems}
      />}
    </>
  );
};

export default Cart;
