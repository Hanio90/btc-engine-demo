import { render, fireEvent, screen } from "@testing-library/react";
import { BtcAddressInfo } from "./btcAddressInfo";

describe("BtcAddressInfo", () => {
  it("should render the component", () => {
    const { baseElement } = render(
      <BtcAddressInfo address1="15urYnyeJe3gwbGJ74wcX89Tz7ZtsFDVew" />
    );

    expect(baseElement).toBeDefined();
  });
});
