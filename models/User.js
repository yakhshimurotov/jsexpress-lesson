import { model, Schema } from "mongoose";
const userSchema = Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true}
});

const User = model("User", userSchema)
export default User