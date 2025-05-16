import mongoose from "mongoose";

// schema
const userSchema = new mongoose.Schema(
  {
    propertyImage: {
      type: String,
      required: [true, "Property image is required"],
    },
    propertyName: {
      type: String,
      required: [true, "Property name is required"],
    },
    propertyPrice: {
      type: Number,
      required: [true, "Property price is required"],
    },
    propertyDescription: {
      type: String,
      required: [true, "Property description is required"],
    },
  },
  { timestamps: true }
);

// export model
const User = mongoose.model("User", userSchema);
export default User;
