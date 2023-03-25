import * as React from 'react';
import { useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { TextField, Button } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import NavBar from '../navbar/navbar';
import { BtcAddressInfo } from '../btcAddressInfo/btcAddressInfo';

const mdTheme = createTheme();
const centerfy = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    mt: '20px'
}


function DashboardContent() {
    const [address, setAddress] = useState<string>('');
    const [search, setSearch] = useState<boolean>(false)

    const handleSearch = () => {
        console.log("FUCKING WORKS")
        setSearch(true);
    };

    const handleChange = (value: any) => {
        setSearch(false);
        setAddress(value);
    }

    return (
        <ThemeProvider theme={mdTheme}>
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <NavBar>
                    <Toolbar>
                        <Typography
                            component="h1"
                            variant="h6"
                            color="inherit"
                            noWrap
                            sx={{ flexGrow: 1 }}
                        >
                            Dashboard
                        </Typography>

                    </Toolbar>
                </NavBar>
            </Box>
            <Box
                component="main"
                sx={{
                    backgroundColor: (theme) =>
                        theme.palette.mode === 'light'
                            ? theme.palette.grey[100]
                            : theme.palette.grey[900],
                    flexGrow: 1,
                    height: '100vh',
                    overflow: 'auto',
                }}
            >
                {<Box sx={centerfy}>
                    <TextField
                        label="BTC Address"
                        onChange={(event) => handleChange(event.target.value)}
                    />
                    <Button onClick={handleSearch} disabled={!address}>Search</Button>


                </Box >}
                <Box sx={centerfy} >
                    {address && search &&
                        <BtcAddressInfo address1={address} />
                    }
                </Box>
            </Box>
            <Toolbar />

        </ThemeProvider>
    );
}

export default function Dashboard() {
    return <DashboardContent />;
}