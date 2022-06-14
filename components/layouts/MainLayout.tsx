// import Head from "next/head";
import React from "react";
import { Navbar } from "../Navbar";
import styles from "./MainLayout.module.css";
import { FC } from 'react'
import Head from "../../node_modules/next/head";

type Props = {
  children: React.ReactNode
}

export const MainLayout: FC <Props> = ({ children }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home - Tawaynaskp</title>
        <meta name="description" content="Home Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className={styles.main}>{children}</main>
    </div>
  );
};
