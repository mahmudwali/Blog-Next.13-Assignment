import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
        <>
            <div className="container mx-auto bg-violet-50 ">
                <div className="navBar p-3 shadow-md rounded-lg mb-4">
                    <ul className='flex space-x-4 justify-center text-gray-500'>
                        <li>
                        <Link href={"/"}>Home</Link>
                        </li>
                        <li>
                        <Link href={"/blog"}>Blog</Link>
                        </li>
                        <li>
                        <Link href={"/contact"}>Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Navbar;