import styled from "styled-components";

const StyledRobotsPage = styled.section`
  background-color: ${({ theme }) => theme.colors.main};
  text-align: center;

  .robots-page-title {
    font-family: ${({ theme }) => theme.typography.secondaryFont};
    padding: 20px 0 25px 0;
    color: ${({ theme }) => theme.colors.dark};
    text-overflow: ellipsis;
    overflow: hidden;
    text-transform: uppercase;
  }
`;

export default StyledRobotsPage;
