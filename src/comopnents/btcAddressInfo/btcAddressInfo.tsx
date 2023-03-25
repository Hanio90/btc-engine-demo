import { Box, Typography, Button } from "@mui/material";
import { useBtcAddressInfo } from "../../hooks/useBtcAddressInfo";
import ButtonGroup from "@mui/material/ButtonGroup";
import { useState } from "react";
import { DisplayData } from "../displayData/displayData";

export const BtcAddressInfo = (address: { address1: string }) => {
  const apiUrl = `https://api.blockcypher.com/v1/btc/main/addrs/${address.address1}/full`;
  const { btcAddressInfo, isLoading, error } = useBtcAddressInfo({ apiUrl });
  const [useCurrency, setCurrency] = useState("USD");

  const handleOnclickCurrency = (currency: string) => {
    setCurrency(currency);
  };

  if (isLoading) {
    return <Typography>Loading...</Typography>;
  }

  if (error) {
    return <Typography color="error">{error}</Typography>;
  }

  if (!btcAddressInfo) {
    return <h1>btcAddressInfo is not available!</h1>;
  }

  return (
    <Box sx={{ p: 2 }}>
      <ButtonGroup
        sx={{ mb: "30px" }}
        variant="contained"
        aria-label="outlined primary button group"
      >
        <Button
          onClick={() => {
            handleOnclickCurrency("USD");
          }}
        >
          USD
        </Button>
        <Button
          onClick={() => {
            handleOnclickCurrency("EUR");
          }}
        >
          EUR
        </Button>
        <Button
          onClick={() => {
            handleOnclickCurrency("BTC");
          }}
        >
          BTC
        </Button>
      </ButtonGroup>
      <DisplayData btcAddressData={btcAddressInfo} currency={useCurrency} />
    </Box>
  );
};
