import { Body, Controller, Post, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() user: { username: string; password: string }) {
    const token = await this.authService.login(user);

    if (token && token.access_token && token.access_token.length > 0) {
      return token;
    } else {
      throw new UnauthorizedException();
    }
  }
}
