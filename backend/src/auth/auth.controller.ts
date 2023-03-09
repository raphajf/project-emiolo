import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { Request } from 'express';
import { UserRequest } from 'src/interfaces/userRequest.interface';
import { GoogleAuthGuard } from './utils/Guards';

@Controller('auth')
export class AuthController {
  @Get('login')
  @UseGuards(GoogleAuthGuard)
  login() {
    return { msg: 'Google Authentication' };
  }

  @Get('redirect')
  @UseGuards(GoogleAuthGuard)
  redirect() {
    return { msg: 'OK' };
  }

  @Get('status')
  user(@Req() request: Request) {
    const user: UserRequest = request.user;
    if (user) {
      return { msg: 'Authenticated' };
    } else {
      return { msg: 'Not Authenticated' };
    }
  }
}
