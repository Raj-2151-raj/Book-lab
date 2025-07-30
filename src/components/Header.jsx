import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';
import { CiMenuFries } from 'react-icons/ci';

function Header() {
  const [click, setClick] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleClick = () => setClick(!click);

  // Scroll झाल्यावर navbar change करा
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const mobileMenu = (
    <div className="lg:hidden block absolute top-16 w-full left-0 right-0 bg-slate-900 transition">
      <nav>
        <ul className="text-center text-xl p-20">
          <li className="my-4 py-4 hover:bg-slate-800 hover:rounded">
            <Link to="/" onClick={() => setClick(false)}>Home</Link>
          </li>
          <li className="my-4 py-4 hover:bg-slate-800 hover:rounded">
            <Link to="/browse" onClick={() => setClick(false)}>Browse Books</Link>
          </li>
          <li className="my-4 py-4 hover:bg-slate-800 hover:rounded">
            <Link to="/contact" onClick={() => setClick(false)}>Contact</Link>
          </li>
          <li className="my-4 py-4 hover:bg-slate-800 hover:rounded">
            <Link to="/add-book" onClick={() => setClick(false)}>Add Book</Link>
          </li>
        </ul>
      </nav>
    </div>
  );

  return (
    <div
      className={`fixed top-0 left-0 right-0 flex justify-between items-center z-50 text-white 
      px-6 py-4 lg:py-5 transition-all duration-300 ${
        scrolled ? 'bg-gray-900/90 shadow-lg backdrop-blur-md py-3' : 'bg-gray-800'
      }`}
    >
      {/* Logo */}
      <div className="flex items-center flex-1">
        <img src="/public/booookklablogo.png" alt="Book-logo" className="w-18 h-15" />
        <span className="text-3xl font-bold ml-2">BOOK LAB</span>
      </div>

      {/* Desktop Nav */}
      <div className="lg:flex hidden items-center justify-end flex-1 font-normal">
        <nav>
          <ul className="flex gap-8 mr-8 text-[18px]">
            <li className="hover:text-fuchsia-500 transition border-b-2 border-transparent hover:border-fuchsia-500">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:text-fuchsia-500 transition border-b-2 border-transparent hover:border-fuchsia-500">
              <Link to="/browse">Browse Books</Link>
            </li>
            <li className="hover:text-fuchsia-500 transition border-b-2 border-transparent hover:border-fuchsia-500">
              <Link to="/contact">Contact</Link>
            </li>
            <li className="hover:text-fuchsia-500 transition border-b-2 border-transparent hover:border-fuchsia-500">
              <Link to="/add-book">Add Book</Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Mobile Menu Toggle */}
      <div className="lg:hidden">
        <button onClick={handleClick}>
          {click ? <FaTimes size={24} /> : <CiMenuFries size={24} />}
        </button>
      </div>

      {/* Mobile Menu Content */}
      {click && mobileMenu}
    </div>
  );
}

export default Header;
