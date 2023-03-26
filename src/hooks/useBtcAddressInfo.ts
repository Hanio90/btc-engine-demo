import { BtcAddressInfo } from "@/types/types";
import { useState, useEffect } from "react";

interface UseBtcAddressInfoProps {
  apiUrl: string;
}

const useBtcAddressInfo = ({ apiUrl }: UseBtcAddressInfoProps) => {
  const [btcAddressInfo, setBtcAddressInfo] = useState<
    BtcAddressInfo | undefined
  >(undefined);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBtcAddressInfo = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        if (data.error) {
          setError(data.error);
        }
        setBtcAddressInfo(data);
      } catch (e) {
        setError("Error fetching data");
      }
      setIsLoading(false);
    };

    fetchBtcAddressInfo();
  }, [apiUrl]);

  return { btcAddressInfo, isLoading, error };
};

export { useBtcAddressInfo };
