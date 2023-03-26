import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Dashboard } from "./dashboard";

describe("DisplayData", () => {
  it("should render the component", () => {
    //Arrange
    const { baseElement } = render(<Dashboard />);

    //Assert
    expect(baseElement).toBeDefined();
  });

  it("should input test into text field", async () => {
    //Arrange
    const { baseElement, getByTestId } = render(<Dashboard />);
    const inputData = "15urYnyeJe3gwbGJ74wcX89Tz7ZtsFDVew";
    const input = getByTestId("addressSearchField") as HTMLInputElement;

    //Act
    fireEvent.change(input, { target: { value: inputData } });

    //Assert
    expect(input.value).toBe(inputData);
    expect(baseElement).toBeDefined();
  });

  it("should not click the search button because it is disabled", async () => {
    //Arrange
    const { getByText } = render(<Dashboard />);

    //Assert
    expect(getByText(/Search/i).closest("button")).toHaveAttribute("disabled");
  });

  it("should have a button that is enabled", async () => {
    //Arrange
    const { getByTestId, getByText } = render(<Dashboard />);
    const inputData = "15urYnyeJe3gwbGJ74wcX89Tz7ZtsFDVew";
    const input = getByTestId("addressSearchField") as HTMLInputElement;

    //Act
    fireEvent.change(input, { target: { value: inputData } });

    //Assert
    expect(getByText(/Search/i).closest("button")).not.toBeDisabled();
  });

  it("should search for address", async () => {
    //Arrange
    const { getByTestId, getByText } = render(<Dashboard />);
    const inputData = "15urYnyeJe3gwbGJ74wcX89Tz7ZtsFDVew";
    const input = getByTestId("addressSearchField") as HTMLInputElement;

    //Act
    fireEvent.change(input, { target: { value: inputData } });
    fireEvent.click(getByText(/Search/i).closest("button") as HTMLInputElement);

    //Assert
    expect(getByText(/Search/i).closest("button")).not.toBeDisabled();
  });
});
