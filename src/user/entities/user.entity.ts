import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema({ timestamps: true })
export class User {
  @Prop({
    type: String,
    required: [true, 'Name is required'],
    min: [3, 'Name must be at least 3 characters'],
    max: [30, 'Name must be at most 30 characters'],
  })
  name: string;

  @Prop({
    type: String,
    required: [true, 'Email is required'],
    unique: [true, 'Email must be unique'],
  })
  email: string;
  @Prop({
    type: String,
    required: [true, 'Password is required'],
    min: [3, 'Password must be at least 3 characters'],
    max: [20, 'Password must be at most 20 characters'],
  })
  password: string;

  @Prop({
    type: String,
    required: [true, 'Role is required'],
    enum: ['Admin', 'Manger', 'User'],
  })
  role: string;
  @Prop({ type: String, enum: ['male', 'female'] })
  gender: string;

  @Prop({ type: Boolean, enum: [true, false] })
  active: boolean;

  @Prop({
    type: String,
  })
  avatar: string;
  @Prop({
    type: Number,
  })
  age: number;

  @Prop({ type: String })
  phoneNumber: string;

  @Prop({ type: String })
  address: string;

  @Prop({ type: String })
  verficationCode: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
