import { Controller, Get, UseGuards } from '@nestjs/common';
import { GoogleAuthGuard } from './utils/Guards';

@Controller('auth')
export class AuthController {
  @Get('login')
  @UseGuards(GoogleAuthGuard)
  login() {
    return { msg: 'Google Authentication' };
  }

  // api/auth/google/redirect
  @Get('redirect')
  @UseGuards(GoogleAuthGuard)
  redirect() {
    return { msg: 'OK' };
  }
}
