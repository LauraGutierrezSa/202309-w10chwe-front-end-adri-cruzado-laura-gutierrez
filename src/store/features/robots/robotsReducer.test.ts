import { robotsMock } from "./mocks/robotsMock";
import {
  robotsReducer,
  initialRobotsState,
  loadRobotsActionCreator,
} from "./robotsSlice";

describe("Given a robotsReducer reducer", () => {
  describe("When the reducer recieves the current state and the action loadRobots", () => {
    test("Then it should return a new state with the new robots.", () => {
      const robotsApi = robotsMock.map((robot) => ({ ...robot }));
      const currentState = initialRobotsState;
      const loadRobots = loadRobotsActionCreator(robotsApi);

      const newState = robotsReducer(currentState, loadRobots);

      expect(newState.robots).toStrictEqual(robotsApi);
    });
  });
});
