/** @jest-environment jsdom */
import { screen } from "@testing-library/react";
import { render } from "../../test-utils";
import userEvent from "@testing-library/user-event";
import "whatwg-fetch";
import "@testing-library/jest-dom";
import Bio from "./Bio";

describe("Bio component", () => {
  describe("When the components mounts", () => {
    it("should render the Bart Simpsont bio by default", async () => {
      render(<Bio />);
      expect(await screen.findByAltText("Bart Simpson")).toBeVisible();
    });
    it("should render the Bart Simpsont name", async () => {
      render(<Bio />);
      expect(await screen.findByText("Bart Simpson")).toBeVisible();
    });
    it("should render the Bart Simpsont bio", async () => {
      render(<Bio />);
      expect(
        await screen.findByText(
          "A los diez años, Bart es el hijo mayor y único varón de Homero y Marge, y el hermano de Lisa y Maggie. Los rasgos de carácter más prominentes y populares de Bart son su picardía, rebeldía y falta de respeto a la autoridad."
        )
      ).toBeVisible();
    });
  });

  describe("When click homer button", () => {
    it("should render Homer bio when user click his button", async () => {
      render(<Bio />);
      expect(screen.getByLabelText("HOMERO")).toBeEnabled();
      await userEvent.click(screen.getByLabelText("HOMERO"));
      expect(await screen.findByText("Homero Simpson")).toBeVisible();
    });
  });
});
