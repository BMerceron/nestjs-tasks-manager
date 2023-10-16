import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { User } from '../user/user.entity';

export const GetUser = createParamDecorator(
  (data, context: ExecutionContext): User => {
    const req = context.switchToHttp().getRequest();
    return req.user;
  },
);
