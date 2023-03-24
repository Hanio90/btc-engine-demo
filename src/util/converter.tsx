import { useEffect, useState } from 'react';

interface BtcPriceInfo {
  usd: number;
  eur: number;
}

export const useBtcPriceInfo = () => {
  const [btcPriceInfo, setBtcPriceInfo] = useState<BtcPriceInfo>({ usd: 0, eur: 0 });
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBtcPriceInfo = async () => {
      setIsLoading(true);
      try {
        const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd,eur');
        const data = await response.json();
        setBtcPriceInfo({ usd: data.bitcoin.usd, eur: data.bitcoin.eur });
      } catch (e) {
        setError('Error fetching data');
      }
      setIsLoading(false);
    };

    fetchBtcPriceInfo();
  }, []);

  return { btcPriceInfo, isLoading, error };
};

interface BtcConverterProps {
  btcAmount: number;
  currency: 'USD' | 'EUR' | 'BTC';
}

const formatPrice = (amount: number, currency: 'USD' | 'EUR'| 'BTC') => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currency,
    maximumFractionDigits: 2
  }).format(amount);
};

export const BtcConverter = ({ btcAmount, currency }: BtcConverterProps) => {
  const { btcPriceInfo, isLoading, error } = useBtcPriceInfo();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  const { usd, eur } = btcPriceInfo;
  let convertedAmount: number;
  let convertedCurrency: 'USD' | 'EUR' | 'BTC' = 'BTC';

  switch (currency) {
    case 'USD':
      convertedAmount = btcAmount * usd;
      convertedCurrency = 'USD';
      break;
    case 'EUR':
      convertedAmount = btcAmount * eur;
      convertedCurrency = 'EUR';
      break;
    case 'BTC':
      convertedAmount = btcAmount;
      convertedCurrency = 'BTC';
      break;
    default:
      convertedAmount = 0;
      convertedCurrency = 'BTC';
  }

  return <div>{formatPrice(convertedAmount, convertedCurrency)}</div>;
};
