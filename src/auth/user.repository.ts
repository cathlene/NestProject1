import { EntityRepository, Repository } from 'typeorm';
import { User } from './user.entity';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import * as bcrypt from 'bcrypt';
import {
  InternalServerErrorException,
  ConflictException,
} from '@nestjs/common';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  async signUp(authCredentials: AuthCredentialsDto): Promise<void> {
    const { username, password } = authCredentials;

    const salt = await bcrypt.genSalt(); // genereert salt, is een random string dat voor je wachtwoord wordt gezet
    const user = new User();
    user.username = username;
    user.salt = salt;
    user.password = await this.hashedPassword(password, user.salt);

    try {
      await user.save(); // mss gooit hij een error vb als user al bestaat
    } catch (error) {
      if (error.code === 'ER_DUP_ENTRY') {
        // dit kan je zien als je error logt
        throw new ConflictException('Username already in use');
      } else {
        throw new InternalServerErrorException();
      }
    }
  }

  async validateUserPassword(
    authCredentialsDto: AuthCredentialsDto,
  ): Promise<string> {
    const { username, password } = authCredentialsDto;
    const user = await this.findOne({ username });
  }

  private async hashedPassword(
    password: string,
    salt: string,
  ): Promise<string> {
    return bcrypt.hash(password, salt);
  }
}
