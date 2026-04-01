import { Helmet } from "react-helmet-async";

// pages/About.jsx
export default function About() {
    return <>
        <Helmet>
            <title>About - MyStore</title>
            <meta name="description" content="Buy best products online" />
            <meta name="keywords" content="Buy best products online" />
            <meta property="og:url" content={window.location.href} />
        </Helmet>
        <h1>About Page</h1>
    </>
}