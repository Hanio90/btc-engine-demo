import { Box } from "@mui/material";
import { BtcAddressInfo, BtcPriceInfo } from "../../types/types";
import { DisplayWalletInfo } from "../displayWalletInfo/displayWalletInfo";

export const DisplayAddressInfo = (data: {
  btcAddressData: BtcAddressInfo;
  currency: string;
  btcPriceInfo: BtcPriceInfo;
}) => {
  const { btcAddressData, currency, btcPriceInfo } = data;

  let calculation;

  switch (currency) {
    case "USD":
      calculation = 0.0002740161855743607;
      break;
    case "EUR":
      calculation = 0.0002541785098035193;
      break;
    case "BTC":
      calculation = 0.0002740161855743607;
      break;

    default:
      break;
  }

  if (!calculation) {
    return <h1>Calculation is undefined!</h1>;
  }

  return (
    <Box>
      <DisplayWalletInfo
        btcAddressData={btcAddressData}
        currency={currency}
        calculation={calculation}
        btcPriceInfo={btcPriceInfo}
      />
    </Box>
  );
};
