import styled from "styled-components";

const AppStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;

  .app__logo {
    display: flex;
    justify-content: center;
    font-family: ${({ theme }) => theme.typography.secondaryFont};
    font-size: 50px;
    margin-top: 20px;
    height: 40px;
  }
`;

export default AppStyled;
