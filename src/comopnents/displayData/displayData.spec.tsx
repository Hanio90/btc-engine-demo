import { render, fireEvent, screen } from "@testing-library/react";
import { DisplayData } from "../displayData/displayData";
import { mockBtcAddressData } from "./mockData";

describe("DisplayData", () => {
  it("should render the component", () => {
    const { baseElement } = render(
      <DisplayData btcAddressData={mockBtcAddressData} currency="USD" />
    );

    expect(baseElement).toBeDefined();
  });

  it("should render the component with USD data", () => {
    const { baseElement } = render(
      <DisplayData btcAddressData={mockBtcAddressData} currency="USD" />
    );

    expect(baseElement).toBeDefined();
  });

  it("should render the component with EUR data", () => {
    const { baseElement } = render(
      <DisplayData btcAddressData={mockBtcAddressData} currency="EUR" />
    );

    expect(baseElement).toBeDefined();
  });

  it("should render the component with BTC data", () => {
    const { baseElement } = render(
      <DisplayData btcAddressData={mockBtcAddressData} currency="BTC" />
    );

    expect(baseElement).toBeDefined();
  });
});
