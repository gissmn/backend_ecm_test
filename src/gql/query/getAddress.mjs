import { Address } from "../../model/model.mjs";

export default async function getAddress() {
  const addresses = await Address.find();
  return addresses;
}
