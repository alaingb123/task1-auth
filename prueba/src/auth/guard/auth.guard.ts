import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { AuthGuard } from '@nestjs/passport';
import { Observable } from 'rxjs';
import { IS_PUBLIC_KEY } from '../decorators/public.decorator';

/*
@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
    // Aquí va la lógica de autenticación y autorización
    // Puedes acceder a la solicitud (request) y otros datos del contexto (context) para realizar la validación

    // Ejemplo básico: permitir el acceso si el usuario está autenticado
    const request = context.switchToHttp().getRequest();
    return !!request.user; // Devuelve true si existe un usuario autenticado en la solicitud, de lo contrario, devuelve false
  }
}
*/


@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt'){
  constructor (private reflector: Reflector){
    super();
  }


  canActivate(context: ExecutionContext) {
    const isPublic = this.reflector.get(IS_PUBLIC_KEY, context.getHandler());
if (isPublic) return true;

    return super.canActivate(context);
  }
}


/*
@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private readonly jwtService: JwtService){}

 async canActivate(context: ExecutionContext,):Promise<boolean> {

    const request =context.switchToHttp().getRequest();

    const token = this.extractTokenFromHeader(request);
    if (!token) {
      throw new UnauthorizedException();
    }

    try {
      const payload = await this.jwtService.verifyAsync(
        token,
        {
          secret: jwtConstants.secret
        }
      );
      // 💡 We're assigning the payload to the request object here
      // so that we can access it in our route handlers
      request['user'] = payload;
    } catch {
      throw new UnauthorizedException();
    }
    return true;
  }
  private extractTokenFromHeader(request: Request): string | undefined {
    const [type, token] = request.headers.authorization?.split(' ') ?? [];
    return type === 'Bearer' ? token : undefined;
  }
}*/
