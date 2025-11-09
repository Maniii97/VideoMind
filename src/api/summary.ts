/**
 * @api {post} /summary Get summary
 */

const summaryUrl = import.meta.env.VITE_PRODUCTION_SUMMARY_API_URL as string;

const getSummary = async (url: string) => {
  try {
    const response = await fetch(summaryUrl, {
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
