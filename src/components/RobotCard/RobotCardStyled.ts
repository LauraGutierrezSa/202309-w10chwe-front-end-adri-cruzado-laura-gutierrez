import styled from "styled-components";

const RobotCardStyled = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 1rem;
  gap: 1rem;
  border: 2px solid ${({ theme }) => theme.colors.main};
  border-radius: 30px;
  background-color: ${({ theme }) => theme.colors.medium};
  color: ${({ theme }) => theme.colors.main};
  width: 300px;
  height: auto;
  box-shadow: 5px 3px 3px ${({ theme }) => theme.colors.dark};

  .card {
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;

    &__name {
      text-transform: uppercase;
      color: ${({ theme }) => theme.colors.light};
      font-family: ${({ theme }) => theme.typography.secondaryFont};
      letter-spacing: 1px;
      font-size: 1.5rem;
    }

    &__image {
      border: 5px solid ${({ theme }) => theme.colors.light};
      border-radius: 15px;
      width: 100%;
      height: auto;
      max-width: fit-content;
    }

    &__speed {
      font-family: ${({ theme }) => theme.typography.mainFont};
      font-size: 20px;
    }

    &__endurance {
      font-family: ${({ theme }) => theme.typography.mainFont};
      font-size: 20px;
    }
  }
`;

export default RobotCardStyled;
