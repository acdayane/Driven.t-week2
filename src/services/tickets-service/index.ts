import ticketRepository from "@/repositories/ticket-repository";
import { TicketTypeId } from "@/protocols";
import { notFoundError } from "@/errors";

async function getTicketsType() {
  const ticketType = await ticketRepository.findTicketsTypes();

  if (!ticketType) return []
  
  return ticketType;
}

async function getUserTickets(id: number) {
  const ticket = await ticketRepository.findUserTickets(id);

  if (!ticket) throw notFoundError();
  
  return ticket;
}

async function postTicket(ticketTypeId: TicketTypeId) {
  // const result = await ticketRepository.createTicket({
  //   ticketTypeId
  // });

  // if (!result) return []
  
  // return result;
}

const ticketsService = {
  getTicketsType,
  getUserTickets,
  postTicket
};

export default ticketsService;
