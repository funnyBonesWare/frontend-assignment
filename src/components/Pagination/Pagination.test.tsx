import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Pagination from "./Pagination";

describe("Pagination Component", () => {
  it("renders correctly", () => {
    const { getByText } = render(
      <Pagination
        currentPage={1}
        totalRecords={50}
        recordsPerPage={5}
        onPageChange={jest.fn()}
      />
    );

    // Check if the current page, total pages, and Next button are rendered
    expect(getByText("Page 1 of 10")).toBeInTheDocument(); // Page info check
    expect(getByText("Previous")).toBeInTheDocument();
    expect(getByText("Next")).toBeInTheDocument();
  });

  it("calls onPageChange when next is clicked", () => {
    const mockOnPageChange = jest.fn();
    const { getByText } = render(
      <Pagination
        currentPage={1}
        totalRecords={50}
        recordsPerPage={5}
        onPageChange={mockOnPageChange}
      />
    );

    // Click the Next button
    fireEvent.click(getByText("Next"));

    // Check if the mock function is called with the correct page number
    expect(mockOnPageChange).toHaveBeenCalledWith(2);
  });

  it("disables the Previous button on the first page", () => {
    const { getByText } = render(
      <Pagination
        currentPage={1}
        totalRecords={50}
        recordsPerPage={5}
        onPageChange={jest.fn()}
      />
    );

    const previousButton = getByText("Previous");
    expect(previousButton).toBeDisabled();
  });

  it("disables the Next button on the last page", () => {
    const { getByText } = render(
      <Pagination
        currentPage={10}
        totalRecords={50}
        recordsPerPage={5}
        onPageChange={jest.fn()}
      />
    );

    const nextButton = getByText("Next");
    expect(nextButton).toBeDisabled();
  });

  it("correctly renders page numbers", () => {
    const { getByText } = render(
      <Pagination
        currentPage={2}
        totalRecords={50}
        recordsPerPage={5}
        onPageChange={jest.fn()}
      />
    );

    // Check for page info with current page and total pages
    expect(getByText("Page 2 of 10")).toBeInTheDocument();
  });
});
