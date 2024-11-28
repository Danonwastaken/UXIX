import { useEffect, useState } from 'react';

const apiUrl = "https://favqs.com/api/qotd";

export const QuoteGenerator = () => {
    const [quote, setQuote] = useState('This is a cool quote you know...');

    useEffect(() => {
        const fetchQuote = async () => {
            try {
                const response = await fetch(apiUrl);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setQuote(data.quote.body);
            } catch (error) {
                console.error('Error fetching URL:', error);
                setQuote('Failed to load quote.');
            }
        };

        fetchQuote();
    }, []);

    return <div>{quote}</div>;
};
