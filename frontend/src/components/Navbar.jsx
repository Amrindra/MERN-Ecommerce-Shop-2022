import { Badge } from "@material-ui/core";
// import { Badge } from "@mui/material";
import { Search, ShoppingBasketOutlined } from "@material-ui/icons";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { mobile, tablet } from "../responsive";


function Navbar() {
  //This state.cart is accessing the cart state inside the Redux store
  //state.cart.quantity meaning that we wanted to get only quantity from the cartSlice initial state
  const cartQuantity = useSelector((state) => state.cart.cartQuantity);
  // console.log(quantity)

  return (
    <Container>
      <Wrapper>
        <LeftSide>
          <Link to="/">
            <Logo>SHOP</Logo>
          </Link>
        </LeftSide>

        <Link to="/">
          <Center>
             {/* <Language>EN</Language> */}
          <SearchContainer>
            <Input placeholder="search" />
            <Search style={{ color: "gray", fontSize: 16 }} />
          </SearchContainer>
          </Center>
        </Link>

        <RightSide>
          <SignInSignUpWrapper>
            <MenuItem>SIGN UP</MenuItem>
            <MenuItem>SIGN IN</MenuItem>
          </SignInSignUpWrapper>
          
          <Link to="/cart">
            <MenuItem>
              <Badge
                badgeContent={cartQuantity}
                color="primary"
                verlap="rectangular"
              >
                <ShoppingBasketOutlined />
              </Badge>
            </MenuItem>
          </Link>
        </RightSide>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  height: 60px;
  ${mobile({ height: "50px" })}
  `;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;

const LeftSide = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  ${mobile({ paddingLeft: "10px" })}

`;

// const Language = styled.span`
//   font-size: 14px;
//   cursor: pointer;
//   ${mobile({ display: "none" })}
// `;

const Center = styled.div`
  flex: 2;
  text-align: center;
  width: 400px;
${mobile({ width: "220px" })}
`;

const SearchContainer = styled.div`
  border: 1px solid black;
  border-radius: 10px;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
${mobile({ display: "flex", alignItem: "center", justifyContent: "space-between"})}
`;

const Input = styled.input`
  border: none;
  outline: none;
  width: 100%;
`;


const Logo = styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: "24px" })}
`;

const RightSide = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
  ${tablet({ flex: 2, justifyContent: "center" })}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px"})}
`;

const SignInSignUpWrapper = styled.div`
display: flex;
  ${mobile({ display: "none"})}
`

export default Navbar;
