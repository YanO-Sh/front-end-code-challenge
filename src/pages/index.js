import React, { useCallback, useEffect, useState } from 'react';
import Head from 'next/head';
import styles from './Index.module.scss';
import Table from '../components/Table';
// import Status from '../components/Status';
import SocketIOClient from "socket.io-client";

export const IndexPage = ({people}) => {
    const [data, setData] = useState('');

    useEffect(() => {
        // connect to socket server
        const socket = SocketIOClient.connect(process.env.WS_URL, {
            path: "/api/socketio",
        });

        // log socket connection
        socket.on("connect", () => {
            console.log("SOCKET CONNECTED!", socket.id);
        });

        // socket disconnet onUnmount if exists
        if (socket) return () => socket.disconnect();
    }, []);

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
                {data}
                {/*<WebSocket*/}
                {/*    url={ process.env.WS_URL }*/}
                {/*    onMessage={handleData}*/}
                {/*    // onOpen={open => console.log(open)}*/}
                {/*    // onClose={close => console.log(close)}*/}
                {/*    // debug={true}*/}
                {/*    // reconnect={true}*/}
                {/*/>*/}
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
