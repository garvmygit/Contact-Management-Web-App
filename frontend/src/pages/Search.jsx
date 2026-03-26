import { useEffect, useMemo, useState } from 'react';
import { fetchContacts } from '../api/contacts';
import SearchBar from '../components/SearchBar';
import ContactList from '../components/ContactList';

const Search = () => {
  const [contacts, setContacts] = useState([]);
  const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const load = async () => {
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

    load();
  }, []);

  const filtered = useMemo(() => {
    if (!query.trim()) return contacts;
    const q = query.trim().toLowerCase();

    return contacts.filter((contact) =>
      [contact.name, contact.email, contact.phone].some((field) =>
        field.toLowerCase().includes(q)
      )
    );
  }, [contacts, query]);

  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-lg shadow-slate-900/50">
      <h2 className="mb-4 text-2xl font-semibold">Search Contacts</h2>

      <SearchBar query={query} setQuery={setQuery} />

      {isLoading && <p className="mt-4 p-4">Loading contacts...</p>}
      {error && <p className="mt-4 p-4 text-rose-300">{error}</p>}

      {!isLoading && !error && query && filtered.length === 0 && (
        <p className="mt-4 p-4 text-slate-300">No results found for "{query}".</p>
      )}

      {!isLoading && !error && !query && (
        <p className="mt-4 p-4 text-slate-300">Type a query to search contacts.</p>
      )}

      {!isLoading && !error && query && filtered.length > 0 && (
        <div className="mt-4">
          <ContactList contacts={filtered} />
        </div>
      )}
    </div>
  );
};

export default Search;
