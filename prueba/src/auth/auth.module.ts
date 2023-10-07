import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UsersModule } from 'src/users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constant/jwt.constant';

import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './strategies/local.strategie';
import { JwtStrategy } from './strategies/jwt.strategie';


@Module({
  imports: [ 
    UsersModule,
    PassportModule,
    JwtModule.registerAsync({
      useFactory: () => {
        return {
      secret: '1894udsa',
      signOptions: { expiresIn: '1d' },
    }
      }
    }),
  ],
  controllers: [AuthController],
  providers: [LocalStrategy,AuthService,JwtStrategy]
})
export class AuthModule {}
