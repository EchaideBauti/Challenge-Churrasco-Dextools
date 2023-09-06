import { HttpStatus } from '@nestjs/common';
import { CreateProductDto } from '../products/dto/create-product.dto';
export const docsProducts = {
  create: {
    operation: {
      summary: 'create products',
    },
    response: {
      status: HttpStatus.OK,
      dataCreated: [],
      type: CreateProductDto,
    },
    badResponse: {
      status: HttpStatus.BAD_REQUEST,
      description: 'An empty array was received',
    },
  },
  findAll: {
    operation: {
      summary: 'get all products',
    },
    response: {
      status: HttpStatus.OK,
      type: CreateProductDto,
    },
    badResponse: {
      status: HttpStatus.BAD_REQUEST,
      description: 'Error',
    },
  },
};
