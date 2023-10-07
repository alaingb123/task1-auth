import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';
import { Role } from '../enum/rol.enum';


/*
@Injectable()
export class RolesGuard implements CanActivate {

  constructor (private readonly reflector: Reflector){ }

  
  canActivate(context: ExecutionContext,): boolean  {

    const requeridRoles = this.reflector.getAllAndOverride<Role>(ROLES_KEY,[
      context.getHandler(),
      context.getClass
    ])
    if (!requeridRoles){
      return true;
    }

   
    
    
    const {user }=context.switchToHttp().getRequest();
    
    if (user.role === Role.ADMIN){
      return;
    }
    return requeridRoles === user.role;

  }
}
*/