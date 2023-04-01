import HttpError from "@wasp/core/HttpError.js";

export const fetchAllUsers = async (args, context) => {
  return context.entities.User.findMany({});
};

export const fetchAllGardens = async (args, context) => {
  return context.entities.Garden.findMany({});
};
