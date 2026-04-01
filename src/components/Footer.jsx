function Footer() {
    return (
        <footer className="max-w-12xl mt-12">
            <div className="max-w-7xl mx-auto px-6 py-4 text-center text-gray-600 ">
                <ul>
                    <li>Footer </li>
                </ul>
            </div>
            <div className="max-w-7xl mx-auto px-6 py-4 text-center text-gray-600 copy-right">
                © {new Date().getFullYear()} MyStore. All rights reserved.
            </div>
        </footer>
    );
}

export default Footer;
