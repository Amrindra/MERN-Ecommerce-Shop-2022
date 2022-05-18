import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";
import { mobile } from "../responsive";
import { useLocation } from "react-router-dom";
import { useState } from "react";

function ProductList() {
  const location = useLocation();
  //useLocation returns an object contains bunch of properties, but access only pathname and then split
  //{pathname: '/products/men', search: '', hash: '', state: null, key: 'fvkfoga3'}
  //location.pathname.split("/")[2] will return only me fron url pathname
  const category = location.pathname.split("/")[2];
  // console.log(location.pathname.split("/")[2]);

  const [filter, setFilter] = useState({});

  const handleFilter = (event) => {
    const value = event.target.value;
    setFilter({
      //if we don't pass spread operator filter here it will only setFilter individual one every time user select option size and color
      ...filter,
      [event.target.value]: value,
    });
  };
  console.log(filter);
  return (
    <Container>
      <Navbar />
      <Announcement />

      <Title>Dresses</Title>

      <FilterContain>
        <Filter>
          <FilterText>Filter Products: </FilterText>{" "}
          <Select name="color" onChange={handleFilter}>
            <Option disabled>Color</Option>
            <Option>White</Option>
            <Option>Black</Option>
            <Option>Red</Option>
            <Option>Blue</Option>
            <Option>Yellow</Option>
            <Option>Green</Option>
          </Select>
          <Select name="size" onChange={handleFilter}>
            <Option disabled>Size</Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
          </Select>
        </Filter>

        <Filter>
          <FilterText>Sort Products: </FilterText>
          <Select>
            <Option>Newest</Option>
            <Option>Price (asc)</Option>
            <Option>Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContain>

      <Products />
      <Newsletter />
      <Footer />
    </Container>
  );
}

const Container = styled.div``;

const Title = styled.h1`
  ${mobile({ textAlign: "center" })}
`;

const FilterContain = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
  ${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })}
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 15px;
  ${mobile({ marginRight: "0px" })}
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  ${mobile({ margin: "10px 0px" })}
`;

const Option = styled.option``;

export default ProductList;
