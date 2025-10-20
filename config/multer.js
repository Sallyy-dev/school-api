const multer = require('multer');
const path = require('path')
const fs = require('fs');

const ensureDirExists = (dir) => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
};

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    let uploadPath;

    if (req.body.type === 'profile' && req.body.userId) {
      uploadPath = `uploads/profiles/user_${req.body.userId}/`;
    } else if (req.body.type === 'document' && req.body.studentId) {
      uploadPath = `uploads/students/student_${req.body.studentId}/documents/`;
    } else {
      return cb(new Error('Invalid upload type or missing IDs'), false);
    }

    ensureDirExists(uploadPath);
    cb(null, uploadPath);
  },

  filename: function (req, file, cb) {
    const timestamp = Date.now();
    const ext = path.extname(file.originalname);
    const base = path.basename(file.originalname, ext);
    const safeName = base.replace(/\s+/g, '_').replace(/[^\w\-]/g, '');
    cb(null, `${timestamp}_${safeName}${ext}`);
  }
});

const fileFilter = (req, file, cb) => {
  const fileType = req.body.type;
  const allowedTypes = {
    profile: ['.jpg', '.jpeg', '.png'],
    document: ['.pdf', '.jpg', '.jpeg', '.png']
  };

  const ext = path.extname(file.originalname).toLowerCase();

  if (!allowedTypes[fileType] || !allowedTypes[fileType].includes(ext)) {
    return cb(new Error('Invalid file type'), false);
  }

  cb(null, true);
};

const limits = {
  fileSize: function (req, file, cb) {
    const fileType = req.body.type;
    return fileType === 'profile' ? 2 * 1024 * 1024 : 5 * 1024 * 1024;
  }
};

// Multer middleware
const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
  limits: {
    fileSize: function (req, file) {
      const fileType = req.body.type;
      return fileType === 'profile' ? 2 * 1024 * 1024 : 5 * 1024 * 1024;
    }
  }
});

module.exports = upload;
