import { Admin } from "../../model/model.mjs";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

//login admin
const login = async (parent, args, context, info) => {
  const { email, password } = args;
  const admin = await Admin.findOne({ email });
  if (!admin) {
    throw new Error("Invalid email or password");
  }
  const isMatch = await bcrypt.compare(password, admin.password);
  if (!isMatch) {
    throw new Error("Invalid email or password");
  }
  const token = jwt.sign({ id: admin.id }, process.env.JWT_KEY, { expiresIn: "365d" });
  return token;
};

export default login;
