const warnedKeys = new Set<string>();

function getEnv(key: string, required = true): string {
  const value = process.env[key];

  if (!value && required && !warnedKeys.has(key)) {
    warnedKeys.add(key);
    console.warn(`Missing environment variable: ${key}`);
  }

  return value || "";
}

export const env = {
  NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL || "",
  nodeEnv: process.env.NODE_ENV || "development",
  development: process.env.NODE_ENV === "development",
  production: process.env.NODE_ENV === "production",
  port: Number(process.env.PORT) || 8000,
  database: getEnv("DB_URI"),
  databaseName: getEnv("DB_NAME", false) || "nevo",
  jwt: {
    secret: getEnv("JWT_SECRET"),
    refreshSecret: getEnv("JWT_REFRESH_SECRET"),
    refreshExpiresIn: Number(getEnv("JWT_REFRESH_EXPIRES_IN", false)) || 0,
    accessExpiresIn: Number(getEnv("JWT_ACCESS_EXPIRES_IN", false)) || 0,
  },
  cloudinary: {
    cloud_name: getEnv("CLOUDINARY_CLOUD_NAME"),
    api_key: getEnv("CLOUDINARY_API_KEY"),
    api_secret: getEnv("CLOUDINARY_API_SECRET"),
  },
  refreshCookiesMaxAge: 7 * 24 * 60 * 60,
  resendKey: getEnv("RESEND_API_KEY"),
};
