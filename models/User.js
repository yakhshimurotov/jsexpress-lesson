import { model, Schema } from "mongoose";
const userSchema = Schema({
    FirstName: {type: String, required: true},
    LastName: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true}
});

const User = model("User", userSchema)
export default User