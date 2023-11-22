import { render, screen, fireEvent } from "@testing-library/react";
import Filter from "../src/components/Filter";

describe("FilterComponent", () => {
  it("calls onFilter prop with correct value on input change", () => {
    const mockOnFilter = jest.fn();
    render(<Filter onFilter={mockOnFilter} />);

    const inputElement = screen.getByPlaceholderText("ej: file2.csv");

    fireEvent.change(inputElement, { target: { value: "testFileName" } });

    expect(mockOnFilter).toHaveBeenCalledWith("testFileName");
  });
});
