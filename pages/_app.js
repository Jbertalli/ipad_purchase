import App from 'next/app';
import '../styles/globals.css'
import Layout from '../components/Layout';

// function MyApp({ Component, pageProps }) {
class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {

    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    return { pageProps };
  }

  //server-side rendering
  render () {
    const { Component, pageProps } = this.props;

    return (
      <Layout {...pageProps}>
        <Component {...pageProps} />
      </Layout>
    );
  }
}

export default MyApp;
