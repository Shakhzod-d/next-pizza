import { hashSync } from "bcrypt";
import { prisma } from "./prisma-client";

async function up() {
  await prisma.user.createMany({
    data: [
      {
        fullName: "User",
        email: "user@test.ru",
        password: hashSync("111111", 10),
        verified: new Date(),
        role: "USER",
      },
      {
        fullName: "Admin",
        email: "Admin@test.ru",
        password: hashSync("111111", 10),
        verified: new Date(),
        role: "ADMIN",
      },
    ],
  });
}

async function down() {}

async function main() {
  try {
    await up();
    await down();
  } catch (e) {
    console.log(e);
  }
}
