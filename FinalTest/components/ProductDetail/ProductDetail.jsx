import { React, useContext } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "../ProductContext/ProductContext";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
const ProductDetail = () => {
  const { productId } = useParams();
  const { products } = useContext(ProductContext);
  const product = products.find((p) => p.id === parseInt(productId));

  return (
    <>
      <Navbar></Navbar>
      <div className="product-detail">
        <img src={product.image} alt={product.title} />
        <h2>{product.title}</h2>
        <p>Rating: {product.rating}</p>
        <p>Price: ${product.price}</p>
      </div>
      <Footer></Footer>
    </>
  );
};

export default ProductDetail;
