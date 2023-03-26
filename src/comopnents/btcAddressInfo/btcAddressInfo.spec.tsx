import { fireEvent, render } from "@testing-library/react";

import { BtcAddressInfo } from "./btcAddressInfo";
import { mockBtcAddressData } from "../displayData/mockData";
import "@testing-library/jest-dom";

jest.mock("../../hooks/useBtcAddressInfo", () => ({
  useBtcAddressInfo: jest.fn().mockImplementation(() => {
    return {
      btcAddressInfo: mockBtcAddressData,
      isLoading: false,
      error: null,
    };
  }),
}));

describe("BtcAddressInfo", () => {
  it("should render the component", () => {
    const { baseElement, debug, getByText } = render(
      <BtcAddressInfo address1="15urYnyeJe3gwbGJ74wcX89Tz7ZtsFDVew" />
    );
    fireEvent.click(getByText("USD"));
    expect(baseElement).toBeDefined();
  });

  it("should click the USD Button", () => {
    const { baseElement, getByText } = render(
      <BtcAddressInfo address1="15urYnyeJe3gwbGJ74wcX89Tz7ZtsFDVew" />
    );
    fireEvent.click(getByText("USD"));
    expect(getByText("Viewing data in USD currency!")).toBeInTheDocument();
    expect(baseElement).toBeDefined();
  });

  it("should click the EUR Button", () => {
    const { baseElement, getByText } = render(
      <BtcAddressInfo address1="15urYnyeJe3gwbGJ74wcX89Tz7ZtsFDVew" />
    );
    fireEvent.click(getByText("EUR"));
    expect(getByText("Viewing data in EUR currency!")).toBeInTheDocument();
    expect(baseElement).toBeDefined();
  });

  it("should click the BTC Button", () => {
    const { baseElement, getByText } = render(
      <BtcAddressInfo address1="15urYnyeJe3gwbGJ74wcX89Tz7ZtsFDVew" />
    );
    fireEvent.click(getByText("BTC"));
    expect(getByText("Viewing data in BTC currency!")).toBeInTheDocument();
    expect(baseElement).toBeDefined();
  });
});
