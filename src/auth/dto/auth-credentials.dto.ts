import { IsString, MinLength, MaxLength } from 'class-validator';

export class AuthCredentialsDto {
  // hier zeg je dat je voor je login en signUp voorlopig enkel een username en wachtwoord wilt meegeven

  @IsString()
  @MinLength(4)
  @MaxLength(20)
  username: string;

  @IsString()
  @MinLength(4)
  @MaxLength(20)
  //@Matches() regular expression
  password: string;
}
