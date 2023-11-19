export interface RobotStructureWithoutId {
  name: string;
  imageUrl: string;
  speed: number;
  endurance: number;
}

export interface RobotStructure extends RobotStructureWithoutId {
  _id: string;
}
export interface RobotsStateStructure {
  robots: RobotStructure[];
}
