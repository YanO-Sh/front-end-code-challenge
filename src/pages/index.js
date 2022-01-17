import React from 'react';
import Head from 'next/head';
import styles from './Index.module.scss';
import Table from '../components/Table';
import Status from '../components/Status';

export const IndexPage = ({people}) => {

    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <title>Padaster Portal</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="favicon.ico" />
                <link href="fonts/stylesheet.css" rel="stylesheet" />
            </Head>
            <div className={styles.container}>
                <h1>Rehash Code Challenge</h1>
                <h2 style={{textAlign: 'right'}}>YanO-Sh</h2>
                <Status />
                <Table people={people} />
            </div>
        </>
    )
}

export default IndexPage;

export async function getServerSideProps(context) {
    const response = await fetch('http://localhost:3000/api/people')
        .then(response => response.json());

    const people = response.people || [];

    return {
        props: {
            people
        },
    }
}
