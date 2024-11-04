import { UUID } from "crypto";

export class CreateClientDto {
client_id : UUID
name: string
email: string
phone : number
}
