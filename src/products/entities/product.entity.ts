import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, ObjectId } from 'mongoose';

export type ProductsDocument = HydratedDocument<Products>;

@Schema()
export class Products {
  @Prop()
  _id: string;
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

export const ProductsSchema = SchemaFactory.createForClass(Products);
