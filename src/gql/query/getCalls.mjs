import { Call } from "../../model/model.mjs";

export default async function getCalls(_, args, __, ___) {
  if (args.status === "") {
    const calls = await Call.find();
    return calls;
  } else {
    const calls = await Call.find(args);
    return calls;
  }
}
