import { defineConfig } from "astro/config";

// Static marketing site (www.sessionseal.com). The functional app lives at
// PUBLIC_APP_URL (app.sessionseal.com; locally :3001), see .env.
export default defineConfig({
  server: { port: 3000 },
});
