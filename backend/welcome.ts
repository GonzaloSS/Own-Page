import { serve } from "https://deno.land/std@0.95.0/http/server.ts";

import { Application } from "https://deno.land/x/oak/mod.ts";

const app = new Application();




const s = serve({ port: 8000 });
console.log("http://localhost:8000/");
for await (const req of s) {
  app.use((ctx) => {
    ctx.response.body = "Welcome to my REST API";
  });
  req.respond({ body: "Hello World\n" });
}