import { Call, Log } from "../../model/model.mjs";

export default async function registerCall(_, args, __, ___) {
  const call = await Call.create(args);
  await Log.create({ callId: call._id, desc: "dasdasdsasds", type: "Call registered", adminId: call.operatorId });
  return call;
}
