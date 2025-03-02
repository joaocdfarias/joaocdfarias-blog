import { render, screen } from "@testing-library/react";
import { PostCard } from "..";

describe("PostCard", () => {
  it("should render component correctly", () => {
    render(<PostCard title="Title" summary="Summary text" />);

    expect(screen.getByText("Title")).toBeInTheDocument();
    expect(screen.getByText("Summary text")).toBeInTheDocument();
  });
});
