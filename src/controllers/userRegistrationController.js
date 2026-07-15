import User from "../models/User.js";
import jwt from "jsonwebtoken";

export const newUserRegistration = async (req, res) => {
  const sendError = [];
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

    if (password !== confirmPassword) {
      return res.status(400).json({ message: "Passwords do not match !!!" });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      sendError.push("User with this email already exists !!!");
      return res.status(400).json({ error: sendError });
    }
    const existingPhoneNumber = await User.findOne({ phoneNumber });
    if (existingPhoneNumber) {
      sendError.push("User with this phone Number already exists !!!");
      return res.status(400).json({ error: sendError });
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

    const isExist = await User.findOne({
      $or: [{ email: email, phoneNumber: phoneNumber }],
    });

    const token = jwt.sign(
      {
        userId: isExist._id,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "120h",
      },
    );

    res.status(201).json({token});
  } catch (error) {
    const errors = error.errors;
    // console.log(errors);

    if (errors?.firstName !== undefined) {
      sendError.push("Minimum 3 characters requred in first Name !!!");
    }
    if (errors?.lastName !== undefined) {
      sendError.push("Minimum 3 characters requred in last name !!!");
    }
    if (errors?.gender !== undefined) {
      sendError.push("Gender is required !!!");
    }
    if (errors?.dateOfBirth !== undefined) {
      sendError.push("Date of Birth is required !!!");
    }
    if (errors?.email !== undefined) {
      sendError.push("Email not provided or invalid email !!!");
    }
    if (errors?.phoneNumber !== undefined) {
      sendError.push("Phone Number not provided or Invalid Phone Number !!!");
    }
    res.status(500).json({ error: sendError });
  }
};
