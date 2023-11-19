import { renderHook } from "@testing-library/react";
import { robotsMock } from "../mocks/robots/robotsMock";
import useRobotsApi from "./useRobotsApi";

describe("Given a useRobotsApi hook", () => {
  describe("When it gets the information of two robots", () => {
    test("Then it should show the information of Optimus Prime and Mazinger Z", async () => {
      const expectedRobots = robotsMock;

      const {
        result: {
          current: { getRobots },
        },
      } = renderHook(() => useRobotsApi());

      const currentRobots = await getRobots();

      expect(currentRobots).toStrictEqual(expectedRobots);
    });
  });
});
