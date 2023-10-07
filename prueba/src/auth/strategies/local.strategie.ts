import { Strategy } from "passport-local";
import { AuthService } from "../auth.service";
import { User } from "src/users/entities/user.entity";
import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";


@Injectable()
export class LocalStrategy extends PassportStrategy (Strategy,'local'){
    constructor(private authService: AuthService){
        super({
            usernameField: 'email',
            passwordField: 'password',
        }
        );
    }

    async validate (email:string, password:string){
       // console.log(email,password);
        const user = await this.authService.validateUser(email, password);
        
        if(!user) throw new UnauthorizedException('Not Allowed');

        return user;
    }
}
