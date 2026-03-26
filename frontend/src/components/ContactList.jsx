import ContactItem from './ContactItem';

const ContactList = ({ contacts, onEdit, onDelete }) => {
  return (
    <div className="space-y-3">
      {contacts.map((contact) => (
        <ContactItem
          key={contact._id}
          contact={contact}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default ContactList;
