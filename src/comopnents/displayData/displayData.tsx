import { Box, Typography, Button } from "@mui/material";
import { formatPriceData, useBtcPriceInfo } from "../../util/converter";
import { BtcAddressInfoInterface } from "../../types/types";

export const DisplayData = (data: {
  btcAddressData: BtcAddressInfoInterface;
  currency: string;
}) => {
  const { btcAddressData, currency } = data;
  const { balance, n_tx, total_received, total_sent, txs, walletAddress } =
    btcAddressData;
  const { btcPriceInfo } = useBtcPriceInfo();
  const usdRecievedBtcConverstion = total_received / btcPriceInfo.usd;
  const handleOnclick = (waletAddress: any, hash: any) => {};
  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h5">BTC Address Search Info</Typography>
      <Typography variant="body1">Confirmed Transactions: {n_tx}</Typography>
      {currency === "USD" && (
        <div>
          <Typography variant="body1">
            Total received:{" "}
            {formatPriceData(total_received * 0.0002740161855743607, currency)}
          </Typography>
          <Typography variant="body1">
            Total spent:{" "}
            {formatPriceData(total_sent * 0.0002740161855743607, currency)}
          </Typography>
          <Typography variant="body1">
            Total Unspent:{" "}
            {formatPriceData(
              (total_received - total_sent) * 0.0002740161855743607,
              currency
            )}
          </Typography>
          <Typography variant="body1">
            Balance:{" "}
            {formatPriceData(balance * 0.0002740161855743607, currency)}
          </Typography>
        </div>
      )}
      {currency === "EUR" && (
        <div>
          <Typography variant="body1">
            Total received:{" "}
            {formatPriceData(total_received * 0.0002541785098035193, currency)}
          </Typography>
          <Typography variant="body1">
            Total spent:{" "}
            {formatPriceData(total_sent * 0.0002541785098035193, currency)}
          </Typography>
          <Typography variant="body1">
            Total Unspent:{" "}
            {formatPriceData(
              (total_received - total_sent) * 0.0002541785098035193,
              currency
            )}
          </Typography>
          <Typography variant="body1">
            Balance:{" "}
            {formatPriceData(balance * 0.0002541785098035193, currency)}
          </Typography>
        </div>
      )}
      {currency === "BTC" && (
        <div>
          <Typography variant="body1">
            Total received: BTC{" "}
            {(total_received * 0.0002740161855743607) / btcPriceInfo.usd}
          </Typography>
          <Typography variant="body1">
            Total spent: BTC{" "}
            {(total_sent * 0.0002740161855743607) / btcPriceInfo.usd}
          </Typography>
          <Typography variant="body1">
            Total Unspent:{" "}
            {(total_received * 0.0002740161855743607 -
              total_sent * 0.0002740161855743607) /
              btcPriceInfo.usd}
          </Typography>
          <Typography variant="body1">
            Balance:{" "}
            {formatPriceData(
              (balance * 0.0002740161855743607) / btcPriceInfo.usd,
              currency
            )}
          </Typography>
        </div>
      )}
      <Typography variant="h5">BTC Transactions Info</Typography>
      {txs.map((data, index) => {
        return (
          <Box
            sx={{
              mb: "50px",
            }}
            key={index}
          >
            <Typography variant="body1">Transaction #: {index + 1}</Typography>
            <Typography variant="body1">
              Transaction Hash: {data.hash}
            </Typography>
            <Typography variant="body1">
              Received Time: {data.received}
            </Typography>
            <Typography variant="body1">
              Status: {data.confirmed ? "Confirmed" : " Not Confirmed"}
            </Typography>
            Size in bytes: {data.size}
            <Typography variant="body1">
              Confirmations: {data.confirmations}
            </Typography>
            <Typography variant="body1">
              Total Btc Input: {data.inputs.length}
            </Typography>
            <Typography variant="body1">
              Total Btc Output: {data.outputs.length}
            </Typography>
            {currency === "USD" && (
              <Typography variant="body1">
                Total Fees:{" "}
                {formatPriceData(data.fees * 0.0002740161855743607, currency)}
              </Typography>
            )}
            {currency === "EUR" && (
              <Typography variant="body1">
                Total Fees:{" "}
                {formatPriceData(data.fees * 0.0002541785098035193, currency)}
              </Typography>
            )}
            {currency === "BTC" && (
              <Typography variant="body1">
                Total Fees:{" "}
                {(data.fees * 0.0002740161855743607) / btcPriceInfo.usd}
              </Typography>
            )}
            <Button
              sx={{
                background: "blue",
                height: "50px",
                color: "white",
              }}
              onClick={() => handleOnclick(walletAddress, data.hash)}
            >
              Subscribe
            </Button>
          </Box>
        );
      })}
    </Box>
  );
};
