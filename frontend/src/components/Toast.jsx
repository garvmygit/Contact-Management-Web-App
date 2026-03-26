const Toast = ({ toast }) => {
  if (!toast.message) return null;

  const colorClass = toast.type === 'error' ? 'bg-rose-500' : 'bg-emerald-500';

  return (
    <div className={`fixed bottom-6 right-6 z-50 rounded-lg px-4 py-2 text-sm font-semibold text-slate-950 transition duration-300 ${colorClass}`}>
      {toast.message}
    </div>
  );
};

export default Toast;
