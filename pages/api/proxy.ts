import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const url = 'https://sabre.simplify.jobs/?v=2.0.14';

  try {
    const response = await fetch(url, {
      method: 'GET',
    });

    if (!response.ok) {
      res.status(response.status).json({ error: 'Failed to fetch data' });
      return;
    }

    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
