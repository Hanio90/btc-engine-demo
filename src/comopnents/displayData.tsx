import { useState, useEffect } from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';
import {formatPrice} from '../util/util'

interface BtcAddressInfo {
    address: string;
    balance: number;
    //The n_tx field is used to count the number of transactions 
    //that have been sent to or from a particular address
    n_tx: number;
    total_received: string;
}

interface UseBtcAddressInfoProps {
    apiUrl: string;
}

export const useBtcAddressInfo = ({ apiUrl }: UseBtcAddressInfoProps) => {
    const [btcAddressInfo, setBtcAddressInfo] = useState<BtcAddressInfo | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchBtcAddressInfo = async () => {
            setIsLoading(true);
            try {
                const response = await fetch(apiUrl);
                const data = await response.json();
                console.log('the data', data)
                setBtcAddressInfo(data);
              } catch (e) {
                setError('Error fetching data');
              }
              setIsLoading(false);
        };

        fetchBtcAddressInfo();
    }, [apiUrl]);

    return { btcAddressInfo, isLoading, error };
};

interface BtcAddressInfoProps { }

export const BtcAddressInfo = (props: BtcAddressInfoProps) => {
    const [address1, setAddress] = useState<string>('');
    const apiUrl = `https://api.blockcypher.com/v1/btc/main/addrs/1Di1YoMov6Ua3gPedfQz7TkP6iTLqbPUzi`;
    const { btcAddressInfo, isLoading, error } = useBtcAddressInfo({ apiUrl });

    const handleSearch = () => {
        setAddress(address);
    };

    if (isLoading) {
        return <Typography>Loading...</Typography>;
    }

    if (error) {
        return <Typography color="error">{error}</Typography>;
    }

    if (!btcAddressInfo) {
        return (
            <Box sx={{ p: 2 }}>
                <Typography variant="h5" gutterBottom>
                    BTC Address Info
                </Typography>
                <TextField
                    label="BTC Address"
                    value={address1}
                    onChange={(event) => setAddress(event.target.value)}
                />
                <Button onClick={handleSearch}>Search</Button>
            </Box>
        );
    }

    const { balance, n_tx, total_received,address } = btcAddressInfo;

    return (
        <Box sx={{ p: 2 }}>
            <Typography variant="h5" gutterBottom>
                BTC Address Info
            </Typography>
            <TextField
                label="BTC Address"
                value={address}
                onChange={(event) => setAddress(event.target.value)}
            />
            <Button onClick={handleSearch}>Search</Button>
            <Typography variant="body1" gutterBottom>
                Address: {address}
            </Typography>
            <Typography variant="body1" gutterBottom>
                Balance: {formatPrice(balance)}
            </Typography>
            <Typography variant="body1" gutterBottom>
                Transaction count: {n_tx}
            </Typography>
            <Typography variant="body1" gutterBottom>
                Total received: {total_received}
            </Typography>
        </Box>
    );
};