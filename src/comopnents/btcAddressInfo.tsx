import { useState } from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';
import { formatPrice } from '../util/util'
import { useBtcAddressInfo } from '../hooks/useBtcAddressInfo'

interface BtcAddressInfoProps { }

export const BtcAddressInfo = (props: BtcAddressInfoProps) => {
    const [address1, setAddress] = useState<string>('');
    const apiUrl = `https://api.blockcypher.com/v1/btc/main/addrs/1Di1YoMov6Ua3gPedfQz7TkP6iTLqbPUzi/full`;
    const { btcAddressInfo, isLoading, error } = useBtcAddressInfo({ apiUrl });
    // TODO: create new hook for transaction data!

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

    const { balance, n_tx, total_received, address, total_sent, txs } = btcAddressInfo;

    return (
        <Box sx={{ p: 2 }}>
            <TextField
                label="BTC Address"
                value={address}
                onChange={(event) => setAddress(event.target.value)}
            />
            <Button onClick={handleSearch}>Search</Button>
            <Typography variant="h5" gutterBottom>
                BTC Address Search Info
            </Typography>
            <Typography variant="body1" gutterBottom>
                Confirmed Transactions: {n_tx}
            </Typography>
            <Typography variant="body1" gutterBottom>
                Total received: {total_received}
            </Typography>
            <Typography variant="body1" gutterBottom>
                Total spent: {total_sent}
            </Typography>
            Total Unspent: {formatPrice(total_received - total_sent)}
            //TODO: NEED TO PROVIDE UNSPENT DATA
            <Typography variant="body1" gutterBottom>
                Balance: {formatPrice(balance)}
            </Typography>
            <Typography variant="h5" gutterBottom>
                BTC Transactions Info
            </Typography>
            {txs.map((data, index) => {
                return (
                    <Box sx={{
                        mb: '50px'
                    }}>
                        <Typography variant="body1" gutterBottom>
                            Transaction #: {index + 1}
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                            Transaction Hash: {data.hash}
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                            Received Time: {data.received}
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                            Status: {data.status}
                        </Typography>
                        Size in bytes: {data.size}
                        <Typography variant="body1" gutterBottom>
                            Confirmations: {data.confirmations}
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                            NEED TO FIX
                            Total Btc Input: {data.inputs.length}
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                        NEED TO FIX
                        Total Btc Output: {data.outputs.length}
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                           Total Fees: {formatPrice(data.fees)}
                        </Typography>
                    </Box>
                )
            }
            )}
        </Box>
    );
};