import { Log } from "../../model/model.mjs";

export default async function getLogs(_, args, __, ___) {
  const logs = await Log.find({ callId: args.callId });
  return logs;
}
