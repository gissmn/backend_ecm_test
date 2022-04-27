import mongoose from "mongoose";
import autoIncrement from "mongoose-auto-increment";

const mongodbConnection = mongoose.createConnection("mongodb://localhost:27017/ecm");
autoIncrement.initialize(mongodbConnection);
const Schema = mongoose.Schema;

const callSchema = new Schema({
  callId: { type: Number, unique: true },
  name: String,
  detail: String,
  type: { type: String, enum: ["casual", "emergency", "special", "replied"], default: "casual" },
  status: { type: String, enum: ["new", "pending", "working", "done", "canceled"], default: "new" },
  device: { type: String, enum: ["mobile", "app", "web", "operator", "callCenter"] },
  category: { type: String, enum: ["information", "damage", "work", "issue"] },
  price: { type: Number, default: 0 },
  dueDate: Date,
  userId: { type: Schema.Types.ObjectId, ref: "User" },
  operatorId: { type: Schema.Types.ObjectId, red: "Admin" },
});
callSchema.plugin(autoIncrement.plugin, { model: "Call", field: "callId" });
const Call = mongoose.model("Call", callSchema);

const userSchema = new Schema({
  email: String,
  firstName: String,
  phone: String,
  lastName: String,
  userNum: { type: Number, unique: true },
  addressId: { type: Schema.Types.ObjectId, ref: "Address" },
  password: String,
});
userSchema.plugin(autoIncrement.plugin, { model: "User", field: "userNum", startAt: 1000000 });
const User = mongoose.model("User", userSchema);

const Admin = mongoose.model(
  "Admin",
  new Schema({
    email: String,
    firstName: String,
    lastName: String,
    password: String,
    phone: String,
    role: { type: String, enum: ["operator", "engineer"] },
    department: { type: Schema.Types.ObjectId, ref: "Department" },
  })
);

const Address = mongoose.model(
  "Address",
  new Schema({
    city: String,
    district: String,
    unit: String,
    apartment: String,
    number: String,
    detail: String,
  })
);

const Log = mongoose.model(
  "Log",
  new Schema({
    type: String,
    userID: { type: Schema.Types.ObjectId, ref: "User" },
    desc: String,
    callId: { type: Schema.Types.ObjectId, ref: "Call" },
  })
);

const Department = mongoose.model(
  "Department",
  new Schema({
    name: String,
  })
);
export { Call, User, Admin, Address, Log, Department };
