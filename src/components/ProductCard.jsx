import { ShoppingCartIcon } from "@heroicons/react/24/outline";

function ProductCard({ product }) {
    return (
        <div className="border rounded-lg shadow-sm hover:shadow-md transition p-4">
            {/* Product Image */}
            <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover rounded"
            />


            {/* Product Info */}
            <div className="mt-4">
                <h2 className="text-lg font-semibold">{product.name}</h2>
                <p className="text-gray-600 mt-1">₹{product.price}</p>
            </div>

            {/* Add to Cart Button */}
            <button className="mt-4 w-full flex items-center justify-center gap-2 bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
                <ShoppingCartIcon className="h-5 w-5" />
                Add to Cart
            </button>
        </div>
    );
}

export default ProductCard;
