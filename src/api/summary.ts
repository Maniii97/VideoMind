/**
 * @api {post} /summary Get summary
 */

const getSummary = async (url: string) => {
  try {
    const response = await fetch("http://localhost:3000/api/summary", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ url: url }),
    });
    const data = await response.json();
    return data.summary;
  } catch (err) {
    console.log(err);
  }
};

export default getSummary;
