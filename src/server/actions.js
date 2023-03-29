import HttpError from "@wasp/core/HttpError.js";

export const signUp = async (args, context) => {
  // Your custom code before sign-up.
  // ...
  console.log(args, context, "ARGS AND CONTEXT");
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
  if (!context.user) {
    throw new HttpError(401);
  }
  return context.entities.Garden.create({
    data: {
      ...args,
      userId: { connect: { id: context.user.id } },
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
