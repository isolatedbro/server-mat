import multer from "multer";
import fs from "fs/promises";
import User from "../models/User.js";

import { upload } from "../middleware/uploadMiddleware.js";

export const getProfile = async (req, res) => {
  try {
    // console.log("REQ.USER",req.user);
    res.json({ user: req.user.userId });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};
export const getSingleUser = async (req, res) => {
  try {
    const user = await User.findOne({ _id: req.user.userId });
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};
export const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    // console.log(typeof users[0].phoneNumber);
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const updateProfile = async (req, res) => {
  try {
    console.log("IN Update Profile", req.files);
    const user = await User.findById(req.user.userId);
    const newGallery = req.files.gallery?.map((file) => file) || [];
    if (user?.gallery?.length + newGallery?.length > 10) {
      newGallery?.map(file=> fs.unlink(file.path));
      return res.json({
        error: "You cannot keep more than 10 images in your gallery !!",
      });
    }
    console.log("gallery =", user.gallery);
    console.log("typeof =", typeof user.gallery);
    console.log("constructor =", user.gallery?.constructor?.name);
    console.log("isArray =", Array.isArray(user.gallery));
    console.log("keys =", Object.keys(user.gallery));
    console.log("value =", JSON.stringify(user.gallery));
// console.log("req.files =", req.files);
// console.log("req.files.gallery =", req.files?.gallery);
// console.log("user.gallery =", user.gallery);
// console.log("Array.isArray(user.gallery) =", Array.isArray(user.gallery));
// console.log("newGallery =", newGallery);
// console.log("Array.isArray(newGallery) =", Array.isArray(newGallery));
// const existingGallery = Array.from(user.gallery || []);
    const updateUser = await User.findByIdAndUpdate(
      req.user.userId,
      {
        ...req.body,
        profilePic: req.files?.profilePic || user?.profilePic,
        gallery: [...newGallery, ...(user?.gallery || [])],
      },
      {
        returnDocument: "after",
        runValidators: true,
      },
    );
    if (!updateUser) {
      return res.status(400).json({ error: "User not found" });
    }

    res.json({ message: "Request Sent" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

export const deleteGalleryImage = async (req, res) => {
  try{
  console.log("DELETE IMAGE", req.body);

  const user = await User.updateOne(
    { _id: req.user.userId },
    {
      $pull: {
        gallery: { filename: req.body.filename },
      },
    },
  );

  await fs.unlink(req.body.path);

  res.json({ message: "image deleted succeessfully!" });
  }catch(error){
    res.json({error: error});
  }
};
