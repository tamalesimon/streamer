import React from 'react';
import { Link } from "react-router-dom";
import GoogleAuth from './GoogleAuth';

const Header = () => {
    return (
        <>
            <nav className="bg-gray-800">
                <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                    <div className="relative flex items-center justify-between h-16">
                        <div className="flex space-x-4">
                                <Link to="#" className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium">Streamer</Link>
                                <Link to="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Create Channel</Link>
                                <Link to="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Projects</Link>
                        </div>
                        <div className="flex space-x-4">
                            {/* <Link to="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Login</Link> */}
                            <div><GoogleAuth/></div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
};

export default Header;
