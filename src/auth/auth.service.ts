import { Injectable } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { AuthController } from './auth.controller';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UserRepository) private userReposiotry: UserRepository,
  ) {}

  async signUp(authCredentialsDto: AuthCredentialsDto): Promise<void> {
    return this.userReposiotry.signUp(authCredentialsDto);
  }
}
