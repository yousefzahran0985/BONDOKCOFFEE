import TopBroductDetails from "../../components/BroductDetails/TopBroductDetails";
import MoreDetails from "../../components/BroductDetails/MoreDetails";
import { useParams } from "react-router-dom";
import { useProducts } from "../../context/MyProduts";

const ProductDetails = () => {
  const { userId } = useParams();
  const { productsData } = useProducts();
  const product = productsData.find(
    (product) => product.id === parseInt(userId),
  );
  if (!product) {
    return (
      <div className="pt-40 pb-70 text-center text-4xl text-black">
        Loading Coffee Details...
      </div>
    );
  }
  return (
    <>
      <TopBroductDetails product={product} />
      <MoreDetails product={product} />
    </>
  );
};

export default ProductDetails;
