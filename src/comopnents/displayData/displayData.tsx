
import { Box, Typography, Button } from '@mui/material';
import {  formatPriceData, useBtcPriceInfo } from '../../util/converter';
import { BtcAddressInfoInterface } from '../../types/types';

export const DisplayData = (data: { btcAddressData: BtcAddressInfoInterface, currency: string }) => {
    const { btcAddressData, currency } = data
    const { balance, n_tx, total_received, total_sent, txs, walletAddress } = btcAddressData;
    const { btcPriceInfo } = useBtcPriceInfo()
    const usdRecievedBtcConverstion = total_received / btcPriceInfo.usd;
    const handleOnclick = (waletAddress: any, hash: any) => {
     
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
                                Status: {data.confirmed ? 'Confirmed' : ' Not Confirmed'}
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
                            }} onClick={() => handleOnclick(walletAddress, data.hash)}>Subscribe</Button>
                        </Box>
                    )
                })

            }

        </Box>
    );
};