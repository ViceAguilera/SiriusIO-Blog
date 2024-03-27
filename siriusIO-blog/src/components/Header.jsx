import { Navbar, TextInput, Button } from 'flowbite-react';
import { Link, useLocation } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';
import { FaMoon } from 'react-icons/fa';

export default function Header() {
    const path = useLocation().pathname;
  return (
    <Navbar className='border-b-2'>
        <Link to='/' className='font-mono self-center whitespace-nowrap text-sm sm:text-xl dark:text-white white: text-black'>
            SiriusIO Blog
        </Link>
        <form className='flex flex-row'>
            <TextInput 
                type='text' 
                className='hidden lg:inline' 
                placeholder='Search' 
                rightIcon={AiOutlineSearch}
                />
            <Button className='w-12 h-10 lg:hidden' color='gray' pill>
                <AiOutlineSearch />
            </Button>
        </form>
            <div className='flex gap-2 md:order-2 '>
                <Button className='w-12 h-10 hidden sm:inline my-1' color='gray' pill>
                    <FaMoon />
                </Button>
                <Link to='/sign-in'>
                    <Button className='text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-3 py-1 text-center me-2 mb-2'>
                        Sign In
                    </Button>
                </Link>
                <Navbar.Toggle />
            </div>
                <Navbar.Collapse className='font-mono'>
                    <Navbar.Link active={path === '/'} as={'div'}>
                        <Link to='/'>
                            Home
                        </Link>
                    </Navbar.Link>
                    <Navbar.Link active={path === '/about'} as={'div'}>
                        <Link to='/about'>
                            About
                        </Link>
                    </Navbar.Link>
                    <Navbar.Link active={path === '/projects'} as={'div'}>
                        <Link to='/projects'>
                            Projects
                        </Link> 
                    </Navbar.Link>
                </Navbar.Collapse>
    </Navbar>
  )
}
