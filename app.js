// import express from 'express';
// import fs from 'fs';

// const app = express();
// const port = 3000;

// const jwks = JSON.parse(fs.readFileSync('./jwks.json', 'utf8'));

// app.get('/.well-known/jwks.json', (req, res) => {
//   res.json(jwks);
// });

// app.listen(port, () => {
//   console.log(`✅ JWKS running: http://localhost:${port}/.well-known/jwks.json`);
// });

// api/jwks.js

// import fs from 'fs';

// const jwks = JSON.parse(fs.readFileSync('./jwks.json', 'utf8'));

// export default function handler(req, res) {
//   if (req.method === 'GET') {
//     res.status(200).json(jwks);
//   } else {
//     res.status(405).json({ message: 'Method Not Allowed' });
//   }
// }

import fs from 'fs';
import express from 'express';

const app = express();
const port = process.env.PORT || 3000; // Use the port provided by Railway or default to 3000

const jwks = JSON.parse(fs.readFileSync('./jwks.json', 'utf8'));

app.get('/.well-known/jwks.json', (req, res) => {
  res.json(jwks);
});

app.listen(port, () => {
  console.log(`✅ JWKS service running on port ${port}`);
});
