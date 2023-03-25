import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import { useScrollTrigger } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

interface Props {
    children?: React.ReactNode;
}

interface ElevationScrollProps {
    children: React.ReactElement;
}



const ElevationScroll = ({ children }: ElevationScrollProps): JSX.Element => {
    const theme = useTheme();
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 60,
        target: typeof window !== 'undefined' ? window : undefined,
    });


    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
        sx: {
            backgroundColor: trigger ? 'blue' : 'blue',
            transition: 'all 0.3s ease-out', // add a transition to the Box component
        },
    });
};

const StyledAppBar = styled(AppBar)({
    height: '4rem',
    backgroundColor: 'blue',
    boxShadow: 'none',
    position: 'fixed',
});

const StyledToolbar = styled(Toolbar)({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
});



export default function NavBar(props: Props): JSX.Element {
    return (
        <React.Fragment>
            <CssBaseline />
            <Box sx={{ flexGrow: 1 }}>
                <ElevationScroll {...props}>
                    <StyledAppBar position="sticky">
                        <StyledToolbar>
                            <Typography variant='h5'>Dashboard</Typography>
                        </StyledToolbar>
                    </StyledAppBar>
                </ElevationScroll>
                <Toolbar />
            </Box>
        </React.Fragment>
    );
}