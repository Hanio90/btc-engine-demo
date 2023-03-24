import { useState, useEffect } from 'react';

interface BtcAddressInfo {
    address: string;
    balance: number;
    n_tx: number; //The n_tx field is used to count the number of transactions that have been sent to or from a particular address
    total_received: number;
    total_sent: number;
    txs: transactions[];
}

interface transactions{
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