import { useAppSelector } from "../../store/hooks";
import RobotListStyled from "./RobotListStyled";

const RobotList = (): React.ReactElement => {
  const robots = useAppSelector((state) => {
    return state.robotsState.robots;
  });

  return (
    <RobotListStyled>
      {robots.map((robot) => (
        <li key={robot._id}></li>
      ))}
    </RobotListStyled>
  );
};

export default RobotList;
