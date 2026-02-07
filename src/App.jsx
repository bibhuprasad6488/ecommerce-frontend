import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Header from './components/Header';
import Footer from './components/Footer';
import ProductCard from "./components/ProductCard";
import './App.css'

function App() {
  const products = [
    {
      id: 1,
      name: "Wireless Headphones",
      price: 1999,
      image: "https://images.unsplash.com/photo-1518441902113-fb1f4b6b5b1d",
    },
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



  return (
    <>
      <Header />

      <main className="max-w-7xl mx-auto p-6">
        <h2 className="text-2xl font-bold mb-6">Products</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>

      <Footer />
    </>
  );

}

export default App;

