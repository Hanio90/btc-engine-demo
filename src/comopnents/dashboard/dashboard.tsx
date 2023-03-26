import * as React from "react";
import { useState } from "react";
import { useTheme } from "@mui/material/styles";
import { TextField, Button } from "@mui/material";

import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { BtcAddressInfo } from "../btcAddressInfo/btcAddressInfo";

const centerfy = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  mt: "20px",
};

const autoSearchStyles = {
  width: "28.7%",

  "& .MuiInputBase-input": {
    color: "white",
  },
  "& .MuiInputLabel-root": {
    color: "white",
  },
  "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: "white",
  },
  "& .MuiOutlinedInput-root": {
    backgroundColor: "rgba(255, 255, 255, 0.4)",
  },
  "& .MuiInputLabel-root.Mui-focused": {
    color: "white",
  },
};

export const Dashboard = () => {
  const theme = useTheme();
  const [address, setAddress] = useState<string>("");
  const [search, setSearch] = useState<boolean>(false);

  const handleSearch = () => {
    setSearch(true);
  };

  const handleChange = (value: any) => {
    setSearch(false);
    setAddress(value);
  };

  return (
    <Box>
      <Box
        component="main"
        sx={{
          backgroundColor: "light",
          flexGrow: 1,
          height: "100vh",
          overflow: "auto",
        }}
      >
        {
          <Box sx={centerfy}>
            <Button
              onClick={handleSearch}
              disabled={!address}
              data-testid="searchButton"
              sx={{
                backgroundColor: "#00ffff",
                color: "#000000",
                "&:hover": {
                  background: "#ffffff",
                  boxShadow: "-3px 4px 8px  rgba(0, 0, 0, 0.3)",
                },
                ":disabled": {
                  backgroundColor: "grey",
                  color: "white",
                },
              }}
            >
              Search
            </Button>
            <TextField
              label="Address"
              aria-label="btc-address"
              role="addressSearchField"
              onChange={(event) => handleChange(event.target.value)}
              inputProps={{ "data-testid": "addressSearchField" }}
              sx={autoSearchStyles}
            />
          </Box>
        }
        <Box sx={centerfy}>
          {address && search && <BtcAddressInfo address1={address} />}
        </Box>
      </Box>

      <Toolbar />
    </Box>
  );
};
