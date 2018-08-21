import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

//Swagger
import { ApiModelProperty, ApiModelPropertyOptional } from '@nestjs/swagger';

export class UpdateUserDto {
  @IsEmail()
  @ApiModelProperty()
  email: string;

  @IsString()
  @IsNotEmpty()
  @ApiModelProperty()
  password: string;
}