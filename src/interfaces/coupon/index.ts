import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface CouponInterface {
  id?: string;
  code: string;
  discount: number;
  user_id: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  _count?: {};
}

export interface CouponGetQueryInterface extends GetQueryInterface {
  id?: string;
  code?: string;
  user_id?: string;
}
