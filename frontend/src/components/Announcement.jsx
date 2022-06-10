import styled from "styled-components";

const Announcement = () => {
  return <Container>Super Deal! Free Shipping on Orders Over 50$</Container>;
};
const Container = styled.div`
  height: 30px;
  background-color: black;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  font-weight: 500;
`;
export default Announcement;
