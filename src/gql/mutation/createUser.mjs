import { User } from "../../model/model.mjs";

export default async function (_, args, __, ___) {
  const user = await User.create(args);
  return user;
}
