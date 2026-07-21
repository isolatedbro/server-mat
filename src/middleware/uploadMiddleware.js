import multer from "multer";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    console.log("In Upload Middleware", file);

    const folder = path.join(
      __dirname,
      "..",
      `uploads/${req.user.userId}/${file.fieldname}`,
    );


    fs.mkdirSync(folder, {
      recursive: true,
    });
    cb(null, folder);
  },
  filename: (req, file, cb) => {
    const uniqueName = Date.now() + path.extname(file.originalname);
    cb(null,uniqueName);
  },
});

export const upload = multer({
  storage,
  fileFilter: (req, file, cb) => {
    console.log("In upload middleware in upload", file)
    if (file.mimetype.startsWith("image/")) {
      cb(null, true);
    } else {
      cb(new Error("Only image files are allowed."), false);
    }
  },
});
