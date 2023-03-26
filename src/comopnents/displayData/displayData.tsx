import { Box, Typography } from "@mui/material";
import { useBtcPriceInfo } from "../../util/converter";
import { BtcAddressInfo, BtcPriceInfo } from "../../types/types";

import { DisplayAddressInfo } from "../DisplayAddressInfo/displayAddressInfo";
import { DisplayTransactionData } from "../displatTransactionData/displayTransactionData";

export const DisplayData = (data: {
  btcAddressData: BtcAddressInfo;
  currency: string;
  btcPriceInfo: BtcPriceInfo;
}) => {
  const { btcAddressData, currency } = data;
  const { txs } = btcAddressData;
  const { btcPriceInfo } = useBtcPriceInfo();

  return (
    <Box>
      <Typography variant="h5">BTC Address Search Info</Typography>
      <DisplayAddressInfo
        btcAddressData={btcAddressData}
        currency={currency}
        btcPriceInfo={btcPriceInfo}
      />
      <Typography variant="h5">BTC Transactions Info</Typography>

      <DisplayTransactionData
        currency={currency}
        txs={txs}
        btcPriceInfo={btcPriceInfo}
      />
    </Box>
  );
};
