import { Call } from "../../model/model.mjs";

export default async function registerCall(_, args, __, ___) {
  console.log("🚀 ~ file: registerCall.mjs ~ line 4 ~ registerCall ~ args", args);

  const call = await Call.create(args);
  return call;
}
