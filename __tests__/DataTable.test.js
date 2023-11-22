import { render, screen } from "@testing-library/react";
import DataTable from "../src/components/DataTable";

describe("DataTable component", () => {
  const testData = [
    {
      file: "test.txt",
      lines: [
        {
          text: "Lorem ipsum",
          number: 1,
          hex: "4c6f72656d20697073756d",
        },
      ],
    },
  ];

  it("renders table with correct data", () => {
    render(<DataTable data={testData} />);

    expect(screen.getByText("File Name")).toBeInTheDocument();
    expect(screen.getByText("Text")).toBeInTheDocument();
    expect(screen.getByText("Number")).toBeInTheDocument();
    expect(screen.getByText("Hex")).toBeInTheDocument();

    testData.forEach((fileData) => {
      expect(screen.getByText(fileData.file)).toBeInTheDocument();
      expect(screen.getByText(fileData.lines[0].text)).toBeInTheDocument();
      expect(
        screen.getByText(fileData.lines[0].number.toString())
      ).toBeInTheDocument();
      expect(screen.getByText(fileData.lines[0].hex)).toBeInTheDocument();
    });
  });
});
