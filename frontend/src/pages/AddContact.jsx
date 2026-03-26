import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createContact } from '../api/contacts';
import ContactForm from '../components/ContactForm';

const initialForm = { name: '', email: '', phone: '' };

const AddContact = () => {
  const [formData, setFormData] = useState(initialForm);
  const [error, setError] = useState('');
  const [isSaving, setIsSaving] = useState(false);
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (payload) => {
    setError('');
    setIsSaving(true);

    try {
      await createContact(payload);
      setMessage('Contact added successfully! Redirecting to home...');
      setFormData(initialForm);
      setTimeout(() => navigate('/'), 900);
    } catch (err) {
      setError(err.message || 'Failed to add contact');
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-lg shadow-slate-900/50">
      <h2 className="mb-4 text-2xl font-semibold">Add Contact</h2>

      {error && <p className="mb-3 text-rose-300">{error}</p>}
      {message && <p className="mb-3 text-emerald-300">{message}</p>}

      <ContactForm
        formData={formData}
        setFormData={setFormData}
        isEditing={false}
        onSubmit={handleSubmit}
        onCancel={() => setFormData(initialForm)}
        isSaving={isSaving}
      />
    </div>
  );
};

export default AddContact;
