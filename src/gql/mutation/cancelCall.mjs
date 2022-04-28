import { Call, Log } from "../../model/model.mjs";

export default async function cancelCall(_, args, __, ___) {
  const canceledCall = await Call.findByIdAndUpdate(args.callId, { status: "canceled" }, { new: true });
  await Log.create({ callId: canceledCall._id, type: "canceled", desc: args.desc });
  return canceledCall;
}
