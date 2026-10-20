import { Router } from 'express';
import path from 'node:path';
import fs from 'node:fs';
import { fileURLToPath } from 'node:url';

const router = Router();
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const RESUME_DIR = path.join(__dirname, '..', '..', 'assets', 'resume');

const FILES = {
  pdf: {
    name: 'Adhya_Mittal_Resume.pdf',
    type: 'application/pdf'
  },
  docx: {
    name: 'Adhya_Mittal_Resume.docx',
    type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
  }
};

// GET /api/resume/pdf  |  GET /api/resume/docx
router.get('/:format', (req, res, next) => {
  const file = FILES[req.params.format?.toLowerCase()];
  if (!file) {
    return res.status(400).json({ success: false, message: 'Format must be "pdf" or "docx".' });
  }

  const filePath = path.join(RESUME_DIR, file.name);
  if (!fs.existsSync(filePath)) {
    return res.status(404).json({ success: false, message: 'Resume file not found on server.' });
  }

  res.type(file.type);
  return res.download(filePath, file.name, (err) => {
    if (err && !res.headersSent) next(err);
  });
});

export default router;
