import { serve } from "https://deno.land/std/http/mod.ts";

const server = serve({ port: 8000 });

for await (const request of server) {
  let file = "";
  let status = 404;
  switch (request.url) {
    case "/hello":
      status = 200;
      file = await Deno.readFile("./index.html");
      break;
    case "/spkinguy1":
      status = 200;
      file = await Deno.readFile("./spkinguy1.html");
      break;
    default:
      status = 200;
      file = await Deno.readFile("./404page.html");
  }
  request.respond({
    body: file,
    status: status
  });
}