import { render, waitFor } from "@testing-library/react";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import useFilesData from "../src/Hooks/useFilesData";

describe("useFilesData hook", () => {
  it("fetch data successfully", async () => {
    const mock = new MockAdapter(axios);
    const responseData = { data: "test data" };
    mock.onGet("http://localhost:3000/files/data").reply(200, responseData);

    let result;
    const TestComponent = () => {
      result = useFilesData();
      return null;
    };

    render(<TestComponent />);

    await waitFor(() => expect(result.data).toEqual(responseData));
    expect(result.loading).toBe(false);
    expect(result.error).toBe(null);

    mock.restore();
  });
});
