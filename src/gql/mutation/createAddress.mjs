import { Address } from "../../model/model.mjs";

export default async function createAddress(_, args, __, ___) {
  const address = await Address.create(args);
  return address;
}
