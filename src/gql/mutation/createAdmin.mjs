import { Admin } from "../../model/model.mjs";
import bcrypt from "bcryptjs";
//create admin user with email and password
const createAdmin = async (parent, args, context, info) => {
  const { email, firstName, lastName, password, phone, role, department } = args;
  const admin = await Admin.findOne({ email });
  if (admin) {
    throw new Error("Admin already exists");
  }
  const hashedPassword = await bcrypt.hash(password, 10);
  const newAdmin = new Admin({
    email,
    firstName,
    lastName,
    password: hashedPassword,
    phone,
    role,
    department,
  });
  const result = await newAdmin.save();
  return result;
};

export default createAdmin;
