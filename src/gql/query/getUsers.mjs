import { User } from "../../model/model.mjs";

export default async function getUsers() {
  const users = await User.find();
  return users;
}
