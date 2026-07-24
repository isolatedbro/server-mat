import mongoose from "mongoose";
const occupationCategories = {
  // Information Technology
  "Software Engineer": "Information Technology",
  "Software Developer": "Information Technology",
  "Web Developer": "Information Technology",
  "Web Designer": "Information Technology",
  "UI/UX Designer": "Information Technology",
  "Data Scientist": "Information Technology",
  "Data Analyst": "Information Technology",
  "Business Analyst": "Information Technology",
  "Hardware Engineer": "Information Technology",
  "Computer Operator": "Information Technology",
  "Quality Assurance Engineer": "Information Technology",

  // Engineering
  "Civil Engineer": "Engineering",
  "Mechanical Engineer": "Engineering",
  "Electrical Engineer": "Engineering",
  "Electronics Engineer": "Engineering",
  Architect: "Engineering",
  Biotechnologist: "Engineering",
  Technician: "Engineering",

  // Healthcare & Medical
  Doctor: "Healthcare & Medical",
  Physician: "Healthcare & Medical",
  Dentist: "Healthcare & Medical",
  Nurse: "Healthcare & Medical",
  Pharmacist: "Healthcare & Medical",
  Psychologist: "Healthcare & Medical",
  Veterinarian: "Healthcare & Medical",

  // Education & Research
  Teacher: "Education & Research",
  Professor: "Education & Research",
  Lecturer: "Education & Research",
  "Research Scholar": "Education & Research",
  "Research Scientist": "Education & Research",
  Scientist: "Education & Research",

  // Finance & Accounting
  Accountant: "Finance & Accounting",
  "CA / Chartered Accountant": "Finance & Accounting",
  Auditor: "Finance & Accounting",
  "Banking Professional": "Finance & Accounting",
  "Finance Professional": "Finance & Accounting",
  "Insurance Professional": "Finance & Accounting",
  Cashier: "Finance & Accounting",

  // Business & Entrepreneurship
  "Business Owner": "Business & Entrepreneurship",
  Entrepreneur: "Business & Entrepreneurship",
  "Self Employed": "Business & Entrepreneurship",
  "Shop Owner": "Business & Entrepreneurship",
  Trader: "Business & Entrepreneurship",
  Contractor: "Business & Entrepreneurship",

  // Government & Public Services
  "Government Employee": "Government & Public Services",
  "Police Officer": "Government & Public Services",
  Judge: "Government & Public Services",
  Politician: "Government & Public Services",
  "Railway Employee": "Government & Public Services",
  Clerk: "Government & Public Services",
  "Administration Professional": "Government & Public Services",

  // Defence & Aviation
  "Army Personnel": "Defence & Aviation",
  "Military Personnel": "Defence & Aviation",
  "Navy Personnel": "Defence & Aviation",
  "Merchant Navy": "Defence & Aviation",
  Pilot: "Defence & Aviation",
  "Air Hostess / Flight Attendant": "Defence & Aviation",

  // Legal
  Lawyer: "Legal",
  "Legal Professional": "Legal",
  "Company Secretary": "Legal",

  // Sales, Marketing & Management
  "Marketing Professional": "Sales, Marketing & Management",
  "Sales Professional": "Sales, Marketing & Management",
  "Management Professional": "Sales, Marketing & Management",
  "Project Manager": "Sales, Marketing & Management",
  "Operations Professional": "Sales, Marketing & Management",
  Executive: "Sales, Marketing & Management",
  Consultant: "Sales, Marketing & Management",
  "HR Professional": "Sales, Marketing & Management",
  "Customer Support Professional": "Sales, Marketing & Management",
  "Public Relations Professional": "Sales, Marketing & Management",
  "Advertising Professional": "Sales, Marketing & Management",
  "Event Manager": "Sales, Marketing & Management",

  // Arts, Media & Design
  Actor: "Arts, Media & Design",
  Artist: "Arts, Media & Design",
  Designer: "Arts, Media & Design",
  "Graphic Designer": "Arts, Media & Design",
  "Fashion Designer": "Arts, Media & Design",
  "Interior Designer": "Arts, Media & Design",
  Photographer: "Arts, Media & Design",
  "Video Editor": "Arts, Media & Design",
  "Content Writer": "Arts, Media & Design",
  Writer: "Arts, Media & Design",
  Journalist: "Arts, Media & Design",
  Model: "Arts, Media & Design",

  // Hospitality & Tourism
  Chef: "Hospitality & Tourism",
  "Hotel & Hospitality Professional": "Hospitality & Tourism",
  Receptionist: "Hospitality & Tourism",
  Beautician: "Hospitality & Tourism",

  // Manufacturing & Industrial
  "Machine Operator": "Manufacturing & Industrial",
  Driver: "Manufacturing & Industrial",
  "Textile Professional": "Manufacturing & Industrial",

  // Agriculture
  Farmer: "Agriculture",

  // Social Services
  "Social Worker": "Social Services",

  // Sports
  "Sports Person": "Sports",

  // Student
  Student: "Student",

  // Retired
  Retired: "Retired",

  // Unemployed
  Unemployed: "Unemployed",

  // Other
  Other: "Others",
};

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
  college: {
    type: String,
    default: "",
  },
  occupation: {
    type: String,
    // required: true,
    default: "",
  },
  occupationCategory: {
    type: String,
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
  aboutMe: {
    type: String,
    default: "",
  },
});

userRegistrationSchema.pre("save", function (next) {
  this.occupationCategory = occupationCategories[this.occupation] || "Others";

  next();
});

const User = mongoose.model("User", userRegistrationSchema);
export default User;
