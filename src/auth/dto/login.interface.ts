import { ApiProperty } from '@nestjs/swagger';

export class loginDataDto {
  @ApiProperty({ required: false })
  username?: string;

  @ApiProperty({ required: false })
  email?: string;
}
