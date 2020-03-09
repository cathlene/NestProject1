import { createParamDecorator } from '@nestjs/common';
import { User } from './user.entity';

export const GetUser = createParamDecorator(
  // maak je eigen decorator om user uit request te halen via token
  (data, req): User => {
    return req.user;
  },
);
