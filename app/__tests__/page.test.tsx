import { render, screen } from "@testing-library/react";
import Home from "../page";

describe("Home Page", () => {
  it("should render the home page correctly", () => {
    render(<Home />);

    const heading = screen.getByRole("heading", {
      name: /hi, i’m joão farias 👋/i,
    });

    expect(heading).toBeInTheDocument();
  });
});
