import { IsNotEmpty, IsOptional } from 'class-validator';

export class CreateProductDto {
  @IsNotEmpty()
  SKU: string;

  @IsOptional()
  code: number;

  @IsNotEmpty()
  name: string;

  @IsOptional()
  description: string;

  @IsNotEmpty()
  pictures: Array<string>;

  @IsNotEmpty()
  price: number;

  @IsNotEmpty()
  currency: string;
}
