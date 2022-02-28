import { Document, Types } from 'mongoose';

export interface IUser extends Document {
  id: Types.ObjectId;
  brand_id: Types.ObjectId | string;
  corp_id: Types.ObjectId | null;
  roles: Array<string>;
  username: string;
  email: string;
  phone: string;
  password: string | null;
}
