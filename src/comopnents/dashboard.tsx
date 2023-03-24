import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import NavBar from './navbar';
import { BtcAddressInfo } from './displayData';

const mdTheme = createTheme();


function DashboardContent ()  {
    return (
        <ThemeProvider theme={mdTheme}>
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <NavBar>
                    <Toolbar
                        sx={{
                            pr: '24px', // keep right padding when drawer closed
                        }}
                    >
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
                  {<Box sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center'
            }}>
              
                <BtcAddressInfo />
            </Box>}
            </Box>
            <Toolbar />
          
        </ThemeProvider>
    );
}

export default function Dashboard() {
    return <DashboardContent />;
}