import { fireEvent, render } from "@testing-library/react";

import { BtcAddressInfo } from "./btcAddressInfo";
import { mockBtcAddressData } from "../displayData/mockData";
import "@testing-library/jest-dom";

const mock = {
  btcAddressInfo: mockBtcAddressData,
  isLoading: false,
  error: "",
};
jest.mock("../../hooks/useBtcAddressInfo", () => ({
  useBtcAddressInfo: jest.fn().mockImplementation(() => {
    return mock;
  }),
}));

describe("BtcAddressInfo", () => {
  it("should render the component", () => {
    const { baseElement, getByText } = render(
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

  it("should click the USD Button", () => {
    mock.isLoading = true;
    const { getByText } = render(
      <BtcAddressInfo address1="15urYnyeJe3gwbGJ74wcX89Tz7ZtsFDVew" />
    );
    expect(getByText("Loading...")).toBeInTheDocument();
  });

  it("should click the USD Button", () => {
    mock.isLoading = false;
    mock.error = "Error fetching data";
    const { getByText } = render(
      <BtcAddressInfo address1="15urYnyeJe3gwbGJ74wcX89Tz7ZtsFDVew" />
    );
    expect(getByText("Error fetching data")).toBeInTheDocument();
  });
});
