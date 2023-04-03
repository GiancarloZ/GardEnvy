import HttpError from "@wasp/core/HttpError.js";
import AuthError from "@wasp/core/AuthError.js";

export const signUp = async (args, context) => {
  // Your custom code before sign-up.
  // ...
  const newUser = context.entities.User.create({
    data: {
      username: args.username,
      email: args.email,
      password: args.password, // password hashed automatically by Wasp! 🐝
    },
  });

  return newUser;
};

export const createGarden = async (args, context) => {
  if (!context?.user?.id) {
    throw new HttpError(422, "User must be signed in!");
  }
  if (!args?.name) {
    throw new HttpError(422, "Garden's must have a name!");
  }
  return context.entities.Garden.create({
    data: {
      ...args,
      userId: context.user.id,
    },
  });
};

export const updateGarden = async (args, context) => {
  if (!context.user) {
    throw new HttpError(401);
  }
  return context.entities.Garden.updateMany({
    where: { id: args.gardenId, user: { id: context.user.id } },
    data: { isDone: args.data.isDone },
  });
};
