import App from "./App";
import { render, screen } from "@testing-library/react";

describe("App", () => {
  it("should render", async () => {
    render(<App />);

    screen.debug();

    const links = await screen.findAllByRole("link");

    expect(links.length).toBe(2);
  });
});
