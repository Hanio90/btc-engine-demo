import { Box, Typography, Button, Modal } from "@mui/material";
import { formatPriceData, useBtcPriceInfo } from "../../util/converter";
import { BtcPriceInfo, Transactions } from "../../types/types";
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

export const DisplayTransactionData = (data: {
  currency: string;
  txs: Transactions[];
  btcPriceInfo: BtcPriceInfo;
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

  const { currency, txs, btcPriceInfo } = data;

  return (
    <Box>
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
