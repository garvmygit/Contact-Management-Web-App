import { NavLink } from 'react-router-dom';

const navLinkBase = 'px-3 py-2 rounded-md text-sm font-semibold';
const activeLink = 'bg-cyan-600 text-slate-950';
const inactiveLink = 'text-slate-300 hover:bg-slate-800 hover:text-white';

const Navbar = () => {
  return (
    <nav className="mb-6 rounded-2xl border border-slate-800 bg-slate-900 p-4 shadow-lg shadow-slate-900/50">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-3">
        <div className="text-lg font-bold text-cyan-300">Contact Manager</div>
        <div className="flex items-center gap-2">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `${navLinkBase} ${isActive ? activeLink : inactiveLink}`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/add"
            className={({ isActive }) =>
              `${navLinkBase} ${isActive ? activeLink : inactiveLink}`
            }
          >
            Add Contact
          </NavLink>
          <NavLink
            to="/search"
            className={({ isActive }) =>
              `${navLinkBase} ${isActive ? activeLink : inactiveLink}`
            }
          >
            Search
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
