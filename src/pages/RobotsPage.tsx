import RobotCard from "../components/RobotCard/RobotCard";
import { robotsMock } from "../store/features/robots/mocks/robotsMock";
import StyledRobotsPage from "./RobotsPageStyled";

const RobotsPage = () => {
  return (
    <StyledRobotsPage>
      <h1 className="robots-page-title">Explore robots:</h1>
      <RobotCard robot={robotsMock[0]} />
    </StyledRobotsPage>
  );
};

export default RobotsPage;
