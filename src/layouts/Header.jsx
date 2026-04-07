import { useEffect, useState } from "react";
import { RiApps2Fill } from "react-icons/ri";
import { MdCancel } from "react-icons/md";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { MdOutlineShoppingBag } from "react-icons/md";
import { useProducts } from "../context/MyProduts";

export default function Header(){
  const location = useLocation();
  const [scrollHeader, setScrollHeader] = useState(false);
  const [disSmall,setDisSmall] = useState(false);
  const { itemsCart } = useProducts();
  useEffect(() =>{
    const handleScroll = ()=>{
      if(window.scrollY > 0){
        setScrollHeader(true)
      }else{
        setScrollHeader(false)
      }
    }
    window.addEventListener("scroll",handleScroll)
    const closeNav = () => setDisSmall(false);
    window.addEventListener("click", closeNav)
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("click", closeNav);
    };
  },[])
  return(
    <>
      <header  onClick={(e) => e.stopPropagation()}
        className={`bg-color1 text-white py-8 font-medium fixed w-full h-22 flex items-center z-800 transition-all duration-300  ${
          scrollHeader ? "shadow-[0_10px_10px_rgba(0,0,0,0.1)] py-4 bg-opacity-90" : ""
        }`}
      >
        <div className="main-container flex justify-between items-center flex-1">
          <div className="logo ">
            <HashLink to="/#">BONDOKCOFFEE</HashLink>
          </div>
          <nav className={`absolute w-full left-0 duration-200 ${disSmall? "top-0" : "-top-100"} md:static md:w-auto md:p-0 md:bg-transparent z-999`}>
            <ul className="
                flex flex-col relative  text-center gap-10 bg-color1 pt-10 pb-10
                md:flex-row md:items-center md:gap-14 md:pt-0 md:pb-0 
                [&_a.active]:text-color2 [&_a:hover]:text-color2
              ">
                <li onClick={() =>setDisSmall(false)}><HashLink smooth to="/#" className={location.pathname == "/"  && location.hash === ""? "active" : ""}>HOME</HashLink></li>
                <li onClick={() =>setDisSmall(false)}><HashLink smooth to="/#popular" className={location.hash == "#popular"? "active" : ""}>POPULAR</HashLink></li>
                <li onClick={() =>setDisSmall(false)}><HashLink smooth to="/#about" className={location.hash == "#about"? "active" : ""}>ABOUT US</HashLink></li>
                <li onClick={() =>setDisSmall(false)}><HashLink smooth to="/#products" className={location.hash == "#products"? "active" : ""}>PRODUCTS</HashLink></li>
                <li onClick={() =>setDisSmall(false)}><HashLink smooth to="/#contact" className={location.hash == "#contact"? "active" : ""}>CONTACT</HashLink></li>
              <MdCancel size={29} className="absolute right-3.5 top-7.5 cursor-pointer md:hidden" onClick={() =>setDisSmall(false)}/>
              </ul>
          </nav>
              <div className="icons flex gap-5 text-white *:cursor-pointer  ">
              <Link to="/cart" className={`text-h1 relative ${location.pathname == "/cart"? "text-color2" : ""}`}>
              <MdOutlineShoppingBag  />
              <p className="bg-amber-200 text-[13px] w-4 h-4 rounded-[50%] text-black flex items-center justify-center absolute -top-1 -right-1 ">{itemsCart.length}</p>
              </Link>
              <RiApps2Fill size={24} className="md:hidden cursor-pointer " onClick={(e) =>{
                e.stopPropagation();
                setDisSmall(true)}}/>
              </div>
        </div>
      </header>
    </>
  )
}