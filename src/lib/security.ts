import DOMPurify from 'dompurify';
import { RateLimiterMemory } from 'rate-limiter-flexible';
import xss from 'xss';
import { config } from './config';

// Rate limiter for login attempts
export const loginLimiter = new RateLimiterMemory({
  points: 5, // 5 attempts
  duration: 60 * 15, // per 15 minutes
});

// Rate limiter for API requests
export const apiLimiter = new RateLimiterMemory({
  points: 100, // 100 requests
  duration: 60, // per 1 minute
});

// CSRF Token management
export const csrfToken = {
  generate: () => {
    return crypto.randomUUID();
  },
  validate: (token: string, storedToken: string) => {
    return token === storedToken;
  },
};

// XSS Protection
export const sanitizeInput = (input: string): string => {
  // First use DOMPurify
  const purified = DOMPurify.sanitize(input, {
    ALLOWED_TAGS: ['b', 'i', 'em', 'strong', 'a'],
    ALLOWED_ATTR: ['href'],
  });
  
  // Then use xss for additional protection
  return xss(purified);
};

// SQL Injection Protection
export const escapeSqlString = (str: string): string => {
  return str.replace(/[\0\x08\x09\x1a\n\r"'\\\%]/g, (char) => {
    switch (char) {
      case "\0":
        return "\\0";
      case "\x08":
        return "\\b";
      case "\x09":
        return "\\t";
      case "\x1a":
        return "\\z";
      case "\n":
        return "\\n";
      case "\r":
        return "\\r";
      case "\"":
      case "'":
      case "\\":
      case "%":
        return "\\" + char;
      default:
        return char;
    }
  });
};

// Password Security
export const passwordPolicy = {
  minLength: 8,
  requireUppercase: true,
  requireLowercase: true,
  requireNumbers: true,
  requireSpecialChars: true,
  validate: (password: string): boolean => {
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumbers = /\d/.test(password);
    const hasSpecialChars = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    
    return (
      password.length >= passwordPolicy.minLength &&
      hasUpperCase &&
      hasLowerCase &&
      hasNumbers &&
      hasSpecialChars
    );
  },
};

// Security Headers
export const securityHeaders = {
  'Content-Security-Policy': 
    "default-src 'self'; " +
    "script-src 'self' 'unsafe-inline' 'unsafe-eval'; " +
    "style-src 'self' 'unsafe-inline'; " +
    "img-src 'self' data: https:; " +
    "font-src 'self'; " +
    "connect-src 'self' https://api.influencehub.com;",
  'X-Content-Type-Options': 'nosniff',
  'X-Frame-Options': 'DENY',
  'X-XSS-Protection': '1; mode=block',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',
};

// Session Security
export const sessionConfig = {
  name: 'sessionId',
  secret: config.session.secret,
  cookie: {
    httpOnly: true,
    secure: config.security.cookieSecure,
    sameSite: 'strict' as const,
    maxAge: 24 * 60 * 60 * 1000, // 24 hours
  },
};

// Input Validation
export const validateInput = (input: string, type: 'email' | 'username' | 'password'): boolean => {
  switch (type) {
    case 'email':
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input);
    case 'username':
      return /^[a-zA-Z0-9_-]{3,20}$/.test(input);
    case 'password':
      return passwordPolicy.validate(input);
    default:
      return false;
  }
};