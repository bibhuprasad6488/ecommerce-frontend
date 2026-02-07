import { ShoppingCartIcon } from "@heroicons/react/24/outline";

function Header() {
    return (
        <header className="bg-white shadow">
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                <h1 className="text-xl font-bold text-blue-600">
                    MyStore
                </h1>

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
