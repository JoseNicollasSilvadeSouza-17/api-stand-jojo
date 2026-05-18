import type { Request } from "express";
import multer, { type FileFilterCallback } from "multer";

const storage = multer.memoryStorage();

const allowedMimeType = [
  "image/png",
  "image/jpeg",
  "image/jpg",
  "image/webp",
];

function fileFilter(
  req: Request,
  file: Express.Multer.File,
  callback: FileFilterCallback,
) {
  if (!allowedMimeType.includes(file.mimetype)) {
    return callback(new Error("Invalid file type!"));
  }

  callback(null, true);
}

const multerConfig = multer({
  storage,
  fileFilter,
  limits: {
    fieldSize: 5 * 1024 * 1024
  }
});

export default multerConfig;
