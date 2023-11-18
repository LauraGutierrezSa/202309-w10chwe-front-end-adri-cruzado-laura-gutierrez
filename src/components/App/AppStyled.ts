import styled from "styled-components";

const AppStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;

  .app__logo {
    display: flex;
    justify-content: center;
    padding: 30px;
    font-family: ${({ theme }) => theme.typography.secondaryFont};
    font-size: 50px;
  }
`;

export default AppStyled;
