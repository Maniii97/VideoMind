/**
 * user asking queries will be sent to the backend and then response will be generated and rertured to the user
 */

const getAnswer = async (query: string) => {
    const response = await fetch('http://localhost:3000/api/query', {
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