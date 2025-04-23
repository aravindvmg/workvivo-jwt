import fs from 'fs';
import jwt from 'jsonwebtoken';

const privateKey = fs.readFileSync('./private.pem', 'utf8');

const payload = {
  sub: '2506',
  email: 'steve@marvel'
};

const token = jwt.sign(payload, privateKey, {
  algorithm: 'RS256',
  expiresIn: '1h',
  issuer: '1641674',
  audience: 'https://api.workvivo.io/v1',
  keyid: '300|9925f2248d89c4bafba385aeecd80f9908ccfd0b'
});

console.log('\n🔐 JWT Token:\n');
console.log(token);
