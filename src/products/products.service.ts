import { BadRequestException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Products, ProductsDocument } from './entities/product.entity';
import {
  AllProductsReturn,
  createProductsReturn,
  inputGetProducts,
} from './dto/products.interface';
@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(Products.name) private productModel: Model<ProductsDocument>,
  ) {}
  async createProducts(
    createProductDto: CreateProductDto[],
  ): Promise<createProductsReturn> {
    try {
      const created = await this.productModel.create(createProductDto);
      return { status: HttpStatus.OK, dataCreated: created };
    } catch (e) {
      throw new BadRequestException(e.message);
    }
  }

  async getProducts(input: inputGetProducts): Promise<AllProductsReturn> {
    try {
      const filterBasic: inputGetProducts = {};
      const { name, currency } = input;
      if (name) {
        filterBasic.name = name;
      }
      if (currency) {
        filterBasic.currency = currency;
      }

      const allProducts = await this.productModel.find(
        filterBasic ? filterBasic : {},
      );
      return {
        status: HttpStatus.OK,
        totalProducts: allProducts.length,
        data: allProducts,
      };
    } catch (e) {
      throw new BadRequestException(e.message);
    }
  }
}
