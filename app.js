import fs from 'fs';
import path from 'path';

// This is for local development (not used on Vercel)
const jwks = JSON.parse(fs.readFileSync(path.resolve('jwks.json'), 'utf8'));

export default function handler(req, res) {
  if (req.method === 'GET') {
    // Respond with JWKS data
    res.status(200).json(jwks);
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}