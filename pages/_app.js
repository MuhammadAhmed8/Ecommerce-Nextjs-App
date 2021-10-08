import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../utils/theme';
import Layout from '../components/Layout/Layout';
import '../styles/globals.css';
import {CartProvider} from '../components/context/CartProvider';
import { AuthProvider } from '../components/context/AuthProvider';
import NProgress from 'nprogress';
import Router from 'next/router'
import "nprogress/nprogress.css";

const template = '<div class="bar" style="background-color:red;border-color:red" role="bar"><div class="peg" style="background-color:red;border-color:red; box-shadow: 0 0 10px red, 0 0 5px red;-webkit-box-shadow: 0 0 10px red, 0 0 5px red;"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
NProgress.configure({
  template
});
NProgress.configure({ showSpinner: false });

Router.events.on('routeChangeStart', (url) => {
  console.log(`Loading: ${url}`)
  NProgress.start()
})
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

export default function MyApp(props) {
  const { Component, pageProps } = props;

  // React.useEffect(() => {
  //   // Remove the server-side injected CSS.
  //   const jssStyles = document.querySelector('#jss-server-side');
  //   if (jssStyles) {
  //     jssStyles.parentElement.removeChild(jssStyles);
  //   }
  // }, []);

  return (
    <React.Fragment>

      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <AuthProvider>
          <CartProvider>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </CartProvider>
        </AuthProvider>
        
      </ThemeProvider>
    </React.Fragment>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};