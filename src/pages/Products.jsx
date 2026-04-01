import ProductCard from "../components/ProductCard";

export default function Products() {

    const products = [
        {
            id: 2,
            name: "Smart Watch",
            price: 2999,
            image: "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b",
        },
        {
            id: 3,
            name: "Bluetooth Speaker",
            price: 1499,
            image: "https://images.unsplash.com/photo-1585386959984-a41552231693",
        },
    ];
    return <>

        <main className="max-w-10xl ">
            <h1 className="text-2xl font-bold mb-7">Products</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-6">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </main></>
}