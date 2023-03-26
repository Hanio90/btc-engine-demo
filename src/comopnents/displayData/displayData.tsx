import { Box, Typography, Button, Modal } from "@mui/material";
import { formatPriceData, useBtcPriceInfo } from "../../util/converter";
import { BtcAddressInfo } from "../../types/types";
import { useState } from "react";
import { getTransactionUpdates } from "../../hooks/transactionUpdates";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

export const DisplayData = (data: {
  btcAddressData: BtcAddressInfo;
  currency: string;
}) => {
  const [modalBlockHash, setModalBlockHash] = useState<string>("");
  const [open, setOpen] = useState(false);

  const handleOpen = (txData: any) => {
    console.log("the data is here transactionData", txData);
    setModalBlockHash(txData.block_hash);
    getTransactionUpdates(txData);
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const { btcAddressData, currency } = data;
  const { balance, n_tx, total_received, total_sent, txs } = btcAddressData;
  const { btcPriceInfo } = useBtcPriceInfo();

  return (
    <Box>
      <Typography variant="h5">BTC Address Search Info</Typography>
      <Typography variant="body1">Confirmed Transactions: {n_tx}</Typography>
      {currency === "USD" && (
        <div>
          <Typography variant="body1" data-testid="recievedUSD">
            Total received:{" "}
            {formatPriceData(total_received * 0.0002740161855743607, currency)}
          </Typography>
          <Typography variant="body1" data-testid="spentUSD">
            Total spent:{" "}
            {formatPriceData(total_sent * 0.0002740161855743607, currency)}
          </Typography>
          <Typography variant="body1" data-testid="unspentUSD">
            Total unspent:{" "}
            {formatPriceData(
              (total_received - total_sent) * 0.0002740161855743607,
              currency
            )}
          </Typography>
          <Typography variant="body1" data-testid="balanceUSD">
            Balance:{" "}
            {formatPriceData(balance * 0.0002740161855743607, currency)}
          </Typography>
        </div>
      )}
      {currency === "EUR" && (
        <div>
          <Typography variant="body1" data-testid="recievedEUR">
            Total received:{" "}
            {formatPriceData(total_received * 0.0002541785098035193, currency)}
          </Typography>
          <Typography variant="body1" data-testid="spentEUR">
            Total spent:{" "}
            {formatPriceData(total_sent * 0.0002541785098035193, currency)}
          </Typography>
          <Typography variant="body1" data-testid="unspentEUR">
            Total unspent:{" "}
            {formatPriceData(
              (total_received - total_sent) * 0.0002541785098035193,
              currency
            )}
          </Typography>
          <Typography variant="body1" data-testid="balanceEUR">
            Balance:{" "}
            {formatPriceData(balance * 0.0002541785098035193, currency)}
          </Typography>
        </div>
      )}
      {currency === "BTC" && (
        <div>
          <Typography variant="body1" data-testid="recievedBTC">
            Total received: BTC{" "}
            {(total_received * 0.0002740161855743607) / btcPriceInfo.usd}
          </Typography>
          <Typography variant="body1" data-testid="spentBTC">
            Total spent: BTC{" "}
            {(total_sent * 0.0002740161855743607) / btcPriceInfo.usd}
          </Typography>
          <Typography variant="body1" data-testid="unspentBTC">
            Total unspent:{" "}
            {(total_received * 0.0002740161855743607 -
              total_sent * 0.0002740161855743607) /
              btcPriceInfo.usd}
          </Typography>
          <Typography variant="body1" data-testid="balanceBTC">
            Balance:{" "}
            {formatPriceData(
              (balance * 0.0002740161855743607) / btcPriceInfo.usd,
              currency
            )}
          </Typography>
        </div>
      )}
      <Typography variant="h5">BTC Transactions Info</Typography>
      {txs.map((tx, index) => {
        return (
          <Box
            sx={{
              mb: "50px",
            }}
            key={index}
          >
            <Typography variant="body1">Transaction #: {index + 1}</Typography>
            <Typography variant="body1" data-testid="transactionHash">
              Transaction Hash: {tx.hash}
            </Typography>
            <Typography variant="body1" data-testid="recieved">
              Received Time: {tx.received}
            </Typography>
            <Typography variant="body1" data-testid="Confirmed">
              Status: {tx.confirmed ? "Confirmed" : " Not Confirmed"}
            </Typography>
            <Typography variant="body1" data-testid="size">
              Size in bytes: {tx.size}
            </Typography>
            <Typography variant="body1" data-testid="confirmations">
              Confirmations: {tx.confirmations}
            </Typography>
            <Typography variant="body1" data-testid="inputs">
              Total Btc Input: {tx.inputs.length}
            </Typography>
            <Typography variant="body1" data-testid="outputs">
              Total Btc Output: {tx.outputs.length}
            </Typography>
            {currency === "USD" && (
              <Typography variant="body1" data-testid="feesUsd">
                Total Fees:{" "}
                {formatPriceData(tx.fees * 0.0002740161855743607, currency)}
              </Typography>
            )}
            {currency === "EUR" && (
              <Typography variant="body1" data-testid="feesEUR">
                Total Fees:{" "}
                {formatPriceData(tx.fees * 0.0002541785098035193, currency)}
              </Typography>
            )}
            {currency === "BTC" && (
              <Typography variant="body1" data-testid="feesBTC">
                Total Fees:{" "}
                {(tx.fees * 0.0002740161855743607) / btcPriceInfo.usd}
              </Typography>
            )}
            <Button
              sx={{
                background: "blue",
                height: "50px",
                color: "white",
                mb: "50px",
              }}
              role="button"
              data-testid="subscribe"
              onClick={() => {
                handleOpen(tx);
              }}
            >
              Subscribe
            </Button>
            <div>
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="parent-modal-title"
                aria-describedby="parent-modal-description"
              >
                <Box sx={{ ...style, width: "800" }}>
                  <h2 id="parent-modal-title">SUBSCRIBED!</h2>
                  <p id="parent-modal-description">
                    You have subscribed to recieve updates for this block:{" "}
                    {modalBlockHash}
                  </p>
                </Box>
              </Modal>
            </div>
          </Box>
        );
      })}
    </Box>
  );
};
