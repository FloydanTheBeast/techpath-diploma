import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import ms from 'ms';

import { AppConfig } from '../common/types';
import { JwtPayload } from '../common/types/auth';
import { User } from '../ogm-types';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService<AppConfig>,
  ) {}

  async createSession(user: Pick<User, 'id' | 'roles'>) {
    const payload: JwtPayload = {
      id: user.id,
      roles: user.roles,
    };

    const date = new Date();

    // TODO: Move to config
    const accessTokenExpiresIn = '15m';
    const refreshTokenExpiresIn = '30d';

    return {
      accessToken: await this.jwtService.signAsync(payload, {
        secret: this.configService.getOrThrow('JWT_ACCESS_SECRET'),
        expiresIn: accessTokenExpiresIn,
      }),
      accessTokenExpiresIn: date.getTime() + ms(accessTokenExpiresIn),
      refreshToken: await this.jwtService.signAsync(payload, {
        secret: this.configService.getOrThrow('JWT_REFRESH_SECRET'),
        expiresIn: refreshTokenExpiresIn,
      }),
      refreshTokenExpiresIn: date.getTime() + ms(refreshTokenExpiresIn),
    };
  }

  async refreshSession(refreshToken: string) {
    if (!refreshToken) {
      throw new HttpException('Refresh token was not provided', HttpStatus.BAD_REQUEST);
    }

    const payload = this.jwtService.verify(refreshToken, {
      secret: this.configService.getOrThrow('JWT_REFRESH_SECRET'),
    });

    return this.createSession(payload);
  }
}
