import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  @Prop()
  username: string;
  @Prop()
  email: string;
  @Prop()
  password: string;
  @Prop()
  lastLogin: Date;
  @Prop()
  role: string;
  @Prop()
  active: boolean;
  @Prop()
  fistName: string;
  @Prop()
  lastName: string;
  @Prop()
  birthday: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);
