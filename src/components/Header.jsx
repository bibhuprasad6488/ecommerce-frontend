import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header className="bg-[#fff] shadow">
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                <h2 className="text-xl font-bold text-blue-600">
                    <Link to="/">MyStore</Link>
                </h2>

                <ul className="nav-menu flex gap-4">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/products">Products</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/blogs">Blog</Link></li>
                </ul>

                <button className="relative">
                    <ShoppingCartIcon className="h-6 w-6 text-gray-700" />
                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1">
                        0
                    </span>
                </button>
            </div>
        </header>
    );
}

export default Header;