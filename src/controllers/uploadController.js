import { fileTypeFromFile } from "file-type";
import path from "path";

export const uploadProfilePic = async (req, res, next) => {
    console.log("IN controller", req.body);
  const fileType = await fileTypeFromFile(req.file.path);
  if(!fileType || !fileType.mime.startsWith("image/")){
    fs.unlinkSync(req.file.path);
    res.status(400).json({error: "Though you uploaded an image file content of the file is encoded with with some malcious informations"});

  }
  // console.log(req.url);
//   console.log(req.file);
  res.json({ sucess: true, file: req.file });
};
