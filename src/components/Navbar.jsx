import { useState } from 'react';
import { appleLogo, search, bag, more, close } from '../assets';
import { navLinks } from '../constants';
import Store from './Store';
import Macmenu from './Macmenu';
import Ipadmenu from './Ipadmenu';
import Iphonemenu from './Iphonemenu';
import Watchmenu from './Watchmenu';
import Visionmenu from './Visionmenu';
import Airpodsmenu from './Airpodsmenu';
import Tvmenu from './Tvmenu';
import Entermenu from './Entermenu';
import Accessmenu from './Accessmenu';
import Supportmenu from './Supportmenu';
import Searchmenu from './Searchmenu';
import { Link } from 'react-router-dom';

const hoverComponents = [
  <Store />,
  <Macmenu />,
  <Ipadmenu />,
  <Iphonemenu />,
  <Watchmenu />,
  <Visionmenu />,
  <Airpodsmenu />,
  <Tvmenu />,
  <Entermenu />,
  <Accessmenu />,
  <Supportmenu />,
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [clickedIndex, setClickedIndex] = useState(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSearchClick = () => {
    const searchIndex = 0;
    setClickedIndex(clickedIndex === searchIndex ? null : searchIndex);
  };

  return (
    <nav className={`flex md:justify-center justify-between items-center w-[92%] md:mx-[10px] mx-[10px] mt-2 fade-down` }>
      <img className="w-[16px] cursor-pointer flex" src={appleLogo} alt="Apple Logo" />
      <div
        className={`md:static absolute bg-white ${isMenuOpen ? 'top-12 fade-down' : ' fade-up top-[-100%]'} md:min-h-fit left-0 md:w-auto w-full flex items-center md:px-5 px-10`}
      >
        <ul className="flex md:flex-row md:items-center md:gap-[24px] gap-5 flex-col md:pb-[0px] pb-[50px]">
          {navLinks.map((nav, index) => (
            <li 
              key={nav.id}
              className='md:text-[12px] md:font-normal text-[24px] font-bold font-SF-Pro'
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <Link to = {nav.link}>
                {nav.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex items-center gap-6 ">
        <img 
          src={search} 
          className="w-[16px] cursor-pointer" 
          alt='search'
          onClick={handleSearchClick}
        />
        <img src={bag} className="w-[20px] cursor-pointer" alt="Bag" />
        <img
          src={isMenuOpen ? close : more}
          className="w-[20px] flex md:hidden cursor-pointer"
          alt="More"
          onClick={toggleMenu}
        />
      </div>
      {hoveredIndex !== null && hoverComponents[hoveredIndex]}
      {clickedIndex !== null && < Searchmenu />}
    </nav>
  );
}

export default Navbar;
