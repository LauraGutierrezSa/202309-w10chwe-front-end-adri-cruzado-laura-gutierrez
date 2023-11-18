import styled from "styled-components";

const HeaderStyled = styled.header`
  display: flex;
  flex-direction: column;
  height: 219px;
  gap: 10px;
  background: ${({ theme }) => theme.colors.accent};
  align-items: center;
  justify-content: space-evenly;
  border: 4px solid ${({ theme }) => theme.colors.light};
  border-radius: 10px;
`;

export default HeaderStyled;
