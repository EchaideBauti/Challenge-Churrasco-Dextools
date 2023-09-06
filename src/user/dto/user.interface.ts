import { ApiProperty } from '@nestjs/swagger';
import { CreateUserDto } from './create-user.dto';

export class ResponseUserCreated {
  @ApiProperty({ example: 200 })
  status: number;
  @ApiProperty()
  user: CreateUserDto;
}
