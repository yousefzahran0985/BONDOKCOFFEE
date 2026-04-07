import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import Home from "./pages/Home/Home";
import {Route ,Routes ,useLocation} from "react-router-dom";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import Cart from "./pages/Cart/Cart";

export default function App() {
  const location = useLocation();
  const isErrorPage = location.pathname == "/" || location.pathname == "/cart" || location.pathname.startsWith("/product/");
  return (
    <>
      {isErrorPage && <Header />}
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<h1 className="text-color1 text-7xl text-center mt-30">page not found</h1>} />
        <Route path="/product/:userId" element={<ProductDetails />} />
      </Routes>
      {isErrorPage && <Footer />}
    </>
  );
}
