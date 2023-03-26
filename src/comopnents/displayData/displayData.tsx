import { Card, Divider, Typography } from "@mui/material";
import { useBtcPriceInfo } from "../../util/converter";
import { BtcAddressInfo } from "../../types/types";
import { DisplayAddressInfo } from "../DisplayAddressInfo/displayAddressInfo";
import { DisplayTransactionData } from "../displatTransactionData/displayTransactionData";

export const DisplayData = (data: {
  btcAddressData: BtcAddressInfo;
  currency: string;
}) => {
  const { btcAddressData, currency } = data;
  const { txs } = btcAddressData;
  const { btcPriceInfo } = useBtcPriceInfo();

  return (
    <Card variant="outlined" sx={{ borderColor: "#00ffff", padding: "1rem" }}>
      <Typography variant="h5">BTC Address Search Info</Typography>
      <DisplayAddressInfo
        btcAddressData={btcAddressData}
        currency={currency}
        btcPriceInfo={btcPriceInfo}
      />
      <Divider
        sx={{
          backgroundColor: "white",
          mb: "20px",
        }}
      />
      <Typography variant="h5">BTC Transactions Info</Typography>

      <DisplayTransactionData
        currency={currency}
        txs={txs}
        btcPriceInfo={btcPriceInfo}
      />
    </Card>
  );
};
