# Enterprise Cloud Service Catalog

A Node.js and Express web application serving a Cloud Service Catalog interface and JSON API endpoints (`/api/services` and `/api/status`), deployed on Vercel.

## Local Port 8080 vs. Vercel Production Port Handling

When running this Express application locally, the environment variable `process.env.PORT` is undefined, so the server falls back to port 8080 and binds directly to `localhost:8080` as a persistent Node.js process. In contrast, when deployed to Vercel's PaaS infrastructure, the platform dynamically manages networking and port allocation through its serverless runtime and reverse proxy. Rather than exposing a fixed port like 8080, Vercel injects its own runtime configuration and routes incoming HTTPS traffic on standard port 443 directly to the Express application. Using `process.env.PORT || 8080` ensures seamless portability between local development and cloud production without code changes.