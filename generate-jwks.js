import fs from 'fs';
import { importSPKI } from 'jose';
import { exportJWK } from 'jose/key/export';

const pubKey = fs.readFileSync('./public.pem', 'utf8');

const generateJWKS = async () => {
  const keyObj = await importSPKI(pubKey, 'RS256');
  const jwk = await exportJWK(keyObj);
  jwk.kid = '300|9925f2248d89c4bafba385aeecd80f9908ccfd0b';
  jwk.use = 'sig';
  jwk.alg = 'RS256';

  const jwks = { keys: [jwk] };
  fs.writeFileSync('jwks.json', JSON.stringify(jwks, null, 2));
  console.log('✅ JWKS saved to jwks.json');
};

generateJWKS();
