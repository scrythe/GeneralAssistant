const Fastify = require("fastify");
const port = process.env.PORT || 3000;

const fastify = Fastify({
  logger: true,
});

fastify.get("/", function handler() {
  return { message: "Hello World!" };
});

const listen = async () => {
  try {
    fastify.listen({ port, host: "0.0.0.0" });
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

listen();
