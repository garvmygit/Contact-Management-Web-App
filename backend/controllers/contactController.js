const Contact = require('../models/Contact');

const getContacts = async (req, res, next) => {
  try {
    const search = req.query.q ? {
      $or: [
        { name: { $regex: req.query.q, $options: 'i' } },
        { email: { $regex: req.query.q, $options: 'i' } },
        { phone: { $regex: req.query.q, $options: 'i' } }
      ]
    } : {};

    const contacts = await Contact.find(search).sort({ createdAt: -1 });
    res.json(contacts);
  } catch (error) {
    next(error);
  }
};

const createContact = async (req, res, next) => {
  try {
    const { name, email, phone } = req.body;

    if (!name || !email || !phone) {
      res.status(400);
      throw new Error('Name, email, and phone are required');
    }

    const existing = await Contact.findOne({ email });
    if (existing) {
      res.status(409);
      throw new Error('Contact with this email already exists');
    }

    const contact = await Contact.create({ name, email, phone });
    res.status(201).json(contact);
  } catch (error) {
    next(error);
  }
};

const updateContact = async (req, res, next) => {
  try {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
      res.status(404);
      throw new Error('Contact not found');
    }

    const { name, email, phone } = req.body;

    if (!name || !email || !phone) {
      res.status(400);
      throw new Error('Name, email, and phone are required');
    }

    const duplicate = await Contact.findOne({ email, _id: { $ne: contact._id } });
    if (duplicate) {
      res.status(409);
      throw new Error('Another contact with this email exists');
    }

    contact.name = name;
    contact.email = email;
    contact.phone = phone;

    const updated = await contact.save();
    res.json(updated);
  } catch (error) {
    next(error);
  }
};

const deleteContact = async (req, res, next) => {
  try {
    const contact = await Contact.findByIdAndDelete(req.params.id);
    if (!contact) {
      res.status(404);
      throw new Error('Contact not found');
    }

    res.json({ message: 'Contact deleted' });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getContacts,
  createContact,
  updateContact,
  deleteContact
};
