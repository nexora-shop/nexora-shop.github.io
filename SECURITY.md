# Nexora Security Baseline

Security is designed into the deployment and publishing architecture.

- Admin access is protected by Netlify Identity/Git Gateway.
- Public users have no product mutation API.
- Affiliate URLs are accepted only over HTTPS.
- External affiliate links use sponsored, nofollow and noopener protections.
- Secrets and tokens must remain in environment variables or Netlify/GitHub secrets, never source files.
- Netlify security headers include HSTS, CSP, X-Content-Type-Options, Referrer-Policy and Permissions-Policy.
- Admin paths are excluded from robots crawling.
- Error responses should not expose secrets or internal credentials.
- Keep dependencies updated and monitor security advisories.
- Maintain repository backups and review CMS/admin accounts regularly.

No website can be guaranteed 100% attack-proof.
