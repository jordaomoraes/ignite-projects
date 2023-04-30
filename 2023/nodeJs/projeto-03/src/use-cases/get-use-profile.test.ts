import { expect, describe, it, beforeEach } from "vitest";
import { hash } from "bcryptjs";
import { InMemoryUserRepository } from "@/repositories/in-memory/in-memory-users-repositoriy";
import { GetUserProfileUseCase } from "./get-user-profile";
import { ResourceNotFoundError } from "./errors/resource-not-found-error";

let usersRepository: InMemoryUserRepository;
let sut: GetUserProfileUseCase;
describe("Get user profile Use Case", () => {
  beforeEach(() => {
    usersRepository = new InMemoryUserRepository();
    sut = new GetUserProfileUseCase(usersRepository);
  });

  it("DEVE ser possivel pegar o dados do usuario", async () => {
    const createdUser = await usersRepository.create({
      name: "Fulano",
      email: "fulano@gmail.com",
      password_hash: await hash("123456", 6),
    });

    const { user } = await sut.execute({
      userId: createdUser.id,
    });

    expect(user.id).toEqual(expect.any(String));
    expect(user.name).toEqual("Fulano");
  });

  it("nao DEVE ser possivel ter dados de um usario quando ele não existe", async () => {
    await expect(() =>
      sut.execute({
        userId: "non-existing-id",
      })
    ).rejects.toBeInstanceOf(ResourceNotFoundError);
  });
});
