
import { Box, Typography, Button } from '@mui/material';
import { getUpdates } from '@/hooks/useGetUpdatedEvents';
import {  formatPriceData, useBtcPriceInfo } from '@/util/converter';


export interface BtcAddressInfoInterface {
    waletAddress: string;
    balance: number;
    n_tx: number; //The n_tx field is used to count the number of transactions that have been sent to or from a particular address
    total_received: number;
    total_sent: number;
    txs: transactions[];
    error: string
}

interface transactions {
    hash: string;
    received: string;
    status: string;
    size: number;
    confirmations: number;
    inputs: any[];
    outputs: any[];
    fees: number;
}

export const DisplayDataInCurrencyFormat = (data: { btcAddressData: BtcAddressInfoInterface, currency: string }) => {
    const { btcAddressData, currency } = data
    const { balance, n_tx, total_received, total_sent, txs, waletAddress } = btcAddressData;
    const { btcPriceInfo } = useBtcPriceInfo()
    console.log('btcPriceInfo', btcPriceInfo)

    console.log('total_sent', total_sent)

    console.log('total_received', total_received)

    console.log('total_received', btcPriceInfo.usd)
    const usdRecievedBtcConverstion = total_received / btcPriceInfo.usd;
    console.log('dsadasda', usdRecievedBtcConverstion)

    const handleOnclick = (waletAddress: any, hash: any) => {
        console.log('testing');
        const test = getUpdates(waletAddress, hash)
        console.log('testing', test);
    }
    return (
        <Box sx={{ p: 2 }}>

            <Typography variant="h5" gutterBottom>
                BTC Address Search Info
            </Typography>
            <Typography variant="body1" gutterBottom>
                Confirmed Transactions: {n_tx}
            </Typography>
            {currency === 'USD' &&
                <div>
                    <Typography variant="body1" gutterBottom>
                        Total received: {formatPriceData((total_received * 0.0002740161855743607), currency)}
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        Total spent:  {formatPriceData((total_sent * 0.0002740161855743607), currency)}
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        Total Unspent: {formatPriceData((total_received - total_sent) * 0.0002740161855743607, currency)}
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        Balance: {formatPriceData(balance * 0.0002740161855743607, currency)}
                    </Typography>
                </div>
            }
            {currency === 'EUR' &&
                <div>
                    <Typography variant="body1" gutterBottom>
                        Total received: {formatPriceData((total_received * 0.0002541785098035193) , currency)}
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        Total spent: {formatPriceData((total_sent * 0.0002541785098035193), currency)}
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        Total Unspent: {formatPriceData((total_received - total_sent) * 0.0002541785098035193 , currency)}
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        Balance: {formatPriceData(balance * 0.0002541785098035193, currency)}
                    </Typography>
                </div>
            }
            {currency === 'BTC' &&
                <div>
                    <Typography variant="body1" gutterBottom>
                        Total received: BTC {((total_received * 0.0002740161855743607))  / btcPriceInfo.usd}
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        Total spent: BTC {(total_sent * 0.0002740161855743607)  / btcPriceInfo.usd}
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        Total Unspent: {((total_received* 0.0002740161855743607 )- (total_sent * 0.0002740161855743607 ))  / btcPriceInfo.usd}
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        Balance: {formatPriceData((balance * 0.0002740161855743607) / btcPriceInfo.usd , currency)}
                    </Typography>
                </div>
            }
            <Typography variant="h5" gutterBottom>
                BTC Transactions Info
            </Typography>
            {

                txs.map((data, index) => {
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

                                Total Btc Input: {data.inputs.length}
                            </Typography>
                            <Typography variant="body1" gutterBottom>

                                Total Btc Output: {data.outputs.length}
                            </Typography>
                            {currency === 'USD' &&

                                <Typography variant="body1" gutterBottom>
                                    Total Fees: {formatPriceData(data.fees * 0.0002740161855743607, currency)}
                                </Typography>

                            }
                            {currency === 'EUR' &&

                                <Typography variant="body1" gutterBottom>
                                    Total Fees: {formatPriceData(data.fees * 0.0002541785098035193, currency)}
                                </Typography>

                            }
                            {currency === 'BTC' &&

                                <Typography variant="body1" gutterBottom>
                                    Total Fees: {data.fees * 0.0002740161855743607 / btcPriceInfo.usd}
                                </Typography>

                            }

                            <Button sx={{
                                background: 'blue',
                                height: '50px',
                                color: 'white'
                            }} onClick={() => handleOnclick(waletAddress, data.hash)}>Subscribe</Button>
                        </Box>
                    )
                })

            }

        </Box>
    );
};