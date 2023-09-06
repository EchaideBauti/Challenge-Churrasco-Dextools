import { HttpStatus } from '@nestjs/common';
import { ResponseUserCreated } from '../user/dto/user.interface';

export const docsUser = {
  createUser: {
    operation: {
      summary: 'create a user',
    },
    response: {
      status: HttpStatus.CREATED,
      type: ResponseUserCreated,
    },
    badResponse: {
      status: HttpStatus.BAD_REQUEST,
      description:
        'There is already a user with that username / There is already a user with that email',
    },
  },
};
