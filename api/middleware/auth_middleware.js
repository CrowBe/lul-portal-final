import jwt from 'express-jwt';
import jwksRsa from 'jwks-rsa';
import jwtAuthz from 'express-jwt-authz';

// Authentication middleware. When used, the
// Access Token must exist and be verified against
// the Auth0 JSON Web Key Set
export const checkJwt = jwt({
  // Dynamically provide a signing key
  // based on the kid in the header and 
  // the signing keys provided by the JWKS endpoint.
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `https://${process.env.AUTH_DOMAIN}/.well-known/jwks.json`
  }),

  // Validate the audience and the issuer.
  audience: process.env.AUTH_AUDIENCE,
  issuer: `https://${process.env.AUTH_DOMAIN}/`,
  algorithms: ['RS256']
});


export const checkScopes = jwtAuthz([ process.env.AUTH_ADMIN ]);
