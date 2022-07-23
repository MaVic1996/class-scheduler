import { Controller, Post, Request } from '@nestjs/common';
import { LoginUseCase } from 'src/usecases/auth/login.usecase';
import { RegisterUseCase } from 'src/usecases/auth/register.usecase';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly loginUseCase: LoginUseCase,
    private readonly registerUseCase: RegisterUseCase,
  ) {}

  @Post('register')
  async register(@Request() req) {
    this.registerUseCase.call(req.auth);
  }

  @Post('login')
  async login(@Request() req) {
    this.loginUseCase.call(req.auth);
  }
}
