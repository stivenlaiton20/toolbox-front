/* eslint-disable no-undef */
import { render, screen } from "@testing-library/react";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import App from "../src/App";

describe("App", () => {
  it("renders App component", async () => {
    const mock = new MockAdapter(axios);
    const testData = [
      {
        file: "file1.csv",
        lines: [
          {
            text: "Lorem Ipsum",
            number: 1,
            hex: "0x123",
          },
        ],
      },
    ];
    mock.onGet(/\/files\/data/).reply(200, testData);

    render(<App />);

    await screen.findByText("Archivos:");

    expect(screen.getByText("Archivos:")).toBeInTheDocument();
    expect(screen.getByLabelText("Nombre del Archivo:")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("ej: file2.csv")).toBeInTheDocument();

    expect(mock.history.get.length).toBe(1);
  });
});
