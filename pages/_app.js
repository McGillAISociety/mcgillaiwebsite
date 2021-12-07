import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import '../styles/app.scss';

// TODO: animate in the navbar and the component (later, maybe try to replicate the)
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
