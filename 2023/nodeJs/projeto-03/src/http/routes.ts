import { FastifyInstance } from "fastify";
import { register } from "./controllers/register.controller";
import { profile } from "@/http/controllers/profile.controller";
import { authenticate } from "./controllers/authenticate.controller";
import { verifyJWT } from "./middlewares/verify-jwt";

export async function appRoutes(app: FastifyInstance) {
  app.post("/users", register);
  app.post("/sessions", authenticate);
  /** Authenticated */
  app.get("/me", { onRequest: [verifyJWT] }, profile);
}
