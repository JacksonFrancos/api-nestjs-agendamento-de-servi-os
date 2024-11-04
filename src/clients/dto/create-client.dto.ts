import { UUID } from "crypto";

export class CreateClientDto {
client_id : UUID
numero : number;
name: string
email: string
phone : number
}
