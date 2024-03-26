import { useEffect, useState } from "react";
import axios from "axios";

function ProductComponent() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/products`)
      .then((response) => {
        setProducts(response.data);
      })
      .catch((err) => {
        console.log("error fetching prdouct", err);
      });
  }, []);

  return (
    <div>
      <h1>Products</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>Price:${product.price}</p>
            <p>Category:{product.category}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductComponent;
