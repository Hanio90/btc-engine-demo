import { render, fireEvent, screen } from "@testing-library/react";
import { DisplayData } from "../displayData/displayData";
import { mockBtcAddressData } from "./mockData";
import "@testing-library/jest-dom";

describe("DisplayData", () => {
  it("should render the component", () => {
    const { baseElement } = render(
      <DisplayData btcAddressData={mockBtcAddressData} currency="USD" />
    );

    expect(baseElement).toBeDefined();
  });

  it("should render the component with USD data", () => {
    const { baseElement, getByTestId } = render(
      <DisplayData btcAddressData={mockBtcAddressData} currency="USD" />
    );
    const recievedUSD = getByTestId("recievedUSD") as HTMLInputElement;
    const spentUSD = getByTestId("spentUSD") as HTMLInputElement;
    const unspentUSD = getByTestId("unspentUSD") as HTMLInputElement;
    const balanceUSD = getByTestId("balanceUSD") as HTMLInputElement;

    expect(recievedUSD).toBeInTheDocument();
    expect(spentUSD).toBeInTheDocument();
    expect(unspentUSD).toBeInTheDocument();
    expect(balanceUSD).toBeInTheDocument();
    expect(baseElement).toBeDefined();
  });

  it("should render the component with EUR data", () => {
    const { baseElement, getByTestId } = render(
      <DisplayData btcAddressData={mockBtcAddressData} currency="EUR" />
    );
    const recievedEUR = getByTestId("recievedEUR") as HTMLInputElement;
    const spentEUR = getByTestId("spentEUR") as HTMLInputElement;
    const unspentEUR = getByTestId("unspentEUR") as HTMLInputElement;
    const balanceEUR = getByTestId("balanceEUR") as HTMLInputElement;

    expect(recievedEUR).toBeInTheDocument();
    expect(spentEUR).toBeInTheDocument();
    expect(unspentEUR).toBeInTheDocument();
    expect(balanceEUR).toBeInTheDocument();

    expect(baseElement).toBeDefined();
  });

  it("should render the component with BTC data", () => {
    const { baseElement, getByTestId } = render(
      <DisplayData btcAddressData={mockBtcAddressData} currency="BTC" />
    );
    const recievedBTC = getByTestId("recievedBTC") as HTMLInputElement;
    const spentBTC = getByTestId("spentBTC") as HTMLInputElement;
    const unspentBTC = getByTestId("unspentBTC") as HTMLInputElement;
    const balanceBTC = getByTestId("balanceBTC") as HTMLInputElement;

    expect(recievedBTC).toBeInTheDocument();
    expect(spentBTC).toBeInTheDocument();
    expect(unspentBTC).toBeInTheDocument();
    expect(balanceBTC).toBeInTheDocument();
    expect(baseElement).toBeDefined();
  });
});
