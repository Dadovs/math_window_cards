import React, {useState} from 'react';
import {FaBars, FaTimes} from 'react-icons/fa';
// import {HiOutlineMail} from 'react-icons/hi';
// import {BsFillPersonLinesFill} from 'react-icons/bs';
import m2logo from '../Assets/m2logo.png';
// import {Link} from 'react-scroll';


const Navbar = () => {
    const [nav, setNav] = useState(false);
    // const handleClick = () => setNav(!nav);
    const handleClick = () => {
        setNav(!nav);
        document.body.classList.toggle('menu-open');
      };

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-gradient-to-r from-white to-blue-500 text-black font-bold'>
      <div>
        <img src={m2logo} alt="Logo" style={{width: '50px'}} />
      </div>

      {/* Menu */}
    <ul className='hidden md:flex'>
        <li>
            {/* <Link to="home" smooth={true} duration={500}>
            Home
            </Link> */}
            <a href="/">Home</a>
        </li>
        <li>
            {/* <Link to="a1" smooth={true} duration={500}>
            A1
            </Link> */}
            <a href="/a1">Addition</a>
        </li>
        <li>
            {/* <Link to="s1" smooth={true} duration={500}>
            S1
            </Link> */}
            <a href="/s1">Subtraction</a>
        </li>
        <li>
            {/* <Link to="m1" smooth={true} duration={500}>
            M1
            </Link> */}
            <a href="/m1">Multiplication</a>
        </li>
        <li>
            {/* <Link to="d1" smooth={true} duration={500}>
            D1
            </Link> */}
            <a href="/d1">Division</a>
        </li>
    </ul>
    

      {/* Hamburger */}
        <div onClick={handleClick} className='md:hidden z-10'>
            {!nav ? <FaBars /> : <FaTimes />}
        </div>

    {/* Mobile Menu */}
        <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-gradient-to-r from-white to-blue-500 flex flex-col justify-center items-center'}>
            <li className='py-6 text-4xl'>
                {/* <Link onClick={handleClick} to="home" smooth={true} duration={500}>
                 Home
                </Link> */}
                <a href="/">Home</a>
            </li>
            <li className='py-6 text-4xl'>
                {/* <Link onClick={handleClick} to="about" smooth={true} duration={500}>
                 A1
                </Link> */}
                <a href="/a1">Addition</a>
            </li>
            <li className='py-6 text-4xl'>
                {/* <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
                 S1
                </Link> */}
                <a href="/s1">Subtraction</a>
            </li>
            <li className='py-6 text-4xl'>
                {/* <Link onClick={handleClick} to="projects" smooth={true} duration={500}>
                 M1
                </Link> */}
                <a href="/m1">Multiplication</a>
            </li>
            <li className='py-6 text-4xl'>
                {/* <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
                 M1
                </Link> */}
                <a href="/d1">Division</a>
            </li>
        </ul>

    {/* Social Icons
        <div className='hidden lg:flex fixed flex-col top-[35%] left-0 '>
            <ul>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
                    <a className='flex justify-between items-center w-full text-gray-300'
                    href="/">
                        Linkedin <FaLinkedin size={30} />
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
                    <a className='flex justify-between items-center w-full text-gray-300'
                    href="/">
                        Github <FaGithub size={30} />
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
                    <a className='flex justify-between items-center w-full text-gray-300'
                    href="/">
                        Email <HiOutlineMail size={30} />
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
                    <a className='flex justify-between items-center w-full text-gray-300'
                    href="/">
                        Resume <BsFillPersonLinesFill size={30} />
                    </a>
                </li>
            </ul>
        </div> */}

    </div>
  );
}

export default Navbar;
