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
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { inputGetProducts } from './dto/products.interface';

@UseGuards(JwtAuthGuard)
@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  create(@Body(new ValidationPipe()) createProductDto: CreateProductDto[]) {
    return this.productsService.createProducts(createProductDto);
  }

  @Get()
  findAll(@Query() input: inputGetProducts) {
    return this.productsService.getProducts(input);
  }
}
