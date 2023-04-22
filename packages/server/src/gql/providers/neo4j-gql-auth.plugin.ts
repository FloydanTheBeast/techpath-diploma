import { Neo4jGraphQLAuthJWTPlugin } from '@neo4j/graphql-plugin-auth';
import { JWTPluginInput } from '@neo4j/graphql-plugin-auth/dist/Neo4jGraphQLAuthJWTPlugin';
import { UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

export class Neo4GqlAuthPlugin extends Neo4jGraphQLAuthJWTPlugin {
  private _secret;

  constructor(input: JWTPluginInput, private readonly jwtService: JwtService) {
    super(input);
    if (!(typeof input.secret === 'string')) {
      throw new Error('Only string secrets are supported');
    }
    this._secret = input.secret;
  }

  async decode<T>(token: string): Promise<T | undefined> {
    let res;
    try {
      res = await this.jwtService.verifyAsync(token, {
        secret: this._secret,
      });
    } catch (error) {
      throw new UnauthorizedException();
    }
    return res;
  }
}
