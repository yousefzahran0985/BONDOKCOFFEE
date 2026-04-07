import { FaRegTrashAlt } from "react-icons/fa";
import { useEffect } from "react";
import {useProducts} from "../../context/MyProduts"
import { toast ,Bounce } from 'react-toastify';

const ConfirmDelete = ({ onConfirm, onCancel, itemToDelete ,removeAllItems}) => {
  
  useEffect(() => {
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = `${scrollbarWidth}px`;
      return () => {
        document.body.style.overflow = "unset";
        document.body.style.paddingRight = "0px";
      };
      
    }, []);
    const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onCancel();
    }
  };
  const {setItemsCart} = useProducts();
  return (
    <div className="fixed inset-0 flex bg-[#0505059a] items-center justify-center z-999"
    onClick={handleOverlayClick}>
      <div className="bg-white  w-130  rounded-xl p-8 mx-4 shadow-2xl">
        <div className="flex flex-col items-center text-center">
          <div className="w-15 h-15 bg-red-100 rounded-full flex items-center justify-center mb-5">
            <FaRegTrashAlt className="text-red-600 text-3xl" />
          </div>

          <h3 className="text-xl font-semibold mb-2 text-black">{ !removeAllItems ? "Remove Item?":"Remove All Items?"}</h3>
          
          <p className="text-gray-600 mb-8 text-sm">
            Remove{" "}
            <span className="font-medium text-black">
              {!removeAllItems ? itemToDelete.name : "All Items"}
            </span>{" "}
            from your cart
          </p>

          <div className="flex gap-4">
            <button
              onClick={onCancel}
              className="w-25 py-2.5 border border-gray-300 rounded-xl text-gray-700 font-medium bg-gray-100 hover:bg-gray-200 transition duration-300"
            >
              Cancel
            </button>
            <button
              onClick={()=>{
                
                if(removeAllItems){
                  setItemsCart([]) 
                  toast.error('Deleted All Items From Cart', {
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
                }else{
                  onConfirm();
                  toast.warn('Deleted Item From Cart', {
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
                }
                
                onCancel();
              }}
              className="w-25 py-2.5 bg-red-500 hover:bg-red-600 text-white font-medium rounded-xl transition duration-300"
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmDelete;