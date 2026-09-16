# Nexora

Nexora is a global affiliate product discovery platform.

## Product management

Open `/admin/` on the deployed site to use Decap CMS.

Products are stored as Markdown files in `content/products/`. During the Netlify build, the content is converted into the product catalog automatically.

## CMS authentication

The current CMS configuration uses Netlify Identity + Git Gateway for the simplest no-code publishing flow. Netlify currently marks Git Gateway as deprecated, so this should be treated as a compatibility setup rather than a new long-term dependency.
