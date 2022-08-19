import App from 'next/app';
import '../styles/globals.css'
import Layout from '../components/Layout';
import { parseCookies, destroyCookie } from 'nookies';
import { redirectUser } from '../utils/auth';
import baseUrl from '../utils/baseUrl';
import axios from 'axios';
import Router from 'next/router';

// function MyApp({ Component, pageProps }) {
class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    const { token } = parseCookies(ctx);

    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    //protected route
    if (!token) {
      const isProtectedRoute = ctx.pathname === '/account' || ctx.pathname === '/cart';
      if (isProtectedRoute) {
        redirectUser(ctx, '/login');
      }
    } else {
      try {
        const payload = { headers: { Authorization: token } };
        const url = `${baseUrl}/api/account`;
        const response = await axios.get(url, payload);
        const user = response.data;
        pageProps.user = user;
      } catch(error) {
        console.error("Error fetching current user", error);
        //Throw out invalid tokens
        destroyCookie(ctx, "token");
        redirectUser(ctx, '/login');
      }
    }
    return { pageProps };
  }

  componentDidMount() {
    window.addEventListener("storage", this.syncLogout);
  }

  syncLogout = event => {
    if (event.key === "logout") {
      console.log("logged out from storage");
      Router.push("/login");
    }
  };

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
