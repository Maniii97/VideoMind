/**
 * user asking queries will be sent to the backend and then response will be generated and rertured to the user
 */

const queryUrl = import.meta.env.VITE_PRODUCTION_QUERY_API_URL;

const getAnswer = async (query: string) => {
    const response = await fetch(queryUrl, {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query: query }),
    });
    const data = await response.json();
    return data;
}

export default getAnswer;