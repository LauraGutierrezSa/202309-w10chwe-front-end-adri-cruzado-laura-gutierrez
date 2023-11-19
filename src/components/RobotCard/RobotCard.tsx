import { RobotStructure } from "../../store/features/robots/types";
import Button from "../Button/Button";
import RobotCardStyled from "./RobotCardStyled";

interface RobotCardProps {
  robot: RobotStructure;
}

const RobotCard = ({
  robot: { name, imageUrl, speed, endurance },
}: RobotCardProps): React.ReactElement => {
  return (
    <RobotCardStyled>
      <div className="card">
        <h3 className="card__name">{name}</h3>
        <img
          className="card__image"
          src={imageUrl}
          alt={`This robot's name is ${name}`}
          width="200"
          height="300"
        />
        <span className="card__speed">Speed: {speed}</span>
        <span className="card__endurance">Endurance: {endurance}</span>
      </div>
      <Button
        actionOnClick={function (): void {
          throw new Error("Function not implemented.");
        }}
        text={"Modify"}
      ></Button>
      <Button
        actionOnClick={function (): void {
          throw new Error("Function not implemented.");
        }}
        text={"Delete"}
      ></Button>
    </RobotCardStyled>
  );
};

export default RobotCard;
