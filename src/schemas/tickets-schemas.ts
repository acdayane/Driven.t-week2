import { CreateUserParams } from "@/services/users-service";
import Joi from "joi";

export const ticketTypeSchema = Joi.object({
    ticketTypeId: Joi.number().required()
});