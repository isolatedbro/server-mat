import User from "../models/User.js";

export const getProfile = async (req,res) => {
  try {
    // console.log("REQ.USER",req.user);
    res.json({user: req.user.userId});
  }catch(error){
    res.status(500).json({ message: "Internal Server Error" });
  }
}
export const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    // console.log(typeof users[0].phoneNumber);
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};
