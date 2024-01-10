import React from 'react'
import useJsonFetch from '../../CustomHooks/useJsonFetch'

export interface IServerResponse {
    type: string
}

export default function ServerResponse(props: IServerResponse) {
    const [{ data, isLoading, error }] = useJsonFetch(`http://localhost:7070/${props.type}`, []);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return <div>Status: {data.status}</div>;    
}
