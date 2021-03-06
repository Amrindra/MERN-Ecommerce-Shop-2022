import styled from "styled-components";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import { Add, Remove } from "@material-ui/icons";
import { mobile } from "../responsive";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { publicRequest } from "../requestMethods";
import { addProduct } from "../redux/cartSlice";
import { useDispatch, useSelector } from "react-redux";

function SingleProduct() {
  //useLocation returns an object contains bunch of properties, but access only pathname and then split
  //{pathname: '/products/men', search: '', hash: '', state: null, key: 'fvkfoga3'}
  //location.pathname.split("/")[2] will return only "men" from the url pathname
  const location = useLocation();
  const productID = location.pathname.split("/")[2];
  const [product, setProduct] = useState({});
  const [productQuantity, setProductQuantity] = useState(1);
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");

  const dispatch = useDispatch();

  // const user = useSelector((state) => state.user.currentUser);
  // const user = false;
  // const navigate = useNavigate()

  useEffect(() => {
    const getProduct = async () => {
      try {
        //publicRequest is a custom request we created in another folder. by doing this we don't have to write axios every single request
        const response = await publicRequest.get("/products/find/" + productID);
        setProduct(response.data);
        // console.log(response);
      } catch (error) {}
    };
    getProduct();
    console.log(product);
  }, [productID, product]);

  const handleQuantity = (type) => {
    if (type === "decrement") {
      //QTY: cannot be smaller than 1
      productQuantity > 1 && setProductQuantity(productQuantity - 1);
    } else {
      setProductQuantity(productQuantity + 1);
    }
  };

  const handleClick = () => {
  
    // "...product, quantity, color, size" all of these call payload
    //Once we click add to cart button it will dispatch the action and then add these payload to the cartSlice initialState product
    dispatch(addProduct({ ...product, productQuantity, color, size }));
  

  };

  // console.log("size: ", +size + "  Color: " + color);
  // console.log(product.size);
  return (
    <Container>
      <Navbar />
      <Wrapper>
        <ImgContainer>
          <Image src={product.img} />
        </ImgContainer>

        <InfoContainer>
          <Title>{product.title}</Title>
          <Desc>{product.desc}</Desc>
          <Price>${product.price}</Price>

          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              {/* Have to add ? infront of array otherwise it will throw an error */}
              {product.color?.map((eachColor) => (
                <FilterColor
                  color={eachColor}
                  key={eachColor}
                  onClick={() => setColor(eachColor)}
                />
              ))}
            </Filter>

            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize onChange={(event) => setSize(event.target.value)}>
                {product.size?.map((eachSize) => (
                  <FilterSizeOption key={eachSize}>{eachSize}</FilterSizeOption>
                ))}
              </FilterSize>
            </Filter>
          </FilterContainer>

          <AddContainer>
            <AmountContainer>
              <Remove onClick={() => handleQuantity("decrement")} />
              <Amount>{productQuantity}</Amount>
              <Add onClick={() => handleQuantity("increment")} />
            </AmountContainer>
          
            <Button onClick={handleClick}>ADD TO CART</Button> 
          
          </AddContainer>
        </InfoContainer>
      </Wrapper>

      <Newsletter />
      <Footer />
    </Container>
  );
}

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({ padding: "10px", flexDirection: "column" })}
`;

const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
  ${mobile({ height: "40vh" })}
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ width: "100%", paddingBottom: "50px" })}
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 5px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const Button = styled.button`
  padding: 15px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;
  &:hover {
    background-color: #f8f4f4;
  }
`;
export default SingleProduct;
