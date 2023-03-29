import HttpError from "@wasp/core/HttpError.js";

export const getUsers = async (args, context) => {
  return context.entities.User.findMany({});
};

export const getGardens = async (args, context) => {
  return context.entities.Garden.findMany({});
};
