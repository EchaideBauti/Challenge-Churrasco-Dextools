import { ApiProperty } from '@nestjs/swagger';
import { CreateAuthDto } from '../../auth/dto/create-auth.dto';

export class CreateUserDto extends CreateAuthDto {
  @ApiProperty()
  lastLogin: Date;
  @ApiProperty({ type: 'string' })
  role: string;
  @ApiProperty()
  active: boolean;
}
