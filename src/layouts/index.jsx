import { Link, Outlet } from "react-router-dom";

export default function MainLayout() {
    return (
       <div className="flex flex-col min-h-screen">
        <div className="bg-gray-300 py-4 flex justify-center items-center">
            <nav className='space-x-2 '>
                <Link to='/buttons' className="text-base hover:text-gray-200 font-bold text-gray-700">Buttons</Link> | 
                <Link to='/forms' className="text-base hover:text-gray-200 font-bold text-gray-700">Forms</Link> |
                <Link to='/inputs' className="text-base hover:text-gray-200 font-bold text-gray-700">Inputs</Link> |
                <Link to='/navs' className="text-base hover:text-gray-200 font-bold text-gray-700">Nav Bars</Link> |
                <Link to='/modals' className="text-base hover:text-gray-200 font-bold text-gray-700">Modals</Link> |
                <Link to='/cards' className="text-base hover:text-gray-200 font-bold text-gray-700">Cards</Link> |
                <Link to='/tables' className="text-base hover:text-gray-200 font-bold text-gray-700">Tables</Link> |
                <Link to='/loaders' className="text-base hover:text-gray-200 font-bold text-gray-700">Loaders</Link> |
                <Link to='/accordians' className="text-base hover:text-gray-200 font-bold text-gray-700">Accordion</Link>
            </nav>
            </div>
            <hr className="border-gray-400" />
            
           <main className="w-full h-full flex-grow bg-gray-200 rounded p-6">
            <Outlet />
            </main>
        </div>
    );
 }