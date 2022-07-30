import { Gender } from '../enums';

export interface UserSignupDto {
  name: string;
  mail: string;
  password: string;
  phone: string;
  birthDate: number;
  nationality: string;
  address: string;
  gender: Gender;
}
