import jwt from "jsonwebtoken";
import User from "../models/User.js";

export const userLogin = async (req, res, next) => {
  try {
    const { email, phoneNumber, password } = req.body;
    const userInput = phoneNumber.length !== 0 ? phoneNumber : email;
    const isExist = await User.findOne({
      $or: [{ email: email, phoneNumber: phoneNumber }],
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
    res.status(401).json({ error: ["Authentication Failed"] });
  }
};
