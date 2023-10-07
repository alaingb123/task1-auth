import { Role } from "../enum/rol.enum";

export interface PayloadToken{
    role:Role;
    sub: number;
}

