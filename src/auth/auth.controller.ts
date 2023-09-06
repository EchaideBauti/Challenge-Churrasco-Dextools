import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { loginData } from './dto/login.interface';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/login')
  loginUser(@Body() userObjetLogin: loginData) {
    return this.authService.login(userObjetLogin);
  }
}
