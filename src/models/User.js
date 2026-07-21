import mongoose from "mongoose";
const userRegistrationSchema = new mongoose.Schema({
  // Do not remove spaces in empty string in default value;
  firstName: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 100,
  },
  lastName: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 100,
  },
  gender: {
    type: String,
    required: true,
  },
  dateOfBirth: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    minlength: 5,
    maxlength: 100,
    match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Please enter a valid email address"],
  },
  phoneNumber: {
    type: String,
    required: true,
    unique: true,
    minlength: 10,
    maxlength: 10,
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
    maxlength: 100,
  },
  religion: {
    type: String,
    // required: true,
    default: "",
  },
  caste: {
    type: String,
    // required: true,
    default: "",
  },
  motherTongue: {
    type: String,
    // required: true,
    default: "",
  },
  maritalStatus: {
    type: String,
    // required: true,
    default: "",
  },
  height: {
    type: String,
    // required: true,
    default: "",
  },
  manglikStatus: {
    type: String,
    // required: true,
    default: "",
  },
  country: {
    type: String,
    // required: true,
    default: "",
  },
  countryCode: {
    type: String,
    default: "",
  },
  state: {
    type: String,
    // required: true,
    default: "",
  },
  stateCode: {
    type: String,
    default: "",
  },
  city: {
    type: String,
    default: "",
  },
  qualification: {
    type: String,
    // required: true,
    default: "",
  },
  occupation: {
    type: String,
    // required: true,
    default: "",
  },
  annualIncome: {
    type: String,
    // required: true,
    default: "",
  },
  companyName: {
    type: String,
    // required: true,
    default: "",
  },
  fathersStatus: {
    type: String,
    // required: true,
    default: "",
  },
  fathersOccupation: {
    type: String,
    // required: true,
    default: "",
  },
  mothersStatus: {
    type: String,
    // required: true,
    default: "",
  },
  mothersOccupation: {
    type: String,
    // required: true,
    default: "",
  },
  profilePic: {
    type: [mongoose.Schema.Types.Mixed],
    // required: true,
    default: [],
  },
  gallery: {
    type: [mongoose.Schema.Types.Mixed],
    default: [],
  },
});
const User = mongoose.model("User", userRegistrationSchema);
export default User;
