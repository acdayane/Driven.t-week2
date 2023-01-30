import { Router } from "express";
import { authenticateToken } from "@/middlewares";

const paymentsRouter = Router();

paymentsRouter
  .all("/*", authenticateToken)
  .get("/payments?ticketId=1")
  .post("/payments/process");

export { paymentsRouter };