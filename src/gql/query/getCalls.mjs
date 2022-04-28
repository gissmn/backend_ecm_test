import { Call } from "../../model/model.mjs";

export default async function getCalls(_, args, __, ___) {
  if (args.status === "") {
    const calls = await Call.find().sort({ _id: -1 });
    return calls;
  } else {
    const calls = await Call.find(args).sort({ _id: -1 });
    return calls;
  }
}
