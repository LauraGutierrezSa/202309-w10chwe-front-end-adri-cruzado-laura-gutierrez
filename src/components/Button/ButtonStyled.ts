import styled from "styled-components";

const ButtonStyled = styled.button`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.accent};
  font-family: ${({ theme }) => theme.typography.secondaryFont};
  text-transform: uppercase;
  border: 2px solid #000;
  border-radius: 14px;
  padding: 30px;
  width: 250px;
  height: 45px;
  font-size: 25px;
  font-weight: 800;
  justify-content: center;
  box-shadow: 0 0 25px rgba(0, 0, 0, 0.5);
`;

export default ButtonStyled;
