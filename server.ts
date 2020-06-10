import { Application } from "https://deno.land/x/oak/mod.ts";
import { oakCors } from "https://deno.land/x/cors/mod.ts";
import router from "./routes.ts";
const port = Deno.env.get("PORT") || 5566;

const app = new Application();

app.use(oakCors()); // Enable CORS for All Routes
app.use(router.routes());
app.use(router.allowedMethods());

console.log(`CORS-enabled server running on port ${port}`);

await app.listen({ port: +port });
