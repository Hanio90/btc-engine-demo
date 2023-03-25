import { BtcPriceInfo } from "@/types/types";
import { useEffect, useState } from "react";

export const useBtcPriceInfo = () => {
  const [btcPriceInfo, setBtcPriceInfo] = useState<BtcPriceInfo>({
    usd: 0,
    eur: 0,
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBtcPriceInfo = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd,eur"
        );
        const data = await response.json();
        setBtcPriceInfo({ usd: data.bitcoin.usd, eur: data.bitcoin.eur });
      } catch (e) {
        setError("Error fetching data");
      }
      setIsLoading(false);
    };

    fetchBtcPriceInfo();
  }, []);

  return { btcPriceInfo, isLoading, error };
};

export const formatPriceData = (amount: number, currency: string) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: currency,
  }).format(amount);
};
