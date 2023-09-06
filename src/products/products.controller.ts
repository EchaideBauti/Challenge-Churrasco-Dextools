import {
  Controller,
  Get,
  Post,
  Body,
  UseGuards,
  Query,
  ValidationPipe,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { inputGetProducts } from './dto/products.interface';
import {
  ApiBadRequestResponse,
  ApiBody,
  ApiOperation,
  ApiResponse,
  ApiTags,
  ApiBearerAuth,
  ApiParam,
} from '@nestjs/swagger';
import { docsProducts } from '../docs/products.doc';

@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
@ApiTags('products')
@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @ApiOperation(docsProducts.create.operation)
  @ApiResponse(docsProducts.create.response)
  @ApiBadRequestResponse(docsProducts.create.badResponse)
  @ApiBody({
    type: CreateProductDto,
    isArray: true,
    schema: { type: 'array' },
  })
  @Post()
  create(@Body(new ValidationPipe()) createProductDto: CreateProductDto[]) {
    return this.productsService.createProducts(createProductDto);
  }

  @ApiOperation(docsProducts.findAll.operation)
  @ApiResponse(docsProducts.findAll.response)
  @ApiBadRequestResponse(docsProducts.findAll.badResponse)
  @ApiParam({
    name: 'username',
    required: false,
  })
  @ApiParam({
    name: 'currency',
    required: false,
  })
  @Get()
  findAll(@Query() input: inputGetProducts) {
    return this.productsService.getProducts(input);
  }
}
