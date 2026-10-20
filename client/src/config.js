// Backend base URL — set VITE_API_URL in client/.env (e.g. https://adhya-portfolio-api.onrender.com)
export const API_URL = (import.meta.env.VITE_API_URL || 'http://localhost:5000').replace(/\/$/, '');

export const RESUME_PDF_URL = `${API_URL}/api/resume/pdf`;
export const RESUME_DOCX_URL = `${API_URL}/api/resume/docx`;
