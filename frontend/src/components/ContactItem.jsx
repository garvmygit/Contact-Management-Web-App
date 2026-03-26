const ContactItem = ({ contact, onEdit, onDelete }) => {
  return (
    <div className="flex flex-col gap-2 rounded-lg border border-slate-800 bg-slate-900 p-4 transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-cyan-500/20 md:flex-row md:items-center md:justify-between">
      <div>
        <h3 className="text-lg font-semibold">{contact.name}</h3>
        <p className="text-sm text-slate-300">{contact.email}</p>
        <p className="text-sm text-slate-400">{contact.phone}</p>
      </div>
      <div className="mt-3 flex gap-2 md:mt-0">
        {onEdit && (
          <button
            onClick={() => onEdit(contact)}
            className="rounded-md border border-cyan-400 px-3 py-1 text-sm font-medium text-cyan-300 hover:bg-cyan-600/20"
          >
            Edit
          </button>
        )}
        {onDelete && (
          <button
            onClick={() => onDelete(contact._id)}
            className="rounded-md border border-rose-500 px-3 py-1 text-sm font-medium text-rose-300 hover:bg-rose-600/20"
          >
            Delete
          </button>
        )}
      </div>
    </div>
  );
};

export default ContactItem;
