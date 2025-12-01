import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Your name is required"],
  },
  email: {
    type: String,
    unique: true,
    required: [true, "Your email is required"],
  },
  DOB: {
    type: Date,
    required: [true, "Your DOB is required"],
  },
  password: {
    type: String,
    required: [true, "Your password is required"],
    // validate: {
    //   validator: function (value) {
    //     return /^(?=.*[!@#%])(?=.*\d)[A-Za-z\d!@#%]{8,12}$/.test(value);
    //   },
    //   message:
    //     "Password must contain at least one special character, one number, and be between 8 and 12 characters long.",
    // },
  },
});

export default userSchema;
