import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { loginDataDto } from './dto/login.interface';
import {
  ApiBadRequestResponse,
  ApiBody,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { docsAuth } from '../docs/auth.doc';

@ApiTags('login')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @ApiOperation(docsAuth.loginUser.operation)
  @ApiResponse(docsAuth.loginUser.response)
  @ApiBadRequestResponse(docsAuth.loginUser.badResponse)
  @ApiBody({ type: loginDataDto })
  @Post('/login')
  loginUser(@Body() userObjetLogin: loginDataDto) {
    return this.authService.login(userObjetLogin);
  }
}
