export function getBaseUrl() {
  return process.env.VERCEL_ENV === "production" ||
    process.env.VERCEL_ENV === "preview"
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : `http://localhost:3000`;
}
