import { render } from "@testing-library/react";
import NavBar from "./navBar";

describe("DisplayData", () => {
  it("should render the component", async () => {
    const { baseElement } = render(<NavBar />);
    expect(baseElement).toBeDefined();
  });
});
