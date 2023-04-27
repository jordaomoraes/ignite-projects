import { prisma } from "@/lib/prisma";
import { UsersRepository } from "@/repositories/users-repository-interface";
import { hash } from "bcryptjs";

interface RegisterUseCaseRequest {
  name: string;
  email: string;
  password: string;
}

export class RegisterUseCase {
  constructor(private usersRepository: UsersRepository) {}

  async execute({ name, email, password }: RegisterUseCaseRequest) {
    const password_hash = await hash(password, 6); // 6 e o parametro para gerar o hash, zerar 6 rounds de complexidade

    const userWithSameEmail = await this.usersRepository.findByEmail(email);

    if (userWithSameEmail) {
      throw new Error("E-mail already exists");
    }

    await this.usersRepository.create({
      name,
      email,
      password_hash,
    });
  }
}
