import User from "../models/User.js";

export const newUserRegistration = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      gender,
      dateOfBirth,
      email,
      phoneNumber,
      password,
      confirmPassword,
    } = req.body;

    console.log(typeof gender);
    if (password !== confirmPassword) {
      return res.status(400).json({ message: "Passwords do not match" });
    }

    console.log(req.body);

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res
        .status(400)
        .json({ message: "User with this email already exists" });
    }
    const existingPhoneNumber = await User.findOne({ phoneNumber });
    if (existingPhoneNumber) {
      return res
        .status(400)
        .json({ message: "User with this phone number already exists" });
    }

    const newUser = new User({
      firstName,
      lastName,
      gender,
      dateOfBirth,
      email,
      phoneNumber,
      password,
    });
    await newUser.save();

    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
