import { HttpStatus } from '@nestjs/common';
import { ResponseAuth } from '../auth/dto/response.interface';

export const docsAuth = {
  loginUser: {
    operation: {
      summary: 'Login generate token',
    },
    response: {
      status: HttpStatus.CREATED,
      type: ResponseAuth,
    },
    badResponse: {
      status: HttpStatus.FORBIDDEN,
      description: 'Unauthorized',
    },
  },
};
