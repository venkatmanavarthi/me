import { useState } from 'react';
import logo from '/v_icon.svg';

function Navigation() {
    return (
        <>
            <div className="bg-white p-2 border">
                <div className="container mx-auto flex justify-between items-center">
                    <a href="www.venkatmanav.com">
                        <img src={logo} alt="Venkat Rao Manavarthi" />
                    </a>
                    <div className='w-full md:flex md:items-center md:w-auto'>
                        <ul className="text-md font-medium md:flex-grow text-red-500">
                            <li className="md:inline-block mt-3 md:mt-0 md:ml-6 hover:text-black">
                                <a href="">About Me</a>
                            </li>
                            <li className="md:inline-block mt-3 md:mt-0 md:ml-6 hover:text-black">
                                <a href="">Experience</a>
                            </li>
                            <li className="md:inline-block mt-3 md:mt-0 md:ml-6 hover:text-black">
                                <a href="">Projects</a>
                            </li>
                            <li className="md:inline-block mt-3 md:mt-0 md:ml-6 hover:text-black">
                                <a href="">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Navigation