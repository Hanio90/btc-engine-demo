import {
  render,
  renderHook,
  fireEvent,
  screen,
  act,
} from "@testing-library/react";
import { BtcAddressInfo } from "./btcAddressInfo";
import { useBtcAddressInfo } from "../../hooks/useBtcAddressInfo";
import { mockBtcAddressData } from "../displayData/mockData";

// act(() => {
//   jest.mock("../../hooks/useBtcAddressInfo", () => ({
//     useBtcAddressInfo: jest.fn().mockImplementation(() => {
//       {
//         mockBtcAddressData;
//       }
//     }),
//   }));
// });

// global.fetch = jest.fn(() => {
//   Promise.resolve({
//     json: () => Promise.resolve({ message: "success" }),
//   });
// }) as jest.Mock;

describe("BtcAddressInfo", () => {
  it("should render the component", () => {
    act(() => {
      const { baseElement } = render(
        <BtcAddressInfo address1="15urYnyeJe3gwbGJ74wcX89Tz7ZtsFDVew" />
      );

      expect(baseElement).toBeDefined();
    });
  });

  it("should rednder ", async () => {
    //Arrange

    const apiUrl =
      "https://api.blockcypher.com/v1/btc/main/addrs/15urYnyeJe3gwbGJ74wcX89Tz7ZtsFDVew/full";

    const { result } = renderHook(() => useBtcAddressInfo({ apiUrl }));
    console.log(result);
    //Assert
    expect(result.current.error).toEqual("Error fetching data");
  });
});
