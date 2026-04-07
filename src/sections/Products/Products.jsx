import Product from "../../components/Home/Product";
import { useProducts } from "../../context/MyProduts";
import { QuickAddModal } from "../../layouts/Products/QuickAddModal";
import { useState } from "react";


export default function Products() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [itemQuickAdd, setItemQuickAdd] = useState(null);
  const { productsData } = useProducts();
  return (
    <section id="products" className="ProductsSection main-section bg-color2">
      <div className="second-container mt-10">
        <h1 className="md:text-6xl text-big font-semibold text-center">
          THE MOST <br />
          REQUESTED
        </h1>
        <div className="products mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-y-20">
          {productsData.filter((product) => product.id !== 10).map((product) => (
            <Product product={product} key={product.id} setIsModalOpen={setIsModalOpen} setItemQuickAdd={setItemQuickAdd}/>
          ))}
        </div>
      </div>
      {isModalOpen && <QuickAddModal
        product={itemQuickAdd}
        onClose={() => setIsModalOpen(false)}
      />}
    </section>
  );
}
