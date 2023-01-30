import { prisma } from "@/config";
import { Ticket, TicketTypeId } from "@/protocols";

async function findTicketsTypes() {
  const tickets = prisma.ticketType.findMany();
  return tickets
}

async function findUserTickets(id: number) {
  const tickets = prisma.ticketType.findMany({where: {id}});
  return tickets
}

async function createTicket(ticketTypeId: TicketTypeId) {
  // const result = prisma.ticketType.create(ticketTypeId);
  // return result
}

const ticketRepository = {
  findTicketsTypes,
  findUserTickets,
  createTicket
};

export default ticketRepository;
