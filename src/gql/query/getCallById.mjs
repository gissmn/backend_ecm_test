import { Call } from "../../model/model.mjs";

export default async function getCallById(_, args, __, ___) {
  console.log("🚀 ~ file: getCallById.mjs ~ line 4 ~ getCallById ~ args", args);
  const call = Call.findById(args._id);
  return call;
}
