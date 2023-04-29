import { expect, describe, it, beforeEach } from "vitest";
import { RegisterUseCase } from "./register";
import { compare } from "bcryptjs";
import { InMemoryUserRepository } from "@/repositories/in-memory/in-memory-users-repositoriy";
import { UserAlreadExistsError } from "./errors/user-already-exists-error";

let usersRepository: InMemoryUserRepository;
let sut: RegisterUseCase;

describe("Register Use Case", () => {
  beforeEach(() => {
    usersRepository = new InMemoryUserRepository();
    sut = new RegisterUseCase(usersRepository);
  });
  it("a senha do usuario deve ser um hash quando for cadastrar", async () => {
    const { user } = await sut.execute({
      name: "Fulano",
      email: "fulano@gmail.com",
      password: "123456",
    });
    const isPasswordCorrectlyHashed = await compare(
      "123456",
      user.password_hash
    );

    expect(isPasswordCorrectlyHashed).toBe(true);
  });

  it("nao pode cadastrar com o mesmo email duas vezes", async () => {
    const email = "fulano@gmail.com";

    await sut.execute({
      name: "Fulano",
      email,
      password: "123456",
    });
    await expect(() =>
      sut.execute({
        name: "Fulano",
        email,
        password: "123456",
      })
    ).rejects.toBeInstanceOf(UserAlreadExistsError);
  });

  it("deve ser possivel cadastrar", async () => {
    const { user } = await sut.execute({
      name: "Fulano",
      email: "fulano@gmail.com",
      password: "123456",
    });

    expect(user.id).toEqual(expect.any(String));
  });
});
