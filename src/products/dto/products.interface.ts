import { CreateProductDto } from './create-product.dto';

export interface AllProductsReturn {
  status: number;
  totalProducts: number;
  data: CreateProductDto[];
}

export interface inputGetProducts {
  name?: string;
  currency?: string;
}

export interface createProductsReturn {
  status: number;
  dataCreated: CreateProductDto[];
}
