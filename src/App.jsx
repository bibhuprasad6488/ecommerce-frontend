import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Products from "./pages/Products";
import PostContent from "./pages/PostContent";


function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="products" element={<Products />} />
                <Route path="contact" element={<Contact />} />
                <Route path="blogs" element={<PostContent />} />
            </Route>
        </Routes>
    );
}

export default App;