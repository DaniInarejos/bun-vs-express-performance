const server = Bun.serve({
    port: 3000,
    fetch(_req) {
      return new Response("Hola mundo");
    },
  });
  
  console.log(`✅ Bun server escuchando en http://localhost:${server.port}`);
  