import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import styled from '@emotion/styled';
import '../styles/globals.scss';

const Container = styled('div')`
    background-image: url(../public/images/background.jpg);
    background-size: cover; /* or contain depending on what you want */
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
`;

function MyApp({ Component, pageProps }) {
    return (
        <Container>
            <NavBar />
            <Component {...pageProps} />
            <Footer />
        </Container>
    );
}

export default MyApp;
