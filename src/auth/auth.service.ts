import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Payload } from './payload';

type User = {
  username: string;
  password: string;
};

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}

  async login(user: User): Promise<{ access_token: string } | void> {
    if (user.username === 'admin' && user.password === 'test') {
      const payload: Payload = {
        username: user.username,
        sub: 42,
      };

      return {
        access_token: this.jwtService.sign(payload),
      };
    }
  }
}
