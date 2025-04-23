import express from 'express';
import { generateJwks } from './scripts/generate-jwks.js';  // Adjust path to your generate-jwks.js file

const app = express();
const port = 3000;

app.get('/.well-known/jwks.json', async (req, res) => {
  try {
    const jwks = await generateJwks();
    res.status(200).json(jwks);
  } catch (err) {
    console.error('Error generating JWKS:', err);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
