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

  //This useEffect is used for category to filter products.
  //For EX: products have different colors and sizes and by using the filter method we can filter whatever color and size users select
  useEffect(() => {
    category &&
      setFilteredProducts(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [products, category, filters]);

  useEffect(() => {
    if (sort === "newest") {
      setFilteredProducts((prev) =>
        //x,y parameters are just used for comparison
        [...prev].sort((x, y) => x.createdAt - y.createdAt)
      );
    } else if (sort === "asc") {
      setFilteredProducts((prev) =>
        //x,y parameters are just used for comparison
        [...prev].sort((x, y) => x.price - y.price)
      );
    } else {
      setFilteredProducts((prev) =>
        //x,y parameters are just used for comparison
        [...prev].sort((x, y) => y.price - x.price)
      );
    }
  }, [sort]);

  return (
    <Container>
      {category
        ? filteredProducts.map((item) => (
            <ProductItem item={item} key={item._id} />
          ))
        : products
            //.slice(0,8) will show only 8 products
            .slice(0, 8)
            .map((item) => <ProductItem item={item} key={item._id} />)}
      {/* {popularProducts.map((item) => <ProductItem item={item} key={item.id} />)} */}
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
