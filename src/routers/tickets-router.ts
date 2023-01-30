import { Router } from "express";
import { authenticateToken, validateBody } from "@/middlewares";
import { getTicketsTypes, getUsersTickets, postNewTicket } from "@/controllers";
import { ticketTypeSchema } from "@/schemas";

const ticketsRouter = Router();

ticketsRouter
  .all("/*", authenticateToken)
  .get("/types", getTicketsTypes)
  .get("/", getUsersTickets)
  .post("/tickets", validateBody(ticketTypeSchema), postNewTicket);

export { ticketsRouter };