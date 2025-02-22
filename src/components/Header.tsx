import { useState, useEffect, useRef } from 'react';
import { X, ChevronDown, ChevronRight, MoreVertical } from 'lucide-react';
import logo from '../assets/logo.png';
import cart from '../assets/cart.svg';

interface HeaderProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
}

const Header = ({ isMenuOpen, setIsMenuOpen }: HeaderProps) => {
  // const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Added state and ref
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const prevScrollPos = useRef(window.pageYOffset);

  // Added useEffect for scroll handling
  useEffect(() => {
    const handleScroll = () => {
      const isMobile = window.matchMedia('(max-width: 767px)').matches;
      if (isMobile) {
        const currentScrollPos = window.pageYOffset;
        const scrollingDown = currentScrollPos > prevScrollPos.current;
        setIsHeaderVisible(!scrollingDown);
        prevScrollPos.current = currentScrollPos;
      } else {
        setIsHeaderVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`bg-[#1E48AB] text-[#93e3f9] text-base font-assistant font-semibold sticky top-0 z-20 shadow transition-transform duration-300 ${!isHeaderVisible ? '-translate-y-full' : ''}`}>
      <div className="px-10">
        {/* Desktop Navigation */}
        <div className="hidden md:flex justify-between items-center">
          <div className="flex items-center">
            <a href="https://robere.com/"><img src={logo} alt="Logo" className="h-[50px]" /></a>
          </div>

          <nav className="flex items-center space-x-0 -mx-5">
            <div className="relative group">
              <a href="https://robere.com/consulting/" className="px-5 py-[26px] hover:bg-[#0A1F78] transition-colors">Consulting</a>
            </div>
            <div className="relative group">
              <a href="https://robere.com/categories" className="px-5 py-[26px] hover:bg-[#0A1F78] transition-colors">E-Learning</a>
            </div>
            <div className="relative group hover:bg-[#0A1F78]">
              <a href="https://robere.com/training/" className="px-5 py-6 hover:bg-[#0A1F78] transition-colors flex">Training<ChevronDown className='h-6 w-4 ml-[6px] stroke-[3px]' /></a>
              <div className="absolute left-0 w-56 bg-[#0A1F78] shadow-lg py-1 rounded-b-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <a href="https://robere.com/training/" className="block px-4 py-3 text-[#93E3F9] hover:text-[#EE9823]">Overview</a>
                <a href="https://robere.com/public-training/" className="block px-4 py-3 text-[#93E3F9] hover:text-[#EE9823]">Public Training</a>
                <a href="https://robere.com/in-house-training/" className="block px-4 py-3 text-[#93E3F9] hover:text-[#EE9823]">In-House Training</a>
              </div>
            </div>
            <div className="relative group">
              <a href="https://robere.com/publishing/" className="px-5 py-[26px] hover:bg-[#0A1F78] transition-colors">Publishing</a>
            </div>
            <div className="relative group">
              <a href="https://robere.com/about/" className="px-5 py-[26px] hover:bg-[#0A1F78] transition-colors">About</a>
            </div>
            <div className="relative group hover:bg-[#0A1F78]">
              <a href="https://robere.com/news-updates/" className="px-5 py-6 hover:bg-[#0A1F78] transition-colors flex">News<ChevronDown className='h-6 w-4 ml-[6px] stroke-[3px]' /></a>
              <div className="absolute left-0 w-56 bg-[#0A1F78] shadow-lg py-1 rounded-b-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <a href="https://robere.com/news-updates/" className="block px-4 py-3 text-[#93E3F9] hover:text-[#EE9823]">Latest News</a>
                <a href="https://robere.com/newsletters/" className="block px-4 py-3 text-[#93E3F9] hover:text-[#EE9823]">Newsletter</a>
              </div>
            </div>
            <div className="relative group">
              <a href="https://robere.com/contact/" className="px-5 py-[26px] hover:bg-[#0A1F78] transition-colors">Contact</a>
            </div>
            <div className='pl-[30px] flex'>
              <a
                href="https://robere.com/cart/"
                className="inline-block items-center p-2 rounded-full transition-colors duration-300 hover:bg-[#0A1F78] hover:shadow-sm"
              >
                <img
                  src={cart}
                  alt="Cart"
                  className="w-6 h-6"
                />
              </a>
            </div>
            <a href="https://robere.com/registration-page/">
              <button style={{ marginLeft: '50px' }}
                className="bg-[#48A2f0] px-6 py-2 rounded text-[14px] font-bold text-white transition-all duration-300 shadow-[0_16px_8px_-8px_rgba(190,190,190,0.5)] hover:shadow-none"
              >
                Login
              </button>
            </a>
          </nav>
        </div>

        {/* Mobile Header */}
        <div className="md:hidden flex justify-between items-center py-3 -mx-8">
          <img src={logo} alt="Logo" className="h-8" />
          <div className="flex items-center space-x-4">
            <a
              href="https://robere.com/cart/"
            >
              <img
                src={cart}
                alt="Cart"
                className="w-7 h-7"
              />
            </a>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-[#93E3F9] p-1 z-50"
            >
              {isMenuOpen ? "" : <MoreVertical className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`fixed pt-2 top-0 right-0 bg-[#F1F1F1] z-40 transition-all duration-300 ease-out origin-top-right
            ${isMenuOpen ? 'w-full h-full scale-100' : 'w-0 h-0 scale-0'}`}
        >
          <div className="flex justify-end p-4">
            <button
              onClick={() => setIsMenuOpen(false)}
              className="text-gray-800"
            >
              <X className="h-[26px] w-[26px]" />
            </button>
          </div>
          <nav className={`text-sm font-normal flex pt-12 flex-col px-4 transition-opacity duration-200 ${isMenuOpen ? 'opacity-100' : 'opacity-0'}`}>
            <a href="https://robere.com/" className="py-4 text-[#434343] border-b-[1px] border-t-[1px] border-[#c8c8c8]">Home</a>
            <a href="https://robere.com/profile/" className="py-4 text-[#434343] border-b-[1px] border-[#c8c8c8]">Profile</a>
            <div className="py-4 text-[#434343] border-b-[1px] border-[#c8c8c8] flex justify-between items-center">
              <span>Pages</span>
              <span><ChevronRight className='h-4 w-4' /></span>
            </div>
            <a href="https://robere.com/blog/" className="py-4 text-[#434343] border-b-[1px] border-[#c8c8c8]">Blog</a>
            <a href="https://robere.com/registration-page/" className="py-4 text-[#434343] border-b-[1px] border-[#c8c8c8]">Log In</a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;