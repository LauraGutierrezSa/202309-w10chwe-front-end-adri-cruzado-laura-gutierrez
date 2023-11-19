import { screen } from "@testing-library/react";
import { robotsMock } from "../../store/features/robots/mocks/robotsMock";
import renderWithProviders from "../testUtils/renderWithProviders";
import RobotList from "./RobotList";

describe("Given a RobotList component", () => {
  describe("When it receives a list of robots with 'Optimus Prime' and 'Mazinger Z'", () => {
    test("Then it should show a list with 'Optimus Prime' and 'Mazinger Z'", () => {
      const robots = robotsMock;
      const expectedNumberOfRobots = 2;

      renderWithProviders(<RobotList />, robots);

      const numberOfListItems = screen.getAllByRole("listitem").length;

      expect(numberOfListItems).toBe(expectedNumberOfRobots);
    });
  });
});
