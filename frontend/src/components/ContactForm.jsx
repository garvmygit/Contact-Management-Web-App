import { useMemo } from 'react';

const ContactForm = ({ formData, setFormData, isEditing, onSubmit, onCancel, isSaving }) => {
  const isValid = useMemo(() => {
    return (
      formData.name.trim().length >= 2 &&
      /^\S+@\S+\.\S+$/.test(formData.email) &&
      formData.phone.trim().length >= 7
    );
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (!isValid || isSaving) return;
    onSubmit(formData);
  };

  return (
    <form
      onSubmit={submitHandler}
      className="rounded-2xl border border-slate-800 bg-slate-900 p-4 shadow-lg shadow-slate-900/60"
    >
      <h2 className="mb-3 text-xl font-semibold">{isEditing ? 'Edit Contact' : 'Add Contact'}</h2>

      <div className="space-y-3">
        <label className="block">
          <span className="mb-1 text-sm text-slate-300">Name</span>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full rounded-lg border border-slate-700 bg-slate-950 p-2 text-slate-100 outline-none focus:ring-2 focus:ring-cyan-500"
            placeholder="e.g. Jane Doe"
            required
          />
        </label>

        <label className="block">
          <span className="mb-1 text-sm text-slate-300">Email</span>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full rounded-lg border border-slate-700 bg-slate-950 p-2 text-slate-100 outline-none focus:ring-2 focus:ring-cyan-500"
            placeholder="jane@example.com"
            required
          />
        </label>

        <label className="block">
          <span className="mb-1 text-sm text-slate-300">Phone</span>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full rounded-lg border border-slate-700 bg-slate-950 p-2 text-slate-100 outline-none focus:ring-2 focus:ring-cyan-500"
            placeholder="+1 555 9999"
            required
          />
        </label>

        <div className="flex flex-wrap items-center gap-2">
          <button
            type="submit"
            disabled={!isValid || isSaving}
            className="rounded-lg bg-cyan-500 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400 disabled:opacity-50"
          >
            {isSaving ? 'Saving...' : isEditing ? 'Update' : 'Add'} Contact
          </button>

          {isEditing && (
            <button
              type="button"
              onClick={onCancel}
              className="rounded-lg border border-slate-700 px-4 py-2 text-sm text-slate-300 hover:border-slate-500"
            >
              Cancel
            </button>
          )}
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
