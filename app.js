import fs from 'fs';
import { generateJwks } from './scripts/generate-jwks.js';

export default async function handler(req, res) {
  try {
    console.log('Request received:', req.method, req.url);
    const jwks = await generateJwks(); // Ensure this is async if needed
    console.log('JWKS generated:', jwks);
    res.status(200).json(jwks);
  } catch (error) {
    console.error('Error generating JWKS:', error);
    res.status(500).send('Internal Server Error');
  }
}
