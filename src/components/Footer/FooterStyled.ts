import styled from "styled-components";

const FooterStyled = styled.footer`
  background-color: ${({ theme }) => theme.colors.accent};
  display: flex;
  flex-direction: row;
  padding: 15px;
  justify-content: space-around;
  align-items: center;
  border: 4px solid ${({ theme }) => theme.colors.light};
  border-radius: 10px;
  width: 100%;
  position: absolute;
  bottom: 0;

  .footer {
    &__copyright-notice {
      color: ${({ theme }) => theme.colors.dark};
      font-size: 12px;
      line-height: 20px;
      font-weight: 500;
      letter-spacing: 0.1px;
      white-space: nowrap;
    }

    &__icons {
      display: flex;
      flex-direction: row;
      justify-content: space-evenly;
      align-items: center;
      gap: 10px;
    }
  }
`;

export default FooterStyled;
