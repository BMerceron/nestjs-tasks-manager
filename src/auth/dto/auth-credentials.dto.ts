import { IsString, Matches, MaxLength, MinLength } from 'class-validator';

export class AuthCredentialsDto {
  @IsString({
    message: 'Le pseudo doit contenir uniquement des caractères.',
  })
  @MinLength(4, {
    message: 'Le pseudo doit avoir minimum 4 caractères.',
  })
  @MaxLength(20, {
    message: 'Le pseudo doit avoir maximum 20 caractères.',
  })
  username: string;

  @IsString({
    message: 'Le mot de passe doit contenir uniquement des caractères.',
  })
  @MinLength(8, {
    message: 'Le mot de passe doit avoir minimum 8 caractères.',
  })
  @MaxLength(32, {
    message: 'Le mot de passe doit avoir maximum 32 caractères.',
  })
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message:
      'Le mot de passe est trop faible. Il doit contenir au moins une majuscule et un chiffre.',
  })
  password: string;
}
