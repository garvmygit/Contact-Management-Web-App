import { useEffect, useState } from 'react';
import { fetchContacts, deleteContact } from '../api/contacts';
import ContactList from '../components/ContactList';

const Home = () => {
  const [contacts, setContacts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const loadContacts = async () => {
    setIsLoading(true);
    setError('');
    try {
      const data = await fetchContacts();
      setContacts(data);
    } catch (err) {
      setError(err.message || 'Unable to load contacts');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadContacts();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm('Delete this contact?')) return;
    try {
      await deleteContact(id);
      setContacts((prev) => prev.filter((c) => c._id !== id));
    } catch (err) {
      setError(err.message || 'Failed to delete contact');
    }
  };

  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-lg shadow-slate-900/50">
      <h2 className="mb-4 text-2xl font-semibold">All Contacts</h2>

      {isLoading && <p className="p-4">Loading contacts...</p>}
      {error && <p className="p-4 text-rose-300">{error}</p>}
      {!isLoading && !error && contacts.length === 0 && (
        <p className="p-4 text-slate-300">No contacts found. Use Add Contact to get started.</p>
      )}
      {!isLoading && !error && contacts.length > 0 && (
        <ContactList contacts={contacts} onDelete={handleDelete} />
      )}
    </div>
  );
};

export default Home;
