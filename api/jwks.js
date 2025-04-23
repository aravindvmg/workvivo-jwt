// import jwks from '../jwks.json';

// export default function handler(req, res) {
//   if (req.method === 'GET') {
//     res.status(200).json(jwks);
//   } else {
//     res.status(405).json({ message: 'Method Not Allowed' });
//   }
// }


// import { generateJwks } from '../generate-jwks.js';

// export default function handler(req, res) {
//   const jwks = generateJwks(); // or await if it's async
//   res.status(200).json(jwks);
// }

import { generateJwks } from '../scripts/generate-jwks.js';

export default async function handler(req, res) {
  const jwks = await generateJwks();
  res.status(200).json(jwks);
}