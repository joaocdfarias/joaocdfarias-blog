import { render, screen } from "@testing-library/react";
import { Header } from "..";

describe("Header", () => {
  it("should render header component", () => {
    render(<Header />);

    const image = screen.getByRole("img", {
      name: /logo with jc initials refering to 'joão carlos', my name\./i,
    });

    expect(image).toBeInTheDocument();
  });
});
