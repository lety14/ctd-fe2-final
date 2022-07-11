/** @jest-environment jsdom */
import { screen } from "@testing-library/react";
import { render } from "../../test-utils";
import { server } from "../../tests/mocks/server";
import "whatwg-fetch";
import "@testing-library/jest-dom";
import NewsList from "./NewsList";

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("NewsList component", () => {
  describe("When the component renders", () => {
    it("should render cards", async () => {
      render(<NewsList />);
      expect(screen.getByText("Noticias de los Simpsons")).toBeVisible();
      expect(
        (await screen.findAllByLabelText("modal-title")).length
      ).toBeGreaterThan(0);
      expect(
        (await screen.findAllByLabelText("description")).length
      ).toBeGreaterThan(0);
      expect((await screen.findAllByText("Ver más")).length).toBeGreaterThan(0);
    });
  });
});
