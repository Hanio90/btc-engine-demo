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
});
