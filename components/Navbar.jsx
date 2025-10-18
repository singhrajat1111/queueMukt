import { useState, useEffect } from "react";
import { useNavigate, Link, NavLink } from "react-router-dom";
import AuthModal from "./AuthModal";

const Navbar = () => {
  const [clickCount, setClickCount] = useState(0);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (clickCount === 3) {
      setShowAuthModal(true);
      setClickCount(0);
    }

    const timer = setTimeout(() => setClickCount(0), 2000);
    return () => clearTimeout(timer);
  }, [clickCount]);

  const handleLogoClick = () => setClickCount(prev => prev + 1);

  const handleAuthSuccess = () => {
    setShowAuthModal(false);
    navigate("/admin");
  };

  const handleAuthClose = () => {
    setShowAuthModal(false);
  };

  return (
    <>
      <nav className="bg-blue-900 text-white px-6 py-4 flex justify-between items-center shadow-md">
        <span
          className="text-2xl font-bold cursor-pointer"
          onClick={handleLogoClick}
        >
          QueueMukt
        </span>

        <div className="space-x-4">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "bg-cyan-500 rounded-2xl px-2 font-semibold" : "hover:underline"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/patient"
            className={({ isActive }) =>
              isActive ? "bg-cyan-500 rounded-2xl px-2 font-semibold" : "hover:underline"
            }
          >
            Patient
          </NavLink>
          <NavLink
            to="/doctor"
            className={({ isActive }) =>
              isActive ? "bg-cyan-500 rounded-2xl px-2 font-semibold" : "hover:underline"
            }
          >
            Doctor
          </NavLink>
        </div>
      </nav>

      {showAuthModal && (
        <AuthModal onSuccess={handleAuthSuccess} onClose={handleAuthClose} />
      )}
    </>
  );
};

export default Navbar;
