import fs from 'fs';
import { importSPKI } from 'jose';
import { exportJWK } from 'jose/key/export';

const pubKey = fs.readFileSync('./public.pem', 'utf8');

export async function generateJwks() {
  const keyObj = await importSPKI(pubKey, 'RS256');
  const jwk = await exportJWK(keyObj);
  jwk.kid = '300|9925f2248d89c4bafba385aeecd80f9908ccfd0b';
  jwk.use = 'sig';
  jwk.alg = 'RS256';
  return { keys: [jwk] };
}
