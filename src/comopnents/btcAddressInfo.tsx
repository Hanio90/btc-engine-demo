
import { Box, Typography, Button } from '@mui/material';
import { formatPrice } from '../util/util'
import { useBtcAddressInfo } from '../hooks/useBtcAddressInfo'
import { getUpdates } from '@/hooks/useGetUpdatedEvents';
import ButtonGroup from '@mui/material/ButtonGroup';
import { useBtcPriceInfo } from '@/util/converter';
import { useState } from 'react';
import { DisplayDataInCurrencyFormat } from './displayDataInCurrencyFormat';

export const BtcAddressInfo = (address: { address1: string }) => {
    const apiUrl = `https://api.blockcypher.com/v1/btc/main/addrs/${address.address1}/full`;
    const { btcAddressInfo, isLoading, error } = useBtcAddressInfo({ apiUrl });
    const [useCurrency, setCurrency] = useState('USD')

    const handleOnclickCurrency = (currency: string) => {
        setCurrency(currency)
    }

    console.log('error', error);
    if (isLoading) {
        return <Typography>Loading...</Typography>;
    }

    if (error) {
        return <Typography color="error">{error}</Typography>;
    }

    if (!btcAddressInfo) {
        return (
            <h1>btcAddressInfo is not available!</h1>
        );
    }

    return (
        <Box sx={{ p: 2 }}>
            <ButtonGroup sx={{ mb: '30px' }} variant="contained" aria-label="outlined primary button group">
                <Button onClick={() => {
                    handleOnclickCurrency('USD')
                }}>USD</Button>
                <Button
                    onClick={() => {
                        handleOnclickCurrency('EUR')
                    }}>EUR</Button>
                <Button
                    onClick={() => {
                        handleOnclickCurrency('BTC')
                    }}
                >BTC</Button>
            </ButtonGroup>
            <DisplayDataInCurrencyFormat btcAddressData={btcAddressInfo} currency={useCurrency}/>
        </Box>
    );
};