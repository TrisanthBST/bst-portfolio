import { hc } from "hono/client";

const client = hc(process.env.NEXT_PUBLIC_APP_URL || "/");

// The legacy admin/blog/auth layers are temporarily disabled for the public portfolio
// deployment, so we keep this client intentionally loose to avoid type failures from
// internal modules that are no longer active on the public site.
export const api = client.api as any;
