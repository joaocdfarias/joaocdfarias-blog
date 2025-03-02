import { render, screen } from "@testing-library/react";
import { Popover } from "..";

describe("Popover", () => {
  it("should show popover component", () => {
    render(<Popover show={true} />);

    expect(screen.getByText("📍 Salvador, Bahia, Brazil")).toBeInTheDocument();
  });

  it("should not show popover component", () => {
    render(<Popover show={false} />);

    const popoverImage = screen.getByRole("img", {
      name: /image of elevador lacerda in salvador/i,
    });

    const popoverDiv = popoverImage.parentElement;

    expect(popoverDiv).toHaveClass("opacity-0");
    expect(popoverDiv).toHaveClass("scale-0");
  });
});
