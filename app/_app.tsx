import React from "react";
import App from "next/app";
import { Spinner } from "@nextui-org/react";
import { Router } from "next/router";

class MyApp extends App {
  state = {
    isLoading: false,
  };

  componentDidMount() {
    Router.events.on("routeChangeStart", () => {
      this.setState({ isLoading: true });
    });

    Router.events.on("routeChangeComplete", () => {
      this.setState({ isLoading: false });
    });

    Router.events.on("routeChangeError", () => {
      this.setState({ isLoading: false });
    });
  }

  componentWillUnmount() {
    Router.events.off("routeChangeStart", () => {
        this.setState({ isLoading: false });
      });
    Router.events.off("routeChangeComplete", () => {
        this.setState({ isLoading: true });
      });
    Router.events.off("routeChangeError", () => {
        this.setState({ isLoading: false });
      });
  }

  render() {
    const { Component, pageProps } = this.props;
    const { isLoading } = this.state;

    return (
      <>
        {isLoading && <Spinner />}
        <Component {...pageProps} />
      </>
    );
  }
}

export default MyApp;
