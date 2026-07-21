import jwt from "jsonwebtoken";
import User from "../models/User.js";

export const userLogin = async (req, res, next) => {
  try {
    const { email, phoneNumber, password } = req.body;
    console.log("EMAIL", email, "PHONE", phoneNumber, "PASS", password)
    const userInput = phoneNumber?.trim()
    ? phoneNumber.trim()
    : email?.trim();
    const isExist = await User.findOne({
      $or: [
    { email },
    { phoneNumber }
  ],
    });
    if (!isExist) {
      return res.status(401).json({ error: ["Invalid credentials"] });
    }

    const isMatch = password === isExist.password;

    if (!isMatch) {
      return res.status(401).json({ error: ["Invalid credentials"] });
    }

    const token = jwt.sign(
      {
        userId: isExist._id,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "120h",
      },
    );
    res.json({ token });

    // if(phoneNumber.length !== 0){
    //     const isExist = await User.find({phoneNumber: phoneNumber});
    //     if(isExist.length){
    //         return res.json({isLoggedIn:true});
    //     }else{
    //         return res.json({isLoggedIn: false, error: "Invalid email or PhoneNumber"})
    //     }
    // }
  } catch (error) {
    console.log("Auhtentication Failed during LOGIN");
    res.status(401).json({ error: ["Authentication Failed"] });
  }
};
