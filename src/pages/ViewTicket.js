import React, { useEffect, useState } from 'react';
import { verifyAndGetTicket } from '../utils/verifyTicket';

const ViewTicket = () => {
    const [documentData, setDocumentData] = useState(null);
    const [isError, setIsError] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await verifyAndGetTicket();
                (!!data) ? setDocumentData(data) : setIsError(true);
                
            } catch (error) {
                console.error("Error verifying coupon code:", error);
                setIsError(true);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError) {
        return <div>404 Error: Document not found or invalid coupon code.</div>;
    }

    return (
        <div>
            {documentData && (
                <div>
                    <h1>{documentData.ticket_code}</h1>
                    <p>{documentData.description}</p>
                    <img src={documentData.qrCodeUrl} alt="QR Code" />
                    {/* Add more fields as needed */}
                </div>
            )}
        </div>
    );
};

export default ViewTicket;