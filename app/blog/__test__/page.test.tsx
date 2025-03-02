import { render, screen } from "@testing-library/react";
import Blog from "../page";

describe("Blog Page", () => {
  it("should render blog page correctly", () => {
    render(<Blog />);

    expect(screen.getByText("Blog posts")).toBeInTheDocument();
  });

  it("should render blog posts", () => {
    render(<Blog />);

    expect(screen.getByText("What I learned in 2024")).toBeInTheDocument();
  });
});
