import { CreateAuthDto } from '../../auth/dto/create-auth.dto';

export class CreateUserDto extends CreateAuthDto {
  lastLogin: Date;
  role: string;
  active: boolean;
}
