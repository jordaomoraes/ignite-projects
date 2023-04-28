import { expect, describe, it } from "vitest";
import { RegisterUseCase } from "./register";
import { compare } from "bcryptjs";
import { Prisma, User } from "@prisma/client";

describe("Register Use Case", () => {
  it("a senha do usuario deve ser um hash quando for cadastrar", async () => {
    const registerUseCase = new RegisterUseCase({
      async findByEmail(email) {
        return null;
      },

      async create(data: Prisma.UserCreateInput): Promise<User> {
        const passwordHash = data.password_hash || "";
        return {
          id: "user-1",
          name: data.name,
          email: data.email,
          password_hash: passwordHash,
          created_at: new Date(),
        };
      },
    });

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
});
