import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

//Swagger
import { ApiModelProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @IsEmail()
  @ApiModelProperty()
  email: string;

  @IsString()
  @IsNotEmpty()
  @ApiModelProperty()
  password: string;
}