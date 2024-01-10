import { useEffect, useState } from "react";

export interface IResponse {
    status: string
}

export default function useJsonFetch(url: string, opts: any) {
    const [data, setData] = useState({} as IResponse);
    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>();
    
    const setStates = () => {
        setData({} as IResponse);
        setLoading(true);
        setError(null);
    }

    const fechData = async () => {
        const response = await fetch(url);

        if (!response.ok) {
            setLoading(false);
            setError(response.statusText);
            return;
        }

        const res = await response.json();
        setLoading(false);
        setData(res);
    }

    useEffect(() => {
        fechData();
        return setStates;
    }, [url]);

    return [{data, isLoading, error}];
}