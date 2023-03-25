import { BtcAddressInfoInterface } from '@/types/types';
import { useState, useEffect } from 'react';



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