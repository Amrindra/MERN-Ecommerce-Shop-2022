import { Send } from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from "../responsive";

const Newsletter = () => {
  return (
    <Container>
      <Title>Subscribe Us</Title>
      <Desc>By entering your email address below, you consent to receiving our newsletter with access to our latest collections, events and initiatives. More details on this are provided in our Privacy Policy</Desc>
      <InputContainer>
        <Input placeholder="Your email" />
        <Button>
          <Send />
        </Button>
      </InputContainer>
    </Container>
  );
};

const Container = styled.div`
  height: 60vh;
  background-color: #cc5c5c;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-image: url()
`;
const Title = styled.h1`
  font-size: 70px;
  margin-bottom: 20px;
  ${mobile({ fontSize: "50px" })}
`;

const Desc = styled.div`
  font-size: 1rem;
  margin-bottom: 25px;
  max-width: 600px;
  ${mobile({ textAlign: "center", fontSize: "20px" })}
`;

const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;
  border-radius: 50px;
  overflow: hidden;
  ${mobile({ width: "80%" })}
`;

const Input = styled.input`
  border: none;
  flex: 8;
  padding-left: 20px;
  outline: none;

`;

const Button = styled.button`
  flex: 1;
  border: none;
  background-color: black;
  color: white;
  border-radius: 50px;

  ${mobile({ padding: "0 20px" })}
`;

export default Newsletter;
