import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ProductDocument = HydratedDocument<Product>;

@Schema()
export class Product {
  @Prop({ required: true })
  SKU: string;
  @Prop()
  code: number;
  @Prop({ required: true })
  name: string;
  @Prop()
  description: string;
  @Prop({ required: true })
  pictures: string[];
  @Prop({ required: true })
  price: number;
  @Prop({ required: true })
  currency: string;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
