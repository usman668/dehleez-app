import multer from "multer";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "../public/banner")); // Save to ../Public folder
  },
  filename: function (req, file, cb) {
    let name = Date.now() + "-" + file.originalname; // Corrected Date.now()
    cb(null, name);
  },
});

export const upload = multer({ storage: storage });
