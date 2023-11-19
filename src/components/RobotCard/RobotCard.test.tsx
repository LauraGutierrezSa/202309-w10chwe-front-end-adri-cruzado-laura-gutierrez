import { screen } from "@testing-library/react";
import customRenderProvider from "../../testUtils/CustomRenderProvider";
import RobotCard from "./RobotCard";
import { optimusPrimeData } from "../../store/features/robots/mocks/robotMock";

describe("Given a RobotCard component", () => {
  describe("When is rendered with 'Optimus Prime' robot's information", () => {
    test("Then it should show the text 'Optimus Prime' in a heading", () => {
      const expectedName = "Optimus Prime";
      customRenderProvider(<RobotCard robot={optimusPrimeData} />);

      const heading = screen.getByText(expectedName);

      expect(heading.textContent).toBe(expectedName);
    });
  });
});
