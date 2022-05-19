import { useEffect, useState } from "react";
import styled from "styled-components";
import { popularProducts } from "../data";
import ProductItem from "./ProductItem";
import axios from "axios";

const Products = ({ category, filters, sort }) => {
  // console.log(category, filters, sort);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await axios.get(
          //if there is category query fetch that query if not fetch all products
          //category is a query that we created in backend at product routes
          category
            ? `http://localhost:8000/api/products?category=${category}`
            : "http://localhost:8000/api/products"
        );
        setProducts(response.data);
        // console.log(products);
        // console.log(response);
      } catch (error) {}
    };
    getProducts();
  }, [category]);

  return (
    <Container>
      {popularProducts.map((item) => (
        <ProductItem item={item} key={item.id} />
      ))}
    </Container>
  );
};

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export default Products;
