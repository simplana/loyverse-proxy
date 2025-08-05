export default async function handler(req, res) {
  const response = await fetch('https://api.loyverse.com/v1.0/items', {
    headers: {
      Authorization: 'Bearer 7bf3aafd64f544f1b093b3e2a6a6ce8c',
      Accept: 'application/json',
    },
  });

  const data = await response.json();
  res.status(200).json(data);
}
Add loyverse API proxy handler
