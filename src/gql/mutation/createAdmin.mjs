import { Admin } from "../../model/model.mjs";

export default async function createAdmin(_, args, __, ___) {
  const admin = await Admin.create(args);
  return admin;
}
