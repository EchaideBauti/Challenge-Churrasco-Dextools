import { ApiProperty } from '@nestjs/swagger';

export class ResponseAuth {
  @ApiProperty({
    example:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2MDUyMzI4OTEwMmE0YjUzMDhjODAzNDkiLCJ1c2VybmFtZSI6ImNoYWxsZW5nZSIsImlhdCI6MTY5NDAwNzE4OSwiZXhwIjoxNjk0MDA3NDg5fQ.CiFVtf1kjAYXWVpLJ269XKj3-bcd9I3LkvtwCnNcykM',
  })
  access_token: string;
}
