import { UseGuards, applyDecorators } from "@nestjs/common";
import { Role } from "../enum/rol.enum";

import { AuthGuard } from "@nestjs/passport";

/*

export function Auth (role : Role){
    return applyDecorators(Roles(role),UseGuards(AuthGuard, RolesGuard))
    }
*/