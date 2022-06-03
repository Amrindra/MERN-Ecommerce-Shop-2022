import styled from "styled-components";
// import Announcement from "../components/Announcement";
// import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";
import { mobile } from "../responsive";
import { useLocation } from "react-router-dom";
import { useState } from "react";

function ProductList() {
  const location = useLocation();
  //useLocation returns an object contains bunch of properties, but access only pathname and then split
  //{pathname: '/products/men', search: '', hash: '', state: null, key: 'fvkfoga3'}
  //location.pathname.split("/")[2] will return only "men" from the url pathname
  const category = location.pathname.split("/")[2];
  // console.log(location.pathname.split("/")[2]);

  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("newest");

  const handleFilter = (event) => {
    const value = event.target.value;
    setFilters({
      //if we don't pass spread operator filter here it will only setFilter individual one every time user select option size and color
      ...filters,
      [event.target.name]: value,
    });
    // console.log("[event.target.name]:" + [event.target.name]);
  };
  console.log(filters);

  return (
    <Container>
      {/* <Navbar />
      <Announcement /> */}

      <Title>{category}</Title>

      <FilterContain>
        <Filter>
          <FilterText>Filter Products: </FilterText>
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
          <Select onChange={(event) => setSort(event.target.value)}>
            <Option value="newest">Newest</Option>
            <Option value="asc">Price (asc)</Option>
            <Option value="desc">Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContain>

      <Products category={category} filters={filters} sort={sort} />
      <Newsletter />
      <Footer />
    </Container>
  );
}

const Container = styled.div``;

const Title = styled.h1`
  text-transform: capitalize;
  padding-left: 15px;
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
