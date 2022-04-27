import { Admin } from "../../model/model.mjs";

export default async function getAdmins() {
  const admin = await Admin.find();
  return admin;
}
