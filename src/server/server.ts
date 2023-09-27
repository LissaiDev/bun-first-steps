const server = Bun.serve({
    port: Bun.env.PORT,
    fetch(request) {
      return new Response("Welcome to Bun!");
    },
  });
  
  console.log(`Listening on localhost:${Bun.env.PORT}`);