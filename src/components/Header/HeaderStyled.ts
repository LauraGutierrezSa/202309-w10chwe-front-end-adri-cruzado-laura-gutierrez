import styled from "styled-components";

const HeaderStyled = styled.header`
  display: flex;
  flex-direction: column;
  width: 350px;
  height: 219px;
  background: ${({ theme }) => theme.colors.accent};
  align-items: center;
  justify-content: space-evenly;
  border: 4px solid ${({ theme }) => theme.colors.light};
  border-radius: 10px;
`;

export default HeaderStyled;
