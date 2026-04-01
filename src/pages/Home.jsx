import { Helmet } from 'react-helmet-async';
import '../App.css'
import Banner from '../components/Banner';

// pages/Home.jsx
export default function Home() {
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


    console.log("Home loaded");
    return (
        <>
            <Helmet>
                <title>Home - MyStore</title>
                <meta name="description" content="Buy best products online" />
                <meta name="keywords" content="Buy best products online" />
                <meta property="og:url" content={window.location.href} />
            </Helmet>
            <Banner />
        </>
    );
}