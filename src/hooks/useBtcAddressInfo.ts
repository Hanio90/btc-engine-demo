import { useState, useEffect } from 'react';

export interface BtcAddressInfoInterface {
    waletAddress: string;
    balance: number;
    n_tx: number; //The n_tx field is used to count the number of transactions that have been sent to or from a particular address
    total_received: number;
    total_sent: number;
    txs: transactions[];
    error:string
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

interface UseBtcAddressInfoProps {
    apiUrl: string;
}

export const useBtcAddressInfo = ({ apiUrl }: UseBtcAddressInfoProps) => {
    const [btcAddressInfo, setBtcAddressInfo] = useState<BtcAddressInfoInterface | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchBtcAddressInfo = async () => {
            setIsLoading(true);
            try {
                const response = await fetch(apiUrl);
                const data = await response.json();
                console.log('the data', data)
                if(data.error){
                    setError(data.error)
                }
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