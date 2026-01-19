import { Link } from 'react-router-dom';
import BlueLogo from '../assets/ieee-logo-blue.png';

export default function NavBar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/">
          <img src={BlueLogo} alt="IEEE LINK Logo" className="h-10" />
        </Link>
        <div className="space-x-6 font-semibold text-textDark">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/schedule">Schedule</Link>
          <Link to="/register">Register</Link>
        </div>
      </div>
    </nav>
  );
}
