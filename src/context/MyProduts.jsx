import { createContext,  useEffect ,useContext} from "react";
import { useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const MyProducts = createContext();

export const MyProvider = ({ children }) => {
  const [productsData, setProductsData] = useState([]);
  const [itemsCart, setItemsCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect( () => {
    const fetchProductsData = async () => {
      try { 
        const response = await fetch("/Products.json");
        const data = await response.json();
        setProductsData(data);
      }catch (error) {
        console.error("Error fetching products data:", error);
      }
    };
    fetchProductsData();
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(itemsCart));
  }, [itemsCart]);
  
  return (
    <MyProducts.Provider value={{ productsData, itemsCart, setItemsCart }}>
      {children}
    </MyProducts.Provider>
  );
} 

// eslint-disable-next-line react-refresh/only-export-components
export const useProducts = () => {
  const context = useContext(MyProducts);
  if (context === undefined) {
    throw new Error("useProducts must be used within a MyProvider");
  }
  return context;
};