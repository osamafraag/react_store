import { useEffect, useState } from "react";
import ProductCard from "./productCard";
import { useNavigate } from "react-router-dom";
import axios from 'axios'


const ProductsList = () => {
  const navigate = useNavigate();
  const [productList, setProductList] = useState([]);
  

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_BASE_URL)
      .then((res) => setProductList(res.data.products) )
      .catch((err) => console.log(err));
  }, []);

  const redirectToDetails = (id) => {
    navigate(`/product-details/${id}`);
  };

  return (
    <div className="row row-cols-1 row-cols-md-3 g-4">
      {productList?.map((product, index) => {
        return (
          <div className="col" key={product.id}>
            <ProductCard
              productData={product}
              handleNavigate={redirectToDetails}
            />
          </div>
        );
      })}
    </div>
  );
};

export default ProductsList;

