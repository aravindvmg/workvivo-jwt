import fs from 'fs';
import jwt from 'jsonwebtoken';

const privateKey = fs.readFileSync('./private.pem', 'utf8');

const payload = {
  sub: '2506',
  email: 'user@example.com',
  name: 'Your User Name'
};

const token = jwt.sign(payload, privateKey, {
  algorithm: 'RS256',
  expiresIn: '1h',
  issuer: '1641674',
  audience: 'https://api.workvivo.io/v1',
  keyid: 'workvivo-key'
});

console.log('\n🔐 JWT Token:\n');
console.log(token);
