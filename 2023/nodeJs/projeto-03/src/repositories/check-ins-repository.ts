import { CheckIN, Prisma } from "@prisma/client";

export interface CheckInsRepository {
  create(data: Prisma.CheckINUncheckedCreateInput): Promise<CheckIN>;
  findManyByUserId(userId: string, page: number): Promise<CheckIN[]>;
  findByUserIdOnDate(userId: string, date: Date): Promise<CheckIN | null>;
}
