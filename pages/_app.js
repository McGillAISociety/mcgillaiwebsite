import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import '../styles/globals.scss';

function MyApp({ Component, pageProps }) {
    return (
        <>
            <NavBar />
            <Component {...pageProps} />
            <Footer />
        </>
    );
}

export default MyApp;
