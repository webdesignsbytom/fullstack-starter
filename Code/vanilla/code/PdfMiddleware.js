import multer from 'multer';
import path from 'path';
import { join } from 'path';
import * as url from 'url';
import fs from 'fs'; // For the callback-based API
// Controllers
import {
  getAndUpdateConnectPdfNumber,
  getAndUpdateDesktopPdfNumber,
  getAndUpdateMobilePdfNumber,
  getAndUpdateWebPdfNumber,
} from '../controllers/pdf.js';
// Constants
import { PDF_UPLOAD_PATH } from '../utils/constants.js';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function createRoute(endPoint) {
  return  path.join(
    __dirname,
    '..',
    'storage',
    PDF_UPLOAD_PATH,
    endPoint,
  );
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    console.log('');
    let endPoint = req.params.fileDestination;
    console.log('endPoint', endPoint);

    let pdfDirectory = createRoute(endPoint);
    console.log('pdfDirectory', pdfDirectory);
    // Check if directory exists, if not, create it
    if (!fs.existsSync(pdfDirectory)) {
      fs.mkdirSync(pdfDirectory, { recursive: true });
    }

    cb(null, pdfDirectory);
  },
  filename: async (req, file, cb) => {
    let endPoint = req.params.fileDestination;
    console.log('end', req.params.fileDestination);

    let newFileName;

    switch (endPoint) {
      case 'connect':
        console.log('Connected');
        newFileName = await getAndUpdateConnectPdfNumber();
        console.log('newFileName', newFileName);
        break;
      case 'desktop':
        console.log('desktop');
        newFileName = await getAndUpdateDesktopPdfNumber();
        break;
      case 'mobile':
        console.log('mobile');
        newFileName = await getAndUpdateMobilePdfNumber();
        break;
      case 'web':
        console.log('web');
        newFileName = await getAndUpdateWebPdfNumber();
        break;
      default:
    }

    let updatedFileName = `${req.params.fileDestination}${newFileName}.pdf`;
    console.log('updatedFileName', updatedFileName);

    file.originalname = updatedFileName;
    console.log('file.originalname', file.originalname);
    cb(null, file.originalname);
  },
});

// Increase the request size limit to accommodate larger files
const uploadStorage = multer({
  storage: storage,
  limits: { fileSize: 1024 * 1024 * 10 }, // Set the limit to 10 MB
});

// This middleware will handle the file upload
const uploadPdfMiddleware = uploadStorage.single('file');

export { uploadPdfMiddleware };
