import { Box, Typography } from "@mui/material";
import { formatPriceData } from "../../util/converter";
import { BtcAddressInfo, BtcPriceInfo } from "../../types/types";

export const DisplayWalletInfo = (data: {
  btcAddressData: BtcAddressInfo;
  currency: string;
  calculation: number;
  btcPriceInfo: BtcPriceInfo;
}) => {
  const { btcAddressData, currency, calculation, btcPriceInfo } = data;
  const { balance, n_tx, total_received, total_sent } = btcAddressData;

  if (!calculation) {
    return <h1>Calculation is undefined!</h1>;
  }

  return (
    <Box sx={{ mb: "20px" }}>
      {currency !== "BTC" ? (
        <div>
          <Typography variant="body1">
            Confirmed Transactions: {n_tx}
          </Typography>

          <Typography variant="body1" data-testid={`recieved${currency}`}>
            Total received:{" "}
            {formatPriceData(total_received * calculation, currency)}
          </Typography>
          <Typography variant="body1" data-testid={`spent${currency}`}>
            Total spent: {formatPriceData(total_sent * calculation, currency)}
          </Typography>
          <Typography variant="body1" data-testid={`unspent${currency}`}>
            Total unspent:{" "}
            {formatPriceData(
              (total_received - total_sent) * calculation,
              currency
            )}
          </Typography>
          <Typography variant="body1" data-testid={`balance${currency}`}>
            Balance: {formatPriceData(balance * calculation, currency)}
          </Typography>
        </div>
      ) : (
        <div>
          <Typography variant="body1">
            Confirmed Transactions: {n_tx}
          </Typography>
          <Typography variant="body1" data-testid={`recieved${currency}`}>
            Total received: BTC{" "}
            {(total_received * 0.0002740161855743607) / btcPriceInfo.usd}
          </Typography>
          <Typography variant="body1" data-testid={`spent${currency}`}>
            Total spent: BTC{" "}
            {(total_sent * 0.0002740161855743607) / btcPriceInfo.usd}
          </Typography>
          <Typography variant="body1" data-testid={`unspent${currency}`}>
            Total unspent:{" "}
            {(total_received * 0.0002740161855743607 -
              total_sent * 0.0002740161855743607) /
              btcPriceInfo.usd}
          </Typography>
          <Typography variant="body1" data-testid={`balance${currency}`}>
            Balance:{" "}
            {formatPriceData(
              (balance * 0.0002740161855743607) / btcPriceInfo.usd,
              currency
            )}
          </Typography>
        </div>
      )}
    </Box>
  );
};
