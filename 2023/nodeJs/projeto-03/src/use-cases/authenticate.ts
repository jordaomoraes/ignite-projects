import { UsersRepository } from "@/repositories/users-repository-interface";
import { InvalidCredentialsError } from "./errors/invalid-credencials-error";
import { compare } from "bcryptjs";
import { User } from "@prisma/client";

interface AuthenticateUseCaseRequest {
  email: string;
  password: string;
}
interface AuthenticateUseCaseResponse {
  user: User;
}

export class AuthenticateUseCase {
  constructor(private userRepository: UsersRepository) {}

  async execute({
    email,
    password,
  }: AuthenticateUseCaseRequest): Promise<AuthenticateUseCaseResponse> {
    const user = await this.userRepository.findByEmail(email);

    if (!user) {
      throw new InvalidCredentialsError();
    }

    const doesPassawordMatches = await compare(password, user.password_hash);

    if (!doesPassawordMatches) {
      throw new InvalidCredentialsError();
    }

    return { user };
  }
}
