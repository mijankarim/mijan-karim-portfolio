import Layout from '../components/Layout/Layout'
import '../styles/index.css';
import '../styles/globals.css';
import "aos/dist/aos.css";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
  
}

export default MyApp;
