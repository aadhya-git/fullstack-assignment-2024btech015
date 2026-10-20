import Message from '../models/Message.js';
import { isDBConnected } from '../config/db.js';
import { sendContactNotification } from '../utils/mailer.js';

// POST /api/contact — validate and store a contact form submission
export async function createMessage(req, res, next) {
  try {
    if (!isDBConnected()) {
      return res.status(503).json({ success: false, message: 'Database unavailable. Please try again later.' });
    }

    const { name, email, message } = req.body ?? {};
    const doc = await Message.create({ name, email, message });

    // Email notification is optional — a mail failure should not fail the request
    sendContactNotification(doc).catch((err) => console.error('📭 Email notification failed:', err.message));

    return res.status(201).json({ success: true, message: 'Message received! I will get back to you soon.', id: doc._id });
  } catch (err) {
    if (err.name === 'ValidationError') {
      const errors = Object.values(err.errors).map((e) => e.message);
      return res.status(400).json({ success: false, message: errors[0], errors });
    }
    return next(err);
  }
}
