import prismaClient from "../../prisma";

class DetailUserService {
  async execute(user_id: string) {
    const user = prismaClient.user.findFirst({
      where: {
        id: user_id,
      },
      select: {
        id: true,
        name: true,
        email: true,
        created_at: true,
        updated_at: true,
      },
    });

    return user;
  }
}

export { DetailUserService };
