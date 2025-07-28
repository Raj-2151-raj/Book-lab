import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';
import { CiMenuFries } from 'react-icons/ci';

function Header() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const mobileMenu = (
    <div className='lg:hidden block absolute top-16 w-full left-0 right-0 bg-slate-900 transition'>
      <nav>
        <ul className="text-center text-xl p-20">
          <li className='my-4 py-4 hover:bg-slate-800 hover:rounded'>
            <Link to="/" onClick={() => setClick(false)}>Home</Link>
          </li>
          <li className='my-4 py-4 hover:bg-slate-800 hover:rounded'>
            <Link to="/browse" onClick={() => setClick(false)}>Browse Books</Link>
          </li>
          <li className='my-4 py-4 hover:bg-slate-800 hover:rounded '>
            <Link to="/contact" onClick={() => setClick(false)}>Contact</Link>
          </li>
          <li className='my-4 py-4 hover:bg-slate-800 hover:rounded'>
            <Link to="/add-book" onClick={() => setClick(false)}>Add Book</Link>
          </li>
        </ul>
      </nav>
    </div>
  );

  return (
    <div className="flex justify-between items-center z-50 text-white lg:py-5 px-6 py-4 bg-gray-800 relative">
      <div className="flex items-center flex-1">
        <img src="/public/booookklablogo.png" alt="Book-logo" className='w-18 h-15' />
        <span className="text-3xl font-bold">BOOK LAB</span>
      </div>

      {/* Desktop Nav */}
      <div className="lg:flex hidden items-center justify-end flex-1 font-normal">
        <nav>
          <ul className="flex gap-8 mr-8 text-[18px]">
            <li className='hover:text-fuchsia-600 transition border-b-2 border-transparent hover:border-fuchsia-600'>
              <Link to="/">Home</Link>
            </li>
            <li className='hover:text-fuchsia-600 transition border-b-2 border-transparent hover:border-fuchsia-600'>
              <Link to="/browse">Browse Books</Link>
            </li>
            <li className='hover:text-fuchsia-600 transition border-b-2 border-transparent hover:border-fuchsia-600'>
              <Link to="/contact">Contact</Link>
            </li>
            <li className='hover:text-fuchsia-600  transition border-b-2 border-transparent hover:border-fuchsia-600'>
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

