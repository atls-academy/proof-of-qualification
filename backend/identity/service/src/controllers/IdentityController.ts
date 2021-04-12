import { MapValidationErrorsInterceptor } from '@atlantis-lab/nestjs-map-errors-interceptor'
import {
  BadRequestException,
  Controller,
  UseInterceptors,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common'
import { GrpcMethod }                     from '@nestjs/microservices'

import {
  AuthenticateUserCommand,
  ChangePasswordCommand,
  CreateProfileCommand,
  RegisterUserCommand,
  ResetPasswordCommand,
  UpdateProfileCommand,
  UserApplicationService,
  VerifyEmailCommand,
} from '@identity/application'

@Controller()
@UseInterceptors(MapValidationErrorsInterceptor)
@UsePipes(
  new ValidationPipe({
    transform: true,
    exceptionFactory: errors => new BadRequestException(errors),
  }),
)
export class IdentityController {
  constructor(private readonly userApplicationService: UserApplicationService) {}

  @GrpcMethod('IdentityService', 'register')
  async register(request: RegisterUserCommand) {
    console.log(request)
    const result = await this.userApplicationService.register(request)

    return {
      result,
    }
  }

  @GrpcMethod('IdentityService', 'verifyEmail')
  async verifyEmail(request: VerifyEmailCommand) {
    const result = await this.userApplicationService.verifyEmail(request)

    return {
      result,
    }
  }

  @GrpcMethod('IdentityService', 'authenticate')
  async authenticate(request: AuthenticateUserCommand) {
    const result = await this.userApplicationService.authenticate(request)

    if (!result) {
      return {
        errors: {
          email: 'Email не найден',
        },
      }
    }

    return {
      result,
    }
  }

  @GrpcMethod('IdentityService', 'resetPassword')
  async resetPassword(request: ResetPasswordCommand) {
    await this.userApplicationService.resetPassword(request)

    return {
      result: null,
    }
  }

  @GrpcMethod('IdentityService', 'changePassword')
  async changePassword(request: ChangePasswordCommand) {
    const result = await this.userApplicationService.changePassword(request)

    return {
      result,
    }
  }

  @GrpcMethod('IdentityService', 'createProfile')
  async createProfile(request: CreateProfileCommand) {
    const result = await this.userApplicationService.createProfile(request)

    return {
      result,
    }
  }

  @GrpcMethod('IdentityService', 'updateProfile')
  async updateProfile(request: UpdateProfileCommand) {
    const result = await this.userApplicationService.updateProfile(request)

    return {
      result,
    }
  }
}
