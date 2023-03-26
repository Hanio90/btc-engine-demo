import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

interface Props {
  children?: React.ReactNode;
}

const StyledAppBar = styled(AppBar)({
  height: "4rem",
  boxShadow: "none",
  position: "fixed",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
});

export default function NavBar(props: Props): JSX.Element {
  return (
    <React.Fragment>
      <CssBaseline />
      <Box sx={{ flexGrow: 1 }}>
        <StyledAppBar position="sticky">
          <Typography variant="h6">BTC Search Engine</Typography>
        </StyledAppBar>
        <Toolbar />
      </Box>
    </React.Fragment>
  );
}
