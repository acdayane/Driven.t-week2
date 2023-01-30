import { Request, Response } from "express";
import httpStatus from "http-status";
import ticketsService from "@/services/tickets-service";
import { TicketTypeId, Ticket } from "@/protocols";

export async function getTicketsTypes(req: Request, res: Response) {

    try {
        const tickets = await ticketsService.getTicketsType();
        return res.status(httpStatus.OK).send(tickets);
    } catch (error) {
        return res.status(httpStatus.BAD_REQUEST).send(error);
    }
}

export async function getUsersTickets(req: Request, res: Response) {
    const { ticketTypeId } = req.body as TicketTypeId;

    try {
        const tickets = await ticketsService.getUserTickets(ticketTypeId);
        return res.status(httpStatus.OK).send(tickets);
    } catch (error) {
        return res.status(httpStatus.BAD_REQUEST).send(error);
    }
}

export async function postNewTicket(req: Request, res: Response) {
    // const { ticketTypeId } = req.body as TicketTypeId;
    // const userId = req.

    // try {
    //     await ticketsService.postTicket({ticketTypeId});
    //     return res.status(httpStatus.CREATED);
    // } catch (error) {
    //     return res.status(httpStatus.BAD_REQUEST).send(error);
    // }
}