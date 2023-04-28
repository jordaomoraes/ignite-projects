import { expect, describe, it } from "vitest";
import { RegisterUseCase } from "./register";
import { compare } from "bcryptjs";
import { InMemoryUserRepository } from "@/repositories/in-memory/in-memory-users-repositoriy";
import { UserAlreadExistsError } from "./errors/user-already-exists-error";

describe("Register Use Case", () => {
  it("a senha do usuario deve ser um hash quando for cadastrar", async () => {
    const usersRepository = new InMemoryUserRepository();
    const registerUseCase = new RegisterUseCase(usersRepository);

    const { user } = await registerUseCase.execute({
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
    const usersRepository = new InMemoryUserRepository();
    const registerUseCase = new RegisterUseCase(usersRepository);

    const email = "fulano@gmail.com";

    await registerUseCase.execute({
      name: "Fulano",
      email,
      password: "123456",
    });
    expect(() =>
      registerUseCase.execute({
        name: "Fulano",
        email,
        password: "123456",
      })
    ).rejects.toBeInstanceOf(UserAlreadExistsError);
  });

  it("deve ser possivel cadastrar", async () => {
    const usersRepository = new InMemoryUserRepository();
    const registerUseCase = new RegisterUseCase(usersRepository);

    const { user } = await registerUseCase.execute({
      name: "Fulano",
      email: "fulano@gmail.com",
      password: "123456",
    });

    expect(user.id).toEqual(expect.any(String));
  });
});
