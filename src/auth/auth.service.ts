import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from 'src/user/entities/user.entity';
import { JwtService } from '@nestjs/jwt';
import { loginData } from './dto/login.interface';
@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name) private userModel: Model<UserDocument>,
    private jwtService: JwtService,
  ) {}

  async login(userObjetLogin: loginData): Promise<{ access_token: string }> {
    try {
      const { email, username } = userObjetLogin;

      const existUser = await this.userModel.findOne({
        role: 'admin',
        active: true,
        $or: [{ username: username }, { email: email }],
      });

      if (!existUser) {
        throw new UnauthorizedException();
      }
      const payload = { sub: existUser._id, username: existUser.username };
      return {
        access_token: await this.jwtService.signAsync(payload),
      };
    } catch (e) {
      throw e;
    }
  }
}
